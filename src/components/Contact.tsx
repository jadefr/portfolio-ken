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
            <span className="contact__hint">Atualize com seu número em src/data/content.ts</span>
          </a>
          <a className="contact__item" href={contact.email}>
            <span className="contact__label">E-mail</span>
            <span className="contact__value">{contact.emailDisplay}</span>
            <span className="contact__hint">Atualize com seu e-mail em src/data/content.ts</span>
          </a>
          <p className="contact__crefito">
            Fisioterapeuta — CREFITO-X{' '}
            <span className="placeholder">{contact.crefito}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
