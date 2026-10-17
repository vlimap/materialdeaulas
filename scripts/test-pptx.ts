import assert from 'node:assert/strict';
import JSZip from 'jszip';
import { buildLessonPptx } from '../src/lib/exportDeck';

async function main() {
  // Small valid PNG. No untrusted image is decoded by any size parser.
  const png = 'data:image/png;base64,' +
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9eONKZYAAAAASUVORK5CYII=';
  const blob = await buildLessonPptx([png, png], 'Aula <teste> & revisão');
  assert.equal(blob.type, 'application/vnd.openxmlformats-officedocument.presentationml.presentation');

  const archive = await JSZip.loadAsync(await blob.arrayBuffer());
  const needed = [
    '[Content_Types].xml', '_rels/.rels', 'docProps/core.xml',
    'ppt/presentation.xml', 'ppt/_rels/presentation.xml.rels',
    'ppt/slideMasters/slideMaster1.xml',
    'ppt/slideMasters/_rels/slideMaster1.xml.rels',
    'ppt/slideLayouts/slideLayout1.xml',
    'ppt/slideLayouts/_rels/slideLayout1.xml.rels',
    'ppt/theme/theme1.xml',
    ...[1, 2].flatMap(n => [
      'ppt/slides/slide' + n + '.xml',
      'ppt/slides/_rels/slide' + n + '.xml.rels',
      'ppt/media/image' + n + '.png'
    ])
  ];

  for (const item of needed) assert.ok(archive.file(item), 'Parte OOXML ausente: ' + item);
  const xml = await archive.file('ppt/presentation.xml')!.async('string');
  assert.equal((xml.match(/<p:sldId id=/g) ?? []).length, 2);
  assert.match(xml, /screen16x9/);
  const props = await archive.file('docProps/core.xml')!.async('string');
  assert.match(props, /Aula &lt;teste&gt; &amp; revisão/);
  const slide = await archive.file('ppt/slides/slide1.xml')!.async('string');
  assert.match(slide, /r:embed="rId2"/);
  await assert.rejects(buildLessonPptx([], 'Sem slides'), /pelo menos um slide/);
  await assert.rejects(buildLessonPptx(['data:image/gif;base64,AAAA'], 'GIF inválido'), /PNG inválida/);

  console.log('PASS PPTX: apresentação de 2 slides, ZIP e ligações OOXML verificados.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
