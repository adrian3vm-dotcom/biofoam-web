import drillIcon from "../assets/iconos/drill.svg";
import buildingIcon from "../assets/iconos/building-2.svg";
import chartIcon from "../assets/iconos/chart-column.svg";
import leafIcon from "../assets/iconos/leaf.svg";
import shieldIcon from "../assets/iconos/shield-check.svg";

export function PorqueBiofoam() {

    return `

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
                    src="${drillIcon}"
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
                    src="${buildingIcon}"
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
                    src="${chartIcon}"
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
                    src="${leafIcon}"
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
                    src="${shieldIcon}"
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

    `

}