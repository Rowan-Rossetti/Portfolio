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

const PORTFOLIO_TRANSLATIONS = {
 en: {
'Administration · Accueil · Digital':'Administration · Reception · Digital','Ouvrir le menu':'Open menu','Accueil':'Home','À propos':'About','Expériences':'Experience','Compétences':'Skills','Développement web':'Web development','Contact':'Contact','Voir mon CV':'View my CV','Français':'French','Anglais':'English','Néerlandais':'Dutch','Italien':'Italian','Espagnol':'Spanish','Allemand':'German',
'Disponible pour une nouvelle opportunité':'Available for a new opportunity','La rigueur administrative,':'Administrative rigour,','portée par une vision moderne.':'driven by a modern vision.','Assistant administratif et d’accueil formé à la gestion documentaire, à la communication et aux outils numériques. Je transforme l’organisation quotidienne en un soutien fiable, clair et efficace.':'Administrative and reception assistant trained in document management, communication and digital tools. I turn day-to-day organisation into reliable, clear and effective support.','Découvrir mon parcours':'Discover my background','Télécharger mon CV':'Download my CV','formations complémentaires':'complementary training programmes','communication professionnelle':'professional communication','Profil':'Profile','Assistant administratif':'Administrative assistant','Organisation':'Organisation','Discrétion':'Discretion','Polyvalence':'Versatility','Faire défiler':'Scroll','Gestion d’e-mails':'Email management','Classement':'Filing','Facturation':'Invoicing','Bureautique':'Office tools','Ma valeur ajoutée':'My added value','Un soutien administratif sur lequel compter.':'Administrative support you can rely on.','Mon parcours mêle secrétariat, accueil, gestion d’une petite activité et développement web. Cette diversité me permet de comprendre rapidement les besoins, de structurer l’information et de communiquer avec aisance.':'My background combines secretarial work, reception, small-business management and web development. This diversity helps me quickly understand needs, structure information and communicate with ease.','Organisation méthodique':'Methodical organisation','Classement, préparation de documents, suivi des demandes et gestion des priorités avec une attention constante portée aux détails.':'Filing, document preparation, request follow-up and priority management with constant attention to detail.','Explorer mes compétences':'Explore my skills','Accueil professionnel':'Professional reception','Une communication claire et courtoise, au téléphone, par e-mail ou en face à face, afin d’offrir une expérience positive à chaque interlocuteur.':'Clear and courteous communication by phone, email or face to face, to provide a positive experience for every contact.','Voir mes expériences':'View my experience','Aisance numérique':'Digital fluency','Maîtrise des outils bureautiques, des environnements Windows et macOS, complétée par une formation en développement web front-end.':'Proficiency with office tools, Windows and macOS, complemented by training in front-end web development.','Découvrir mon profil digital':'Discover my digital profile','Mon approche':'My approach','L’efficacité naît d’un cadre clair.':'Efficiency starts with a clear framework.','J’aime rendre les tâches plus simples, les informations plus accessibles et les échanges plus fluides.':'I like making tasks simpler, information more accessible and communication smoother.','En savoir plus sur moi':'Learn more about me','Écouter':'Listen','Comprendre précisément le besoin avant d’agir.':'Understand the need precisely before acting.','Structurer':'Structure','Organiser les informations et les priorités avec logique.':'Organise information and priorities logically.','Exécuter':'Execute','Avancer avec soin, autonomie et constance.':'Move forward with care, autonomy and consistency.','Vérifier':'Check','Contrôler la qualité et anticiper les oublis.':'Check quality and anticipate omissions.','Parcours en un regard':'Background at a glance','Des expériences qui se complètent.':'Complementary experiences.','Voir le parcours complet':'View full background','Développement Web Front-End':'Front-End Web Development','Gestion de très petites entreprises':'Very small business management','Auxiliaire administratif et d’accueil':'Administrative and reception assistant','Disponible à Liège':'Available in Liège','Vous recherchez une personne fiable, organisée et motivée ?':'Looking for someone reliable, organised and motivated?','Je suis prêt à mettre mon sérieux et ma polyvalence au service de votre équipe.':'I am ready to bring my commitment and versatility to your team.','Voir mes coordonnées':'View my contact details','Un profil organisé, polyvalent et tourné vers l’avenir.':'An organised, versatile and forward-looking profile.','Navigation':'Navigation','Coordonnées':'Contact details','Liège, Belgique':'Liège, Belgium','Qui suis-je ?':'Who am I?','Une personnalité calme, appliquée et curieuse.':'A calm, diligent and curious personality.','Rigueur':'Rigour','Respect':'Respect','Curiosité':'Curiosity','Fiabilité':'Reliability','Ce qui me guide':'What guides me','Des qualités simples, appliquées avec constance.':'Simple qualities, applied consistently.','Le sens du service':'Service mindset','La discrétion':'Discretion','L’adaptabilité':'Adaptability','Le travail bien fait':'Quality work','Mon objectif':'My goal','Me contacter':'Contact me','Échangeons autour de votre prochaine':'Let’s talk about your next','opportunité.':'opportunity.','Une prise de contact simple et directe.':'Simple and direct contact.','Disponible pour échanger':'Available to talk','Réponse rapide par e-mail ou téléphone':'Quick reply by email or phone','E-mail':'Email','Téléphone':'Phone','Localisation':'Location','Profil professionnel':'Professional profile','Candidature':'Application','Mon parcours en un document.':'My background in one document.','Une compétence complémentaire pour comprendre et créer les':'A complementary skill to understand and create','outils de demain.':'the tools of tomorrow.','Pourquoi le développement web ?':'Why web development?','Technologies':'Technologies','Un socle front-end moderne.':'A modern front-end foundation.','Projets':'Projects','Apprendre en construisant.':'Learning by building.','Structure':'Structure','Présentation':'Presentation','Interaction':'Interaction','Identité numérique':'Digital identity','Portfolio professionnel':'Professional portfolio','Des missions concrètes, au contact des personnes et au cœur de':'Practical assignments, working with people and at the heart of','l’organisation.':'organisation.','Développement web front-end':'Front-end web development','Refonte':'Redesign','Expérience utilisateur':'User experience','Interface':'Interface','Modernisation':'Modernisation','Gestion & relation client':'Management & customer relations','Gestion de très petite entreprise':'Very small business management','Commandes':'Orders','Caisse':'Cash register','Stocks':'Stock','Autonomie':'Autonomy','Gestion du stress':'Stress management','Relation client':'Customer relations','Travail en équipe':'Teamwork','Administration & accueil':'Administration & reception','Communication':'Communication','Documents':'Documents','Soutien':'Support','Gestion documentaire':'Document management','Compétences transférables':'Transferable skills','Ce que ces expériences apportent à votre organisation.':'What these experiences bring to your organisation.','Prioriser efficacement':'Prioritise effectively','Communiquer avec justesse':'Communicate appropriately','Rester fiable sous pression':'Stay reliable under pressure','Des compétences polyvalentes en':'Versatile skills in','bureautique et développement web':'office tools and web development','Bureautique & administratif':'Office & administration','Compétences bureautiques':'Office skills','Classement et archivage':'Filing and archiving','Communications téléphoniques':'Telephone communication','Suite Office':'Office Suite','Développement':'Development','Compétences web':'Web skills','Langues':'Languages','Communiquer avec différents interlocuteurs.':'Communicate with different audiences.','Langue maternelle':'Native language','Anglais':'English','Couramment':'Fluent','Italien & sicilien':'Italian & Sicilian','Seconde langue':'Second language','Espagnol':'Spanish','Notions':'Basic knowledge'
 },
 nl: {
'Administration · Accueil · Digital':'Administratie · Onthaal · Digitaal','Ouvrir le menu':'Menu openen','Accueil':'Home','À propos':'Over mij','Expériences':'Ervaring','Compétences':'Vaardigheden','Développement web':'Webontwikkeling','Contact':'Contact','Voir mon CV':'Bekijk mijn cv','Français':'Frans','Anglais':'Engels','Néerlandais':'Nederlands','Italien':'Italiaans','Espagnol':'Spaans','Allemand':'Duits','Disponible pour une nouvelle opportunité':'Beschikbaar voor een nieuwe uitdaging','La rigueur administrative,':'Administratieve nauwkeurigheid,','portée par une vision moderne.':'gedragen door een moderne visie.','Découvrir mon parcours':'Ontdek mijn parcours','Télécharger mon CV':'Download mijn cv','Profil':'Profiel','Assistant administratif':'Administratief medewerker','Organisation':'Organisatie','Discrétion':'Discretie','Polyvalence':'Veelzijdigheid','Faire défiler':'Scrollen','Gestion d’e-mails':'E-mailbeheer','Classement':'Klasseren','Facturation':'Facturatie','Bureautique':'Kantoorsoftware','Ma valeur ajoutée':'Mijn meerwaarde','Un soutien administratif sur lequel compter.':'Administratieve ondersteuning waarop u kunt rekenen.','Organisation méthodique':'Methodische organisatie','Explorer mes compétences':'Ontdek mijn vaardigheden','Accueil professionnel':'Professioneel onthaal','Voir mes expériences':'Bekijk mijn ervaring','Aisance numérique':'Digitale vaardigheid','Découvrir mon profil digital':'Ontdek mijn digitaal profiel','Mon approche':'Mijn aanpak','L’efficacité naît d’un cadre clair.':'Efficiëntie begint met een duidelijk kader.','En savoir plus sur moi':'Meer over mij','Écouter':'Luisteren','Structurer':'Structureren','Exécuter':'Uitvoeren','Vérifier':'Controleren','Parcours en un regard':'Parcours in één oogopslag','Des expériences qui se complètent.':'Ervaringen die elkaar aanvullen.','Voir le parcours complet':'Bekijk het volledige parcours','Développement Web Front-End':'Front-end webontwikkeling','Gestion de très petites entreprises':'Beheer van zeer kleine ondernemingen','Auxiliaire administratif et d’accueil':'Administratief en onthaalmedewerker','Disponible à Liège':'Beschikbaar in Luik','Vous recherchez une personne fiable, organisée et motivée ?':'Zoekt u iemand die betrouwbaar, georganiseerd en gemotiveerd is?','Voir mes coordonnées':'Bekijk mijn contactgegevens','Navigation':'Navigatie','Coordonnées':'Contactgegevens','Liège, Belgique':'Luik, België','Qui suis-je ?':'Wie ben ik?','Rigueur':'Nauwkeurigheid','Respect':'Respect','Curiosité':'Nieuwsgierigheid','Fiabilité':'Betrouwbaarheid','Ce qui me guide':'Wat mij drijft','Le sens du service':'Dienstgerichtheid','La discrétion':'Discretie','L’adaptabilité':'Aanpassingsvermogen','Le travail bien fait':'Goed uitgevoerd werk','Mon objectif':'Mijn doel','Me contacter':'Contacteer mij','opportunité.':'kans.','Disponible pour échanger':'Beschikbaar voor een gesprek','E-mail':'E-mail','Téléphone':'Telefoon','Localisation':'Locatie','Profil professionnel':'Professioneel profiel','Candidature':'Sollicitatie','Pourquoi le développement web ?':'Waarom webontwikkeling?','Technologies':'Technologieën','Projets':'Projecten','Apprendre en construisant.':'Leren door te bouwen.','Présentation':'Presentatie','Interaction':'Interactie','Identité numérique':'Digitale identiteit','Portfolio professionnel':'Professioneel portfolio','Développement web front-end':'Front-end webontwikkeling','Refonte':'Herontwerp','Expérience utilisateur':'Gebruikerservaring','Gestion & relation client':'Beheer & klantenrelaties','Commandes':'Bestellingen','Caisse':'Kassa','Stocks':'Voorraad','Autonomie':'Zelfstandigheid','Gestion du stress':'Stressbeheer','Relation client':'Klantenrelaties','Travail en équipe':'Teamwerk','Administration & accueil':'Administratie & onthaal','Communication':'Communicatie','Documents':'Documenten','Soutien':'Ondersteuning','Gestion documentaire':'Documentbeheer','Compétences transférables':'Overdraagbare vaardigheden','Prioriser efficacement':'Efficiënt prioriteiten stellen','Communiquer avec justesse':'Correct communiceren','Rester fiable sous pression':'Betrouwbaar blijven onder druk','Bureautique & administratif':'Kantoor & administratie','Compétences bureautiques':'Kantoorvaardigheden','Classement et archivage':'Klasseren en archiveren','Communications téléphoniques':'Telefonische communicatie','Suite Office':'Office-pakket','Développement':'Ontwikkeling','Compétences web':'Webvaardigheden','Langues':'Talen','Langue maternelle':'Moedertaal','Anglais':'Engels','Couramment':'Vloeiend','Italien & sicilien':'Italiaans & Siciliaans','Seconde langue':'Tweede taal','Espagnol':'Spaans','Notions':'Basiskennis'
 },
 it: {'Accueil':'Home','À propos':'Chi sono','Expériences':'Esperienze','Compétences':'Competenze','Développement web':'Sviluppo web','Contact':'Contatti','Voir mon CV':'Vedi il mio CV','Français':'Francese','Anglais':'Inglese','Néerlandais':'Olandese','Italien':'Italiano','Espagnol':'Spagnolo','Allemand':'Tedesco','Disponible pour une nouvelle opportunité':'Disponibile per una nuova opportunità','La rigueur administrative,':'Il rigore amministrativo,','portée par une vision moderne.':'guidato da una visione moderna.','Découvrir mon parcours':'Scopri il mio percorso','Télécharger mon CV':'Scarica il mio CV','Profil':'Profilo','Assistant administratif':'Assistente amministrativo','Organisation':'Organizzazione','Discrétion':'Discrezione','Polyvalence':'Versatilità','Faire défiler':'Scorri','Gestion d’e-mails':'Gestione e-mail','Classement':'Archiviazione','Facturation':'Fatturazione','Bureautique':'Informatica d’ufficio','Ma valeur ajoutée':'Il mio valore aggiunto','Un soutien administratif sur lequel compter.':'Un supporto amministrativo su cui contare.','Organisation méthodique':'Organizzazione metodica','Explorer mes compétences':'Esplora le mie competenze','Accueil professionnel':'Accoglienza professionale','Voir mes expériences':'Vedi le mie esperienze','Aisance numérique':'Competenze digitali','Mon approche':'Il mio approccio','L’efficacité naît d’un cadre clair.':'L’efficienza nasce da un quadro chiaro.','En savoir plus sur moi':'Scopri di più su di me','Écouter':'Ascoltare','Structurer':'Strutturare','Exécuter':'Eseguire','Vérifier':'Verificare','Parcours en un regard':'Percorso in breve','Des expériences qui se complètent.':'Esperienze che si completano.','Voir le parcours complet':'Vedi il percorso completo','Développement Web Front-End':'Sviluppo Web Front-End','Gestion de très petites entreprises':'Gestione di piccolissime imprese','Auxiliaire administratif et d’accueil':'Assistente amministrativo e accoglienza','Disponible à Liège':'Disponibile a Liegi','Vous recherchez une personne fiable, organisée et motivée ?':'Cerchi una persona affidabile, organizzata e motivata?','Voir mes coordonnées':'Vedi i miei contatti','Navigation':'Navigazione','Coordonnées':'Contatti','Liège, Belgique':'Liegi, Belgio','Qui suis-je ?':'Chi sono?','Rigueur':'Rigore','Respect':'Rispetto','Curiosité':'Curiosità','Fiabilité':'Affidabilità','Ce qui me guide':'Ciò che mi guida','Le sens du service':'Senso del servizio','La discrétion':'Discrezione','L’adaptabilité':'Adattabilità','Le travail bien fait':'Lavoro ben fatto','Mon objectif':'Il mio obiettivo','Me contacter':'Contattami','Disponible pour échanger':'Disponibile a parlare','E-mail':'E-mail','Téléphone':'Telefono','Localisation':'Posizione','Candidature':'Candidatura','Pourquoi le développement web ?':'Perché lo sviluppo web?','Technologies':'Tecnologie','Projets':'Progetti','Apprendre en construisant.':'Imparare costruendo.','Présentation':'Presentazione','Interaction':'Interazione','Identité numérique':'Identità digitale','Portfolio professionnel':'Portfolio professionale','Développement web front-end':'Sviluppo web front-end','Refonte':'Restyling','Expérience utilisateur':'Esperienza utente','Gestion & relation client':'Gestione e relazione clienti','Commandes':'Ordini','Caisse':'Cassa','Stocks':'Scorte','Autonomie':'Autonomia','Gestion du stress':'Gestione dello stress','Relation client':'Relazione clienti','Travail en équipe':'Lavoro di squadra','Administration & accueil':'Amministrazione e accoglienza','Communication':'Comunicazione','Documents':'Documenti','Soutien':'Supporto','Gestion documentaire':'Gestione documentale','Compétences transférables':'Competenze trasferibili','Bureautique & administratif':'Ufficio e amministrazione','Compétences bureautiques':'Competenze d’ufficio','Classement et archivage':'Classificazione e archiviazione','Communications téléphoniques':'Comunicazioni telefoniche','Développement':'Sviluppo','Compétences web':'Competenze web','Langues':'Lingue','Langue maternelle':'Lingua madre','Anglais':'Inglese','Couramment':'Fluente','Italien & sicilien':'Italiano e siciliano','Seconde langue':'Seconda lingua','Espagnol':'Spagnolo','Notions':'Nozioni di base'},
 es: {'Accueil':'Inicio','À propos':'Sobre mí','Expériences':'Experiencia','Compétences':'Competencias','Développement web':'Desarrollo web','Contact':'Contacto','Voir mon CV':'Ver mi CV','Français':'Francés','Anglais':'Inglés','Néerlandais':'Neerlandés','Italien':'Italiano','Espagnol':'Español','Allemand':'Alemán','Disponible pour une nouvelle opportunité':'Disponible para una nueva oportunidad','La rigueur administrative,':'El rigor administrativo,','portée par une vision moderne.':'impulsado por una visión moderna.','Découvrir mon parcours':'Descubrir mi trayectoria','Télécharger mon CV':'Descargar mi CV','Profil':'Perfil','Assistant administratif':'Asistente administrativo','Organisation':'Organización','Discrétion':'Discreción','Polyvalence':'Versatilidad','Faire défiler':'Desplazar','Gestion d’e-mails':'Gestión de correos','Classement':'Archivo','Facturation':'Facturación','Bureautique':'Ofimática','Ma valeur ajoutée':'Mi valor añadido','Un soutien administratif sur lequel compter.':'Un apoyo administrativo en el que confiar.','Organisation méthodique':'Organización metódica','Explorer mes compétences':'Explorar mis competencias','Accueil professionnel':'Atención profesional','Voir mes expériences':'Ver mi experiencia','Aisance numérique':'Soltura digital','Mon approche':'Mi enfoque','L’efficacité naît d’un cadre clair.':'La eficiencia nace de un marco claro.','En savoir plus sur moi':'Saber más sobre mí','Écouter':'Escuchar','Structurer':'Estructurar','Exécuter':'Ejecutar','Vérifier':'Verificar','Parcours en un regard':'Trayectoria de un vistazo','Des expériences qui se complètent.':'Experiencias que se complementan.','Voir le parcours complet':'Ver la trayectoria completa','Développement Web Front-End':'Desarrollo Web Front-End','Gestion de très petites entreprises':'Gestión de microempresas','Auxiliaire administratif et d’accueil':'Auxiliar administrativo y de recepción','Disponible à Liège':'Disponible en Lieja','Vous recherchez une personne fiable, organisée et motivée ?':'¿Busca una persona fiable, organizada y motivada?','Voir mes coordonnées':'Ver mis datos de contacto','Navigation':'Navegación','Coordonnées':'Datos de contacto','Liège, Belgique':'Lieja, Bélgica','Qui suis-je ?':'¿Quién soy?','Rigueur':'Rigor','Respect':'Respeto','Curiosité':'Curiosidad','Fiabilité':'Fiabilidad','Ce qui me guide':'Lo que me guía','Le sens du service':'Vocación de servicio','La discrétion':'Discreción','L’adaptabilité':'Adaptabilidad','Le travail bien fait':'Trabajo bien hecho','Mon objectif':'Mi objetivo','Me contacter':'Contactarme','Disponible pour échanger':'Disponible para conversar','E-mail':'Correo electrónico','Téléphone':'Teléfono','Localisation':'Ubicación','Candidature':'Candidatura','Pourquoi le développement web ?':'¿Por qué el desarrollo web?','Technologies':'Tecnologías','Projets':'Proyectos','Apprendre en construisant.':'Aprender construyendo.','Présentation':'Presentación','Interaction':'Interacción','Identité numérique':'Identidad digital','Portfolio professionnel':'Portfolio profesional','Développement web front-end':'Desarrollo web front-end','Refonte':'Rediseño','Expérience utilisateur':'Experiencia de usuario','Gestion & relation client':'Gestión y relación con clientes','Commandes':'Pedidos','Caisse':'Caja','Stocks':'Existencias','Autonomie':'Autonomía','Gestion du stress':'Gestión del estrés','Relation client':'Relación con clientes','Travail en équipe':'Trabajo en equipo','Administration & accueil':'Administración y recepción','Communication':'Comunicación','Documents':'Documentos','Soutien':'Apoyo','Gestion documentaire':'Gestión documental','Compétences transférables':'Competencias transferibles','Bureautique & administratif':'Ofimática y administración','Compétences bureautiques':'Competencias ofimáticas','Classement et archivage':'Clasificación y archivo','Communications téléphoniques':'Comunicaciones telefónicas','Développement':'Desarrollo','Compétences web':'Competencias web','Langues':'Idiomas','Langue maternelle':'Lengua materna','Anglais':'Inglés','Couramment':'Fluido','Italien & sicilien':'Italiano y siciliano','Seconde langue':'Segunda lengua','Espagnol':'Español','Notions':'Nociones'},
 de: {'Accueil':'Startseite','À propos':'Über mich','Expériences':'Erfahrung','Compétences':'Kompetenzen','Développement web':'Webentwicklung','Contact':'Kontakt','Voir mon CV':'Lebenslauf ansehen','Français':'Französisch','Anglais':'Englisch','Néerlandais':'Niederländisch','Italien':'Italienisch','Espagnol':'Spanisch','Allemand':'Deutsch','Disponible pour une nouvelle opportunité':'Verfügbar für eine neue Gelegenheit','La rigueur administrative,':'Administrative Sorgfalt,','portée par une vision moderne.':'getragen von einer modernen Vision.','Découvrir mon parcours':'Meinen Werdegang entdecken','Télécharger mon CV':'Lebenslauf herunterladen','Profil':'Profil','Assistant administratif':'Verwaltungsassistent','Organisation':'Organisation','Discrétion':'Diskretion','Polyvalence':'Vielseitigkeit','Faire défiler':'Scrollen','Gestion d’e-mails':'E-Mail-Verwaltung','Classement':'Ablage','Facturation':'Rechnungsstellung','Bureautique':'Bürosoftware','Ma valeur ajoutée':'Mein Mehrwert','Un soutien administratif sur lequel compter.':'Administrative Unterstützung, auf die Sie zählen können.','Organisation méthodique':'Methodische Organisation','Explorer mes compétences':'Meine Kompetenzen entdecken','Accueil professionnel':'Professioneller Empfang','Voir mes expériences':'Meine Erfahrungen ansehen','Aisance numérique':'Digitale Kompetenz','Mon approche':'Mein Ansatz','L’efficacité naît d’un cadre clair.':'Effizienz entsteht durch klare Strukturen.','En savoir plus sur moi':'Mehr über mich','Écouter':'Zuhören','Structurer':'Strukturieren','Exécuter':'Ausführen','Vérifier':'Prüfen','Parcours en un regard':'Werdegang auf einen Blick','Des expériences qui se complètent.':'Erfahrungen, die sich ergänzen.','Voir le parcours complet':'Vollständigen Werdegang ansehen','Développement Web Front-End':'Front-End-Webentwicklung','Gestion de très petites entreprises':'Management von Kleinstunternehmen','Auxiliaire administratif et d’accueil':'Verwaltungs- und Empfangsassistent','Disponible à Liège':'Verfügbar in Lüttich','Vous recherchez une personne fiable, organisée et motivée ?':'Suchen Sie eine zuverlässige, organisierte und motivierte Person?','Voir mes coordonnées':'Kontaktdaten ansehen','Navigation':'Navigation','Coordonnées':'Kontaktdaten','Liège, Belgique':'Lüttich, Belgien','Qui suis-je ?':'Wer bin ich?','Rigueur':'Sorgfalt','Respect':'Respekt','Curiosité':'Neugier','Fiabilité':'Zuverlässigkeit','Ce qui me guide':'Was mich leitet','Le sens du service':'Serviceorientierung','La discrétion':'Diskretion','L’adaptabilité':'Anpassungsfähigkeit','Le travail bien fait':'Qualitätsarbeit','Mon objectif':'Mein Ziel','Me contacter':'Kontakt aufnehmen','Disponible pour échanger':'Gesprächsbereit','E-mail':'E-Mail','Téléphone':'Telefon','Localisation':'Standort','Candidature':'Bewerbung','Pourquoi le développement web ?':'Warum Webentwicklung?','Technologies':'Technologien','Projets':'Projekte','Apprendre en construisant.':'Lernen durch Gestalten.','Présentation':'Darstellung','Interaction':'Interaktion','Identité numérique':'Digitale Identität','Portfolio professionnel':'Professionelles Portfolio','Développement web front-end':'Front-End-Webentwicklung','Refonte':'Neugestaltung','Expérience utilisateur':'Benutzererfahrung','Gestion & relation client':'Management & Kundenbeziehungen','Commandes':'Bestellungen','Caisse':'Kasse','Stocks':'Bestände','Autonomie':'Selbstständigkeit','Gestion du stress':'Stressmanagement','Relation client':'Kundenbeziehung','Travail en équipe':'Teamarbeit','Administration & accueil':'Verwaltung & Empfang','Communication':'Kommunikation','Documents':'Dokumente','Soutien':'Unterstützung','Gestion documentaire':'Dokumentenverwaltung','Compétences transférables':'Übertragbare Kompetenzen','Bureautique & administratif':'Büro & Verwaltung','Compétences bureautiques':'Bürokompetenzen','Classement et archivage':'Ablage und Archivierung','Communications téléphoniques':'Telefonkommunikation','Développement':'Entwicklung','Compétences web':'Webkompetenzen','Langues':'Sprachen','Langue maternelle':'Muttersprache','Anglais':'Englisch','Couramment':'Fließend','Italien & sicilien':'Italienisch & Sizilianisch','Seconde langue':'Zweitsprache','Espagnol':'Spanisch','Notions':'Grundkenntnisse'}
};

