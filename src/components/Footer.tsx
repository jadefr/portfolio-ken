export function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__content">
          <img
            src="/KV_escritovermelho.png"
            alt="Kennedy Vieira"
            className="footer__logo"
            width={40}
            height={40}
          />
          <div>
            <p>&copy; {year} Kennedy Vieira. Todos os direitos reservados.</p>
            <a href="#topo">Voltar ao topo</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
