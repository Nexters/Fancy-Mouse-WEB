import * as React from 'react';
import { SVGProps } from 'react';

const SvgBtnTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.5 15v-3M13.5 15v-3M4.5 8h15v0c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89V15c0 1.886 0 2.828-.586 3.414C15.828 19 14.886 19 13 19h-2c-1.886 0-2.828 0-3.414-.586C7 17.828 7 16.886 7 15v-4.5c0-.465 0-.697-.038-.89A2 2 0 0 0 5.39 8.038C5.197 8 4.965 8 4.5 8v0ZM10.068 4.37c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 4c.44 0 .868.036 1.217.103.35.067.6.161.715.268"
      stroke="#FC8888"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgBtnTrash;
