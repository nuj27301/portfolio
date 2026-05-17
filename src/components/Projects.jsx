const projects = [
  {
    title: '쇼핑몰 프로젝트',
    type: '팀 프로젝트',
    period: '2025',
    description: '의류 쇼핑몰 사용자 & 관리자 통합 웹 서비스. 카카오 로그인, 카카오페이 결제, AI 챗봇 기능을 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'MyBatis', 'MySQL', 'Railway'],
    demo: 'https://coreflowpersonal-production.up.railway.app',
    github: 'https://github.com/nuj27301/coreflow_personal',
    number: '01'
  },
  {
    title: '실시간 채팅 서비스',
    type: '개인 프로젝트',
    period: '2025',
    description: 'WebSocket + STOMP 기반 실시간 채팅 서비스. Redis 캐싱으로 성능을 개선하고 읽음/안읽음 처리를 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'WebSocket', 'Redis', 'Railway'],
    demo: 'https://chat-service-production-eea8.up.railway.app',
    github: 'https://github.com/nuj27301/chat-service',
    number: '02'
  },
  {
    title: '일정 관리 서비스',
    type: '개인 프로젝트',
    period: '2025',
    description: '일정 CRUD 및 팀원 공유 기능이 있는 일정 관리 서비스. 이메일 알림, 권한 관리, 캘린더 뷰를 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'MariaDB', 'Cloudtype'],
    demo: 'https://port-0-schedule-service-mp6lwg83f82d7f03.sel3.cloudtype.app',
    github: 'https://github.com/nuj27301/schedule-service',
    number: '03'
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '8rem 4rem',
      background: 'var(--bg)',
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
            Projects
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
            프로젝트
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, i) => (
            <div key={i} style={{
              borderBottom: '1px solid var(--border)',
              padding: '2.5rem 0',
              transition: 'all 0.3s',
              cursor: 'default'
            }}
            onMouseEnter={e => e.currentTarget.style.paddingLeft = '1rem'}
            onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1rem',
                    color: 'var(--muted)',
                    letterSpacing: '2px'
                  }}>
                    {project.number}
                  </span>
                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    color: 'var(--text)',
                    letterSpacing: '2px'
                  }}>
                    {project.title}
                  </h3>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--muted)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  {project.type} · {project.period}
                </span>
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
                marginBottom: '1.2rem',
                maxWidth: '600px'
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.skills.map((skill, j) => (
                    <span key={j} style={{
                      border: '1px solid var(--border)',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.75rem',
                      color: 'var(--muted)',
                      letterSpacing: '1px'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.demo} target="_blank" rel="noreferrer" style={{
                    color: 'white',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    borderBottom: '1px solid white',
                    paddingBottom: '2px',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--muted)'}
                  onMouseLeave={e => e.target.style.color = 'white'}
                  >
                    Live →
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    color: 'var(--muted)',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    borderBottom: '1px solid var(--muted)',
                    paddingBottom: '2px',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}