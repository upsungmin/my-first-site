import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main 
      // 🚨 style 속성을 완전히 제거했습니다.
      className="min-h-screen relative" 
    >
      {/* 🚨 1. 반투명한 검은색 오버레이 DIV를 완전히 제거했습니다. */}
      
      {/* 2. 기존 내용들은 z-10 조정 없이 기본 플로우대로 렌더링합니다. */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
