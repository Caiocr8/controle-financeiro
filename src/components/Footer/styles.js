import styled, {css} from "styled-components";

const media = {
    desktop: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)};
      }
    `
  };

export const Container = styled.div`
    height: 100px;
    width: 100%;
    text-align: center;     
    background: teal;
    ${media.desktop`
        bottom: 0;
        position: fixed;
    `}
`;

export const Footer = styled.h1``;

export const Title = styled.div`
    padding-top: 20px;
    font-size: 30px;
    color: #fff;
`;