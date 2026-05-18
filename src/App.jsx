import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

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
          YJ Portfolio
        </span>

        {/* 데스크탑 메뉴 */}
        <div style={{ display: 'flex', gap: '2.5rem' }} className="desktop-menu">
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

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {[
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ].map(item => (
            <a key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem',
                color: 'var(--muted)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}