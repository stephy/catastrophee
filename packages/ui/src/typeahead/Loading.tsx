import * as React from "react";

interface LoadingType {
  color?: string;
  thickness?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export const Loading: React.SFC<LoadingType> = ({
  thickness = 1,
  width = 50,
  height = 50,
  color,
  backgroundColor = "#2296f3"
}) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-ring"
      style={{ background: "none" }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="30"
        stroke={backgroundColor}
        strokeWidth={thickness}
      />
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="30"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="square"
        transform="rotate(167.066 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;180 50 50;720 50 50"
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
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
