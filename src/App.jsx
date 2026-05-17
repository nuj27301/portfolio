import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        padding: '1.2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.2rem',
          color: 'var(--text)',
          letterSpacing: '3px'
        }}>
          박용준
        </span>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {[
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ].map(item => (
            <a key={item.label} href={item.href} style={{
              fontSize: '0.75rem',
              color: 'var(--muted)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}