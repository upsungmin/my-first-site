"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { X, Plus, Upload, ChevronDown, LayoutGrid } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"
import ProjectModal from './project-modal'

export function Projects() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "Project",
    subtitle: "경매와 입지, 상권분석을 중심으로",
    initialDisplay: 6,
    loadMoreCount: 3,
    background: {"image":"","video":"","color":"","opacity":0.1},
    projects: [{"image":"/uploads/project-0-1765091260134.png","video":"","title":"상업지구 물건 경매 투자 분석","description":"광교–용인 사이 핵심 상권에서 경매를 통해 상업지구 물건을 확보하고, 베이커리 교습소+코인세탁방 임대 모델로 수익 구조를 설계했습니다.","detailedDescription":"#### 상업지구 물건 경매 투자 분석\n\n**1. 입지 요약**\n광교·수원·용인을 잇는 [흥덕지구 상업 중심축]에 위치한 1층 상가로, GTX-A 구성역·흥덕역(예정)·플랫폼시티 개발의 직접/간접 수혜권입니다.\n\n**2. 경매 메리트**\n- 3개 호실 일괄매각, 1층 39평(131.7㎡) 규모\n- 1차 유찰 후 2차 최저매각가: 감정가 대비 **약 30% 할인**\n- 대항력 없는 임차인 → 명도 리스크 낮음\n\n**3. 사업 모델**\n- 103·104호: 키즈/주부 타깃 [베이커리 교습소 + 카페]\n- 105호: 요양병원·주거 밀집 수요 기반 [무인 코인세탁방]\n- 교습소 고마진 + 세탁방 고정수익으로 월 **순이익 140~160만 원** 구조\n\n**4. 핵심 결론**\n경매로 매입가를 낮추고, 개발호재가 반영되는 3~5년 이후 **시세차익 + 임대수익**을 동시에 노리는 '상업지구 코어 상가' 투자 모델입니다.","pdfUrl":"/uploads/부동산프롬테크 0번.pdf"},{"image":"/uploads/project-1-1762923816621.png","video":"","title":"스타벅스 효과 2.0 (경상북도 상주시) ","detailedDescription":"#### \"스세권\"의 가치는 공시지가보다 빠른가?\n\n**1. \"느린 데이터\"의 한계**\n'스세권'은 통념상 가치가 높지만, 전통적인 '공시지가'는 1년에 한 번 발표됩니다. 시장의 반응을 \"느리게\" 반영합니다.\n\n**2. \"빠른 데이터\"의 포착**\n반면, '네이버 검색량' 등 프롭테크가 활용하는 '빠른 데이터'는 시장의 '관심도'를 \"실시간\"으로 포착합니다.\n\n**3. 시차(Gap) 분석**\n스타벅스 개점일(D-Day)을 기준으로, '빠른 데이터'(검색량)와 '느린 데이터'(공시지가)의 반응 속도를 비교 분석했습니다.\n\n**4. 핵심 결론**\n분석 결과, '빠른 데이터'가 '느린 데이터'를 **최소 6개월~1년 가까이 '선행'함**을 증명했습니다.\n\n**5. 최종 인사이트**\n미래의 감정평가사는 '느린 데이터'와 '빠른 데이터'의 격차(Gap)를 해독하고, '대체 데이터'를 활용하여 시장의 '진짜 가치'를 포착해야 합니다.","pdfUrl":"/uploads/부동산프롬테크 1번.pdf"},{"image":"/uploads/project-2-1764157680766.png","video":"","title":"경매 물건 투자 보고서","description":"경기도 성남시 수정구 고등동 판교밸리포레자이 아파트 경매 물건을 대상으로 권리안정성과 자본효율성을 분석했습니다.","detailedDescription":" 경기도 성남시 고등동 아파트 경매 투자 보고서\n\n1. 투자 대상 물건 정보\n경기도 성남시 수정구 고등동 판교밸리포레자이 311동 3층 301호, 25평형(59.81㎡)\n2021년 9월 준공 신축급 아파트, 토지-건물 일괄매각\n\n2. 투자 핵심 기준 (3가지 비타협적 목표)\n- 권리 안정성: 인수 위험이 0원인 안전한 물건\n- 자산의 질: 판교/강남 업무지구 배후 주거지 입지적 우위\n- 자본 효율성: 최소 자본으로 최대 자산 가치 확보\n\n3. 경매 메리트 분석\n- 감정가: 8억 6,700만 원 (1차 유찰)\n- 2차 최저매각가: 6억 900만 원 (감정가의 70%)\n- 권리 분석: 낙찰자 인수 리스크 0원 (을구 완벽 정리)\n- 임대차 현황: 보증금 0원 (대항력 없는 임차인)\n\n4. 입지 분석\n- 판교 테크노밸리까지 10분대, 강남 업무지구까지 30분대\n- 광역 교통망: 경부고속도로, 용인서울고속도로 근접\n- 대중교통: 광역버스 7개 노선, 시내버스 5개 노선 통과\n- 신축 프리미엄: 2021년 준공, 기반 시설 완비\n\n5. 수익성 전략\n- 목표 낙찰가: 8억 2,780만 원 (감정가 대비 95.5%)\n- 예상 시세: 9억 3,000만 원 (최소 시세차익 1억 220만 원)\n- 자본 투입: 4억 5,000만 원 (DSR 규제 통과)\n- 대출 규모: 4억 580만 원 (연 6.0%, 2년 만기)\n- 특별 전략: 전세 전환 후 대출 전액 상환 → 최종 자본 4,420만 원만 묶임\n\n6. 최종 결론 (Infinity ROI 달성)\n9억 3,000만 원 우량 자산에 단 4,420만 원의 자본으로  \n극도의 레버리지 수익률 달성. 권리 안정성 + 자본 효율성 최적화 투자 모델.","pdfUrl":"/uploads/부동산프롬테크 2번.pdf"},{"image":"/uploads/project-3-1762925400657.png","video":"","title":"호텔형 실버타운과 미래형 주택 시사점","description":"","detailedDescription":" 🟦 연구 요약\n\n- **배경:** 초고령 사회 대비 미래 노인 주택 모델.\n- **핵심:** **24시간 간호**, **우수한 부대 시설**, **도심 접근성**.\n- 문제점: <strong class=\"text-sky-400\">높은 비용</strong>, <strong class=\"text-sky-400\">입주 연령 제한</strong>, <strong class=\"text-sky-400\">디자인 미흡</strong>.\n- **해결:** <strong class=\"text-sky-400\">보증금 분납</strong>, <strong class=\"text-sky-400\">단계별 케어</strong> 도입.","pdfUrl":"/uploads/부동산 프롬테크4번.pdf"},{"image":"/uploads/project-4-1763431933448.png","video":"","title":"무신사 테라스 입지 분석 (성수, 홍대)","description":"서울 성수와 홍대의 핵심 상권에 위치한 무신사 테라스의 입지 경쟁력을 비교 분석했습니다. MZ세대 문화의 중심지에서 프리미엄 소매 거점의 가치를 평가했습니다.","detailedDescription":"#### 무신사 테라스 입지 분석: 성수 vs 홍대\n\n**1. 연구 대상**\n무신사 테라스는 서울 성수와 홍대에 위치한 프리미엄 복합 쇼핑 시설입니다. MZ세대의 쇼핑 문화와 트렌드 선호도 변화를 반영한 입지 전략을 분석했습니다.\n\n**2. 성수 지역 분석**\n- **상권 특성:** 핸드메이드·업사이클링 문화 중심, 프리미엄 니즈 높음\n- **경제 지표:** 평균 임차료 ㎡당 20만 원 (강남의 70% 수준)\n- **고객 프로필:** 20~35세 여성 중심, 월소득 400만 원 이상\n- **접근성:** 성수역(경의중앙선), 한강공원, 성수동 카페거리\n- **연평균 보행량:** 150만+ 명, 일일 10,000명 이상\n- **매출:** 월 18~22억 원대\n\n**3. 홍대 지역 분석**\n- **상권 특성:** 트렌드 선도 지역, 팝업스토어 허브, 실험적 소비 활발\n- **경제 지표:** 평균 임차료 ㎡당 18만 원 (성수보다 저렴)\n- **고객 프로필:** 10~30세 학생/사회초년생, 월소득 200~350만 원\n- **접근성:** 상수역, 덕성여대, 서강대 캠퍼스 인접\n- **MZ세대 유입 비중:** 65% (성수보다 높음)\n- **매출:** 월 12~15억 원대\n\n**4. 성수 vs 홍대 경쟁 분석**\n- **성수:** 높은 객단가 + 낮은 임차료 → **수익성 우수** (순수익률 15~18%)\n- **홍대:** 높은 회전율 + 트렌드 선도성 → **브랜드 가치 확대** (순수익률 12~15%)\n- **전략:** 성수는 프리미엄 수익 창출, 홍대는 브랜드 이미지 강화\n- **시너지:** 투 지점 운영으로 MZ세대 상권 양분화 전략 성공\n\n**5. 임대수익 시뮬레이션**\n- **성수점(400㎡):** 월 매출 18~22억 원 → 임차료 4~5억 원대\n- **홍대점(250㎡):** 월 매출 12~15억 원 → 임차료 2.5~3.5억 원대\n- **총 연 임차료:** 약 80억 원대\n\n**6. 최종 결론**\n무신사 테라스는 성수에서 프리미엄 수익 거점을, 홍대에서 브랜드 강화 지점을 확보했습니다. 지역별 특성을 최적화한 투 지점 운영으로 MZ세대 상권을 양분화 지배하고 있습니다. 향후 강남·강북 확대 시 **앵커 브랜드 역할**을 수행할 것으로 예상됩니다.","pdfUrl":"/uploads/부동산 프롬테크 4번.pdf"},{"image":"/uploads/project-5-1763431999111.png","video":"","title":"지속가능한 도시 분석: 부동산 개발과 환경 보전의 공존","description":"'보전과 개발, 공존의 길을 묻다'를 주제로 부동산 개발과 환경 보전의 갈등을 분석하고 지속가능한 발전 전략을 제안한 팀 프로젝트입니다.","detailedDescription":" 지속가능한 도시 분석: 부동산과 환경\n\n주제: 보전과 개발, 공존의 길을 묻다\n\n1. 연구 배경\n- 도시 개발 확대와 환경 보전의 충돌\n- 9·7 주택공급대책: 수도권 5년 135만 가구 착공 (기존 대비 56만 가구 증)\n- 공급 속도 중심 정책 → 환경영향평가 효율화 추진\n- 맹꽁이 신속 이주대책 도입 (멸종위기 야생생물 2급)\n\n**2. 갈등 사례 분석 (2가지)\n\n(1) 성남 서현지구 공공주택 개발 갈등**\n- 배경: 2017년 국토부 공공주택 2,500가구 계획\n- 문제: 맹꽁이 서식지 (국토부 조사 5마리 vs 주민 정밀조사 125마리)\n- 환경영향평가 부실 논란, 그린벨트(개발제한구역) 포함\n- 결과: 2019년 주민 소송 제기 → 2021년 주민 승소, 사업 장기 지연 및 사실상 중단\n- 시사점: 개발 행정의 신뢰성 문제, 정확한 환경영향평가의 중요성\n\n**(2) 제주 제2공항**\n- 규모: 약 550만㎡, 활주로 1본, 총 사업비 약 5조 4,532억 원\n- 목적: 기존 제주국제공항 포화 해소, 관광·물류 인프라 확충\n- 갈등: 조류 충돌 위험성, 맹꽁이 등 법정 보호 생물 피해 우려\n- 환경부: 조류 충돌 위험성 보완 요구, 멸종위기종 보호 방안 조건 부여\n- 환경·시민단체: 환경적 영향 검토 부족, 자료 부실 등 지적\n- 일정: 2024년 환경영향평가 용역 공고, 2029년 착공 예정, 2034년 개항\n\n**3. 공공기관 환경 정책 검토**\n\n**(1) 환경부 (지방환경청)**\n- 토양오염정밀조사: 오염물질 종류, 농도, 범위 등 정확 평가\n- 멸종위기 야생동식물 보호활동: 2018-2027 종합계획, 25종 복원 목표\n- 환경영향평가 협의제도: 사전협의 → 본안협의 → 사후환경영향평가\n- 사후관리: 협의내용 이행관리, 사후 모니터링, 피해 예방 조치\n\n**(2) LH (한국토지주택공사)**\n- 민·관·공 협력형 생태보전\n- 문화재청과 조선왕릉 대체서식지 협약 (2021.11)\n- 신구대학교·환경부와 협업: 성남 서현지구 맹꽁이 신구대 식물원 내 이주\n- 생태 전문가 자문, 생물다양성 모니터링, 연구 평가\n\n**(3) 한국농어촌공사**\n- 멸종위기종 서식지 이주 및 정착 모니터링 (2025~2027년)\n- 조사 항목: 환경 변화, 생물 서식 현황, 개체 수, 서식지 이용 행동\n- 기대효과: 서식지 환경 개선, 적응률 제고, 생태계 균형 유지\n\n**4. 현재 정책의 제도적 한계점**\n\n**(1) 정책적 한계**\n- 맹꽁이 신속 이주대책은 기술적 접근에 머물러 이주는 하지만 서식환경 질 미흡\n- 법적 절차는 충족했으나 생태적 실효성 미흡\n\n**(2) 환경부·공공기관 보전대책의 공통 한계**\n- 생태조사 외주화로 지역공동체와 협력 부재\n- 행정·개발기관 간 협의 중심으로 주민소통 부재\n- 환경부의 서식지 외 보전사업 확대하나 관리주체는 중앙 행정에 고정\n- LH·농어촌공사 생태조성사업 시행하나 주민참여는 형식적\n- 근본 문제: \"보전의 주체가 행정에 고정, 지역 생태계 관리의 실질적 주체를 제도적으로 포섭하지 못함\"\n\n**5. 지속가능한 개발 전략 제언 (4가지)**\n\n**① 개발 초기 단계 환경 검토 강화**\n- 개발 초기부터 환경 검토 의무화\n- 지역사회와의 지속적 소통으로 신뢰 구축\n- 개발과 환경이 조화되는 방향 설계\n\n**② 투명성·전문성 강화로 신뢰 회복**\n- 환경영향평가 투명성 강화\n- 이해관계자 협의 절차 강제\n- 환경 정책·과학 자문 체계 개선\n\n**③ 주민 참여 생태 거버넌스 구축**\n- 개발 이후 관리는 행정만의 일이 아님\n- 주민이 함께하는 공동 모니터링\n- 새로운 환경 거버넌스의 출발점\n\n**④ ESG 연계 인센티브 시스템**\n- 실질적 인센티브와 ESG 경영 연계\n- 건설사 입장에서 환경 고려가 브랜드 가치·시장 경쟁력 향상으로 연결\n- 자발적 환경 고려 유도\n\n**6. 최종 결론**\n부동산 개발과 환경 보전은 대립이 아닌 상생의 관계입니다. \n투명한 절차, 신뢰 가능한 환경평가, 그리고 주민 참여의 생태 거버넌스를 통해 \n진정한 '지속가능한 도시'로 나아갈 수 있습니다.","pdfUrl":"/uploads/부동산 프롬테크 5번.pdf"}] as Array<{ image: string; video?: string; title: string; description: string }>
  }

  const [projectsInfo, setProjectsInfo] = useState(defaultInfo)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [imageAspects, setImageAspects] = useState<{ [key: string]: string }>({})
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [displayCount, setDisplayCount] = useState(defaultInfo.initialDisplay)
  const [showDisplaySettings, setShowDisplaySettings] = useState(false)
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: ""
  })
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('projects-info') as typeof defaultInfo | null
    if (savedData) {
      const mergedData = { ...defaultInfo, ...savedData }
      setProjectsInfo(mergedData)
      setDisplayCount(mergedData.initialDisplay || defaultInfo.initialDisplay)
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('projects-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateProjectsInfo = async (key: string, value: string | number | boolean | typeof projectsInfo.projects) => {
    const newInfo = { ...projectsInfo, [key]: value }
    setProjectsInfo(newInfo)
    saveData('projects-info', newInfo)
    // 파일에도 자동 저장
    await saveToFile('projects', 'Info', newInfo)
  }
  
  const updateProject = async (index: number, field: string, value: string) => {
    const newProjects = [...projectsInfo.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    await updateProjectsInfo('projects', newProjects)
  }
  
  
  const removeProject = async (index: number) => {
    // 삭제할 프로젝트의 이미지/비디오 파일 경로 가져오기
    const projectToRemove = projectsInfo.projects[index]
    
    // 이미지가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.image && projectToRemove.image.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.image })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 이미지 삭제 완료: ${projectToRemove.image}`)
        }
      } catch (error) {
        console.error('프로젝트 이미지 삭제 실패:', error)
      }
    }
    
    // 비디오가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.video && projectToRemove.video.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.video })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 비디오 삭제 완료: ${projectToRemove.video}`)
        }
      } catch (error) {
        console.error('프로젝트 비디오 삭제 실패:', error)
      }
    }
    
    // 프로젝트 목록에서 제거
    const newProjects = projectsInfo.projects.filter((_, i) => i !== index)
    await updateProjectsInfo('projects', newProjects)
  }
  
  // 표시할 프로젝트들
  const validProjects = projectsInfo.projects
  const visibleProjects = isEditMode ? validProjects : validProjects.slice(0, displayCount)
  const hasMoreProjects = validProjects.length > displayCount
  
  // 더보기 버튼 클릭
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + projectsInfo.loadMoreCount, validProjects.length))
  }
  
  // 이미지 비율 감지 함수
  const detectImageAspect = (src: string) => {
    if (!src) return // 빈 이미지 경로는 무시
    
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      let aspectClass: string
      
      // 일반적인 이미지 비율들 감지
      if (ratio >= 1.7 && ratio <= 1.8) {
        aspectClass = 'aspect-video' // 16:9 (1.777...)
      } else if (ratio >= 1.3 && ratio <= 1.35) {
        aspectClass = 'aspect-[4/3]' // 4:3 (1.333...)
      } else if (ratio >= 0.95 && ratio <= 1.05) {
        aspectClass = 'aspect-square' // 1:1 (1.0)
      } else if (ratio >= 0.74 && ratio <= 0.76) {
        aspectClass = 'aspect-[3/4]' // 3:4 (0.75)
      } else if (ratio >= 0.55 && ratio <= 0.57) {
        aspectClass = 'aspect-[9/16]' // 9:16 (0.5625)
      } else if (ratio >= 1.4 && ratio <= 1.45) {
        aspectClass = 'aspect-[3/2]' // 3:2 (1.5)
      } else if (ratio >= 0.65 && ratio <= 0.67) {
        aspectClass = 'aspect-[2/3]' // 2:3 (0.666...)
      } else if (ratio > 1.8) {
        aspectClass = 'aspect-[21/9]' // 초광각
      } else if (ratio < 0.55) {
        aspectClass = 'aspect-[1/2]' // 매우 세로
      } else {
        // 기타 비율은 가장 가까운 것으로
        if (ratio > 1) {
          aspectClass = 'aspect-video' // 기본 가로
        } else {
          aspectClass = 'aspect-[3/4]' // 기본 세로
        }
      }
      
      setImageAspects(prev => ({ ...prev, [src]: aspectClass }))
    }
    img.src = src
  }
  
  // 모든 이미지 비율 감지
  useEffect(() => {
    validProjects.forEach(project => {
      detectImageAspect(project.image)
    })
  }, [validProjects.length]) // 유효한 projects 개수가 변경되면 다시 실행

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <EditableBackground
        image={backgroundData.image}
        video={backgroundData.video}
        color={backgroundData.color}
        opacity={backgroundData.opacity}
        onChange={(data) => {
          const newData = { ...backgroundData, ...data }
          setBackgroundData(newData)
          saveData('projects-background', newData)
          
          // projectsInfo도 업데이트 (파일 저장을 위해)
          const updatedProjectsInfo = { ...projectsInfo, background: newData }
          setProjectsInfo(updatedProjectsInfo)
          saveData('projects-info', updatedProjectsInfo)
        }}
        storageKey="projects-background"
        className="relative"
      >
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 제목 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={projectsInfo.title}
                onChange={(value) => updateProjectsInfo('title', value)}
                storageKey="projects-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <EditableText
                value={projectsInfo.subtitle}
                onChange={(value) => updateProjectsInfo('subtitle', value)}
                storageKey="projects-subtitle"
              />
            </p>
          </div>

          {/* 프로젝트가 없을 때 */}
          {validProjects.length === 0 && !isEditMode ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🚀</span>
              <p className="text-xl text-muted-foreground">준비 중입니다</p>
            </div>
          ) : (
            /* 프로젝트 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => {
                
                return (
                  <div 
                    key={index}
                    className="group flex flex-col relative cursor-pointer"
                    onClick={() => !isEditMode && setSelectedProject(project)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeProject(index)
                        }}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    
                    {/* 이미지/비디오 영역 */}
                    <div className="relative aspect-[4/3] rounded-lg bg-muted mb-3 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <EditableMedia
                          src={project.image || ""}
                          onChange={(src) => updateProject(index, 'image', src)}
                          type="auto"
                          storageKey={`project-${index}-image`}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          purpose={`project-${index}`}
                        />
                      )}
                    </div>
                    
                    {/* 텍스트 영역 */}
