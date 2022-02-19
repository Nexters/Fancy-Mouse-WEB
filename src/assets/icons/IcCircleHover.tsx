import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcCircleHover = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle opacity={0.4} cx={20} cy={20} r={20} fill="#BFCDDE" />
    <circle cx={20} cy={20} r={17} fill="#fff" />
    <circle cx={20} cy={20} r={16} fill="#BFCDDE" />
  </svg>
);

export default SvgIcCircleHover;
