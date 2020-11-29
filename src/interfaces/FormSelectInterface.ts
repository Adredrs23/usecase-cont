import { InputHTMLAttributes } from 'react';

export interface FormSelectPropsType
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  value: string;
  setValue: (val: string) => void;
  optionValues: Array<{ label: string; value: string }>;
}
