import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--secundary-color);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin-top: 3rem;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 4rem;
`;

export const TitlePrimary = styled.text`
    font-weight: 300;

    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;

export const TitleSecundary = styled.text`
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        font-size: 1.8rem;
    }

`;

export const Subtitle = styled.text`
    font-weight: 400;
    text-align: center;
    font-size: 0.8rem;

    @media (min-width: 1024px) {
        font-size: 1.3rem;
        width: 40rem;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
    }
`;