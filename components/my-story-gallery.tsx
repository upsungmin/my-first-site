"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function MyStoryGallery() {
  const galleryImages = [
    {
      src: "/uploads/about1.jpg",
      alt: "나의 이야기 1",
      caption: "기초를 다지는 순간"
    },
    {
      src: "/uploads/about2.jpg",
      alt: "나의 이야기 2",
      caption: "땀과 열정의 시간"
    },
    {
      src: "/uploads/about3.jpg",
      alt: "나의 이야기 3",
      caption: "목표를 향한 도전"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="relative w-full h-full min-h-[500px] lg:min-h-full flex flex-col">
        <div
          className="relative flex-1 cursor-pointer group overflow-hidden"
          onClick={() => setIsFullScreen(true)}
        >
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold">{galleryImages[currentIndex].caption}</p>
              <p className="text-xs text-gray-300">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          <div className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m12-4h4v4M6 18h4v4m12-4h4v-4" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 p-4 bg-muted/30">
          <button
            onClick={prevImage}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all"
            aria-label="이전 사진"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 flex gap-2 overflow-x-auto">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                  idx === currentIndex
                    ? "ring-2 ring-sky-400 scale-105"
                    : "ring-1 ring-muted hover:ring-sky-300"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all"
            aria-label="다음 사진"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground py-2">
          {currentIndex + 1} / {galleryImages.length}
        </p>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullScreen(false)}
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            aria-label="닫기"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-4xl">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-semibold">{galleryImages[currentIndex].caption}</p>
              <p className="text-gray-300 text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
