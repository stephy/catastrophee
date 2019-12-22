import * as React from "react";
import { Color } from "@catastrophee/styles";

export interface SpinnerType {
  color?: string;
  thickness?: number;
  width?: string;
  height?: string;
  backgroundColor?: string;
  radius?: number;
}

export const DefaultSpinner: React.SFC<SpinnerType> = ({
  thickness = 2,
  width = "100px",
  height = "100px",
  color = Color.secondary,
  backgroundColor = "#000",
  radius = 30
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-ring"
      style={{ background: "none", alignSelf: "center", justifySelf: "center" }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        r={radius}
        stroke={backgroundColor}
        strokeWidth={thickness}
      />
      <circle
        cx="50"
        cy="50"
        fill="none"
        r={radius}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="square"
        transform="rotate(167.066 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;180 50 50;360 50 50"
          keyTimes="0;0.5;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          calcMode="linear"
          values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
          keyTimes="0;0.5;1"
          dur="1"
          begin="-0.6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
