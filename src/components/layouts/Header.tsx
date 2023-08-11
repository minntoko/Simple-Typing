import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer className="drop-shadow-md">
      <h1 className="text-2xl font-bold">タイピングゲーム</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 5px #aaa;
  background-color: #72b8ff;
  margin-bottom: 20px;
`;

export default Header