/**
 * Centralised master data — Gombe State LGAs.
 *
 * This is the single source of truth for all 11 Local Government Areas.
 * **Do not** duplicate these values in any module; import from here instead.
 *
 * Usage:
 *   import { GOMBE_LGAS, GOMBE_LGA_NAMES } from '@/lib/constants/gombe-lgas';
 *
 * Future modules (Programs, News, GIS, Reports, Dashboards, etc.)
 * should import from this file, not redeclare their own list.
 */

export const GOMBE_LGAS = [
  'Akko',
  'Balanga',
  'Billiri',
  'Dukku',
  'Funakaye',
  'Gombe',
  'Kaltungo',
  'Kwami',
  'Nafada',
  'Shongom',
  'Yamaltu/Deba',
] as const;

/** Union type of all LGA names for type-safe usage */
export type GombeLGA = (typeof GOMBE_LGAS)[number];

/** Convenience array of plain strings (same values) for APIs that expect string[] */
export const GOMBE_LGA_NAMES: string[] = [...GOMBE_LGAS];

/** Human-readable label for "all LGAs" contexts (e.g. stats) */
export const LGA_COUNT = GOMBE_LGAS.length;
