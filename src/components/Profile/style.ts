import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;

    img {
        width: 10rem;
        height: 10rem;
        margin-right: 2rem;
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: flex-start;
    width: 35rem;
`;

export const Title = styled.text`
    color: #000;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const Description = styled.text`
    color: #000;
    font-size: 1rem;
    font-weight: 300;
`;