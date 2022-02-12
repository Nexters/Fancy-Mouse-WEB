import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={33} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M24.745 14.401c0 5.986-4.659 10.74-10.289 10.74s-10.29-4.754-10.29-10.74c0-5.985 4.66-10.74 10.29-10.74 5.63 0 10.29 4.755 10.29 10.74Z"
      stroke="#404B5A"
      strokeWidth={3}
    />
    <path
      transform="scale(1.03077 .96826) rotate(45 -18.622 35.965)"
      stroke="#404B5A"
      strokeWidth={3}
      strokeLinecap="round"
      d="M1.5-1.5h8.994"
    />
  </svg>
);

export default SvgBtnSearch;
