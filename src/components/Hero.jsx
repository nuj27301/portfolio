export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* 배경 큰 텍스트 */}
      <div style={{
        position: 'absolute',
        right: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(150px, 20vw, 300px)',
        color: 'transparent',
        WebkitTextStroke: '1px #222222',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1
      }}>
        DEV
      </div>

      <div style={{ maxWidth: '700px', animation: 'fadeUp 0.8s ease' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.8rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '1.5rem'
        }}>
          Backend Developer
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          color: 'var(--text)',
          lineHeight: 0.9,
          marginBottom: '2rem',
          letterSpacing: '2px'
        }}>
          박용준
        </h1>

        <div style={{
          width: '40px',
          height: '1px',
          background: 'var(--muted)',
          marginBottom: '1.5rem'
        }} />

        <p style={{
          fontSize: '1rem',
          color: 'var(--muted)',
          maxWidth: '440px',
          lineHeight: 1.9,
          marginBottom: '3rem'
        }}>
          Java / Spring Boot 기반 백엔드 개발자입니다.
          설계부터 배포까지 직접 경험하며 문제를 해결합니다.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            background: 'white',
            color: 'black',
            padding: '0.9rem 2.5rem',
            borderRadius: '0',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'inline-block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; e.target.style.outline = '1px solid white' }}
          onMouseLeave={e => { e.target.style.background = 'white'; e.target.style.color = 'black'; e.target.style.outline = 'none' }}
          >
            프로젝트 보기
          </a>
          <a href="https://github.com/nuj27301" target="_blank" rel="noreferrer" style={{
            background: 'transparent',
            color: 'var(--muted)',
            padding: '0.9rem 2.5rem',
            borderRadius: '0',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'inline-block',
            outline: '1px solid #333',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.target.style.color = 'white'; e.target.style.outline = '1px solid white' }}
          onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.outline = '1px solid #333' }}
          >
            GitHub
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}