import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m8 5-7 7 7 7" stroke="#292F37" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <rect y={11} width={21} height={2} rx={1} fill="#292F37" />
  </svg>
);

export default SvgBtnBack;
