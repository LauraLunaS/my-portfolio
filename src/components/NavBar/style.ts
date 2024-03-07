import styled from "styled-components";

export const ContainerNav = styled.div`
    height: 2.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secundary-color);
    border-radius: 10px;
    padding-left: 0.5rem;

    img {
        width: 2rem;
        height: 2rem;
    }
`;

export const SectionLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    font-weight: 400;
    font-size: 0.7rem;
    padding-right: 0.5rem;
`;