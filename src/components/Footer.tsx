export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="#topo" className="footer__wide-link" aria-label="Voltar ao topo">
        <img
          src="/KV_escritovermelho.png"
          alt="Kennedy Vieira"
          className="footer__wide-image"
        />
      </a>

      <div className="container footer__inner">
        <div className="footer__content">
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {year} Kennedy Vieira. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
