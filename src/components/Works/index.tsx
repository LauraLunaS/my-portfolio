'use client';
import { Container, Title, BoxImage } from './style'

const Works = () => {
    return (
        <Container>
            <Title>Trabalhos</Title>
            <BoxImage>
                <img src='/works/wine.svg'></img>
                <img src='/works/unicap.svg'></img>
                <img src='/works/museum.svg'></img>
                <img src='/works/baggio.svg'></img>
                <img src='/works/cinemark.svg'></img>
                <img src='/works/restaurant.svg'></img>
            </BoxImage>
        </Container>
    )
}
export default Works;