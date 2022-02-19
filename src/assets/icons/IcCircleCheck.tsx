import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color: string;
}

const SvgIcCircleCheck = (props: Props) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle opacity={0.4} cx={20} cy={20} r={20} fill={props.color} />
    <circle cx={20} cy={20} r={17} fill="#fff" />
    <circle cx={20} cy={20} r={16} fill={props.color} />
    <path d="m13 20 5 5 9-11" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgIcCircleCheck;
