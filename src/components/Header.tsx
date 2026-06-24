import { navLinks } from '../data/content'
import { useNavMenu } from '../hooks/useNavMenu'
import { useEffect } from 'react'

export function Header() {
  const { open, toggle, close } = useNavMenu()

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // if click is inside the nav, the toggle, or the logo, ignore
      if (
        target.closest('#menu-principal') ||
        target.closest('.nav-toggle') ||
        target.closest('.logo')
      ) {
        return
      }
      close()
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open, close])

  return (
    <header className={`header${open ? ' header--menu-open' : ''}`} id="topo">
      <div className="header__bar">
        <div className="header__inner">
          <a className="logo" href="#topo" onClick={close}>
            <img
              src="/kv.png"
              alt="Kennedy Vieira - Fisioterapia"
              className="logo__image"
            />
          </a>
          <button
            className={`nav-toggle${open ? ' nav-toggle--open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={toggle}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </span>
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Fechar menu"
          onClick={close}
        />
      )}

      <nav
        className={`nav${open ? ' nav--open' : ''}`}
        id="menu-principal"
        aria-label="Principal"
        aria-hidden={!open}
      >
        <ul className="nav__list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={close}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav__cta" href="#contato" onClick={close}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// Close menu when clicking outside the nav or the toggle
// (keeps behavior intuitive on mobile where backdrop might not cover everything)
// (no additional exports)
