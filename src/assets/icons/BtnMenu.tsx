import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={33} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect y={0.828} width={32} height={32} rx={10} fill="#EEF1F4" />
    <circle cx={16} cy={8.828} r={2} fill="#A1ABB5" />
    <circle cx={16} cy={16.828} r={2} fill="#A1ABB5" />
    <circle cx={16} cy={24.828} r={2} fill="#A1ABB5" />
  </svg>
);

export default SvgBtnMenu;
