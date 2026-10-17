import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import JSZip from 'jszip';
import type { LessonDefinition } from '../types/course';

type ProgressCallback = (current: number, total: number) => void;

async function captureSlides(onProgress?: ProgressCallback) {
  await document.fonts.ready;
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-export-slide="true"]'));
  if (!nodes.length) throw new Error('Nenhum slide disponível para exportação.');
  const images: string[] = [];

  for (const [index, node] of nodes.entries()) {
    const image = await toPng(node, {
      cacheBust: true, pixelRatio: 1,
      width: 1600, height: 900,
      canvasWidth: 1600, canvasHeight: 900
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
    orientation: 'landscape', unit: 'pt',
    format: [960, 540], compress: true
  });

  images.forEach((image, index) => {
    if (index > 0) pdf.addPage([960, 540], 'landscape');
    pdf.addImage(image, 'PNG', 0, 0, 960, 540, undefined, 'FAST');
  });

  pdf.save(filename(lesson, 'pdf'));
}

// PowerPoint Open XML generation using only JSZip. Avoids image-size's
// unpatched image parser: all inputs are rasterized PNGs made by this page.
const XML_NS = 'http://schemas.openxmlformats.org/';
const PML = XML_NS + 'presentationml/2006/main';
const DML = XML_NS + 'drawingml/2006/main';
const REL = XML_NS + 'officeDocument/2006/relationships';
const PKG = 'http://schemas.openxmlformats.org/package/2006/relationships';
const CONTENT_TYPES = 'http://schemas.openxmlformats.org/package/2006/content-types';
const OFFICE_REL = XML_NS + 'officeDocument/2006/relationships/';

function xml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function relationships(items: Array<{ id: string; type: string; target: string }>): string {
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<Relationships xmlns="' + PKG + '">' +
    items.map(item => '<Relationship Id="' + item.id +
      '" Type="' + OFFICE_REL + item.type +
      '" Target="' + item.target + '"/>').join('') +
    '</Relationships>';
}

const WIDTH = 12192000;
const HEIGHT = 6858000;

function slideXml(): string {
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<p:sld xmlns:p="' + PML + '" xmlns:a="' + DML + '" xmlns:r="' + REL + '">' +
    '<p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>' +
    '<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>' +
    '<a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>' +
    '<p:pic><p:nvPicPr><p:cNvPr id="2" name="Captura do slide"/>' +
    '<p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr>' +
    '<p:blipFill><a:blip r:embed="rId2"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>' +
    '<p:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="' + WIDTH +
    '" cy="' + HEIGHT + '"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr>' +
    '</p:pic></p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>';
}

const master = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<p:sldMaster xmlns:p="' + PML + '" xmlns:a="' + DML + '" xmlns:r="' + REL + '">' +
  '<p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>' +
  '<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/>' +
  '<a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld>' +
  '<p:clrMap accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" ' +
  'bg1="lt1" bg2="lt2" folHlink="folHlink" hlink="hlink" tx1="dk1" tx2="dk2"/>' +
  '<p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>' +
  '<p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles></p:sldMaster>';

const layout = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<p:sldLayout xmlns:p="' + PML + '" xmlns:a="' + DML + '" xmlns:r="' + REL +
  '" type="blank" preserve="1"><p:cSld name="Em branco"><p:spTree>' +
  '<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>' +
  '<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>' +
  '<a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>' +
  '</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>';

const theme = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<a:theme xmlns:a="' + DML + '" name="Material de Aulas"><a:themeElements>' +
  '<a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>' +
  '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>' +
  '<a:dk2><a:srgbClr val="111827"/></a:dk2><a:lt2><a:srgbClr val="F5F5F5"/></a:lt2>' +
  '<a:accent1><a:srgbClr val="0D47A1"/></a:accent1>' +
  '<a:accent2><a:srgbClr val="F2C53D"/></a:accent2>' +
  '<a:accent3><a:srgbClr val="1692A8"/></a:accent3>' +
  '<a:accent4><a:srgbClr val="00875A"/></a:accent4>' +
  '<a:accent5><a:srgbClr val="9A6DD7"/></a:accent5>' +
  '<a:accent6><a:srgbClr val="E85C3F"/></a:accent6>' +
  '<a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink>' +
  '</a:clrScheme><a:fontScheme name="Rubik">' +
  '<a:majorFont><a:latin typeface="Rubik"/></a:majorFont>' +
  '<a:minorFont><a:latin typeface="Rubik"/></a:minorFont></a:fontScheme>' +
  '<a:fmtScheme name="Material de Aulas"><a:fillStyleLst><a:solidFill><a:schemeClr val="accent1"/></a:solidFill>' +
  '<a:solidFill><a:schemeClr val="accent2"/></a:solidFill><a:solidFill><a:schemeClr val="accent3"/></a:solidFill></a:fillStyleLst>' +
  '<a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="accent1"/></a:solidFill></a:ln>' +
  '<a:ln w="9525"><a:solidFill><a:schemeClr val="accent2"/></a:solidFill></a:ln>' +
  '<a:ln w="9525"><a:solidFill><a:schemeClr val="accent3"/></a:solidFill></a:ln></a:lnStyleLst>' +
  '<a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle>' +
  '<a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>' +
  '<a:bgFillStyleLst><a:solidFill><a:schemeClr val="lt1"/></a:solidFill>' +
  '<a:solidFill><a:schemeClr val="lt2"/></a:solidFill>' +
  '<a:solidFill><a:schemeClr val="accent1"/></a:solidFill></a:bgFillStyleLst></a:fmtScheme>' +
  '</a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>';

