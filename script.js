// Словарь переводов
const translations = {
    en: {
        hero_title: "Hi, I'm Sergei Orlov",
        hero_subtitle: "Android & Indie Developer",
        hero_desc: "Building polished mobile experiences in Argentina.",
        nav_about: "About Me",
        about_text: "I am a product-minded Android engineer with 7 years of experience. I specialize in owning architecture performance and shipping polished UX at scale. Currently based in Buenos Aires, Argentina. I combine technical expertise with a passion for creating independent applications.",
        nav_skills: "Skills",
        hard_skills: "Hard Skills",
        soft_skills: "Soft Skills",
        soft_product: "Product Mindset",
        soft_ux: "UX/UI Focus",
        soft_e2e: "End-to-End Delivery",
        soft_mentoring: "Code Review & Quality",
        soft_arch: "System Architecture",
        nav_projects: "My Projects",
        status_completed: "Completed",
        booklover_desc: "A reading tracker application. Users can set reading goals, track progress, and save interesting notes or quotes directly from the books they read.",
        activetrend_desc: "An intuitive app to track nutrition and activity effortlessly without the tedious need to count calories. Focuses on healthy habits over numbers.",
        footer_rights: "All rights reserved."
    },
    es: {
        hero_title: "Hola, soy Sergei Orlov",
        hero_subtitle: "Desarrollador Android e Indie",
        hero_desc: "Creando experiencias móviles pulidas en Argentina.",
        nav_about: "Sobre mí",
        about_text: "Soy un ingeniero Android orientado al producto con 7 años de experiencia. Me especializo en arquitectura de alto rendimiento y en ofrecer UX pulido a escala. Actualmente vivo en Buenos Aires, Argentina. Combino experiencia técnica con pasión por crear aplicaciones independientes.",
        nav_skills: "Habilidades",
        hard_skills: "Habilidades Técnicas",
        soft_skills: "Habilidades Blandas",
        soft_product: "Enfoque en Producto",
        soft_ux: "Enfoque en UX/UI",
        soft_e2e: "Entrega End-to-End",
        soft_mentoring: "Calidad de Código",
        soft_arch: "Arquitectura de Sistemas",
        nav_projects: "Mis Proyectos",
        status_completed: "Completado",
        booklover_desc: "Una aplicación para seguimiento de lectura. Los usuarios pueden establecer objetivos, ver su progreso y guardar notas o citas interesantes directamente de los libros.",
        activetrend_desc: "Una app intuitiva para seguir nutrición y actividad sin esfuerzo, sin la necesidad tediosa de contar calorías. Se enfoca en hábitos saludables.",
        footer_rights: "Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    let currentLang = 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';

    // === 1. Логика Языка ===
    const updateLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langToggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    };

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage(currentLang);
    });

    // === 2. Логика Темы ===
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };

    // Применить сохраненную тему при загрузке
    applyTheme(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

    // === 3. Анимация при скролле (Intersection Observer) ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});