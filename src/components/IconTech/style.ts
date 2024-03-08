import styled from "styled-components";

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    padding: 1rem;

    img {
        width: 2rem;
        height: 2rem;
    }

    @media (min-width: 1024px) {
        
        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;