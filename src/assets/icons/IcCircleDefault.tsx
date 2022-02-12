import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color: string;
}

const SvgIcCircleDefault = (props: Props) => (
  <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={16} cy={16} r={16} fill={props.color} />
  </svg>
);

export default SvgIcCircleDefault;
