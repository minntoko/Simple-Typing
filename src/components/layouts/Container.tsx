import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left top, #cbe9f4, #efefef);
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Container