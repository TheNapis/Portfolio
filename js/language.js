const translations = {
    fr: {

        header_title: "Portfolio de Naël Maanli",
        nav_introduction: "Introduction",
        nav_cv: "Mon CV",
        nav_motivation: "Lettre de motivation",
        nav_college: "Mes projets scolaires",
        nav_experiences: "Mes expériences personnelles",
        nav_projects: "Mes projets personnels",
        

        introduction_title: "Bienvenue sur mon portfolio !!!",
        introduction_text: "Bonjour ! Je suis Naël Maanli, je suis actuellement en première année de PeiP D (Parcours des écoles d'ingénieurs Polytech) à I.U.T. de Nantes pour faire un diplôme d'ingénieur en informatique. Si je peux me décrire, je dirai que je suis peu touche à tout et une personne qui aime découvrir des choses.",
        

        cv_title: "Mon CV (Curriculum Vitae)",
        cv_text: "Vous pouvez retrouver mon CV en cliquant sur le bouton.",
        cv_button: "Télécharger",
        

        motivation_title: "Lettre de motivation",
        motivation_text: "Vous pouvez retrouver ma lettre de motivation en cliquant sur le bouton.",
        motivation_button: "Télécharger",
        

        college_title: "Mes projets scolaires",
        college_intro: "Cliquer sur le projet pour accèder à sa page principale ou à la vidéo du projet.",
        quadtree_desc: "est un jeu que nous avons dans le cadre d'un projet de fin de semestre de première année.",
        aerobadge_desc1: "est un projet de BAC que nous avons fait en groupe de quatre et que nous avons présenté notamment au Grand Oral.",
        aerobadge_desc2: "Je vous invite à aller regarder la vidéo du projet en cliquant sur le cadre.",
        

        experiences_title: "Mes expériences personnelles",
        stage_title: "Stage de troisième : Magasin de réparation",
        stage_desc: "Chez CALONNA, Magasin d'informatique et Réparations à Chalonnes-sur-Loire (49) en janvier 2021",
        benevolat_title: "Bénévole dans l'association des jeunes et de la culture de Saint-Georges-sur-Loire (49)",
        benevolat_desc: "Participation à des évènements comme Toutenkarton (2022-2023) et Georges fait son Chaud (2022-2024)",
        

        projects_title: "Mes projets personnels",
        projects_intro: "Cliquer sur le projet pour accèder à sa page principale.",
        asam_desc: "un logiciel qui consiste à simplifier l'utilisation de matériel informatique pour les enseignants et les élèves d'écoles primaires qui ne sont pas forcément à l'aise en informatique.",
        nantibus_desc: "est une application mobile, qui reprend les open datas disponibles du réseau de transport Nantais pour en faire une application ergonomique et interactive avec une carte, liste des arrêts, listes des différentes lignes, et autres qui simplifient l'utilisation et la compréhension des applications liées au transport dans la métropole. C'est un projet collaboratif !!",
        tvt_desc: "est une application de bureau qui utilise podman pour faciliter la gestion des conteneurs avec des commandes simplifiées et une interface graphique avec plusieurs fonctions utiles comme la gestion des réseaux virtuels.",
        bibliom_desc: "est un logiciel simplifié de gestion d'une BCD ou de mini à grande Bibliothèque.",
        

        contact_title: "Contact",
        contact_phone: "Numéro de téléphone : 06-37-21-43-91",
        contact_mail: "Mail : nael.maanli@gmail.com",
        contact_linkedin: "LinkedIn :",
        contact_link: "lien",
        

        footer_text: "Portfolio de Naël Maanli, dernière mise à jour le 17/09/2025"
    },
    
    en: {

        header_title: "Naël Maanli's Portfolio",
        nav_introduction: "Introduction",
        nav_cv: "My CV",
        nav_motivation: "Cover Letter",
        nav_college: "My school projects",
        nav_experiences: "My personal experiences",
        nav_projects: "My personal projects",
        

        introduction_title: "Welcome to my portfolio !!!",
        introduction_text: "Hello! I'm Naël Maanli, currently in my first year of PeiP D (Polytech Engineering School Pathway) at I.U.T. of Nantes to pursue an engineering degree in computer science. If I had to describe myself, I'd say I'm a bit of a jack-of-all-trades and someone who loves discovering new things.",

        cv_title: "My CV (Curriculum Vitae)",
        cv_text: "You can find my CV by clicking the button.",
        cv_button: "Download",
        

        motivation_title: "Cover Letter",
        motivation_text: "You can find my cover letter by clicking the button.",
        motivation_button: "Download",
        

        college_title: "My school projects",
        college_intro: "Click on the project to access its main page or the project video.",
        quadtree_desc: "is a game we made as an end-of-semester project in the first year.",
        aerobadge_desc1: "is a high school graduation project we did as a group of four and presented at the Grand Oral.",
        aerobadge_desc2: "I invite you to watch the project video by clicking on the frame.",

        experiences_title: "My personal experiences",
        stage_title: "9th grade internship: Repair shop",
        stage_desc: "At CALONNA, IT shop and repairs in Chalonnes-sur-Loire (49) in January 2021",
        benevolat_title: "Volunteer at the youth and culture association of Saint-Georges-sur-Loire (49)",
        benevolat_desc: "Participation in events such as Toutenkarton (2022-2023) and Georges fait son Chaud (2022-2024)",
        

        projects_title: "My personal projects",
        projects_intro: "Click on the project to access its main page.",
        asam_desc: "a software designed to simplify the use of IT equipment for teachers and primary school students who are not necessarily comfortable with computers.",
        nantibus_desc: "is a mobile app that uses open data from the Nantes transport network to create an ergonomic and interactive application with a map, list of stops, different lines, and more to simplify the use and understanding of transport-related apps in the city. It's a collaborative project!!",
        tvt_desc: "is a desktop application using podman to make container management easier with simplified commands and a graphical interface with several useful features such as virtual network management.",
        bibliom_desc: "is a simplified software for managing a BCD or small to large library.",
        

        contact_title: "Contact",
        contact_phone: "Phone number: 06-37-21-43-91",
        contact_mail: "Email: nael.maanli@gmail.com",
        contact_linkedin: "LinkedIn:",
        contact_link: "link",
        

        footer_text: "Naël Maanli's Portfolio, last updated on 17/09/2025"
    }
};

