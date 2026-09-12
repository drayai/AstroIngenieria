import type { AstroConcept } from '../types';

export type MetricKey = keyof AstroConcept['metrics'];

export interface MetricRow {
  key: MetricKey;
  label: string;
  value: number;
  descriptor: string;
  definition: string;
}

const demandDescriptors = ['Mínima', 'Moderada', 'Alta', 'Muy alta', 'Extrema'] as const;
const maturityDescriptors = ['Conceptual', 'Investigación', 'Prototipo', 'Demostrada', 'Operativa'] as const;

const definitions: Record<MetricKey, { label: string; definition: string }> = {
  energia: {
    label: 'Demanda energética',
    definition: 'Potencia y energía totales necesarias para construir u operar el sistema descrito.',
  },
  materiales: {
    label: 'Demanda material',
    definition: 'Masa, extracción, fabricación e infraestructura industrial necesarias.',
  },
  madurez: {
    label: 'Madurez tecnológica',
    definition: 'Grado de desarrollo real: desde una idea conceptual hasta una tecnología operativa.',
  },
};

export const metricRows = (metrics: AstroConcept['metrics']): MetricRow[] =>
  (['energia', 'materiales', 'madurez'] as const).map((key) => ({
    key,
    ...definitions[key],
    value: metrics[key],
    descriptor: (key === 'madurez' ? maturityDescriptors : demandDescriptors)[metrics[key] - 1],
  }));

export const metricValueLabel = (row: MetricRow) =>
  `${row.label}: ${row.value} de 5, ${row.descriptor.toLocaleLowerCase('es')}. ${row.definition}`;
