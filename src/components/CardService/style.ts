import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(20, 20, 20, 24%);
    border-radius: 40px;
    height: 100%;
    width: 20rem;
    margin-bottom: 1rem;

    img {
        height: 14rem;
    }

    @media (min-width: 1024px) {
    }
`;

export const Title = styled.text`
    font-weight: 200;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media (min-width: 1024px) {
        font-size: 1.4rem;
    }
`;




