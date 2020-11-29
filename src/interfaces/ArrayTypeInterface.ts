import { InputHTMLAttributes } from 'react';

export interface ArrayInputType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  stateValue: string | number;
  stateSetter: (item: string) => void;
}
