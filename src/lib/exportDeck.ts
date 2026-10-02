import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';
import type { LessonDefinition } from '../types/course';

type ProgressCallback = (current: number, total: number) => void;

async function captureSlides(onProgress?: ProgressCallback) {
  await document.fonts.ready;

  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>('[data-export-slide="true"]')
  );

  if (!nodes.length) {
    throw new Error('Nenhum slide disponível para exportação.');
  }

  const images: string[] = [];

  for (let index = 0; index < nodes.length; index += 1) {
    const image = await toPng(nodes[index], {
      cacheBust: true,
      pixelRatio: 1,
      width: 1600,
      height: 900,
      canvasWidth: 1600,
      canvasHeight: 900
    });

    images.push(image);
    onProgress?.(index + 1, nodes.length);
  }

  return images;
}

function filename(lesson: LessonDefinition, extension: 'pdf' | 'pptx') {
  return 'fullstack-' + lesson.slug + '.' + extension;
}

export async function exportLessonPdf(
  lesson: LessonDefinition,
  onProgress?: ProgressCallback
) {
  const images = await captureSlides(onProgress);
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [960, 540],
    compress: true
  });

  images.forEach((image, index) => {
    if (index > 0) pdf.addPage([960, 540], 'landscape');
    pdf.addImage(image, 'PNG', 0, 0, 960, 540, undefined, 'FAST');
  });

  pdf.save(filename(lesson, 'pdf'));
}

export async function exportLessonPptx(
  lesson: LessonDefinition,
  onProgress?: ProgressCallback
) {
  const images = await captureSlides(onProgress);
  const pptx = new pptxgen();

  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Senac Labs';
  pptx.subject = lesson.title;
  pptx.title = lesson.title;
  pptx.company = 'Senac';
  pptx.lang = 'pt-BR';
  pptx.theme = {
    headFontFace: 'Rubik',
    bodyFontFace: 'Rubik',
    lang: 'pt-BR'
  };

  images.forEach((image) => {
    const slide = pptx.addSlide();
    slide.background = { color: 'FFFFFF' };
    slide.addImage({
      data: image,
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5
    });
  });

  await pptx.writeFile({ fileName: filename(lesson, 'pptx') });
}
