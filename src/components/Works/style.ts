import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Title = styled.text`
    font-weight: 800;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

`;

export const BoxImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 4rem;

    img {
        width: 10rem;
        height: 10rem;
        cursor: pointer;
    }
`;