const MYMEMORY_ENDPOINT = 'https://api.mymemory.translated.net/get';
const LANGUAGE_LIST_ENDPOINT = 'https://libretranslate.com/languages';

// Fallback only: the selector first tries to obtain the language list from an API.
const FALLBACK_LANGUAGES = [
 ['fr','Français'],['af','Afrikaans'],['sq','Shqip'],['am','አማርኛ'],['ar','العربية'],['hy','Հայերեն'],['az','Azərbaycanca'],['eu','Euskara'],['be','Беларуская'],['bn','বাংলা'],['bs','Bosanski'],['bg','Български'],['ca','Català'],['zh-CN','中文（简体）'],['zh-TW','中文（繁體）'],['hr','Hrvatski'],['cs','Čeština'],['da','Dansk'],['nl','Nederlands'],['en','English'],['eo','Esperanto'],['et','Eesti'],['fi','Suomi'],['de','Deutsch'],['el','Ελληνικά'],['he','עברית'],['hi','हिन्दी'],['hu','Magyar'],['is','Íslenska'],['id','Bahasa Indonesia'],['ga','Gaeilge'],['it','Italiano'],['ja','日本語'],['ko','한국어'],['la','Latina'],['lv','Latviešu'],['lt','Lietuvių'],['mk','Македонски'],['ms','Bahasa Melayu'],['mt','Malti'],['no','Norsk'],['fa','فارسی'],['pl','Polski'],['pt','Português'],['ro','Română'],['ru','Русский'],['sr','Српски'],['sk','Slovenčina'],['sl','Slovenščina'],['es','Español'],['sw','Kiswahili'],['sv','Svenska'],['tl','Filipino'],['ta','தமிழ்'],['te','తెలుగు'],['th','ไทย'],['tr','Türkçe'],['uk','Українська'],['ur','اردو'],['vi','Tiếng Việt'],['cy','Cymraeg']
];

