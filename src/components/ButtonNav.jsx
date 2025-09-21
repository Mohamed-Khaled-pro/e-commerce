import React from 'react';
import styled from 'styled-components';

const ButtonNav = ({text}) => {
  return (
    <StyledWrapper>
      <button className="btn"> {text}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    color:white ;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all .8s;
    overflow: hidden;
  }

  .btn:hover {
    color: #f97316;
  }

  .btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: white;
    z-index: -1;
    transition: all .8s;
  }
 .active .btn {
    color: #f97316;
  }

  .active .btn::before {
    width: 160%;
  }
  .btn:hover::before {
    width: 160%;
  }`;

export default ButtonNav;
