import logoBiofoam from '../assets/logo/logo-biofoam-blancoo.png';

export function Header() {

    return `

    <header id="header" class="header">

        <a href="#hero" class="header__logo">

            <img
                src="${logoBiofoam}"
                alt="Bio Foam"
            >

        </a>

        <button
            class="header__menu"
            id="menuBtn"
            aria-label="Abrir menú"
        >

            <span></span>
            <span></span>
            <span></span>

        </button>

        <nav class="header__nav" id="navMenu">

            <a href="#soluciones">Soluciones</a>

            <a href="#sectores">Sectores</a>

            <a href="#recursos">Nosotros</a>

            <a href="#contacto">Contacto</a>

        </nav>

    </header>

    `;

}

export function iniciarMenuMobile() {

    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener('click', () => {

        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');

    });

    navMenu.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');

        });

    });

}