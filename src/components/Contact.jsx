export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 4rem',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', marginBottom: '5rem' }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: 'var(--text)',
            letterSpacing: '3px',
            lineHeight: 1
          }}>
            Contact
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginBottom: '12px' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>연락처</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <p style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--text)',
              letterSpacing: '2px',
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              새로운 기회를<br />기다립니다
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.9 }}>
              백엔드 개발자로서 새로운 팀과 함께<br />
              성장할 기회를 찾고 있습니다.<br />
              언제든지 연락해주세요!
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}>
            {[
              { label: 'nuj27301@gmail.com', href: 'mailto:nuj27301@gmail.com' },
              { label: '010-2339-7016', href: 'tel:01023397016' },
              { label: 'github.com/nuj27301', href: 'https://github.com/nuj27301', target: '_blank' },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.target || '_self'} rel="noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: i === 0 ? 'var(--text)' : 'var(--muted)',
                fontSize: '0.9rem',
                padding: '1.2rem 0',
                borderBottom: '1px solid var(--border)',
                transition: 'all 0.2s',
                letterSpacing: '1px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'white'
                e.currentTarget.style.paddingLeft = '1rem'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = i === 0 ? 'var(--text)' : 'var(--muted)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.paddingLeft = '0'
              }}
              >
                <span>{item.label}</span>
                <span>→</span>
              </a>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--border)', fontSize: '0.75rem', marginTop: '5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          © 2026 박용준. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 4rem 1.5rem !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}