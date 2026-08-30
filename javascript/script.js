document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('.site-header');
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  const year=document.getElementById('year');
  if(year)year.textContent=new Date().getFullYear();
  const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>35);
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  toggle?.addEventListener('click',()=>{const open=toggle.classList.toggle('open');nav?.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle?.classList.remove('open');nav.classList.remove('open');document.body.style.overflow=''}));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  initPortfolioTranslation();
});

function initPortfolioTranslation(){
  const select=document.getElementById('language-select');
  const control=document.querySelector('.translate-control');
  if(!select||!control)return;

  const LANGUAGE_API_URL='https://libretranslate.com/languages';

  const loadLanguages=async()=>{
    select.disabled=true;
    control.classList.add('is-loading');
    const status=control.querySelector('.translate-status');
    if(status)status.textContent='Chargement des langues…';

    try{
      const response=await fetch(LANGUAGE_API_URL,{headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error(`Language API error: ${response.status}`);
      const data=await response.json();
      if(!Array.isArray(data)||data.length===0)throw new Error('No languages returned');

      const displayNames=typeof Intl!=='undefined'&&Intl.DisplayNames
        ? new Intl.DisplayNames(['fr'],{type:'language'})
        : null;

      const languages=data
        .filter(language=>language&&typeof language.code==='string'&&language.code.trim())
        .map(language=>{
          const code=language.code.trim();
          let name=typeof language.name==='string'&&language.name.trim()?language.name.trim():code;
          try{
            const localized=displayNames?.of(code);
            if(localized&&localized!==code)name=localized.charAt(0).toUpperCase()+localized.slice(1);
          }catch{}
          return {code,name};
        })
        .filter((language,index,array)=>array.findIndex(item=>item.code===language.code)===index)
        .sort((a,b)=>a.name.localeCompare(b.name,'fr',{sensitivity:'base'}));

      select.innerHTML='';
      for(const {code,name} of languages){
        const option=document.createElement('option');
        option.value=code;
        option.textContent=name;
        select.appendChild(option);
      }

      if(!languages.some(language=>language.code==='fr')){
        const option=document.createElement('option');
        option.value='fr';
        option.textContent='Français';
        select.insertBefore(option,select.firstChild);
      }

      if(status)status.textContent='';
      return true;
    }catch(error){
      console.error('Impossible de charger les langues depuis l’API.',error);
      select.innerHTML='<option value="fr">Français</option>';
      if(status)status.textContent='Langues indisponibles';
      return false;
    }finally{
      select.disabled=false;
      control.classList.remove('is-loading');
    }
  };

  const rtl=new Set(['ar','fa','he','ur','ps','sd','ug','yi','dv','ku']);
  const originalTitle=document.title;
  const originalTexts=new Map();
  const cache=new Map();
  const excludedSelector='script,style,noscript,select,option,textarea,input,code,pre,.sr-only';

  const collectTextNodes=()=>{
    const nodes=[];
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const parent=node.parentElement;if(!parent||parent.closest(excludedSelector))return NodeFilter.FILTER_REJECT;
      const text=node.nodeValue;if(!text||!text.trim())return NodeFilter.FILTER_REJECT;
      if(parent.closest('.translate-control'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let node;while((node=walker.nextNode())){if(!originalTexts.has(node))originalTexts.set(node,node.nodeValue);nodes.push(node)}
    return nodes;
  };

  const translateText=async(text,target)=>{
    const clean=text.trim();
    if(!clean||target==='fr')return clean;
    const key=`${target}|${clean}`;if(cache.has(key))return cache.get(key);
    const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=fr|${encodeURIComponent(target)}`;
    const response=await fetch(url);
    if(!response.ok)throw new Error('Translation service unavailable');
    const data=await response.json();
    const translated=data?.responseData?.translatedText;
    if(!translated)throw new Error('No translation returned');
    cache.set(key,translated);return translated;
  };

  const setLanguage=async(target)=>{
    select.disabled=true;control.classList.add('is-translating');
    document.documentElement.lang=target;
    document.documentElement.dir=rtl.has(target)?'rtl':'ltr';
    const nodes=collectTextNodes();
    if(target==='fr'){
      for(const node of nodes)node.nodeValue=originalTexts.get(node)??node.nodeValue;
      document.title=originalTitle;localStorage.setItem('portfolioLanguage','fr');
      select.disabled=false;control.classList.remove('is-translating');return;
    }
    try{
      for(let i=0;i<nodes.length;i+=6){
        const group=nodes.slice(i,i+6);
        await Promise.all(group.map(async node=>{
          const original=originalTexts.get(node)??node.nodeValue;
          const leading=original.match(/^\s*/)?.[0]||'';const trailing=original.match(/\s*$/)?.[0]||'';
          const core=original.trim();
          try{node.nodeValue=leading+await translateText(core,target)+trailing}catch{node.nodeValue=original}
        }));
      }
      try{document.title=await translateText(originalTitle,target)}catch{document.title=originalTitle}
      localStorage.setItem('portfolioLanguage',target);
    }finally{select.disabled=false;control.classList.remove('is-translating')}
  };

  select.addEventListener('change',()=>setLanguage(select.value));

  loadLanguages().then(()=>{
    const saved=localStorage.getItem('portfolioLanguage')||'fr';
    if([...select.options].some(option=>option.value===saved)){
      select.value=saved;
      if(saved!=='fr')setLanguage(saved);
    }else if([...select.options].some(option=>option.value==='fr')){
      select.value='fr';
      localStorage.setItem('portfolioLanguage','fr');
    }
  });
}
