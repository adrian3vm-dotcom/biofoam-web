(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`

    <header id="header" class="header">

        <a href="#hero" class="header__logo">

            <img
                src="/logo/logo-biofoam-blancoo.webp"
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

    `}function t(){let e=document.getElementById(`menuBtn`),t=document.getElementById(`navMenu`);!e||!t||(e.addEventListener(`click`,()=>{e.classList.toggle(`active`),t.classList.toggle(`active`)}),t.querySelectorAll(`a`).forEach(n=>{n.addEventListener(`click`,()=>{e.classList.remove(`active`),t.classList.remove(`active`)})}))}var n=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-map'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M14.106%205.553a2%202%200%200%200%201.788%200l3.659-1.83A1%201%200%200%201%2021%204.619v12.764a1%201%200%200%201-.553.894l-4.553%202.277a2%202%200%200%201-1.788%200l-4.212-2.106a2%202%200%200%200-1.788%200l-3.659%201.83A1%201%200%200%201%203%2019.381V6.618a1%201%200%200%201%20.553-.894l4.553-2.277a2%202%200%200%201%201.788%200z'%20/%3e%3cpath%20d='M15%205.764v15'%20/%3e%3cpath%20d='M9%203.236v15'%20/%3e%3c/svg%3e`,r=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-shield-check'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z'%20/%3e%3cpath%20d='m9%2012%202%202%204-4'%20/%3e%3c/svg%3e`,i=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-building-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M10%2012h4'%20/%3e%3cpath%20d='M10%208h4'%20/%3e%3cpath%20d='M14%2021v-3a2%202%200%200%200-4%200v3'%20/%3e%3cpath%20d='M6%2010H4a2%202%200%200%200-2%202v7a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2V9a2%202%200%200%200-2-2h-2'%20/%3e%3cpath%20d='M6%2021V5a2%202%200%200%201%202-2h8a2%202%200%200%201%202%202v16'%20/%3e%3c/svg%3e`;function a(){return`

    <section id="hero" class="hero">

        <div class="hero__overlay"></div>

        <div class="hero__contenido">

            <div class="hero__texto">

     <h1>
    CONVERTIMOS<br>
    MUROS EN<br>
    <span class="hero-verde">AHORRO</span><br>
    ENERGÉTICO
