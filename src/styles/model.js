import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  background-color: red;
  height: 100vh;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
`;

export const Header = styled.header`
  background: blue;
  color: #fff;
  grid-area: header;

  & > h1 {
    margin-left: 2%;
  }
`;

export const MainFlex = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: content;
`;

export const MainBlock = styled.main`
  grid-area: content;
`;

export const Widget = styled.div`
  background: orchid;
  height: 100%;
  grid-area: ${(props) =>
    props.className === 'widget-1' ? 'widget-1' : 'widget-2'};
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  padding: 20px;
  background: maroon;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  grid-area: footer;
`;
