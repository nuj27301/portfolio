import { useState } from 'react'

const projects = [
  {
    title: '쇼핑몰 프로젝트',
    type: '팀 프로젝트',
    period: '2025',
    description: '의류 쇼핑몰 사용자 & 관리자 통합 웹 서비스. 카카오 로그인, 카카오페이 결제, AI 챗봇 기능을 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'MyBatis', 'MySQL', 'Railway'],
    demo: 'https://coreflowpersonal-production.up.railway.app',
    github: 'https://github.com/nuj27301/coreflow_personal',
    number: '01',
    details: {
      overview: `프로젝트명: COREFLOWSHOP

    사용자 친화적인 쇼핑 경험과 관리자 중심 운영 편의성을 목표로 한 웹 쇼핑몰 프로젝트입니다. 일반 사용자는 상품 조회, 주문, 결제, 리뷰 작성 등 쇼핑 기능을 이용할 수 있으며, 관리자는 상품·회원·주문·리뷰·통계 기능을 통해 서비스를 효율적으로 관리할 수 있도록 구현했습니다.

    주요 목적
    1. 사용자와 관리자 모두 쉽게 이용 가능한 통합 관리 시스템 구현
    2. 안정적인 주문/결제 트랜잭션 처리 및 데이터 무결성 확보
    3. 서버 로직과 프론트엔드 UI 분리

    시스템 구성
    본 프로젝트는 사용자와 관리자가 웹을 통해 접근하는 Spring Boot 기반 서버 중심 구조로 설계되었습니다.
    - 사용자와 관리자는 각자의 브라우저를 통해 접근합니다.
    - 서버는 REST API를 통해 요청을 처리하며, MyBatis와 MySQL 기반 데이터베이스에 데이터를 저장·조회합니다.
    - Thymeleaf 기반 화면에서 서버 데이터와 바인딩되며, 카카오 로그인/카카오페이, Gemini 챗봇 등 외부 API와 연동됩니다.
    - 서비스는 Railway 환경에 배포되어 실제 운영 환경에서 동작합니다.`,
      features: [
        '카카오 소셜 로그인 - OAuth2.0 기반 카카오 계정 간편 로그인 구현',
        '카카오페이 결제 - 결제 준비/승인/취소 API 연동 및 주문 상태 관리',
        'Gemini AI 챗봇 - Google Gemini API 연동으로 FAQ 자동 응답 구현',
        '이메일 인증 - 회원가입 시 이메일 인증 코드 발송 및 검증',
        '결제 완료 메일 발송 - 주문 완료 시 JavaMailSender로 영수증 이메일 발송',
        '상품 관리 - 카테고리별 상품 등록/수정/삭제, 이미지 업로드',
        '장바구니 - 상품 담기/수량 변경/삭제 기능',
        '주문 관리 - 주문서 작성, 배송 상태 관리',
        '리뷰 시스템 - 구매 상품 리뷰 작성 및 관리자 답변 기능',
        '관리자 대시보드 - 날짜별 매출 통계 차트, 회원/상품/주문/리뷰 통합 관리',
        '다음 우편번호 API - 주소 검색 연동',
        '자동 로그인 - 쿠키 기반 자동 로그인 구현',
      ],
      trouble: [
        {
          problem: '카카오페이 결제 후 중복 주문 생성',
          solution: '결제 완료 후 브라우저 뒤로가기 시 주문이 중복 생성되는 문제를 PRG 패턴(Post-Redirect-Get) 적용으로 해결'
        },
        {
          problem: '이미지 업로드 경로 문제',
          solution: '로컬 개발 환경의 절대경로가 배포 서버에서 동작하지 않아 환경변수로 업로드 경로를 분리하여 로컬/서버 환경 각각 적용'
        },
        {
          problem: '카카오 로그인 후 세션 충돌',
          solution: '카카오 로그인 시 기존 일반 로그인 세션과 충돌이 발생하여 세션 초기화 후 새 세션 발급으로 해결'
        },
        {
          problem: 'gitignore로 인한 배포 환경변수 문제',
          solution: '보안을 위해 application-private.properties를 gitignore에 추가했으나 Railway가 파일을 읽지 못해 Railway Variables에 환경변수를 직접 등록하여 해결'
        },
      ]
    },
  },
  {
    title: '실시간 채팅 서비스',
    type: '개인 프로젝트',
    period: '2026',
    description: 'WebSocket + STOMP 기반 실시간 채팅 서비스. Redis 캐싱으로 성능을 개선하고 읽음/안읽음 처리를 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'WebSocket', 'Redis', 'Railway'],
    demo: 'https://채팅서비스URL',
    github: 'https://github.com/nuj27301/chat-service',
    number: '02',
    details: {
      overview: `프로젝트명: CHAT SERVICE

    WebSocket과 STOMP 프로토콜을 기반으로 한 실시간 채팅 서비스입니다. 사용자는 채팅방을 직접 생성하고 입장하여 실시간으로 메시지를 주고받을 수 있으며, Redis 캐싱을 통해 DB 조회 부하를 줄이고 성능을 개선했습니다.

    주요 목적
    1. WebSocket 기반 실시간 양방향 통신 구현
    2. Redis 캐싱을 활용한 성능 최적화
    3. 읽음/안읽음 처리로 메시지 상태 관리

    시스템 구성
    본 프로젝트는 Spring Boot 기반 WebSocket 서버와 Redis를 활용한 메시지 캐싱 구조로 설계되었습니다.
    - 클라이언트는 SockJS와 STOMP를 통해 서버와 WebSocket 연결을 맺습니다.
    - 메시지는 MySQL DB에 영구 저장되며, Redis에 캐싱하여 빠른 조회가 가능합니다.
    - 채팅방 입장 시 Redis 캐시를 우선 조회하고 없을 경우 DB에서 가져와 캐싱합니다.
    - 서비스는 Railway 환경에 배포되어 실제 운영 환경에서 동작합니다.`,
      features: [
        '실시간 채팅 - WebSocket + STOMP 프로토콜 기반 실시간 메시지 송수신',
        '채팅방 생성/삭제 - 채팅방 목록 관리 및 삭제 기능',
        '메시지 삭제 - 개별 메시지 삭제 기능',
        '입장/퇴장 알림 - 사용자 입장 및 퇴장 시 시스템 메시지 표시',
        'Redis 메시지 캐싱 - 자주 조회되는 채팅 메시지를 Redis에 캐싱하여 DB 부하 감소',
        '읽음/안읽음 처리 - 채팅방 입장 시 안읽은 메시지 수 표시 및 읽음 처리',
        '닉네임 유지 - URL 파라미터로 닉네임을 채팅방까지 유지',
      ],
      trouble: [
        {
          problem: 'Redis 인증 오류',
          solution: 'Railway Redis는 비밀번호 인증이 필요한데 설정이 없어 연결 실패. REDIS_PASSWORD 환경변수를 Railway Variables에 등록하여 해결'
        },
        {
          problem: 'WebSocket Spring Security 충돌',
          solution: 'Spring Security가 WebSocket 엔드포인트를 막아 연결 실패. SecurityConfig에서 WebSocket 경로와 STOMP 엔드포인트를 permitAll로 설정하여 해결'
        },
        {
          problem: 'ChatMessageDto isRead null 역직렬화 오류',
          solution: 'primitive boolean 타입에 null이 들어와 역직렬화 실패. Boolean 래퍼 타입으로 변경하여 해결'
        },
        {
          problem: 'Redis 변수명 점(.) 포함으로 빌드 실패',
          solution: 'Railway BuildKit이 점(.)이 포함된 환경변수를 secret으로 인식하여 빌드 실패. 변수명을 언더바(_)로 변경하여 해결'
        },
      ]
    },
  },
  {
    title: '일정 관리 서비스',
    type: '개인 프로젝트',
    period: '2026',
    description: '일정 CRUD 및 팀원 공유 기능이 있는 일정 관리 서비스. 이메일 알림, 권한 관리, 캘린더 뷰를 구현했습니다.',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'MariaDB', 'Cloudtype'],
    demo: 'https://port-0-schedule-service-mp6lwg83f82d7f03.sel3.cloudtype.app',
    github: 'https://github.com/nuj27301/schedule-service',
    number: '03',
    details: {
      overview: `프로젝트명: SCHEDULE SERVICE

    일정 CRUD 및 팀원 공유 기능을 갖춘 일정 관리 서비스입니다. 사용자는 일정을 생성하고 다른 회원에게 공유할 수 있으며, 공유 시 이메일 알림이 발송됩니다. 권한 관리를 통해 보기/편집 권한을 구분하고, FullCalendar 기반 캘린더 뷰로 일정을 시각적으로 확인할 수 있습니다.

    주요 목적
    1. Spring Security 기반 회원 인증/인가 구현
    2. 일정 공유 및 권한 관리 시스템 구현
    3. 이메일 알림과 캘린더 뷰로 사용자 경험 향상

    시스템 구성
    본 프로젝트는 Spring Boot 기반 서버와 MariaDB를 활용한 구조로 설계되었습니다.
    - 사용자는 Spring Security 기반 로그인 후 일정을 관리합니다.
    - 일정 공유 시 Spring Mail을 통해 공유받은 사람에게 이메일 알림이 발송됩니다.
    - 공유된 일정은 VIEWER/EDITOR 권한으로 구분되어 편집 가능 여부가 결정됩니다.
    - FullCalendar 라이브러리를 활용해 월별/주별 캘린더 뷰를 제공합니다.
    - 서비스는 Cloudtype 환경에 MariaDB와 함께 배포되어 동작합니다.`,
      features: [
        '회원가입/로그인 - Spring Security 기반 인증, 이메일 중복 가입 방지, 로그인 실패 알림',
        '일정 CRUD - 일정 생성/수정/삭제/조회, 시작일/종료일/상태 관리',
        '일정 공유 - 이메일로 다른 회원에게 일정 공유 및 Spring Mail 알림 발송',
        '권한 관리 - VIEWER(보기)/EDITOR(편집) 권한 구분으로 공유받은 일정 제어',
        '공유받은 일정 표시 - 로그인한 사용자가 공유받은 일정 별도 표시',
        '캘린더 뷰 - FullCalendar 기반 월별/주별 일정 시각화',
        '일정 상태 관리 - TODO/IN_PROGRESS/DONE 상태 변경',
      ],
      trouble: [
        {
          problem: '일정 삭제 시 외래키 제약 오류',
          solution: '공유된 일정 삭제 시 schedule_shares 테이블의 외래키 제약으로 삭제 실패. 일정 삭제 전 연관된 공유 데이터를 먼저 삭제하도록 순서 변경'
        },
        {
          problem: '로컬/배포 DB 환경 차이',
          solution: '로컬은 MySQL, 배포는 MariaDB를 사용하여 드라이버와 Dialect가 달라 충돌 발생. application-local.properties와 application-prod.properties로 프로파일 분리하여 해결'
        },
        {
          problem: 'FullCalendar 종료일 하루 전까지만 표시',
          solution: 'FullCalendar의 end 날짜는 exclusive라 실제 종료일이 표시되지 않음. endDate에 plusDays(1)을 적용하여 종료일까지 정확하게 표시'
        },
      ]
    },
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

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
          }}>Projects</h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginBottom: '12px' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>프로젝트</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, i) => (
            <div key={i} style={{
              borderBottom: '1px solid var(--border)',
              padding: '2.5rem 0',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onClick={() => setSelected(project)}
            onMouseEnter={e => e.currentTarget.style.paddingLeft = '1rem'}
            onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: 'var(--muted)', letterSpacing: '2px' }}>{project.number}</span>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text)', letterSpacing: '2px' }}>{project.title}</h3>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>{project.type} · {project.period}</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.2rem', maxWidth: '600px' }}>{project.description}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.skills.map((skill, j) => (
                    <span key={j} style={{ border: '1px solid var(--border)', padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '1px' }}>{skill}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color: 'white', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500, borderBottom: '1px solid white', paddingBottom: '2px' }}>
                    Live →
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500, borderBottom: '1px solid var(--muted)', paddingBottom: '2px' }}>
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selected && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setSelected(null)}
        >
          <div style={{
            background: '#111',
            border: '1px solid var(--border)',
            borderRadius: '0',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '2.5rem',
            position: 'relative',
            animation: 'fadeUp 0.3s ease'
          }}
          onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--muted)',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}>✕</button>

            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {selected.type} · {selected.period}
            </span>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2.5rem',
              color: 'var(--text)',
              letterSpacing: '2px',
              margin: '0.5rem 0 1.5rem'
            }}>{selected.title}</h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', whiteSpace: 'pre-line' }}>
              {selected.details.overview}
            </p>

            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: 'white', letterSpacing: '2px', marginBottom: '1rem' }}>주요 기능</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {selected.details.features.map((f, i) => (
                <li key={i} style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'flex', gap: '0.7rem' }}>
                  <span style={{ color: 'white' }}>—</span> {f}
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: 'white', letterSpacing: '2px', marginBottom: '1rem' }}>트러블슈팅</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {selected.details.trouble.map((t, i) => (
                <div key={i} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'white', marginBottom: '0.3rem', fontWeight: 500 }}>🔴 {t.problem}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>✅ {t.solution}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
              {selected.skills.map((skill, j) => (
                <span key={j} style={{ border: '1px solid var(--border)', padding: '0.3rem 0.8rem', fontSize: '0.78rem', color: 'var(--muted)' }}>{skill}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selected.demo} target="_blank" rel="noreferrer" style={{
                background: 'white', color: 'black', padding: '0.7rem 1.5rem',
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase'
              }}>Live →</a>
              <a href={selected.github} target="_blank" rel="noreferrer" style={{
                background: 'transparent', color: 'var(--muted)', padding: '0.7rem 1.5rem',
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
                outline: '1px solid #333'
              }}>GitHub →</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          section { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}