</h1>

                <h2>
                    Mayor eficiencia, mejor confort.
                </h2>

                <p>
                    Soluciones de aislamiento térmico y acústico para construcción,
                    industria, hospitales, naves industriales y proyectos comerciales.
                </p>

                <div class="hero__botones">

                    <a href="#contacto" class="btn-principal">
                        Solicita una evaluación
                    </a>

                    <a href="#sectores" class="btn-secundario">
                        Conoce nuestras soluciones
                    </a>

                </div>

            </div>

        </div>

        <!-- TARJETA FLOTANTE -->

        <div class="hero__stats">

            <div class="hero__stat">

                <span class="hero__numero">15</span>

                <p>
                    AÑOS de<br>
                    experiencia<br>
                    en México.
                </p>

            </div>

            <div class="hero__stat">

                <img
                    src="${n}"
                    alt="Cobertura"
                    class="hero__icono"
                >

                <p>
                    Proyectos en México,<br>
                    Estados unidos y<br>
                    Centroamérica.
                </p>

            </div>

            <div class="hero__stat">

                <img
                    src="${r}"
                    alt="Instalación"
                    class="hero__icono"
                >

                <p>
                    Instalación especializada<br>
                    por personal autorizado.
                </p>

            </div>

            <div class="hero__stat">

                <img
                    src="${i}"
                    alt="Edificios"
                    class="hero__icono"
                >

                <p>
                    Soluciones para edificios<br>
                    nuevos y existentes.
                </p>

            </div>

        </div>

    </section>

    `}var o=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-sun-medium'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='4'%20/%3e%3cpath%20d='M12%203v1'%20/%3e%3cpath%20d='M12%2020v1'%20/%3e%3cpath%20d='M3%2012h1'%20/%3e%3cpath%20d='M20%2012h1'%20/%3e%3cpath%20d='m18.364%205.636-.707.707'%20/%3e%3cpath%20d='m6.343%2017.657-.707.707'%20/%3e%3cpath%20d='m5.636%205.636.707.707'%20/%3e%3cpath%20d='m17.657%2017.657.707.707'%20/%3e%3c/svg%3e`,s=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-volume-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M11%204.702a.705.705%200%200%200-1.203-.498L6.413%207.587A1.4%201.4%200%200%201%205.416%208H3a1%201%200%200%200-1%201v6a1%201%200%200%200%201%201h2.416a1.4%201.4%200%200%201%20.997.413l3.383%203.384A.705.705%200%200%200%2011%2019.298z'%20/%3e%3cpath%20d='M16%209a5%205%200%200%201%200%206'%20/%3e%3cpath%20d='M19.364%2018.364a9%209%200%200%200%200-12.728'%20/%3e%3c/svg%3e`,c=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-zap'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15.914%204a1.5%201.5%200%2000-2.474-1.561l-9%209A1.5%201.5%200%20005.5%2014h4.002a.5.5%200%2001.471.666L8.086%2020a1.5%201.5%200%20002.475%201.56l9-9A1.5%201.5%200%200018.5%2010h-3.997a.5.5%200%2001-.472-.667z'%20/%3e%3c/svg%3e`,l=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-brick-wall'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3crect%20width='18'%20height='18'%20x='3'%20y='3'%20rx='2'%20/%3e%3cpath%20d='M12%209v6'%20/%3e%3cpath%20d='M16%2015v6'%20/%3e%3cpath%20d='M16%203v6'%20/%3e%3cpath%20d='M3%2015h18'%20/%3e%3cpath%20d='M3%209h18'%20/%3e%3cpath%20d='M8%2015v6'%20/%3e%3cpath%20d='M8%203v6'%20/%3e%3c/svg%3e`;function u(){return`

    <section id="problemas" class="problemas">

        <div class="problemas__grid">

            <div class="problemas__intro">

                <h2>
                    ¿Tu edificio presenta<br>
                    alguno de estos<br>
                    problemas?
                </h2>

            </div>

            <div class="problema">

                <img
                    src="${o}"
                    alt="Exceso de calor"
                    class="problema__icono"
                >

                <h3>Exceso de calor</h3>

                <p>
                    Ambientes incómodos<br>
                    y mayor uso de<br>
                    climatización.
                </p>

            </div>

            <div class="problema">

                <img
                    src="${s}"
                    alt="Problemas acústicos"
                    class="problema__icono"
                >

                <h3>Problemas acústicos</h3>

                <p>
                    Ruido que afecta<br>
                    el confort y la<br>
                    productividad.
                </p>

            </div>

            <div class="problema">

                <img
                    src="${c}"
                    alt="Altos costos de energía"
                    class="problema__icono"
                >

                <h3>
                    Altos costos<br>
                    de energía
                </h3>

                <p>
                    Mayor consumo<br>
                    y gasto operativos.
                </p>

            </div>

            <div class="problema">

                <img
                    src="${l}"
                    alt="Muros sin aislamiento"
                    class="problema__icono"
                >

                <h3>
                    Muros sin<br>
                    aislamiento
                </h3>

                <p>
                    Pérdidas térmicas y
                    menor eficiencia energética.
                </p>

            </div>

        </div>

    </section>

    `}var d=`/assets/core-vC7rhMs9.webp`,f=`/assets/iso-LdeOe4Kn.webp`;function p(){return`

    <section id="soluciones" class="soluciones">

        <div class="soluciones__header">

            <span>NUESTRAS SOLUCIONES</span>

            <h2>
                Soluciones de aislamiento para<br>
                cada necesidad.
            </h2>

        </div>

        <div class="soluciones__grid">

            <!-- COREFOAM -->

            <article class="producto producto--azul">

                <div class="producto__info">

                    <h3>
                        CORE <span class="texto-azul">FOAM</span>
                    </h3>

                    <p>
                        Espuma aislante térmica y acústica
                        de alta eficiencia para
                        muros de block y durock.
                    </p>

                    <ul>

                        <li>Aislamiento térmico</li>
                        <li>Aislamiento acústico</li>
                        <li>Resistencia al fuego (Clase A)</li>
                        <li>Instalación rápida</li>
                        <li>Ahorro energético</li>

                    </ul>

                    <a
                        href="/pdf/COREFOAM.pdf"
                        target="_blank"
                        class="producto__btn"
                    >
                        VER FICHA TÉCNICA
                    </a>

                </div>

                <div class="producto__imagen producto__imagen--core">

                    <img
                        src="${d}"
                        alt="Core Foam"
                    >

                </div>

            </article>

            <!-- INSULSMART -->

            <article class="producto producto--verde">

                <div class="producto__info">

                    <h3>
                        INSUL <span class="texto-verde">SMART</span>
                    </h3>

                    <p>
                        Espuma aislante térmica y acústica
                        de alta eficiencia para
                        muros de tablaroca y panel yeso.
                    </p>

                    <ul>

                        <li>Aislamiento térmico</li>
                        <li>Aislamiento acústico</li>
                        <li>Resistencia al fuego (Clase A)</li>
                        <li>Instalación rápida</li>
                        <li>Sin mantenimiento</li>
                        <li>Ideal para interiores</li>

                    </ul>

                    <a
                        href="/pdf/INSULSMART.pdf"
                        target="_blank"
                        class="producto__btn"
                    >
                        VER FICHA TÉCNICA
                    </a>

                </div>

                <div class="producto__imagen">

                    <img
                        src="${f}"
                        alt="Insul Smart"
                    >

                </div>

            </article>

        </div>

    </section>

    `}var m=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-drill'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M10%2018a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H5a3%203%200%200%201-3-3%201%201%200%200%201%201-1z'%20/%3e%3cpath%20d='M13%2010H4a2%202%200%200%201-2-2V4a2%202%200%200%201%202-2h9a1%201%200%200%201%201%201v6a1%201%200%200%201-1%201l-.81%203.242a1%201%200%200%201-.97.758H8'%20/%3e%3cpath%20d='M14%204h3a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201h-3'%20/%3e%3cpath%20d='M18%206h4'%20/%3e%3cpath%20d='m5%2010-2%208'%20/%3e%3cpath%20d='m7%2018%202-8'%20/%3e%3c/svg%3e`,h=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-chart-column'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M3%203v16a2%202%200%200%200%202%202h16'%20/%3e%3cpath%20d='M18%2017V9'%20/%3e%3cpath%20d='M13%2017V5'%20/%3e%3cpath%20d='M8%2017v-3'%20/%3e%3c/svg%3e`,g=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-leaf'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M11%2020A7%207%200%200%201%209.8%206.1C15.5%205%2017%204.48%2019%202c1%202%202%204.18%202%208%200%205.5-4.78%2010-10%2010Z'%20/%3e%3cpath%20d='M2%2021c0-3%201.85-5.36%205.08-6C9.5%2014.52%2012%2013%2013%2012'%20/%3e%3c/svg%3e`;function _(){return`

    <section id="porque" class="porque">

        <div class="porque__grid">

            <div class="porque__intro">

                <span>¿POR QUÉ BIO FOAM?</span>

                <h2>
                    Más que un producto,
                    una solución integral
                    para tu proyecto.
                </h2>

            </div>

            <div class="beneficio">

                <img
                    src="${m}"
                    alt="Instalación eficiente"
                    class="beneficio__icono"
                >

                <h3>Instalación eficiente</h3>

                <p>
                    Aplicación rápida y precisa
                    sin procesos invasivos
                    ni demoliciones mayores.
                </p>

            </div>

            <div class="beneficio">

                <img
                    src="${i}"
                    alt="Obra nueva o existente"
                    class="beneficio__icono"
                >

                <h3>Obra nueva o existente</h3>

                <p>
                    Aplicable en edificios
                    terminados o en construcción
                    sin afectar operaciones.
                </p>

            </div>

            <div class="beneficio">

                <img
                    src="${h}"
                    alt="Eficiencia energética"
                    class="beneficio__icono"
                >

                <h3>Eficiencia energética</h3>

                <p>
                    Reduce pérdidas térmicas
                    y disminuye el consumo
                    de energía.
                </p>

            </div>

            <div class="beneficio">

                <img
                    src="${g}"
                    alt="Confort y acústico"
                    class="beneficio__icono"
                >

                <h3>Confort y acústico</h3>

                <p>
                    Mejora la temperatura interior
                    y reduce la transmisión
                    de ruido.
                </p>

            </div>

            <div class="beneficio">

                <img
                    src="${r}"
                    alt="Experiencia comprobada"
                    class="beneficio__icono"
                >

                <h3>Experiencia comprobada</h3>

                <p>
                    Más de 15 años desarrollando
                    soluciones para proyectos
                    residenciales e industriales.
                </p>

            </div>

        </div>

    </section>

    `}var v=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-cross'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M4%209a2%202%200%200%200-2%202v2a2%202%200%200%200%202%202h4a1%201%200%200%201%201%201v4a2%202%200%200%200%202%202h2a2%202%200%200%200%202-2v-4a1%201%200%200%201%201-1h4a2%202%200%200%200%202-2v-2a2%202%200%200%200-2-2h-4a1%201%200%200%201-1-1V4a2%202%200%200%200-2-2h-2a2%202%200%200%200-2%202v4a1%201%200%200%201-1%201z'%20/%3e%3c/svg%3e`,y=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-factory'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12%2016h.01'%20/%3e%3cpath%20d='M16%2016h.01'%20/%3e%3cpath%20d='M3%2019a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V8.5a.5.5%200%200%200-.769-.422l-4.462%202.844A.5.5%200%200%201%2015%2010.5v-2a.5.5%200%200%200-.769-.422L9.77%2010.922A.5.5%200%200%201%209%2010.5V5a2%202%200%200%200-2-2H5a2%202%200%200%200-2%202z'%20/%3e%3cpath%20d='M8%2016h.01'%20/%3e%3c/svg%3e`,b=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-warehouse'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M18%2021V10a1%201%200%200%200-1-1H7a1%201%200%200%200-1%201v11'%20/%3e%3cpath%20d='M22%2019a2%202%200%200%201-2%202H4a2%202%200%200%201-2-2V8a2%202%200%200%201%201.132-1.803l7.95-3.974a2%202%200%200%201%201.837%200l7.948%203.974A2%202%200%200%201%2022%208z'%20/%3e%3cpath%20d='M6%2013h12'%20/%3e%3cpath%20d='M6%2017h12'%20/%3e%3c/svg%3e`,x=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-house'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15%2021v-8a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v8'%20/%3e%3cpath%20d='M3%2010a2%202%200%200%201%20.709-1.528l7-6a2%202%200%200%201%202.582%200l7%206A2%202%200%200%201%2021%2010v9a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2z'%20/%3e%3c/svg%3e`,S=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-store'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15%2021v-5a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v5'%20/%3e%3cpath%20d='M17.774%2010.31a1.12%201.12%200%200%200-1.549%200%202.5%202.5%200%200%201-3.451%200%201.12%201.12%200%200%200-1.548%200%202.5%202.5%200%200%201-3.452%200%201.12%201.12%200%200%200-1.549%200%202.5%202.5%200%200%201-3.77-3.248l2.889-4.184A2%202%200%200%201%207%202h10a2%202%200%200%201%201.653.873l2.895%204.192a2.5%202.5%200%200%201-3.774%203.244'%20/%3e%3cpath%20d='M4%2010.95V19a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-8.05'%20/%3e%3c/svg%3e`,C=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-bed'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M2%204v16'%20/%3e%3cpath%20d='M2%208h18a2%202%200%200%201%202%202v10'%20/%3e%3cpath%20d='M2%2017h20'%20/%3e%3cpath%20d='M6%208v9'%20/%3e%3c/svg%3e`,w=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-graduation-cap'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M21.42%2010.922a1%201%200%200%200-.019-1.838L12.83%205.18a2%202%200%200%200-1.66%200L2.6%209.08a1%201%200%200%200%200%201.832l8.57%203.908a2%202%200%200%200%201.66%200z'%20/%3e%3cpath%20d='M22%2010v6'%20/%3e%3cpath%20d='M6%2012.5V16a6%203%200%200%200%2012%200v-3.5'%20/%3e%3c/svg%3e`;function T(){return`

    <section id="sectores" class="sectores">

        <div class="sectores__header">

            <span>SOLUCIONES PARA DIVERSOS SECTORES</span>

        </div>

        <div class="sectores__grid">

            <article class="sector">

                <div class="sector__imagen sector__imagen--hospital"></div>

                <div class="sector__contenido">

                    <img
                        src="${v}"
                        alt="Hospitales"
                        class="sector__icono"
                    >

                    <h3>Hospitales</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--industria"></div>

                <div class="sector__contenido">

                    <img
                        src="${y}"
                        alt="Industria"
                        class="sector__icono"
                    >

                    <h3>Industria</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--naves"></div>

                <div class="sector__contenido">

                    <img
                        src="${b}"
                        alt="Naves Industriales"
                        class="sector__icono"
                    >

                    <h3>Naves Industriales</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--residencial"></div>

                <div class="sector__contenido">

                    <img
                        src="${x}"
                        alt="Construcción Residencial"
                        class="sector__icono"
                    >

                    <h3>Construcción Residencial</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--comercial"></div>

                <div class="sector__contenido">

                    <img
                        src="${S}"
                        alt="Centros Comerciales"
                        class="sector__icono"
                    >

                    <h3>Centros Comerciales</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--hoteles"></div>

                <div class="sector__contenido">

                    <img
                        src="${C}"
                        alt="Hoteles"
                        class="sector__icono"
                    >

                    <h3>Hoteles</h3>

                </div>

            </article>


            <article class="sector">

                <div class="sector__imagen sector__imagen--escuelas"></div>

                <div class="sector__contenido">

                    <img
                        src="${w}"
                        alt="Escuelas"
                        class="sector__icono"
                    >

                    <h3>Escuelas e Instituciones</h3>

                </div>

            </article>

        </div>

    </section>

    `}function E(){return`

    <section class="experiencia" id="experiencia">

        <div class="experiencia__intro">

            <span class="experiencia__tag">
                EXPERIENCIA QUE GENERA CONFIANZA
            </span>

            <h2>
                Empresas que han confiado