const PROTECTED_TEXT = new Set(['Rowan Rossetti','Allen Keapler','Pixelleo','IFAPME','HTML','CSS','JavaScript','Windows','macOS','Word','Excel','PowerPoint']);
const sessionTranslationCache = new Map(); // memory only: cleared on every reload

function normalizeLanguageCode(code){
 const aliases={zh:'zh-CN','zh_hans':'zh-CN','zh_hant':'zh-TW','nb':'no','fil':'tl'};
 return aliases[String(code||'').toLowerCase()] || code;
}

async function fetchLanguages(){
 try{
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),5000);
   const r=await fetch(LANGUAGE_LIST_ENDPOINT,{headers:{Accept:'application/json'},signal:controller.signal});
   clearTimeout(timer);
   if(!r.ok) throw new Error(`HTTP ${r.status}`);
   const data=await r.json();
   if(!Array.isArray(data)||!data.length) throw new Error('Liste vide');
   const list=data.map(x=>[normalizeLanguageCode(x.code),x.name]).filter(x=>x[0]&&x[1]);
   if(!list.some(([c])=>c==='fr')) list.unshift(['fr','Français']);
   return list;
 }catch(e){
   console.warn('Liste des langues API indisponible, utilisation du secours.',e);
   return FALLBACK_LANGUAGES;
 }
}

