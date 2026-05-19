import { Fragment, type ReactNode } from "react";

/**
 * Lightweight inline-markup renderer for plain-string content fields
 * (descriptions, body paragraphs, captions, etc.).
 *
 * Supported syntax:
 *   *foo*  → <em>foo</em>   (italics — use for publication titles,
 *                            film titles, emphasis)
 *
 * Anything outside the asterisk pairs renders verbatim.
 */
export function inlineMarkup(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
