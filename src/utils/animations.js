import { keyframes } from "styled-components";

export const blink = keyframes`
  0% {}
  1% { transform: scaleY(1); }
  3% { transform: scaleY(0.2); }
  5% { transform: scaleY(1); }
  6% { transform: scaleY(1); }
  8% { transform: scaleY(0.2); }
  10% { transform: scaleY(1); }
`;

export const fadeFromLeft = keyframes`
  from { 
    opacity: 0;
    transform: translateX(-10px) 
  }
  to {
    opacity: 1;
    transform: translateX(0) 
  }
`;
