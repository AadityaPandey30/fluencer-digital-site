import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>fluencer</span>
        <span>fluencer</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    top: 48vh;
    left: 50%;
  }

  .loader span {
    position: absolute;
    color: #fff;
    transform: translate(-50%, -50%);
    font-size: 52px;
    font-family: ;
    letter-spacing: 5px;
  }

  .loader span:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 1px red;
  }

  .loader span:nth-child(2) {
    color: red;
    -webkit-text-stroke: 1px red;
    animation: uiverse723 3s ease-in-out infinite;
  }

  @keyframes uiverse723 {
    0%, 100% {
      clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
       54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
       51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
  }`;

export default Loader;
