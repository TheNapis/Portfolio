let translations = {};
let currentLanguage = 'fr';

// Charger les traductions depuis les fichiers JSON
async function loadTranslations() {
    try {
        const [frResponse, enResponse] = await Promise.all([
            fetch('languages/fr.json'),
            fetch('languages/en.json')
        ]);
        
        translations.fr = await frResponse.json();
        translations.en = await enResponse.json();
        
        return true;
    } catch (error) {
        console.error('Erreur lors du chargement des traductions:', error);
        return false;
    }
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang].header_title;
    document.querySelector('.header-title').textContent = translations[lang].header_title;
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const navKeys = ['nav_introduction','nav_cv','nav_motivation','nav_college','nav_experiences','nav_projects'];
    for (let i = 0; i < navLinks.length && i < navKeys.length; i++) {
        const key = navKeys[i];
        if (translations[lang][key]) {
            navLinks[i].textContent = translations[lang][key];
        }
    }
    

    document.querySelector('#introduction h1 strong').textContent = translations[lang].introduction_title;
    document.querySelector('#introduction p').textContent = translations[lang].introduction_text;
    
    const cvSection = document.querySelector('#cv');
    if (cvSection) {
        const h1 = cvSection.querySelector('h1'); if (h1 && translations[lang].cv_title) h1.textContent = translations[lang].cv_title;
        const h2 = cvSection.querySelector('h2'); if (h2 && translations[lang].cv_text) h2.textContent = translations[lang].cv_text;
        const cvButtons = cvSection.querySelectorAll('a'); if (cvButtons[1] && translations[lang].cv_button) cvButtons[1].textContent = translations[lang].cv_button;
    }

    const motivationSection = document.querySelector('#motivation');
    if (motivationSection) {
        const h1m = motivationSection.querySelector('h1'); if (h1m && translations[lang].motivation_title) h1m.textContent = translations[lang].motivation_title;
        const h2m = motivationSection.querySelector('h2'); if (h2m && translations[lang].motivation_text) h2m.textContent = translations[lang].motivation_text;
        const motBtn = motivationSection.querySelector('a:last-of-type'); if (motBtn && translations[lang].motivation_button) motBtn.textContent = translations[lang].motivation_button;
    }
    
    document.querySelector('#college h1').textContent = translations[lang].college_title;
    document.querySelector('#college > p').textContent = translations[lang].college_intro;
    
    const quadtreeDesc = document.querySelector('#college .sub_section:first-of-type p');
    quadtreeDesc.innerHTML = `<strong>Quadtree of HOPE</strong> ${translations[lang].quadtree_desc}`;
    
    const aerobadgeDescs = document.querySelectorAll('#college .sub_section:last-of-type p');
    aerobadgeDescs[0].innerHTML = `<strong>Aérobadge</strong> ${translations[lang].aerobadge_desc1}`;
    aerobadgeDescs[1].textContent = translations[lang].aerobadge_desc2;
    
    document.querySelector('#experiences h1').textContent = translations[lang].experiences_title;
    document.querySelector('#experiences .sub_section:first-of-type h2').textContent = translations[lang].stage_title;
    document.querySelector('#experiences .sub_section:first-of-type p').textContent = translations[lang].stage_desc;
    document.querySelector('#experiences .sub_section:last-of-type h2').textContent = translations[lang].benevolat_title;
    document.querySelector('#experiences .sub_section:last-of-type p').textContent = translations[lang].benevolat_desc;
    
    document.querySelector('#projects h1').textContent = translations[lang].projects_title;
    document.querySelector('#projects > p').textContent = translations[lang].projects_intro;
    
    const projectDescs = document.querySelectorAll('#projects .sub_section p');
    if (projectDescs.length > 0 && translations[lang].asam_desc) projectDescs[0].innerHTML = `<strong>ASAM</strong> ${translations[lang].asam_desc}`;
    if (projectDescs.length > 1 && translations[lang].nantibus_desc) projectDescs[1].innerHTML = `<strong>Nantibus</strong> ${translations[lang].nantibus_desc}`;
    if (projectDescs.length > 2 && translations[lang].tvt_desc) projectDescs[2].innerHTML = `<strong>theVirtualThings</strong> ${translations[lang].tvt_desc}`;
    if (projectDescs.length > 3 && translations[lang].bibliom_desc) projectDescs[3].innerHTML = `<strong>Bibliom</strong> ${translations[lang].bibliom_desc}`;
    
    document.querySelector('#contact h1').textContent = translations[lang].contact_title;
    const contactPs = document.querySelectorAll('#contact p');
    contactPs[0].textContent = translations[lang].contact_phone;
    contactPs[1].textContent = translations[lang].contact_mail;
    contactPs[2].innerHTML = `${translations[lang].contact_linkedin} <a href="https://www.linkedin.com/in/na%C3%ABl-maanli-b82642299">${translations[lang].contact_link}</a>`;
    
    const footerP = document.querySelector('footer p'); if (footerP) footerP.textContent = translations[lang].footer_text;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(lang + '-btn'); if (activeBtn) activeBtn.classList.add('active');

    // Update image alts if present
    const nantibusLogo = document.querySelector('img[src*="logo_Nantibus.png"]');
    if (nantibusLogo && translations[lang].alt && translations[lang].alt.logo_nantibus) {
        nantibusLogo.alt = translations[lang].alt.logo_nantibus;
    }

    const bibliomLogo = document.querySelector('img[src*="logo_Bibliom.png"]');
    if (bibliomLogo && translations[lang].alt && translations[lang].alt.logo_bibliom) {
        bibliomLogo.alt = translations[lang].alt.logo_bibliom;
    }

    const musicImage = document.querySelector('img[src*="passions/music.png"]');
    if (musicImage && translations[lang].alt && translations[lang].alt.music) {
        musicImage.alt = translations[lang].alt.music;
    }

    const climbingImage = document.querySelector('img[src*="passions/climbing.png"]');
    if (climbingImage && translations[lang].alt && translations[lang].alt.climbing) {
        climbingImage.alt = translations[lang].alt.climbing;
    }

    const computerImage = document.querySelector('img[src*="passions/computer.png"]');
    if (computerImage && translations[lang].alt && translations[lang].alt.computer) {
        computerImage.alt = translations[lang].alt.computer;
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    // Charger les traductions avant d'initialiser
    const loaded = await loadTranslations();
    
    if (loaded) {
        document.getElementById('fr-btn').addEventListener('click', () => changeLanguage('fr'));
        document.getElementById('en-btn').addEventListener('click', () => changeLanguage('en'));
        
        changeLanguage('fr');
    } else {
        console.error('Impossible de charger les traductions');
    }
});