async function populateLanguageSelect(select){
 const languages=await fetchLanguages();
 const seen=new Set();
 select.innerHTML='';
 for(const [rawCode,name] of languages){
   const code=normalizeLanguageCode(rawCode);
   if(seen.has(code)) continue; seen.add(code);
   const option=document.createElement('option'); option.value=code; option.textContent=name; select.appendChild(option);
 }
 // Add fallback languages absent from the API so the menu remains complete.
 for(const [code,name] of FALLBACK_LANGUAGES){
   if(seen.has(code)) continue; seen.add(code);
   const option=document.createElement('option'); option.value=code; option.textContent=name; select.appendChild(option);
 }
 select.value='fr';
}

function isProtectedText(text){
 const t=text.trim();
 return !t || PROTECTED_TEXT.has(t) || /@/.test(t) || /^\+?[\d\s().-]{7,}$/.test(t) || /^\d{4}(?:—|-|–)\d{4}$/.test(t);
}

async function apiTranslate(text,target){
 if(isProtectedText(text)) return text;
 const cacheKey=`${target}\u0000${text}`;
 if(sessionTranslationCache.has(cacheKey)) return sessionTranslationCache.get(cacheKey);
 const params=new URLSearchParams({q:text,langpair:`fr|${target}`});
 let lastError;
 for(let attempt=0;attempt<2;attempt++){
   const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),12000);
   try{
     const r=await fetch(`${MYMEMORY_ENDPOINT}?${params}`,{headers:{Accept:'application/json'},signal:controller.signal});
     if(!r.ok) throw new Error(`HTTP ${r.status}`);
     const data=await r.json();
     const value=data?.responseData?.translatedText;
     if(!value || /INVALID TARGET LANGUAGE|QUERY LENGTH LIMIT|MYMEMORY WARNING/i.test(value)) throw new Error(value||'Traduction indisponible');
     sessionTranslationCache.set(cacheKey,value); return value;
   }catch(e){lastError=e; if(attempt===0) await new Promise(r=>setTimeout(r,450));}
   finally{clearTimeout(timer);}
 }
 throw lastError;
}

