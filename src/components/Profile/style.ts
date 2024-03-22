import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--terciary-color);
`;

export const Box = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    padding: 1rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media (min-width: 1024px) {
        width: 35rem;
        margin-left: 2rem;
    }
`;

export const BoxIcon = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
`;

export const BoxPerfil = styled.div`
    
    img {
        width: 5rem;
        height: 5rem;
    }

    @media (min-width: 1024px) {

        img {
            width: 10rem;
            height: 10rem;
        }
    }
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