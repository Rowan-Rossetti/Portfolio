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

  const LANGUAGES=[
    ['fr','Français'],['en','Anglais'],['nl','Néerlandais'],['de','Allemand'],
    ['it','Italien'],['es','Espagnol'],['pt','Portugais'],['pl','Polonais'],
    ['ro','Roumain'],['tr','Turc'],['ar','Arabe'],['ru','Russe'],
    ['uk','Ukrainien'],['el','Grec'],['sv','Suédois'],['da','Danois'],
    ['no','Norvégien'],['fi','Finnois'],['cs','Tchèque'],['hu','Hongrois'],
    ['bg','Bulgare'],['hr','Croate'],['sk','Slovaque'],['sl','Slovène'],
    ['et','Estonien'],['lv','Letton'],['lt','Lituanien'],['id','Indonésien'],
    ['ja','Japonais'],['ko','Coréen'],['zh-CN','Chinois (simplifié)']
  ];
  const supported=new Set(LANGUAGES.map(([c])=>c));
  const rtl=new Set(['ar','fa','he','ur','ps','sd','ug','yi','dv','ku']);
  const originalTitle=document.title;
  const originalTexts=new Map();
  const memoryCache=new Map();
  const excludedSelector='script,style,noscript,select,option,textarea,input,code,pre,.sr-only';
  const CACHE_PREFIX='portfolioTranslation:v3:';

  // Détecte automatiquement la langue du navigateur au premier passage.
  // Un choix manuel de l'utilisateur reste prioritaire lors des visites suivantes.
  const normalizeLanguage=(raw)=>{
    if(!raw)return 'fr';
    const tag=String(raw).toLowerCase();
    if(tag.startsWith('zh'))return 'zh-CN';
    const base=tag.split('-')[0];
    return supported.has(base)?base:'fr';
  };
  const savedChoice=localStorage.getItem('portfolioLanguageChoice');
  const browserLanguage=normalizeLanguage((navigator.languages&&navigator.languages[0])||navigator.language||'fr');
  const initialLanguage=savedChoice&&supported.has(savedChoice)?savedChoice:browserLanguage;

  select.innerHTML='';
  for(const [code,name] of LANGUAGES){
    const option=document.createElement('option');
    option.value=code;option.textContent=name;select.appendChild(option);
  }
  select.value=initialLanguage;select.disabled=false;

  const collectTextNodes=()=>{
    const nodes=[];
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const parent=node.parentElement;if(!parent||parent.closest(excludedSelector))return NodeFilter.FILTER_REJECT;
      const text=node.nodeValue;if(!text||!text.trim())return NodeFilter.FILTER_REJECT;
      if(parent.closest('.translate-control'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let node;while((node=walker.nextNode())){
      if(!originalTexts.has(node))originalTexts.set(node,node.nodeValue);
      nodes.push(node);
    }
    return nodes;
  };

  const cacheKey=(target,text)=>CACHE_PREFIX+target+':'+text;
  const getCached=(target,text)=>{
    const k=target+'|'+text;
    if(memoryCache.has(k))return memoryCache.get(k);
    try{const v=localStorage.getItem(cacheKey(target,text));if(v){memoryCache.set(k,v);return v}}catch{}
    return null;
  };
  const putCached=(target,text,value)=>{
    memoryCache.set(target+'|'+text,value);
    try{localStorage.setItem(cacheKey(target,text),value)}catch{}
  };

  const translateText=async(text,target)=>{
    const clean=text.trim();
    if(!clean||target==='fr')return clean;
    const cached=getCached(target,clean);if(cached)return cached;
    const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=fr|${encodeURIComponent(target)}`;
    const response=await fetch(url,{cache:'force-cache'});
    if(!response.ok)throw new Error('Translation service unavailable');
    const data=await response.json();
    const translated=data?.responseData?.translatedText;
    if(!translated)throw new Error('No translation returned');
    putCached(target,clean,translated);return translated;
  };

  // Petit pool concurrent : beaucoup plus rapide que la traduction séquentielle,
  // sans lancer des dizaines de requêtes simultanées.
  const runPool=async(tasks,limit=10)=>{
    let next=0;
    const worker=async()=>{while(next<tasks.length){const i=next++;try{await tasks[i]()}catch{}}};
    await Promise.all(Array.from({length:Math.min(limit,tasks.length)},worker));
  };

  const setLanguage=async(target,{remember=false}={})=>{
    if(!supported.has(target))target='fr';
    select.value=target;
    select.disabled=true;control.classList.add('is-translating');
    document.documentElement.lang=target;
    document.documentElement.dir=rtl.has(target)?'rtl':'ltr';
    const nodes=collectTextNodes();
    if(remember)localStorage.setItem('portfolioLanguageChoice',target);

    if(target==='fr'){
      for(const node of nodes)node.nodeValue=originalTexts.get(node)??node.nodeValue;
      document.title=originalTitle;
      select.disabled=false;control.classList.remove('is-translating');return;
    }

    const tasks=nodes.map(node=>async()=>{
      const original=originalTexts.get(node)??node.nodeValue;
      const leading=original.match(/^\s*/)?.[0]||'';
      const trailing=original.match(/\s*$/)?.[0]||'';
      const core=original.trim();
      try{node.nodeValue=leading+await translateText(core,target)+trailing}catch{node.nodeValue=original}
    });
    tasks.push(async()=>{try{document.title=await translateText(originalTitle,target)}catch{document.title=originalTitle}});
    try{await runPool(tasks,10)}finally{select.disabled=false;control.classList.remove('is-translating')}
  };

  select.addEventListener('change',()=>setLanguage(select.value,{remember:true}));

  // Traduction automatique dès l'ouverture selon la langue détectée.
  if(initialLanguage!=='fr')setLanguage(initialLanguage);
  else{document.documentElement.lang='fr';document.documentElement.dir='ltr'}
}
