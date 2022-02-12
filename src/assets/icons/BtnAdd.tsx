import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 8.828h12M8 2.828v12" stroke="#292F37" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export default SvgBtnAdd;
