import React from "react";
import "./Footer.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          En iyi tatil fırsatlarımızı almak için Macera bültenine katılın
        </p>
        <p className="footer-subscription-text">
          İstediğiniz zaman abonelikten çıkabilirsiniz.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Email Adresiniz..."
            />
            <Button buttonStyle="btn--outline">Abone Ol</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Hakkımızda</h2>
            <Link to="/sign-up">Nasıl çalışır</Link>
            <Link to="/">rReferanslar</Link>
            <Link to="/">Kariyer</Link>
            <Link to="/">Yatırımcılar</Link>
            <Link to="/">Kullanım Şartları</Link>
          </div>
          <div class="footer-link-items">
            <h2>Bizimle İletişime Geçin</h2>
            <Link to="/">İletişim</Link>
            <Link to="/">Destek</Link>
            <Link to="/">Konumlar</Link>
            <Link to="/">Sponsorluklar</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videolar</h2>
            <Link to="/">Video Gönder</Link>
            <Link to="/">Ajans</Link>
          </div>
          <div class="footer-link-items">
            <h2>Sosyal Medya</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              GZGN
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">
            GZGN © {new Date().getFullYear().toString()}
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
