/**
 * Common interface for entities with a year range.
 * (Some entities use string fields, some numbers)
 */
export interface DatedEntity {
  start_date: number | string;
  end_date: number | string;
}

