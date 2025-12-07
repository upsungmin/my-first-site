import { defaultConfig } from "@/components/header"

// 메타데이터 헬퍼 함수
export function getMetadata() {
  // 기본값만 사용 (localStorage는 서버에서 불가능)
  const defaultInfo = {
    name: "당신의 이름",
    title: "프론트엔드 개발자",
    description: "창의적인 아이디어로 웹 경험을 디자인합니다.", // 직접 문자열로 변경
    profileImage: "",
    siteTitle: "나의 포트폴리오", // 직접 문자열로 변경
  }
  
  // 클라이언트 사이드에서만 localStorage 접근
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('hero-info')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return { ...defaultInfo, ...parsed }
      } catch {
        return defaultInfo
      }
    }
  }
  
  return defaultInfo
}