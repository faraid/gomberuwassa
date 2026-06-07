export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const NIGERIAN_PHONE_PATTERN = /^0\d{10}$/;

/**
 * Validates a Nigerian phone number:
 * - Exactly 11 digits
 * - Starts with '0'
 * Examples: 08012345678, 07034567890
 */
export function validateNigerianPhone(value: string): ValidationResult {
  if (!NIGERIAN_PHONE_PATTERN.test(value)) {
    return {
      valid: false,
      error:
        'Phone number must be exactly 11 digits starting with 0 (e.g. 08012345678).',
    };
  }
  return { valid: true };
}
