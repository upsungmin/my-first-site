import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main 
      className="min-h-screen relative" 
      style={{
        // 🚨 경로와 파일 이름이 정확히 일치해야 합니다.
        backgroundImage: `url('/nyc-night-skyline.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 1. 반투명한 검은색 오버레이 (가독성 확보를 위해 필수) */} {/* <-- 이 부분이 중요합니다 */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />
      
      {/* 2. 기존 내용들은 오버레이 위에 z-10으로 띄웁니다. */} {/* <-- 이 부분도 중요합니다 */}
      {/* Header, Hero 등에 필요하다면 className="relative z-10"을 추가해야 합니다. */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
