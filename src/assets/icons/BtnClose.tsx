import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3.38 12.713 9.428-9.428M3.38 3.287l9.428 9.428"
      stroke="#fff"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgBtnClose;
