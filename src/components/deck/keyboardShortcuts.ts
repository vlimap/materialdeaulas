/**
 * Keep presentation shortcuts from overriding keyboard interaction with controls.
 * A focused button must still activate with Space, and widgets must retain
 * their own arrow keys. Modifier shortcuts belong to the browser or OS.
 */
const INTERACTIVE_SELECTOR = [
  'a[href]',
  'button',
  'input',
  'select',
  'textarea',
  'summary',
  '[contenteditable]:not([contenteditable="false"])',
  '[role="button"]',
  '[role="link"]',
  '[role="textbox"]',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="combobox"]',
  '[role="listbox"]',
  '[role="menu"]',
  '[role="menuitem"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="radio"]',
  '[role="checkbox"]',
  '[role="grid"]',
  '[role="dialog"]'
].join(', ');

type ShortcutEvent = Pick<
  KeyboardEvent,
  'target' | 'defaultPrevented' | 'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey' | 'isComposing'
>;

export function shouldHandleDeckShortcut(event: ShortcutEvent): boolean {
  if (
    event.defaultPrevented ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.isComposing
  ) return false;

  const target = event.target;
  if (!target || typeof (target as Element).closest !== 'function') return true;
  return !(target as Element).closest(INTERACTIVE_SELECTOR);
}
