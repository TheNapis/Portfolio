// Default language
let currentLanguage = localStorage.getItem('language') || 'fr';
let translations = {};



// DOM elements with text to translate (using data attributes)
document.addEventListener('DOMContentLoaded', function() {
    // Load the saved language or default to French
    loadLanguage(currentLanguage);

    // Set active button
    document.getElementById(`${currentLanguage}-btn`).classList.add('active');

    // Add event listeners to language buttons
    document.getElementById('fr-btn').addEventListener('click', () => {
        setLanguage('fr');
    });

    document.getElementById('en-btn').addEventListener('click', () => {
        setLanguage('en');
    });
});

// Function to set language
function setLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${lang}-btn`).classList.add('active');

    // Save language preference
    localStorage.setItem('language', lang);
    currentLanguage = lang;

    // Load language file and update content
    loadLanguage(lang);
}

// Function to load language file
async function loadLanguage(lang) {
    try {
        const response = await fetch(`languages/${lang}.json`);
        translations = await response.json();
        updateContent();
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

// Function to update all content with translations
function updateContent() {
    // Add this to the updateContent function
    document.documentElement.lang = currentLanguage;

    // Update document title
    document.title = translations.title;

    // Update header title
    document.querySelector('.header-title').textContent = translations.title;

    // Update navigation items
    const navItems = document.querySelectorAll('.top-nav nav ul li a');
    navItems[0].textContent = translations.nav.introduction;
    navItems[1].textContent = translations.nav.cv;
    navItems[2].textContent = translations.nav.motivation;
    navItems[3].textContent = translations.nav.college;
    navItems[4].textContent = translations.nav.experiences;
    navItems[5].textContent = translations.nav.projects;

    // Update introduction section
    document.querySelector('#introduction h1 strong').textContent = translations.introduction.welcome;
    document.querySelector('#introduction p').textContent = translations.introduction.description;

    // Update CV section
    document.querySelector('#cv h1').textContent = translations.cv.title;
    document.querySelector('#cv h2').textContent = translations.cv.description;
    document.querySelector('#cv a[style*="display: inline-block"]').textContent = translations.cv.button;

    // Update motivation section
    document.querySelector('#motivation h1').textContent = translations.motivation.title;
    document.querySelector('#motivation h2').textContent = translations.motivation.description;
    document.querySelector('#motivation a[style*="display: inline-block"]').textContent = translations.motivation.button;

    // Update college section
    document.querySelector('#college h1').textContent = translations.college.title;
    document.querySelector('#college > p').textContent = translations.college.description;

    // Update college projects
    const collegeProjects = document.querySelectorAll('#college .sub_section');
    if (collegeProjects.length >= 1) {
        // Quadtree project
        const quadtreeP = collegeProjects[0].querySelector('p');
        if (quadtreeP) {
            quadtreeP.innerHTML = `<strong>${translations.college.quadtree.title}</strong> ${translations.college.quadtree.description}`;
        }
    }
    if (collegeProjects.length >= 2) {
        // Aerobadge project
        const aerobadgePs = collegeProjects[1].querySelectorAll('p');
        if (aerobadgePs.length >= 1) {
            aerobadgePs[0].innerHTML = `<strong>${translations.college.aerobadge.title}</strong> ${translations.college.aerobadge.description}`;
        }
        if (aerobadgePs.length >= 2) {
            aerobadgePs[1].textContent = translations.college.aerobadge.note;
        }
    }

    // Update experiences section
    document.querySelector('#experiences h1').textContent = translations.experiences.title;

    // Update specific experiences
    const experienceSections = document.querySelectorAll('#experiences .sub_section');
    if (experienceSections.length >= 1) {
        // Internship
        const internshipH2 = experienceSections[0].querySelector('h2');
        const internshipP = experienceSections[0].querySelector('p');
        if (internshipH2) {
            internshipH2.textContent = translations.experiences.internship.title;
        }
        if (internshipP) {
            internshipP.textContent = translations.experiences.internship.description;
        }
    }
    if (experienceSections.length >= 2) {
        // Volunteer
        const volunteerH2 = experienceSections[1].querySelector('h2');
        const volunteerP = experienceSections[1].querySelector('p');
        if (volunteerH2) {
            volunteerH2.textContent = translations.experiences.volunteer.title;
        }
        if (volunteerP) {
            volunteerP.textContent = translations.experiences.volunteer.description;
        }
    }

    // Update projects section
    document.querySelector('#projects h1').textContent = translations.projects.title;
    document.querySelector('#projects > p').textContent = translations.projects.description;

    // Update project descriptions
    const projectDescriptions = document.querySelectorAll('#projects .sub_section p');
    if (projectDescriptions.length >= 1) {
        projectDescriptions[0].innerHTML = `<strong>ASAM</strong> ${translations.projects.asam.description}`;
    }
    if (projectDescriptions.length >= 2) {
        projectDescriptions[1].innerHTML = `<strong>Nantibus</strong> ${translations.projects.nantibus.description}`;
    }
    if (projectDescriptions.length >= 3) {
        projectDescriptions[2].innerHTML = `<strong>Bibliom</strong> ${translations.projects.bibliom.description}`;
    }

    // Update contact section
    document.querySelector('#contact h1').textContent = translations.contact.title;
    const contactPs = document.querySelectorAll('#contact p');
    if (contactPs.length >= 1) {
        contactPs[0].textContent = translations.contact.phone;
    }
    if (contactPs.length >= 2) {
        contactPs[1].textContent = translations.contact.email;
    }

    // Update footer
    document.querySelector('footer p').textContent = translations.footer.copyright;

    // Update alt texts for images
    // Bicycle images
    const bicycleImages = document.querySelectorAll('img[src*="passions/bicycle.png"]');
    bicycleImages.forEach(img => {
        img.alt = translations.alt.bicycle;
    });

    // Project logos and demos
    const quadtreeLogo = document.querySelector('img[src*="logo_Quadtree.png"]');
    if (quadtreeLogo) {
        quadtreeLogo.alt = translations.alt.logo_quadtree;
    }

    const quadtreeDemo = document.querySelector('img[src*="quadtree_demo.png"]');
    if (quadtreeDemo) {
        quadtreeDemo.alt = translations.alt.demo_quadtree;
    }

    const aerobadgeLogo = document.querySelector('img[src*="logo_Aerobadge.png"]');
    if (aerobadgeLogo) {
        aerobadgeLogo.alt = translations.alt.logo_aerobadge;
    }

    const aerobadgeDemo = document.querySelector('img[src*="aerobadge_maquetteV1.png"]');
    if (aerobadgeDemo) {
        aerobadgeDemo.alt = translations.alt.demo_aerobadge;
    }

    const asamLogo = document.querySelector('img[src*="logo_ASAM.png"]');
    if (asamLogo) {
        asamLogo.alt = translations.alt.logo_asam;
    }

    const nantibusLogo = document.querySelector('img[src*="logo_Nantibus.png"]');
    if (nantibusLogo) {
        nantibusLogo.alt = translations.alt.logo_nantibus;
    }

    const bibliomLogo = document.querySelector('img[src*="logo_Bibliom.png"]');
    if (bibliomLogo) {
        bibliomLogo.alt = translations.alt.logo_bibliom;
    }

    // Other passion images
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
}
