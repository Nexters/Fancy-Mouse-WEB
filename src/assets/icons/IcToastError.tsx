import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcToastError = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={9} cy={9} r={9} fill="#FC8888" />
    <path stroke="#fff" strokeWidth={1.5} strokeLinecap="round" d="M9 5.25v4.5" />
    <circle cx={9} cy={12.5} r={1} fill="#fff" />
  </svg>
);

export default SvgIcToastError;
