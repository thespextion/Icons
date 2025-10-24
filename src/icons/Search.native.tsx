import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Search: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Circle cx="11" cy="11" r="8" />
      <Path d="m21 21-4.3-4.3" />
    </Svg>
  );
};
