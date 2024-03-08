'use-client';
import {
    Container,
    ContainerTitle,
    ContainerCard,
    TitlePrimary,
    TitleSecundary,
    Subtitle,
} from './style';
import CardService from '../CardService';

const Services = () => {
    return (
        <Container>
            <ContainerTitle>
                <TitlePrimary>MINHA EXPERIÊNCIA</TitlePrimary>
                <TitleSecundary>Soluções inovadoras</TitleSecundary>
                <Subtitle>Busco a especialização em web design, desenvolvimento Front-End e desenvolvimento fullstack utilizando Django</Subtitle>
            </ContainerTitle>
            <ContainerCard>
                <CardService title={'Desenvolvimento'} src={'/layouts/dev.svg'}/>
                <CardService title={'Desenvolvimento'} src={'/layouts/dev.svg'}/>
                <CardService title={'Desenvolvimento'} src={'/layouts/dev.svg'}/>
            </ContainerCard>
        </Container>
    )
}

export default Services;