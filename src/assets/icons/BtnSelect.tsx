import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg width={13} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m1 1.164 5.5 5.5 5.5-5.5" stroke="#687280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgBtnSelect;
