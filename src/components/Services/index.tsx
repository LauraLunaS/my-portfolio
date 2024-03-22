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
                <CardService title={'Desenvolvimento Web'} src={'/layouts/dev.svg'}/>
                <CardService title={'Web Design'} src={'/layouts/dev.svg'}/>
                <CardService title={'Landing Page'} src={'/layouts/dev.svg'}/>
            </ContainerCard>
        </Container>
    )
}

export default Services;