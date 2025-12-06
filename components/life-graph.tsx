"use client"

import { useState } from "react"

export function LifeGraph() {
  const pastData = [
    { year: "0-10세", value: 50, label: "유년기", description: "검도 시작, 운동의 즐거움 발견" },
    { year: "10-16세", value: 45, label: "청소년", description: "축구/검도 활동, 경쟁과 승리의 경험" },
    { year: "16-18세", value: 40, label: "고등학교", description: "운동에서 공부로 전환, 목표 재설정" },
    { year: "18-22세", value: 65, label: "대학교", description: "새로운 목표 발견, 투자자산운용사 취득" },
    { year: "22-현재", value: 80, label: "현재", description: "감정평가사 준비, 경매 분석에 집중" },
  ]

  const futureData = [
    { year: "1년 후", value: 90, label: "공인중개사", description: "공인중개사 자격 취득 완료" },
    { year: "3년 후", value: 98, label: "감정평가사", description: "감정평가사 자격 취득, 전문가 입지 확보" },
    { year: "5년 후", value: 99, label: "전문가", description: "경매 전문가로서의 명성 구축" },
    { year: "10년 후", value: 100, label: "최고 수준", description: "부동산 감정 및 컨설팅 분야 리더" },
  ]

  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  const allData = [...pastData, ...futureData]
  const width = 1000
  const height = 400
  const padding = { top: 40, right: 40, bottom: 80, left: 60 }

  const graphWidth = width - padding.left - padding.right
  const graphHeight = height - padding.top - padding.bottom

  const points = allData.map((data, index) => {
    const x = padding.left + (index / (allData.length - 1)) * graphWidth
    const y = padding.top + graphHeight - (data.value / 100) * graphHeight
    return { ...data, x, y, index }
  })

  const pastPoints = points.slice(0, pastData.length)
  const pastPath = pastPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")

  const futurePoints = points.slice(pastData.length - 1)
  const futurePath = futurePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")

  return (
    <div className="w-full mt-16 px-4">
      <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
        나의 인생 그래프
      </h3>

      <div className="flex justify-center overflow-x-auto bg-card rounded-2xl shadow-lg p-8">
        <svg width={width} height={height} className="min-w-max">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d={`M 50 0 L 0 0 0 50`} fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
          </defs>

          {[0, 25, 50, 75, 100].map((value) => (
            <g key={`y-label-${value}`}>
              <line
                x1={padding.left - 5}
                y1={padding.top + graphHeight - (value / 100) * graphHeight}
                x2={padding.left}
                y2={padding.top + graphHeight - (value / 100) * graphHeight}
                stroke="#9ca3af"
                strokeWidth="1"
              />
              <text
                x={padding.left - 10}
                y={padding.top + graphHeight - (value / 100) * graphHeight + 5}
                textAnchor="end"
                fontSize="12"
                fill="#6b7280"
              >
                {value}
              </text>
            </g>
          ))}

          <line
            x1={padding.left}
            y1={padding.top + graphHeight}
            x2={width - padding.right}
            y2={padding.top + graphHeight}
            stroke="#6b7280"
            strokeWidth="2"
          />

          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={padding.top + graphHeight}
            stroke="#6b7280"
            strokeWidth="2"
          />

          <path d={pastPath} fill="none" stroke="#3b82f6" strokeWidth="3" />

          <path
            d={futurePath}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="5,5"
          />

          {points.map((point, index) => (
            <g key={`point-${index}`}>
              ircle
                cx={point.x}
                cy={point.y}
                r={hoveredPoint === point.year ? 8 : 5}
                fill={index < pastData.length ? "#3b82f6" : "#10b981"}
                opacity={hoveredPoint === point.year ? 1 : 0.8}
                className="transition-all cursor-pointer"
                onMouseEnter={() => setHoveredPoint(point.year)}
                onMouseLeave={() => setHoveredPoint(null)}
              />

              <text
                x={point.x}
                y={height - padding.bottom + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#374151"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(point.year)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {point.year}
              </text>
            </g>
          ))}

          {hoveredPoint && (
            <>
              {points
                .filter((p) => p.year === hoveredPoint)
                .map((point) => (
                  <g key={`tooltip-${point.year}`}>
                    <line
                      x1={point.x}
                      y1={padding.top}
                      x2={point.x}
                      y2={point.y}
                      stroke="#9ca3af"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />

                    <rect
                      x={point.x - 80}
                      y={point.y - 70}
                      width="160"
                      height="65"
                      fill="white"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      rx="8"
                    />

                    <text
                      x={point.x}
                      y={point.y - 45}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="#1f2937"
                    >
                      {point.label}
                    </text>

                    <text
                      x={point.x}
                      y={point.y - 25}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#6b7280"
                    >
                      성장도: {point.value}%
                    </text>

                    <text
                      x={point.x - 75}
                      y={point.y - 8}
                      fontSize="11"
                      fill="#374151"
                      textLength="150"
                    >
                      {point.description.substring(0, 20)}...
                    </text>
                  </g>
                ))}
            </>
          )}
        </svg>
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-blue-500"></div>
          <span className="text-sm text-muted-foreground">과거 (실제 경험)</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-1 bg-green-500"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #10b981 0, #10b981 5px, transparent 5px, transparent 10px)",
            }}
          ></div>
          <span className="text-sm text-muted-foreground">미래 (예상 발전)</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-muted-foreground text-center">
        <p>
          🚀 <strong>나의 성장 여정:</strong> 과거의 경험을 바탕으로 미래의 무궁무진한 발전을 추구합니다.
        </p>
        <p className="mt-2">마우스를 그래프에 올려보면 각 구간의 자세한 설명을 확인할 수 있습니다.</p>
      </div>
    </div>
  )
}
