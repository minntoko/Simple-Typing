import { ReactNode } from 'react'
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}

const MainBox = ({children}: Props) => {
  return (
    <MainBoxStyle className="drop-shadow-md">{children}</MainBoxStyle>
  )
}

const MainBoxStyle = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
`;

export default MainBox