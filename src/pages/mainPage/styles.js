import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  height: 100%;
  min-height: 100vh;
`;

export const TeamsList = styled.div`
  display: flex;
  flex-direction: row;
`

export const TeamContainer = styled.div`
  min-width: 300px;
  flex-basis:300px;
  flex-grow: 1;
  height: 300px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.30);
  margin: 10px;
  cursor: pointer;
  transition: 0.2s;

  justify-items: center;
  align-items: center;
  text-align: center;


  :hover{
      transform: scale(1.05)
  }

  > img{
    height: 100%;
    width: auto;
  }
`
