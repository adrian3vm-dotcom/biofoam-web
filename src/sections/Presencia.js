export function Presencia() {

    return `

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

    `;

}


/* ================================= */
/* ANIMACIÓN DE CONTADORES */
/* ================================= */

export function iniciarContadoresPresencia() {

    const numeros = document.querySelectorAll(
        ".presencia__numero"
    );

    if (!numeros.length) return;

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const elemento = entry.target;

                const objetivo = Number(
                    elemento.dataset.target
                );

                animarNumeroPresencia(
                    elemento,
                    objetivo
                );

                observer.unobserve(elemento);

            });

        },
        {
            threshold: 0.5
        }

    );

    numeros.forEach((numero) => {

        observer.observe(numero);

    });

}


/* ================================= */
/* CONTADOR */
/* ================================= */

function animarNumeroPresencia(
    elemento,
    objetivo
) {

    const duracion = 1600;

    const inicio = performance.now();

    function actualizar(tiempo) {

        const progreso =
            Math.min(
                (tiempo - inicio) / duracion,
                1
            );

        /*
         * Durante el primer tramo aparecen
         * números rápidos y aleatorios.
         * Después aterriza en el número final.
         */

        if (progreso < 0.7) {

            const aleatorio =
                Math.floor(
                    Math.random() *
                    Math.max(objetivo * 1.5, 20)
                );

            elemento.textContent =
                `+${aleatorio}`;

        } else {

            const progresoFinal =
                (progreso - 0.7) / 0.3;

            const suavizado =
                1 -
                Math.pow(
                    1 - progresoFinal,
                    4
                );

            const actual =
                Math.floor(
                    objetivo * suavizado
                );

            elemento.textContent =
                `+${actual}`;

        }

        if (progreso < 1) {

            requestAnimationFrame(actualizar);

        } else {

            elemento.textContent =
                `+${objetivo}`;

        }

    }

    requestAnimationFrame(actualizar);

}