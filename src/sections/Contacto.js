import "../styles/contacto.css";

export function Contacto() {

    return `

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

    `;

}