function collectTranslatableContent(){
 const items=[];
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
   const p=node.parentElement;
   if(!p||['SCRIPT','STYLE','OPTION','NOSCRIPT','CODE'].includes(p.tagName)||p.closest('[data-no-translate]')||!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
   return NodeFilter.FILTER_ACCEPT;
 }});
 let node; while((node=walker.nextNode())) items.push({type:'text',node,original:node.nodeValue});
 for(const el of document.querySelectorAll('[alt],[title],[aria-label],[placeholder]')){
   for(const attr of ['alt','title','aria-label','placeholder']) if(el.hasAttribute(attr)){
     const value=el.getAttribute(attr); if(value&&value.trim()) items.push({type:'attr',node:el,attr,original:value});
   }
 }
 return items;
}

function setItemValue(item,value){
 if(item.type==='text'){
   const lead=item.original.match(/^\s*/)[0], trail=item.original.match(/\s*$/)[0];
   item.node.nodeValue=lead+value.trim()+trail;
 } else item.node.setAttribute(item.attr,value);
}

function restoreItems(items,title){
 for(const item of items){ if(item.type==='text') item.node.nodeValue=item.original; else item.node.setAttribute(item.attr,item.original); }
 document.title=title; document.documentElement.lang='fr'; document.documentElement.dir='ltr';
}

