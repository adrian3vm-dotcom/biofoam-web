import coreImg from "../assets/productos/core.webp";
import isoImg from "../assets/productos/iso.webp";

export function Soluciones() {

    return `

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
                        src="${coreImg}"
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
                        src="${isoImg}"
                        alt="Insul Smart"
                    >

                </div>

            </article>

        </div>

    </section>

    `;

}