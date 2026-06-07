export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates that a progress value is an integer in the inclusive range [0, 100].
 * Rejects non-integers (floats, NaN, Infinity) and values outside [0, 100].
 */
export function validateProgress(value: number): ValidationResult {
  if (!Number.isInteger(value)) {
    return { valid: false, error: 'Progress must be a whole number (integer).' };
  }
  if (value < 0 || value > 100) {
    return {
      valid: false,
      error: `Progress must be between 0 and 100 inclusive; received ${value}.`,
    };
  }
  return { valid: true };
}
