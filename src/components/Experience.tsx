import { timeline } from '../data/content'

export function Experience() {
  return (
    <section className="section section--alt" id="experiencia">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Experiência</h2>
          <p className="section__intro section__intro--center">
            Formação prática em cenários de alta demanda e acompanhamento de longo prazo em casa.
          </p>
        </header>
        <div className="timeline">
          {timeline.map((item) => (
            <article
              key={item.title}
              className={`timeline__item${item.highlight ? ' timeline__item--highlight' : ''}`}
            >
              <div className="timeline__marker" />
              <div className="timeline__body">
                <span className="timeline__period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
