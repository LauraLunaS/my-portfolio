import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(37, 36, 77, 100%);
    width: 100%;
    height: 100%;
`;

export const Title = styled.text`
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    overflow-x: auto;
    max-width: 100%;
    gap: 1rem;
`;
