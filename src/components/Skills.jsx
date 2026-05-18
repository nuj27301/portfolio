const skills = [
  { category: 'Language', items: ['Java'] },
  { category: 'Framework', items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'MyBatis'] },
  { category: 'Database', items: ['MySQL', 'MariaDB', 'Redis'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Thymeleaf', 'React'] },
  { category: 'Deploy', items: ['Railway', 'Cloudtype', 'AWS EC2', 'GitHub Actions', 'Vercel'] },
  { category: 'Tool', items: ['Git', 'DBeaver', 'STS', 'VSCode'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '8rem 4rem',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: 'var(--text)',
            letterSpacing: '3px',
            lineHeight: 1
          }}>
            Skills
          </h2>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'var(--border)',
            marginBottom: '12px'
          }} />
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--muted)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            기술 스택
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {skills.map((skill, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: '2rem',
              padding: '1.5rem 0',
              borderBottom: '1px solid var(--border)',
              transition: 'background 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--muted)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                paddingTop: '2px'
              }}>
                {skill.category}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skill.items.map((item, j) => (
                  <span key={j} style={{
                    border: '1px solid var(--border)',
                    borderRadius: '0',
                    padding: '0.3rem 0.8rem',
                    fontSize: '0.85rem',
                    color: 'var(--text)',
                    fontWeight: 400,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = 'black'; e.target.style.borderColor = 'white' }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--border)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}