en nuestras     soluciones.
            </h2>

            <p>
                Participamos en aplicaciones donde la eficiencia,
                durabilidad<br>
                y el rendimiento térmico son factores críticos.
            </p>

        </div>


        <div class="experiencia__carrusel">

            <div class="experiencia__track">

                <!-- LOGOS -->

                <div class="experiencia__cliente">
                    <img src="/logo/amstar.webp" alt="Amstar">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/cingular.webp" alt="Cingular">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/costco.webp" alt="Costco">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/dollar-general.webp" alt="Dollar General">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/extraspace.webp" alt="Extra Space Storage">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/food-city.webp" alt="Food City">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/food-lion.webp" alt="Food Lion">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/golden-corral.webp" alt="Golden Corral">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/goodwill.webp" alt="Goodwill">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/gordon.webp" alt="Gordon Food Service">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/hardees.webp" alt="Hardee's">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/home-depot.webp" alt="Home Depot">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/king-soopers.webp" alt="King Soopers">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/kroger.webp" alt="Kroger">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/lowes.webp" alt="Lowe's">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/old-navy.webp" alt="Old Navy">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/oreilly.webp" alt="O'Reilly">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/petco.webp" alt="Petco">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/petsuits.webp" alt="PetSuites">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/rack-room.webp" alt="Rack Room Shoes">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/tj-maxx.webp" alt="TJ Maxx">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/tsc.webp" alt="Tractor Supply">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/verizon.webp" alt="Verizon">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/waffle-house.webp" alt="Waffle House">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/walgreens.webp" alt="Walgreens">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/walmart.webp" alt="Walmart">
                </div>

                <!-- DUPLICADOS PARA LOOP INFINITO -->

                <div class="experiencia__cliente">
                    <img src="/logo/amstar.webp" alt="Amstar">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/cingular.webp" alt="Cingular">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/costco.webp" alt="Costco">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/dollar-general.webp" alt="Dollar General">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/extraspace.webp" alt="Extra Space Storage">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/food-city.webp" alt="Food City">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/food-lion.webp" alt="Food Lion">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/golden-corral.webp" alt="Golden Corral">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/goodwill.webp" alt="Goodwill">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/gordon.webp" alt="Gordon Food Service">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/hardees.webp" alt="Hardee's">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/home-depot.webp" alt="Home Depot">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/king-soopers.webp" alt="King Soopers">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/kroger.webp" alt="Kroger">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/lowes.webp" alt="Lowe's">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/old-navy.webp" alt="Old Navy">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/oreilly.webp" alt="O'Reilly">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/petco.webp" alt="Petco">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/petsuits.webp" alt="PetSuites">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/rack-room.webp" alt="Rack Room Shoes">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/tj-maxx.webp" alt="TJ Maxx">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/tsc.webp" alt="Tractor Supply">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/verizon.webp" alt="Verizon">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/waffle-house.webp" alt="Waffle House">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/walgreens.webp" alt="Walgreens">
                </div>

                <div class="experiencia__cliente">
                    <img src="/logo/walmart.webp" alt="Walmart">
                </div>

            </div>

        </div>

    </section>

    `}function D(){return`

    <section class="presencia" id="presencia">

        <div class="presencia__contenedor">

            <div class="presencia__grid">

                <div class="presencia__contenido">

                    <span class="presencia__tag">
                        PRESENCIA INTERNACIONAL
                    </span>

                    <h2>
                        Cobertura en Estados Unidos,
                        México y Centroamérica.
                    </h2>

                    <p>
                        Más de 15 años de experiencia y más de 200 proyectos
                        respaldan nuestras soluciones de aislamiento térmico
                        y acústico en diversos sectores de la construcción.
                    </p>

                    <div class="presencia__stats">

                        <div class="stat">

                            <h3
                                class="presencia__numero"
                                data-target="15"
                            >
                                +00
                            </h3>

                            <span>
                                Años de experiencia
                            </span>

                        </div>

                        <div class="stat">

                            <h3
                                class="presencia__numero"
                                data-target="200"
                            >
                                +00
                            </h3>

                            <span>
                                Proyectos atendidos
                            </span>

                        </div>

                        <div class="stat">

                            <h3
                                class="presencia__numero"
                                data-target="7"
                            >
                                +00
                            </h3>

                            <span>
                                Sectores especializados
                            </span>

                        </div>

                    </div>

                </div>

                <div class="presencia__mapa">

                    <img
                        src="/src/assets/sectores/cobertura.webp"
                        alt="Cobertura Bio Foam"
                    >

                </div>

            </div>

        </div>

    </section>

    `}function O(){let e=document.querySelectorAll(`.presencia__numero`);if(!e.length)return;let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(!e.isIntersecting)return;let n=e.target;k(n,Number(n.dataset.target)),t.unobserve(n)})},{threshold:.5});e.forEach(e=>{t.observe(e)})}function k(e,t){let n=performance.now();function r(i){let a=Math.min((i-n)/1600,1);if(a<.7)e.textContent=`+${Math.floor(Math.random()*Math.max(t*1.5,20))}`;else{let n=1-(1-(a-.7)/.3)**4;e.textContent=`+${Math.floor(t*n)}`}a<1?requestAnimationFrame(r):e.textContent=`+${t}`}requestAnimationFrame(r)}var A=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-flask-conical'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M14%202v6a2%202%200%200%200%20.245.96l5.51%2010.08A2%202%200%200%201%2018%2022H6a2%202%200%200%201-1.755-2.96l5.51-10.08A2%202%200%200%200%2010%208V2'%20/%3e%3cpath%20d='M6.453%2015h11.094'%20/%3e%3cpath%20d='M8.5%202h7'%20/%3e%3c/svg%3e`,j=`data:image/svg+xml,%3c!--%20@license%20lucide-static%20v1.33.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-play-circle'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M9%209.003a1%201%200%200%201%201.517-.859l4.997%202.997a1%201%200%200%201%200%201.718l-4.997%202.997A1%201%200%200%201%209%2014.996z'%20/%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3c/svg%3e`;function M(){return`
    <section id="recursos" class="recursos">

      <div class="recursos-container">

        <span class="recursos-tag">
          RECURSOS TÉCNICOS
        </span>

        <h2>
          Información técnica para<br>
          respaldar cada proyecto.
        </h2>

        <p>
          Accede a documentación y recursos que respaldan
          el desempeño de nuestras soluciones de aislamiento.
        </p>

        <div class="recursos-grid">

          <!-- CERTIFICACIONES -->

          <div class="recurso-card">

            <img
              src="${r}"
              alt="Certificaciones"
              class="recurso-icon"
            >

            <h3>Certificaciones</h3>

            <p>
              Conoce las certificaciones y documentación
              que respaldan nuestros sistemas.
            </p>

            <a
               href="/pdf/CERTIFICACIÓN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="recurso-btn"
            >
              VER CERTIFICACIONES
            </a>

          </div>

          <!-- SDS -->

          <div class="recurso-card">

            <img
              src="${A}"
              alt="SDS"
              class="recurso-icon"
            >

            <h3>Hojas de Datos de Seguridad (SDS)</h3>

            <p>
              Accede a información técnica y documentación
              de respaldo para nuestros sistemas de aislamiento.
            </p>

            <a
              href="/pdf/sds.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="recurso-btn"
            >
              DESCARGAR PDF
            </a>

          </div>

          <!-- VIDEO DE INSTALACIÓN -->

          <div class="recurso-card">

            <img
              src="${j}"
              alt="Video de Instalación"
              class="recurso-icon"
            >

            <h3>Video de Instalación</h3>

            <p>
              Conoce el proceso de instalación paso a paso
              de nuestras soluciones de aislamiento.
            </p>

            <a
              href="https://drive.google.com/drive/folders/1t35xUMG9oR-JIITV049V63wIDoS0z__q"
              target="_blank"
              rel="noopener noreferrer"
              class="recurso-btn"
            >
              VER PORTAFOLIO
            </a>

          </div>

        </div>

      </div>

    </section>
  `}function N(){return`

    <section id="contacto" class="contacto">

        <div class="contacto__header">

            <span>CONTACTO</span>

            <h2>
                Hablemos de tu proyecto
            </h2>

            <p>
                Cuéntanos qué necesitas y nuestro equipo te ayudará a encontrar
                la mejor solución de aislamiento para tu espacio.
            </p>

        </div>

        <form class="contacto__formulario">

            <div class="contacto__grid">

                <div class="campo">

                    <label>Nombre</label>

                    <input
                        type="text"
                        placeholder="Tu nombre"
                    >

                </div>

                <div class="campo">

                    <label>Teléfono</label>

                    <input
                        type="tel"
                        placeholder="Tu teléfono"
                    >

                </div>

                <div class="campo">

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        placeholder="correo@ejemplo.com"
                    >

                </div>

                <div class="campo">

                    <label>Tipo de proyecto</label>

                    <select>

                        <option>Selecciona una opción</option>
                        <option>Casa habitación</option>
                        <option>Comercial</option>
                        <option>Nave industrial</option>
                        <option>Hospital</option>
                        <option>Oficina</option>
                        <option>Otro</option>

                    </select>

                </div>

            </div>

            <div class="campo campo--full">

                <label>
                    Cuéntanos sobre tu proyecto
                </label>

                <textarea
                    placeholder="Ejemplo: Mi casa se calienta demasiado durante las tardes y quiero conocer opciones para mejorar el confort térmico."
                ></textarea>

            </div>

            <button
                type="submit"
                class="contacto__boton"
            >
                ENVIAR SOLICITUD
            </button>

            <p class="contacto__privacidad">

                Al enviar este formulario aceptas nuestra
                <a href="/politicas.html" target="_blank">
                    Política de Privacidad
                </a>

            </p>

        </form>

    </section>

    `}function P(){return`
    <footer class="footer">

      <div class="footer__container">

        <div class="footer__logo-box">
          <img
            src="/logo/logo-biofoam-blancoo.webp"
            alt="Bio Foam"
            class="footer__logo"
          >
        </div>

        <div class="footer__item">
          <h4>Contacto</h4>

          <a href="tel:+526622250332">
            +52 662 225 0332
          </a>

          <a href="mailto:ventas@corefoam.mx">
            ventas@corefoam.mx
          </a>
        </div>

        <div class="footer__item">
          <h4>Ubicación</h4>
          <span>Monterrey, Nuevo León</span>
        </div>

        <div class="footer__item">
          <h4>Horario</h4>
          <span>Lunes - Viernes</span>
        </div>

        <div class="footer__social">

          <a
            href="https://instagram.com/biofoam.aislantes_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://wa.me/526622250332"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>

        </div>

      </div>

      <div class="footer__bottom">
        <a href="/politicas.html">
          Política de Privacidad
        </a>
      </div>

    </footer>
  `}document.querySelector(`#app`).innerHTML=`

    ${e()}

    ${a()}

    ${u()}

    ${p()}

    ${_()}

    ${T()}

    ${E()}

    ${D()}

    ${M()}

    ${N()}

    ${P()}

`,t(),O(),window.addEventListener(`scroll`,()=>{let e=document.getElementById(`header`);e&&(window.scrollY>80?e.classList.add(`scrolled`):e.classList.remove(`scrolled`))});