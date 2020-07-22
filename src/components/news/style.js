import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
    width: ${props=>props.big ? '600px' : '300px'};
    background-image: url(${props=>props.image});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column-reverse;
    position: relative;

    :hover{
        div:first-child{
            background-color: rgba(0,0,0,0.6);
        }

        div:last-child{
            opacity: 1;
            transform: translateX(10px)
        }
    }
`;

export const Overlay = styled.div`
    height: 300px;
    width: ${props=>props.big ? '600px' : '300px'};
    background-color: rgba(0,0,0,0.3);
    transition: 0.2s;
    position: absolute;
`;

export const Title = styled.h2`
    cursor: pointer;
    color: #fff;
    padding: 4px 8px 4px 8px;
    z-index: 2;
`;

export const IconsContainer = styled.div`
    position: absolute;
    left: -10px;
    top: 10px;
    transition: 0.2s;
    opacity: 0;  
    display: flex;
    flex-direction: column;
    padding: 4px;
`