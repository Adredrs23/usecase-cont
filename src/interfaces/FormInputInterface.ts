import { InputHTMLAttributes } from 'react';

export interface FormInputPropsType
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  stateValue: string | number;
  stateSetter: (item: string) => void;
}

export type InputProp = {
  readOnly?: boolean;
};