export async function buildLessonPptx(images: string[], title: string): Promise<Blob> {
  if (images.length === 0) throw new Error('A apresentação precisa de pelo menos um slide.');
  const zip = new JSZip();
  const types = [
    '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>',
    '<Default Extension="xml" ContentType="application/xml"/>',
    '<Default Extension="png" ContentType="image/png"/>',
    '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>',
    '<Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>',
    '<Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>',
    '<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>',
    '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>',
    ...images.map((_, i) => '<Override PartName="/ppt/slides/slide' + (i + 1) +
      '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>')
  ];
  zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<Types xmlns="' + CONTENT_TYPES + '">' + types.join('') + '</Types>');
  zip.file('_rels/.rels', relationships([
    { id: 'rId1', type: 'officeDocument', target: 'ppt/presentation.xml' },
    { id: 'rId2', type: 'metadata/core-properties', target: 'docProps/core.xml' }
  ]).replace(OFFICE_REL + 'metadata/core-properties',
    XML_NS + 'package/2006/relationships/metadata/core-properties'));

  zip.file('docProps/core.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<cp:coreProperties xmlns:cp="' + XML_NS + 'package/2006/metadata/core-properties" ' +
    'xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<dc:creator>Val Lima</dc:creator><dc:title>' + xml(title) + '</dc:title></cp:coreProperties>');

  zip.file('ppt/presentation.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<p:presentation xmlns:p="' + PML + '" xmlns:a="' + DML + '" xmlns:r="' + REL + '">' +
    '<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>' +
    '<p:sldIdLst>' + images.map((_, i) => '<p:sldId id="' + (256 + i) +
      '" r:id="rId' + (i + 2) + '"/>').join('') + '</p:sldIdLst>' +
    '<p:sldSz cx="' + WIDTH + '" cy="' + HEIGHT + '" type="screen16x9"/>' +
    '<p:notesSz cx="6858000" cy="9144000"/></p:presentation>');

  zip.file('ppt/_rels/presentation.xml.rels', relationships([
    { id: 'rId1', type: 'slideMaster', target: 'slideMasters/slideMaster1.xml' },
    ...images.map((_, i) => ({ id: 'rId' + (i + 2), type: 'slide',
      target: 'slides/slide' + (i + 1) + '.xml' }))
  ]));

  zip.file('ppt/slideMasters/slideMaster1.xml', master);
  zip.file('ppt/slideMasters/_rels/slideMaster1.xml.rels', relationships([
    { id: 'rId1', type: 'slideLayout', target: '../slideLayouts/slideLayout1.xml' },
    { id: 'rId2', type: 'theme', target: '../theme/theme1.xml' }
  ]));
  zip.file('ppt/slideLayouts/slideLayout1.xml', layout);
  zip.file('ppt/slideLayouts/_rels/slideLayout1.xml.rels', relationships([
    { id: 'rId1', type: 'slideMaster', target: '../slideMasters/slideMaster1.xml' }
  ]));
  zip.file('ppt/theme/theme1.xml', theme);

  images.forEach((image, index) => {
    if (!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(image)) {
      throw new Error('Slide ' + (index + 1) + ': imagem PNG inválida.');
    }
    const n = index + 1;
    zip.file('ppt/media/image' + n + '.png', image.split(',')[1], { base64: true });
    zip.file('ppt/slides/slide' + n + '.xml', slideXml());
    zip.file('ppt/slides/_rels/slide' + n + '.xml.rels', relationships([
      { id: 'rId1', type: 'slideLayout', target: '../slideLayouts/slideLayout1.xml' },
      { id: 'rId2', type: 'image', target: '../media/image' + n + '.png' }
    ]));
  });

  return zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  });
}

export async function exportLessonPptx(
  lesson: LessonDefinition,
  onProgress?: ProgressCallback
) {
  const images = await captureSlides(onProgress);
  const pptx = await buildLessonPptx(images, lesson.title);
  const url = URL.createObjectURL(pptx);
  try {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename(lesson, 'pptx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  } finally {
    // Delay revocation until after the browser has started downloading.
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }
}