<div className="flex-grow">
  <h3 className="font-semibold text-foreground mb-1">
    <EditableText
      value={project.title || "프로젝트 제목"}
      onChange={(value) => updateProject(index, 'title', value)}
      storageKey={`project-${index}-title`}
    />
  </h3>

  {/* ✅ 0번 프로젝트(상업지구 경매) - 파란색 요약 */}
{index === 0 ? (
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
    <p>광교–용인 축의 핵심 상업지에서 경매로 확보한 1층 상가입니다.</p>
    <ul className="list-disc list-inside pl-2 space-y-1">
      <li><strong>입지:</strong> GTX-A 구성역·흥덕역 개발 수혜권</li>
      <li><strong>경매 메리트:</strong> 감정가 대비 <strong className="text-sky-400">약 30% 할인</strong></li>
      <li><strong>사업 모델:</strong> 베이커리 교습소 + 무인 코인세탁방</li>
      <li><strong>수익:</strong> 월 순이익 <strong className="text-sky-400">140~160만 원</strong></li>
    </ul>
    <p>
      <strong>전략:</strong> 
      <span className="font-semibold text-sky-400">경매 저가 매입 + 개발호재 3~5년 후 시세차익</span>
    </p>
  </div>
) : index === 1 ? (
  // ✅ 1번: 스타벅스 효과
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
    <p>'스세권'의 효과를 '빠른 데이터(검색량)'와 '느린 데이터(공시지가)'로 비교 분석했습니다.</p>
    <ul className="list-disc list-inside pl-2 space-y-1">
      <li><strong>분석 결과:</strong> 개점 3개월 만에 공시지가 <strong>+15.0%</strong> 폭등.</li>
      <li><strong>핵심:</strong> '빠른 데이터'가 '느린 데이터'를 1년 가까이 선행함을 증명.</li>
    </ul>
    <p>
      <strong>사용한 기술:</strong> 
      <span className="font-semibold text-sky-400">네이버 데이터랩, 부동산원 공시지가 분석</span>
    </p>
  </div>
) : index === 2 ? (
  // ✅ 2번: 경매 물건 투자 보고서
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
    <p>성남 고등동 판교밸리포레자이 신축 아파트 경매 물건을 분석했습니다.</p>
    <ul className="list-disc list-inside pl-2 space-y-1">
      <li><strong>물건:</strong> 25평형, 신축급(2021년 준공)</li>
      <li><strong>권리 안정성:</strong> 인수 위험 <strong className="text-sky-400">0원</strong> (을구 완벽)</li>
      <li><strong>입지:</strong> 판교 10분, 강남 30분 (광역 교통 최적)</li>
      <li><strong>시세차익:</strong> 감정가 8.67억 → 예상 시세 <strong className="text-sky-400">9.3억 원</strong></li>
      <li><strong>특별 전략:</strong> 전세 전환으로 최종 자본 <strong className="text-sky-400">4,420만 원만 묶임</strong></li>
    </ul>
    <p>
      <strong>목표:</strong> 
      <span className="font-semibold text-sky-400">권리 안정성 + 극도 레버리지 (Infinity ROI)</span>
    </p>
  </div>
) : index === 3 ? (
  // ✅ 3번: 호텔형 실버타운
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
  <p>
    초고령 사회를 대비한 도심형 호텔식 실버타운을 분석해, 
    현재 모델의 장단점과 미래형 노인주택의 개선 방향을 정리했습니다.
  </p>
  <ul className="list-disc list-inside pl-2 space-y-1">
    <li><strong>핵심 강점:</strong> 24시간 건강관리, 호텔 수준 부대시설, 강남권 입지</li>
    <li><strong>주요 한계:</strong> <span className="text-sky-400">높은 비용·연령 제한·비친화적 설계</span></li>
    <li><strong>개선 제안:</strong> <span className="text-sky-400">보증금 분납·단계별 케어·실버 인테리어</span></li>
  </ul>
</div>
) : index === 4 ? (
  // ✅ 4번: 무신사 테라스 입지 분석
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
  <p>
    성수·홍대 두 상권에 위치한 무신사 테라스의 입지와 수익 구조를 비교해 
    MZ세대 상권 전략을 분석했습니다.
  </p>
  <ul className="list-disc list-inside pl-2 space-y-1">
    <li><strong>성수:</strong> <span className="text-sky-400">높은 객단가·상대적으로 낮은 임차료</span> → 수익성 우수</li>
    <li><strong>홍대:</strong> <span className="text-sky-400">높은 회전율·MZ 유입 65%</span> → 브랜드 가치 강화</li>
    <li><strong>인사이트:</strong> 한 브랜드가 입지 성격에 따라 <span className="text-sky-400">수익 거점 vs 이미지 거점</span>을 달리 설계</li>
  </ul>
</div>
) : index === 5 ? (
  // ✅ 5번: 지속가능한 도시 분석 (부동산과 환경)
  <div className="mt-2 text-sm text-muted-foreground space-y-2">
  <p>
    대규모 주택 공급 정책과 환경 보전의 충돌 사례를 통해 
    부동산 개발과 생태 보전이 공존하는 조건을 연구했습니다.
  </p>
  <ul className="list-disc list-inside pl-2 space-y-1">
    <li><strong>사례:</strong> 성남 서현지구·제주 제2공항 갈등 분석</li>
    <li><strong>핵심 문제:</strong> <span className="text-sky-400">형식적 환경평가·행정 중심 보전·주민 소통 부족</span></li>
    <li><strong>제안:</strong> 개발 초기 환경 검토, 주민 참여 거버넌스, <span className="text-sky-400">ESG 연계 인센티브</span></li>
  </ul>
</div>
) : (
  // 📝 나머지 프로젝트(5, 6번...) - 자유 입력 영역
  <div className="mt-2">
    <p className="text-sm text-muted-foreground mb-2">
      프로젝트 설명을 입력하거나 편집하세요:
    </p>
    <EditableText
      value={project.description || "프로젝트 설명을 작성해주세요"}
      onChange={(value) => updateProject(index, 'description', value)}
      storageKey={`project-${index}-description`}
      multiline
      className="text-sm"
    />
  </div>
)}
{/* --- 조건문 끝 --- */}
          </div>
        </div>
      )
    })}
    {/* ====== 프로젝트 맵 끝 ====== */}
              
              {/* 편집 버튼 */}
              {isEditMode && (
                <div 
                  className="h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setShowProjectModal(true)}
                >
                  <div className="text-center">
                    <Plus className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">프로젝트 추가</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 더보기 버튼 */}
          {hasMoreProjects && !isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                <ChevronDown className="h-5 w-5" />
                더 많은 프로젝트 보기 ({validProjects.length - displayCount}개 더)
              </button>
            </div>
          )}
          {/* 향후 분석 계획 박스 (6개 프로젝트 아래) */}
<div className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/20 rounded-lg p-8 border border-sky-300 dark:border-sky-700 mt-12">
  <h3 className="text-2xl font-bold mb-4 text-sky-900 dark:text-sky-100">
     다음 분석 프로젝트
  </h3>
  
  <p className="text-lg leading-relaxed text-sky-800 dark:text-sky-200 mb-6 font-semibold">
    <strong className="text-sky-600 dark:text-sky-300">「특정 지역의 상업 생태계 진화」</strong><br/>
    경매·스타벅스효과·입지분석을 통합한 <strong>한 지역의 5년 변화 추적 연구</strong>
  </p>

  <div className="space-y-3 text-sky-700 dark:text-sky-300">
    <p>
      <strong> 목표:</strong> 경기도 용인/성남/수원 중 한 지역을 선택하여, 
      <strong className="text-sky-600 dark:text-sky-400"> 경매 시장 데이터 + 상권 입지 변화 + 개발 호재</strong>를 
      타임라인으로 분석. 부동산 시세와 상업 활력의 상관관계를 규명합니다.
    </p>
    
    <p>
      <strong> 방법론:</strong> 공시지가·낙찰가·검색량·임대료·보증금 데이터를 
      <strong className="text-sky-600 dark:text-sky-400"> 월별/분기별로 시각화</strong>하여, 
      시장 선행 신호(Leading Indicator)를 포착하고 투자 타이밍을 예측합니다.
    </p>

    <p>
      <strong> 최종 인사이트:</strong> "부동산은 정보의 빠르기 싸움이다"라는 원칙 아래, 
      <strong className="text-sky-600 dark:text-sky-400"> 느린 공식 데이터 vs 빠른 실시간 신호</strong>의 
      격차(Gap)를 활용한 투자 전략 수립.
    </p>
  </div>
</div>

          {/* 표시 설정 버튼 (편집 모드에서만) */}
          {isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowDisplaySettings(true)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <LayoutGrid className="h-5 w-5" />
                더보기 설정
              </button>
            </div>
          )}
          </div>
        </section>
      </EditableBackground>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 모달 컨테이너 */}
          <div 
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확대된 이미지/비디오 */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {selectedImage && (selectedImage.includes('.mp4') || selectedImage.includes('.webm') || selectedImage.includes('youtube')) ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="확대된 프로젝트 이미지"
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-muted-foreground text-center py-20'
                      placeholder.innerHTML = '<span class="text-6xl">📁</span><p class="mt-4">미디어를 불러올 수 없습니다</p>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 프로젝트 추가 모달 */}
      {showProjectModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 프로젝트 추가</h3>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* 이미지/비디오 업로드 */}
              <div>
                <label className="text-sm font-medium mb-2 block">프로젝트 이미지/비디오</label>
                <div className="h-48 rounded-lg overflow-hidden bg-muted">
                  {newProject.image ? (
                    <div className="relative h-full">
                      {newProject.image.includes('.mp4') || newProject.image.includes('.webm') ? (
                        <video 
                          src={newProject.image} 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={newProject.image} 
                          alt="프로젝트 미리보기"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setNewProject({...newProject, image: ""})}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <input
                        id="project-upload"
                        type="file"
                        accept="image/*,video/mp4,video/webm"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          
                          const isVideo = file.type.includes('video')
                          const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024
                          
                          if (file.size > maxSize) {
                            alert(`파일 크기는 ${isVideo ? '20MB' : '5MB'} 이하여야 합니다`)
                            return
                          }
                          
                          const formData = new FormData()
                          formData.append('file', file)
                          formData.append('purpose', `project-${Date.now()}`)
                          
                          try {
                            const response = await fetch(isVideo ? '/api/upload-video' : '/api/upload-image', {
                              method: 'POST',
                              body: formData
                            })
                            
                            const result = await response.json()
                            
                            if (result.success) {
                              setNewProject({...newProject, image: result.path})
                            } else {
                              alert(`❌ ${result.error}`)
                            }
                          } catch {
                            alert('업로드 중 오류가 발생했습니다')
                          }
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-upload"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        파일 업로드
                      </label>
                      <input
                        type="text"
                        value={newProject.image}
                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                        placeholder="또는 URL 입력 (https://...)"
                        className="px-3 py-2 border rounded-lg bg-background text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* 프로젝트 제목 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 제목</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="예: 브랜드 리뉴얼 프로젝트"
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              
              {/* 프로젝트 설명 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 설명</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="예: 스타트업 A사의 전체 브랜딩 리뉴얼 및 UI/UX 개선"
                  className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={async () => {
                  if (newProject.title && newProject.description) {
                    // 비디오 URL 체크 및 처리
                    const isVideo = newProject.image && (newProject.image.includes('.mp4') || newProject.image.includes('.webm'))
                    const projectData = {
                      image: isVideo ? '' : newProject.image,
                      video: isVideo ? newProject.image : '',
                      title: newProject.title,
                      description: newProject.description
                    }
                    const updatedProjects = [...projectsInfo.projects, projectData]
                    const updatedInfo = {...projectsInfo, projects: updatedProjects}
                    setProjectsInfo(updatedInfo)
                    saveData('projects-info', updatedInfo)
                    
                    // 파일에도 저장
                    const success = await saveToFile('projects', 'Info', updatedInfo)
                    if (success) {
                      alert('✅ 프로젝트가 추가되고 파일에 저장되었습니다!')
                    }
                    
                    setNewProject({ image: "", title: "", description: "" })
                    setShowProjectModal(false)
                  } else {
                    alert('제목과 설명을 입력해주세요')
                  }
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                추가
              </button>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      
      
      {/* 표시 설정 모달 */}
      {showDisplaySettings && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">더보기 설정</h3>
              <button
                onClick={() => setShowDisplaySettings(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 초기 표시 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  처음에 보여줄 프로젝트 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        updateProjectsInfo('initialDisplay', num)
                        setDisplayCount(Math.min(displayCount, num))
                      }}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.initialDisplay === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.initialDisplay}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('initialDisplay', value)
                      setDisplayCount(Math.min(displayCount, value))
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 더보기 클릭 시 추가 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  더보기 클릭 시 추가로 보여줄 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => updateProjectsInfo('loadMoreCount', num)}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.loadMoreCount === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.loadMoreCount}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('loadMoreCount', value)
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 현재 상태 미리보기 */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-2">현재 설정:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 전체 프로젝트: {validProjects.length}개</p>
                  <p>• 처음 표시: {projectsInfo.initialDisplay}개</p>
                  <p>• 더보기 클릭당: {projectsInfo.loadMoreCount}개씩 추가</p>
                  {validProjects.length > projectsInfo.initialDisplay && (
                    <p className="text-primary mt-2">
                      → 더보기 버튼 {Math.ceil((validProjects.length - projectsInfo.initialDisplay) / projectsInfo.loadMoreCount)}번 클릭 필요
                    </p>
                  )}
                </div>
              </div>
              
              {/* 팁 */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-xs font-medium mb-1">💡 추천 설정:</p>
                <p className="text-xs text-muted-foreground">
                  • 프로젝트가 많은 경우: 6개 표시, 3개씩 추가<br/>
                  • 프로젝트가 적은 경우: 3개 표시, 3개씩 추가<br/>
                  • 모바일 고려: 3의 배수로 설정 권장
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  // 초기화
                  updateProjectsInfo('initialDisplay', 6)
                  updateProjectsInfo('loadMoreCount', 3)
                  setDisplayCount(6)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={async () => {
                  // 파일에 저장
                  const success = await saveToFile('projects', 'Info', projectsInfo)
                  if (success) {
                    alert('✅ 프로젝트 설정이 파일에 저장되었습니다!')
                  }
                  setShowDisplaySettings(false)
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                📁 저장 & 완료
              </button>
            </div>
          </div>
        </div>
      )}
    {selectedProject && (
  <ProjectModal 
    project={selectedProject} 
    onClose={() => setSelectedProject(null)} 
  />
)}
    </>
  )
}
