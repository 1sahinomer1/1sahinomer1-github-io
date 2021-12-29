import Image from 'next/image';
import styled from 'styled-components';

export const Main = styled.main`
  width: 70%;
  margin: 100px auto;
  padding: 0 6px;
  display: flex;
  flex-direction: column;
`;

export const InfoMain = styled.section`
  display: flex;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Info = styled.p`
  margin-top: 30px;
  color: ${(p) => p.theme.fontColor};
  width: 80%;
  @media (max-width: 550px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.fontColor};
  @media (max-width: 550px) {
    margin-top: 20px;
    text-align: center;
  }
`;
export const PhotoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Photo = styled(Image)`
  border-radius: 50%;
`;

export const Links = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 550px) {
    justify-content: center;
    margin-top: 40px;
  }
`;

export const StyledLink = styled.a`
  margin-right: 20px;
  color: ${(p) => p.theme.fontColor};
`;
