// Словарь переводов.
// Юридические реквизиты (OSV Labs, ORLOV, SERGEI, адрес, CUIT, email, телефон)
// намеренно НЕ переводятся — они должны совпадать посимвольно в обеих версиях.
const translations = {
    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About",
        nav_contact: "Contact",
        nav_privacy: "Privacy Policy",

        hero_subtitle: "Independent Android app studio",
        hero_desc: "We design and build our own mobile applications for Android. OSV Labs is operated from Buenos Aires, Argentina, by its founder, Sergei Orlov.",

        status_dev: "In development",
        activetrend_desc: "An intuitive app to track nutrition and activity effortlessly, without the tedious need to count calories. Focuses on healthy habits over numbers.",
        products_note: "Product pages and privacy policies for each application are published on that application's own website. Questions about any OSV Labs product can be sent to contact@orlovs.dev.",

        about_1: "is an independent Android app studio operating from Buenos Aires, Argentina. The studio develops and publishes its own mobile applications.",
        about_2: "The studio was founded and is run by Sergei Orlov, an Android engineer who is responsible for the design, development, release and support of every OSV Labs application.",
        about_3: "OSV Labs is registered in Argentina under the name ORLOV, SERGEI. Full business details are listed in the footer of this website.",

        contact_title: "Contact & Support",
        contact_lead: "OSV Labs is reachable by email. This is also the support address for every OSV Labs application.",
        contact_response: "Written in English, Spanish or Russian. We aim to reply within 3 business days.",
        contact_what_title: "What you can write about",
        contact_support_h: "App support",
        contact_support_p: "Problems with an OSV Labs application, bug reports, account or data questions, refund questions, and requests to delete your data.",
        contact_business_h: "Business",
        contact_business_p: "Partnership, distribution and other business enquiries, plus questions from platforms and payment providers about the studio.",
        contact_press_h: "Press",
        contact_press_p: "Media requests, product information and press material for OSV Labs applications.",
        contact_details_title: "Business details",

        privacy_title: "Privacy Policy",
        privacy_scope: "This policy covers the website orlovs.dev only. Each OSV Labs application has its own privacy policy, published on that application's own website.",
        privacy_updated: "Last updated",

        legal_operated: "Operated by",
        legal_email: "Email",
        legal_phone: "Phone",
        footer_rights: "All rights reserved."
    },
    es: {
        nav_home: "Inicio",
        nav_products: "Productos",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        nav_privacy: "Politica de Privacidad",

        hero_subtitle: "Estudio independiente de aplicaciones Android",
        hero_desc: "Diseñamos y desarrollamos nuestras propias aplicaciones moviles para Android. OSV Labs opera desde Buenos Aires, Argentina, a cargo de su fundador, Sergei Orlov.",

        status_dev: "En desarrollo",
        activetrend_desc: "Una app intuitiva para seguir la nutricion y la actividad sin esfuerzo, sin la tediosa necesidad de contar calorias. Se enfoca en los habitos saludables por encima de los numeros.",
        products_note: "Las paginas de producto y las politicas de privacidad de cada aplicacion se publican en el sitio web propio de esa aplicacion. Las consultas sobre cualquier producto de OSV Labs pueden enviarse a contact@orlovs.dev.",

        about_1: "es un estudio independiente de aplicaciones Android que opera desde Buenos Aires, Argentina. El estudio desarrolla y publica sus propias aplicaciones moviles.",
        about_2: "El estudio fue fundado y es dirigido por Sergei Orlov, ingeniero Android responsable del diseño, el desarrollo, el lanzamiento y el soporte de cada aplicacion de OSV Labs.",
        about_3: "OSV Labs esta registrado en Argentina bajo el nombre ORLOV, SERGEI. Los datos comerciales completos figuran en el pie de este sitio web.",

        contact_title: "Contacto y Soporte",
        contact_lead: "Podes comunicarte con OSV Labs por correo electronico. Esta es tambien la direccion de soporte de todas las aplicaciones de OSV Labs.",
        contact_response: "Escribinos en español, ingles o ruso. Procuramos responder dentro de los 3 dias habiles.",
        contact_what_title: "Sobre que podes escribirnos",
        contact_support_h: "Soporte de aplicaciones",
        contact_support_p: "Problemas con una aplicacion de OSV Labs, reportes de errores, consultas sobre tu cuenta o tus datos, consultas sobre reembolsos y solicitudes de eliminacion de datos.",
        contact_business_h: "Negocios",
        contact_business_p: "Consultas sobre alianzas, distribucion y otros temas comerciales, ademas de consultas de plataformas y proveedores de pago sobre el estudio.",
        contact_press_h: "Prensa",
        contact_press_p: "Solicitudes de medios, informacion de producto y material de prensa sobre las aplicaciones de OSV Labs.",
        contact_details_title: "Datos comerciales",

        privacy_title: "Politica de Privacidad",
        privacy_scope: "Esta politica cubre unicamente el sitio web orlovs.dev. Cada aplicacion de OSV Labs tiene su propia politica de privacidad, publicada en el sitio web propio de esa aplicacion.",
        privacy_updated: "Ultima actualizacion",

        legal_operated: "Operado por",
        legal_email: "Email",
        legal_phone: "Telefono",
        footer_rights: "Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    let currentLang = localStorage.getItem('lang') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';

    // === 1. Логика Языка ===
    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Длинные тексты (напр. политика конфиденциальности) хранятся
        // в HTML отдельными блоками на каждый язык.
        const blocks = document.querySelectorAll('.lang-block');
        if (blocks.length) {
            blocks.forEach(block => {
                block.hidden = block.getAttribute('data-lang') !== lang;
            });
        }

        document.documentElement.lang = lang;
        langToggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
        localStorage.setItem('lang', lang);
    };

    updateLanguage(currentLang);

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
