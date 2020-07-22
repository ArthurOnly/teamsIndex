import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    height: 100%;
    min-height: 100vh;
`;

export const TeamDiv = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.30);
`

export const AdDiv = styled.div`
    margin-left: 20px;
    background-color: #fff; 
    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.30);
`

export const TeamImg = styled.img`
    height: 300px;
    width: auto;   
`

export const DoubleContainer = styled.div`
    display: flex;
    align-self: center;
    width: 90%;
    margin-bottom: 20px;

    & > :first-child{
        flex-grow: 2;
        min-height: 300px;
    }
    & > :last-child{
        flex-grow: 1;
        min-width: 200px;
    }
`

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    align-self: center;
    flex-wrap: wrap;
    width: 90%;

    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.30);
`
