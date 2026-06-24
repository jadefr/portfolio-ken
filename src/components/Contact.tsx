import { contact } from '../data/content'

export function Contact() {
  return (
    <section className="section cta" id="contato">
      <div className="container cta__inner">
        <div>
          <h2 className="section__title section__title--light">Vamos conversar?</h2>
          <p className="cta__text">
            Agende uma avaliação ou tire dúvidas sobre fisioterapia cardiovascular e
            pulmonar. Respondo o mais breve possível.
          </p>
        </div>
        <div className="contact">
          <a
            className="contact__item"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__label">WhatsApp</span>
            <span className="contact__value">{contact.whatsappDisplay}</span>
          </a>
          <a className="contact__item" href={contact.email}>
            <span className="contact__label">E-mail</span>
            <span className="contact__value">{contact.emailDisplay}</span>
          </a>
          <a
            className="contact__item"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__label">Instagram</span>
            <span className="contact__value">{contact.instagramDisplay}</span>
          </a>
          <p className="contact__crefito">
            Fisioterapeuta — CREFITO{' '}
            <span className="placeholder">{contact.crefito}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
