import React from 'react';
import styled from '@_settings/styled';

interface Props {
  w: string;
  h: string;
}

interface MiniLoaderProps {
  width: string;
  height: string;
}

const StyledMiniLoader = styled.div<MiniLoaderProps>`
  // border: 1px solid black;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  .spinner {
    // border: 1px solid black;
    animation: rotate 2s linear infinite;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;

    & > .path {
      stroke: ${({ theme }) => theme.BD_C};
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const MiniLoader = ({ w, h }: Props) => {
  return (
    <StyledMiniLoader width={w} height={h}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </StyledMiniLoader>
  );
};

export default MiniLoader;
