import "../styles/footer.css";

export function Footer() {
  return `
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
  `;
}