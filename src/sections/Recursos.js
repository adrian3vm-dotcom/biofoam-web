import "../styles/recursos.css";

import shieldIcon from "../assets/iconos/shield-check.svg";
import flaskIcon from "../assets/iconos/flask-conical.svg";
import playIcon from "../assets/iconos/play-circle.svg";

export function Recursos() {
  return `
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
              src="${shieldIcon}"
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
              src="${flaskIcon}"
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
              src="${playIcon}"
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
  `;
}