let currentLanguage = 'fr';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang].header_title;
    document.querySelector('.header-title').textContent = translations[lang].header_title;
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks[0].textContent = translations[lang].nav_introduction;
    navLinks[1].textContent = translations[lang].nav_cv;
    navLinks[2].textContent = translations[lang].nav_motivation;
    navLinks[3].textContent = translations[lang].nav_college;
    navLinks[4].textContent = translations[lang].nav_experiences;
    navLinks[5].textContent = translations[lang].nav_projects;
    

    document.querySelector('#introduction h1 strong').textContent = translations[lang].introduction_title;
    document.querySelector('#introduction p').textContent = translations[lang].introduction_text;
    
    document.querySelector('#cv h1').textContent = translations[lang].cv_title;
    document.querySelector('#cv h2').textContent = translations[lang].cv_text;
    document.querySelectorAll('#cv a')[1].textContent = translations[lang].cv_button;
    
    document.querySelector('#motivation h1').textContent = translations[lang].motivation_title;
    document.querySelector('#motivation h2').textContent = translations[lang].motivation_text;
    document.querySelector('#motivation a:last-of-type').textContent = translations[lang].motivation_button;
    
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
    projectDescs[0].innerHTML = `<strong>ASAM</strong> ${translations[lang].asam_desc}`;
    projectDescs[1].innerHTML = `<strong>Nantibus</strong> ${translations[lang].nantibus_desc}`;
    projectDescs[2].innerHTML = `<strong>theVirtualThings</strong> ${translations[lang].tvt_desc}`;
    projectDescs[3].innerHTML = `<strong>Bibliom</strong> ${translations[lang].bibliom_desc}`;
    
    document.querySelector('#contact h1').textContent = translations[lang].contact_title;
    const contactPs = document.querySelectorAll('#contact p');
    contactPs[0].textContent = translations[lang].contact_phone;
    contactPs[1].textContent = translations[lang].contact_mail;
    contactPs[2].innerHTML = `${translations[lang].contact_linkedin} <a href="https://www.linkedin.com/in/na%C3%ABl-maanli-b82642299">${translations[lang].contact_link}</a>`;
    
    document.querySelector('footer p').textContent = translations[lang].footer_text;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('fr-btn').addEventListener('click', () => changeLanguage('fr'));
    document.getElementById('en-btn').addEventListener('click', () => changeLanguage('en'));
    
    changeLanguage('fr');
});
    const nantibusLogo = document.querySelector('img[src*="logo_Nantibus.png"]');
    if (nantibusLogo) {
        nantibusLogo.alt = translations.alt.logo_nantibus;
    }

    const bibliomLogo = document.querySelector('img[src*="logo_Bibliom.png"]');
    if (bibliomLogo) {
        bibliomLogo.alt = translations.alt.logo_bibliom;
    }

    const musicImage = document.querySelector('img[src*="passions/music.png"]');
    if (musicImage) {
        musicImage.alt = translations.alt.music;
    }

    const climbingImage = document.querySelector('img[src*="passions/climbing.png"]');
    if (climbingImage) {
        climbingImage.alt = translations.alt.climbing;
    }

    const computerImage = document.querySelector('img[src*="passions/computer.png"]');
    if (computerImage) {
        computerImage.alt = translations.alt.computer;
    }