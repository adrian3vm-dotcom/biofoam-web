import sunIcon from "../assets/iconos/sun-medium.svg";
import volumeIcon from "../assets/iconos/volume-2.svg";
import zapIcon from "../assets/iconos/zap.svg";
import wallIcon from "../assets/iconos/brick-wall.svg";

export function Problemas() {

    return `

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
                    src="${sunIcon}"
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
                    src="${volumeIcon}"
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
                    src="${zapIcon}"
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
                    src="${wallIcon}"
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

    `

}