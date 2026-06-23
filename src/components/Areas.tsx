import { areas } from '../data/content'

export function Areas(): JSX.Element {
  return (
    <section className="section" id="atuacao">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Áreas de atuação</h2>
          <p className="section__intro section__intro--center">
            Intervenções baseadas em evidência para o sistema cardiorrespiratório.
          </p>
        </header>
        <div className="cards">
          {areas.map((area) => (
            <article key={area.title} className="card">
              <div className="card__icon" aria-hidden="true">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
