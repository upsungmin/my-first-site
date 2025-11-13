import { X } from 'lucide-react';
import React from 'react';

// ProjectModal 컴포넌트의 props 타입을 정의합니다.
interface ProjectModalProps {
  project: {
    title: string;
    descriptionHtml: string;
    image?: string;
    video?: string;
    pdfUrl?: string; // PDF 다운로드 URL을 추가했습니다.
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;
  
const descriptionHtml = project.detailedDescription
    ? project.detailedDescription.replace(/\n/g, '<br />')
    : '<p>상세 설명이 없습니다.</p>';
  return (
    // 1. 어두운 배경 (클릭하면 닫힘)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 2. 팝업 창 (이걸 클릭해도 닫히지 않도록 함) */}
      <div
        className="bg-background text-foreground rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // 이벤트 전파 중단
      >
        {/* 3. 팝업 헤더 (제목 + 닫기 버튼) */}
        <div className="flex justify-between items-center p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* 4. 팝업 본문 (스크롤 + '긴 설명') */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-4">
          {/* 이미지가 있으면 이미지 표시 */}
          {(project.image || project.video) && (
            <div className="w-full h-auto max-h-64 overflow-hidden rounded-md mb-4">
              <img
                src={project.video ? project.video : project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* 상세 설명 내용 출력 */}
          <div
            className="prose prose-sm dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />

          {/* PDF 다운로드 버튼 출력 */}
          {project.pdfUrl && (
            <div style={{ marginTop: '40px', marginBottom: '40px', textAlign: 'center' }}>
                <a 
                    href={project.pdfUrl} 
                    download 
                    style={{ 
                        padding: '12px 25px', 
                        backgroundColor: '#DC3545', 
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        fontSize: '16px' 
                    }}
                >
                    4번 프로젝트 PDF 파일 다운로드 ({project.title})
                </a>
            </div>
          )}
        </div>

        {/* 5. 팝업 푸터 (닫기 버튼) */}
        <div className="flex justify-end p-4 md:p-6 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;