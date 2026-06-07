export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Validates that the input matches the slug pattern:
 * lowercase alphanumeric segments separated by single hyphens,
 * no leading or trailing hyphens.
 */
export function validateSlug(input: string): ValidationResult {
  if (!input || input.length === 0) {
    return { valid: false, error: 'Slug must not be empty.' };
  }
  if (!SLUG_PATTERN.test(input)) {
    return {
      valid: false,
      error:
        'Slug must contain only lowercase letters, digits, and hyphens, with no leading or trailing hyphens.',
    };
  }
  return { valid: true };
}

/**
 * Generates a URL-safe slug from a title string.
 * - Lowercases the input
 * - Normalises Unicode characters to ASCII equivalents where possible
 * - Strips characters that are not alphanumeric or spaces
 * - Trims whitespace
 * - Replaces spaces (and runs of spaces) with a single hyphen
 * - Collapses multiple consecutive hyphens into one
 * - Strips leading and trailing hyphens
 *
 * If the resulting slug is empty (e.g. title was all special characters),
 * returns a fallback of 'untitled'.
 */
export function generateSlug(title: string): string {
  const slug = title
    .normalize('NFD')                      // decompose unicode accents
    .replace(/[\u0300-\u036f]/g, '')       // strip accent marks
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')         // remove non-alphanumeric except spaces and hyphens
    .trim()
    .replace(/[\s-]+/g, '-')              // collapse spaces/hyphens into single hyphen
    .replace(/^-+|-+$/g, '');             // strip leading/trailing hyphens

  return slug.length > 0 ? slug : 'untitled';
}
