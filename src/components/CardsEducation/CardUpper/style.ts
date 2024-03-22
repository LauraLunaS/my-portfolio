import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--terciary-color);
    border-radius: 20px;
    padding: 1.2rem;

    img {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 20rem;
    }
`;

export const ContainerTopic = styled.div`
    display: flex;
    flex-direction: row;

    
    align-items: center;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
`;

export const Topic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6F6CFF;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    margin-right: 0.4rem;
`;

export const Circle = styled.div`
    border-radius: 50%;
    background-color: #fff;
    width: 0.8rem;
    height: 0.8rem;

`;

export const Date = styled.text`
    color: #000;
    font-weight: 700;
`;

export const Description = styled.text`
    color: #000;
    font-weight: 300;
    font-size: 0.7rem;
`;