import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserImg = (props: SVGProps<SVGSVGElement>) => (
  <svg width={47} height={49} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      width={30.713}
      height={31.749}
      rx={10}
      transform="matrix(.96336 .26821 -.24971 .96832 15.928 1)"
      fill="#404B5A"
    />
    <g filter="url(#user_img_svg__a)">
      <g filter="url(#user_img_svg__b)">
        <rect x={5} y={10} width={30.632} height={31.828} rx={10} fill="url(#user_img_svg__c)" fillOpacity={0.4} />
        <rect
          x={5.25}
          y={10.25}
          width={30.132}
          height={31.328}
          rx={9.75}
          stroke="#fff"
          strokeOpacity={0.2}
          strokeWidth={0.5}
        />
        <rect
          x={5.25}
          y={10.25}
          width={30.132}
          height={31.328}
          rx={9.75}
          stroke="url(#user_img_svg__d)"
          strokeOpacity={0.2}
          strokeWidth={0.5}
        />
      </g>
      <g filter="url(#user_img_svg__e)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.981 23.244c2.063 0 3.735-1.621 3.735-3.622 0-2-1.672-3.622-3.735-3.622-2.062 0-3.734 1.622-3.734 3.622 0 2 1.672 3.622 3.734 3.622Zm0 11.812c3.856 0 6.982-.04 6.982-3.78 0-3.74-3.126-6.771-6.982-6.771-3.855 0-6.981 3.032-6.981 6.771 0 3.74 3.126 3.78 6.981 3.78Z"
          fill="url(#user_img_svg__f)"
          fillOpacity={0.8}
          shapeRendering="crispEdges"
        />
      </g>
    </g>
    <defs>
      <linearGradient id="user_img_svg__c" x1={20.316} y1={10} x2={20.316} y2={41.828} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.6} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="user_img_svg__d" x1={8.5} y1={42} x2={36} y2={12} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="user_img_svg__f"
        x1={22.89}
        y1={16.753}
        x2={14.584}
        y2={34.258}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </linearGradient>
      <filter
        id="user_img_svg__a"
        x={0}
        y={5}
        width={40.632}
        height={41.828}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_677_13044" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_677_13044" result="shape" />
      </filter>
      <filter
        id="user_img_svg__b"
        x={-7}
        y={-2}
        width={54.632}
        height={55.828}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={6} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_677_13044" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_677_13044" result="shape" />
      </filter>
      <filter
        id="user_img_svg__e"
        x={3}
        y={9}
        width={33.963}
        height={39.056}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0807292 0 0 0 0 0.100463 0 0 0 0 0.129167 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_677_13044" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_677_13044" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgUserImg;
