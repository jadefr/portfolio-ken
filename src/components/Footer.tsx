export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Kennedy Vieira. Todos os direitos reservados.</p>
        <a href="#topo">Voltar ao topo</a>
      </div>
    </footer>
  )
}
