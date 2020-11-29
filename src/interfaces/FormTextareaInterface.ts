import { InputHTMLAttributes } from 'react';

export interface FormTextareaPropsType
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  rows: number;
  cols?: number;
  placeholder?: string;
  value: string;
  setValue: (item: string) => void;
}
