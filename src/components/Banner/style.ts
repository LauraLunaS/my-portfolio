import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (min-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
    }

    @media (min-width: 1280px) {
        margin-top: 3rem;
    }
`;

export const ContainerSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 767px) {
        align-items: flex-start;
        padding-left: 2rem;
    }

    @media (min-width: 1280px) {
        padding-left: 2.5rem;
    }

`;

export const ContainerImage= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        display: none;
    }

    @media (min-width: 767px) {
        img {
            display: flex;
            position: absolute;
            width: 22rem;
            height: 22rem;
            margin-right: -8rem;  
        } 
    }

    @media (min-width: 1280px) {
        img {
            width: 30rem;
            height: 30rem;
        }
    }
`;

export const Content= styled.div`
    display: none;

    @media (min-width: 767px) {
        background-color: var(--terciary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 15rem;
        border-radius: 20px;
        position: relative;
    }

    @media (min-width: 1280px) {
        width: 20rem;
        height: 25rem;
    }
`;

export const Title = styled.text`
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        font-size: 2rem;
    }

    @media (min-width: 1280px) {
        font-size: 2.4rem;
    }

    @media (min-width: 1444px) {
        font-size: 2.6rem;
    }
`;

export const Subtitle = styled.text`
    margin-bottom: 1rem;

    @media(min-width: 767px) {
        margin-top: 0.6rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.3rem;
        margin-top: 1.3rem;
        margin-bottom: 3.5rem;
    }

    @media (min-width: 1444px) {
        font-size: 1.5rem;
    }
`;

export const SectionButton = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const ButtonAbout = styled.button`
    background-color: #25244D;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    padding: 0.6rem 1rem;
    margin-right: 1rem;
    width: 100%;
    font-size: 0.9rem;
    cursor: pointer;

    @media (min-width: 1280px){
        padding: 1rem 2rem;
        font-size: 1.1rem;
    }
`;

export const ButtonCV = styled.button`
    background-color: var(--secundary-color);
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    padding: 0.6rem 1rem;
    border: none;
    width: 100%;
    font-size: 0.9rem;
    cursor: pointer;

    @media (min-width: 1280px){
        padding: 1rem 2rem;
        font-size: 1.1rem;
    }
`;