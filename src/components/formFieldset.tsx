import { ReactNode } from 'react';

function FormFieldset({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="a11y-hidden">{legend}</legend>
      {children}
    </fieldset>
  );
}

export default FormFieldset;