async function translateUniqueTexts(texts,target,onProgress){
 const out=new Map(); let cursor=0,done=0;
 const worker=async()=>{
   while(cursor<texts.length){
     const i=cursor++, text=texts[i];
     try{out.set(text,await apiTranslate(text,target));}catch(e){console.warn('Texte non traduit:',text,e);out.set(text,text);}
     done++; onProgress?.(done,texts.length);
   }
 };
 await Promise.all(Array.from({length:Math.min(3,texts.length)},worker));
 return out;
}

async function initPortfolioTranslation(){
 const select=document.getElementById('language-select'); if(!select)return;
 const status=document.querySelector('.translate-status');
 select.disabled=true; if(status)status.textContent='Langues…';
 await populateLanguageSelect(select);
 select.disabled=false; if(status)status.textContent='';
 select.value='fr'; document.documentElement.lang='fr';

 const items=collectTranslatableContent();
 const originalTitle=document.title;
 let requestId=0;
 const setBusy=(busy,msg='')=>{select.disabled=busy;select.toggleAttribute('aria-busy',busy);document.body.classList.toggle('translation-loading',busy);if(status)status.textContent=msg;};

 select.addEventListener('change',async()=>{
   const target=select.value, id=++requestId;
   restoreItems(items,originalTitle);
   if(target==='fr'){setBusy(false,'');return;}
   setBusy(true,'Traduction…');
   try{
     const local=PORTFOLIO_TRANSLATIONS[target];
     const unique=[...new Set(items.map(x=>x.original.trim()).filter(Boolean))];
     const unresolved=[]; const map=new Map();
     for(const text of unique){
       if(isProtectedText(text)) map.set(text,text);
       else if(local && local[text]) map.set(text,local[text]);
       else unresolved.push(text);
     }
     if(unresolved.length){
       const apiMap=await translateUniqueTexts(unresolved,target,(done,total)=>{if(id===requestId&&status)status.textContent=`Traduction ${Math.round(done/total*100)} %`;});
       for(const [k,v] of apiMap) map.set(k,v);
     }
     if(id!==requestId)return;
     for(const item of items){const key=item.original.trim();setItemValue(item,map.get(key)||key);}
     document.title=(local&&local[originalTitle])||await apiTranslate(originalTitle,target).catch(()=>originalTitle);
     document.documentElement.lang=target;
     document.documentElement.dir=['ar','he','fa','ur'].some(c=>target.startsWith(c))?'rtl':'ltr';
     if(status)status.textContent='';
   }catch(error){
     console.error('Erreur de traduction:',error); restoreItems(items,originalTitle); select.value='fr';
     if(status)status.textContent='Traduction indisponible';
   }finally{if(id===requestId){select.disabled=false;select.removeAttribute('aria-busy');document.body.classList.remove('translation-loading');}}
 });
}
