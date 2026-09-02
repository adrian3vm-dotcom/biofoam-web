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

        <form
            class="contacto__formulario"
            action="https://formsubmit.co/ventas@corefoam.mx"
            method="POST"
        >

            <input
                type="hidden"
                name="_subject"
                value="Nueva solicitud desde BIO FOAM"
            >

            <input
                type="hidden"
                name="_captcha"
                value="false"
            >

            <div class="contacto__grid">

                <div class="campo">

                    <label>Nombre</label>

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        required
                    >

                </div>

                <div class="campo">

                    <label>Teléfono</label>

                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Tu teléfono"
                        required
                    >

                </div>

                <div class="campo">

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="correo@ejemplo.com"
                        required
                    >

                </div>

                <div class="campo">

                    <label>Tipo de proyecto</label>

                    <select
                        name="tipo_proyecto"
                        required
                    >

                        <option value="">
                            Selecciona una opción
                        </option>

                        <option>
                            Casa habitación
                        </option>

                        <option>
                            Comercial
                        </option>

                        <option>
                            Nave industrial
                        </option>

                        <option>
                            Hospital
                        </option>

                        <option>
                            Oficina
                        </option>

                        <option>
                            Otro
                        </option>

                    </select>

                </div>

            </div>

            <div class="campo campo--full">

                <label>
                    Cuéntanos sobre tu proyecto
                </label>

                <textarea
                    name="mensaje"
                    placeholder="Ejemplo: Mi casa se calienta demasiado durante las tardes y quiero conocer opciones para mejorar el confort térmico."
                    required
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

                <a
                    href="/politicas.html"
                    target="_blank"
                >
                    Política de Privacidad
                </a>

            </p>

        </form>

    </section>

    `;

}