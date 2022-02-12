import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcCircleClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={17} fill="#fff" />
    <circle cx={20} cy={20} r={16} fill="#BFCDDE" />
    <g opacity={0.6} stroke="#fff" strokeWidth={2} strokeLinecap="round">
      <path d="m15.38 24.713 9.429-9.428M15.38 15.287l9.429 9.428" />
    </g>
  </svg>
);

export default SvgIcCircleClose;
