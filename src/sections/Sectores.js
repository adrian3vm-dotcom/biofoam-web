import hospitalIcon from "../assets/iconos/cross.svg";
import industriaIcon from "../assets/iconos/factory.svg";
import navesIcon from "../assets/iconos/warehouse.svg";
import residencialIcon from "../assets/iconos/house.svg";
import comercialIcon from "../assets/iconos/store.svg";
import hotelIcon from "../assets/iconos/bed.svg";
import escuelaIcon from "../assets/iconos/graduation-cap.svg";

export function Sectores() {

    return `

    <section id="sectores" class="sectores">

        <div class="sectores__header">

            <span>SOLUCIONES PARA DIVERSOS SECTORES</span>

        </div>

        <div class="sectores__grid">

            <article class="sector">

                <div class="sector__imagen sector__imagen--hospital"></div>

                <div class="sector__contenido">

                    <img
                        src="${hospitalIcon}"
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
                        src="${industriaIcon}"
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
                        src="${navesIcon}"
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
                        src="${residencialIcon}"
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
                        src="${comercialIcon}"
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
                        src="${hotelIcon}"
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
                        src="${escuelaIcon}"
                        alt="Escuelas"
                        class="sector__icono"
                    >

                    <h3>Escuelas e Instituciones</h3>

                </div>

            </article>

        </div>

    </section>

    `

}