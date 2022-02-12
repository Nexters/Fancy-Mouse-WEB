import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcToastCom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={9} cy={9} r={9} fill="#72C0FD" />
    <path d="m5 9.429 2.857 2.857L13 6" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgIcToastCom;
