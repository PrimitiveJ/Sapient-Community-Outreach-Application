
import styled from 'styled-components';

export const StyledIntroTransition = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  @keyframes slideUp {
    0% {
      top: 0;
    }
    100% {
      top: -50vh;
    }
  }

  @keyframes slideDown {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -50vh;
    }
  }

  > div[data-side="bottom"],
  > div[data-side="top"] {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }

  > div[data-side="bottom"] {
    bottom: 0;
    animation-name: slideDown;
  }

  > div[data-side="top"] {
    top: 0;
    animation-name: slideUp;
  }
`;

export const StyledIntroSlide = styled.div`
    position: absolute;
    width: 100vw;
    height: 50vh;
    background-color: ${({ theme }) => theme.backgroundOne};
`;

