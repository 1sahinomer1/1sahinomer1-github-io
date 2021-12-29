import styled from 'styled-components';

export const Header = styled.header`
  width: 70%;
  margin: 50px auto;
  color: ${(p) => p.theme.fontColor};
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const RightMenu = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
`;
