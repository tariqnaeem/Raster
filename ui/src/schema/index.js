import { schema } from 'normalizr';

export const discrepanciesSchema = new schema.Entity('discrepancies');
export const discrepanciesListSchema = [discrepanciesSchema];

export const graphSchema = new schema.Entity('graph');
export const graphListSchema = [graphSchema];
