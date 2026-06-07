import { z } from 'zod';

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const emailSchema = z.string().email();

/**
 * Validates an email address against RFC 5321 syntax rules using Zod.
 */
export function validateEmail(value: string): ValidationResult {
  const result = emailSchema.safeParse(value);
  if (!result.success) {
    return {
      valid: false,
      error: 'Invalid email address format.',
    };
  }
  return { valid: true };
}
