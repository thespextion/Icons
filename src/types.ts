import { SVGProps } from "react";

// Base props shared between web and native
export interface BaseIconProps {
  size?: number | string;
  color?: string;
}

// Web-specific props (with className for Tailwind support)
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'size' | 'color'>, BaseIconProps {
  className?: string;
}
