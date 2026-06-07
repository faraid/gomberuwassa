import sanitizeHtmlLib from 'sanitize-html';

const ALLOWED_TAGS: string[] = [
  'p', 'br', 'strong', 'em', 'ul', 'ol', 'li',
  'a', 'h2', 'h3', 'blockquote',
];

const ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  a: ['href', 'title', 'target'],
};

/**
 * Sanitises HTML input, retaining only the allowed subset of tags and attributes.
 * Strips all other tags, event handler attributes (on*), and javascript: URIs.
 */
export function sanitizeHtml(input: string): string {
  return sanitizeHtmlLib(input, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ['http', 'https', 'mailto'],
    disallowedTagsMode: 'discard',
  });
}
