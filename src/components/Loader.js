import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>Fluencer</span>
        <span>Fluencer</span>
        <span>Digital</span>
        <span>Digital</span>
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
    font-family: "Poppins", serif;
    letter-spacing: 5px;
  }

  .loader span:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 1px #ec1b23;
  }

  .loader span:nth-child(2) {
    color: #ec1b23;
    -webkit-text-stroke: 1px #ec1b23;
    animation: uiverse723 3s ease-in-out infinite;
  }

    .loader span:nth-child(3) {
    position: relative;
    top: 20px;
    right: 90px;
    color: transparent;
    -webkit-text-stroke: 1px #004aad;
  }

  .loader span:nth-child(4) {
    position: relative;
    top: 20px;
    right: 290px;
    color: #004aad;
    -webkit-text-stroke: 1px #004aad;
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
