import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m5 12 5 5 9-11" stroke="#72C0FD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgIcCheck;
