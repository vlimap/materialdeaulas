/**
 * Give srcDoc previews a predictable base for course-owned, static lab assets.
 * The preview remains sandboxed; only repository paths matching this shape
 * receive a base element. No user-authored path is interpolated.
 */
export function buildLabPreviewDocument(code: string, editorPath?: string): string {
  const match = editorPath?.match(/^(labs\/html\/aula-\d{2})\/index\.html$/);
  if (!match) return code;

  const base = '<base href="/' + match[1] + '/">';
  if (/<head(?:\s[^>]*)?>/i.test(code)) {
    return code.replace(/(<head(?:\s[^>]*)?>)/i, '$1' + base);
  }
  if (/<html(?:\s[^>]*)?>/i.test(code)) {
    return code.replace(/(<html(?:\s[^>]*)?>)/i, '$1<head>' + base + '</head>');
  }
  return base + code;
}
