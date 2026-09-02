import mapIcon from "../assets/iconos/map.svg";
import shieldIcon from "../assets/iconos/shield-check.svg";
import buildingIcon from "../assets/iconos/building-2.svg";

export function Hero() {

    return `

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
                    src="${mapIcon}"
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
                    src="${shieldIcon}"
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
                    src="${buildingIcon}"
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

    `;

}