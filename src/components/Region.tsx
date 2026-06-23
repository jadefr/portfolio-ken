import { cities } from '../data/content'

export function Region() {
  return (
    <section className="section section--alt" id="regiao">
      <div className="container region">
        <div className="region__map" aria-hidden="true">
          <div className="region__pin region__pin--1" />
          <div className="region__pin region__pin--2" />
          <div className="region__pin region__pin--3" />
          <div className="region__pin region__pin--4" />
        </div>
        <div>
          <h2 className="section__title">Onde atendo</h2>
          <p className="section__intro">
            Atendimento domiciliar e consultas na região da Zona da Mata de Minas Gerais:
          </p>
          <ul className="region__cities">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <p className="region__note">
            Entre em contato para confirmar disponibilidade, deslocamento e modalidade
            de atendimento (domiciliar ou combinada com instituição parceira).
          </p>
        </div>
      </div>
    </section>
  )
}
