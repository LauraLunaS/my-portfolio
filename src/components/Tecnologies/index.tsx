'use client';
import { Content, Title, Row } from './style';
import IconTech from '../IconTech';

const Tecnologies = () => {
    return (
        <Content>
            <Title>Minhas Tecnologias</Title>
            <Row style={{ overflowX: 'auto' }}>
                <IconTech imageSrc='/icons/react.svg'/>
                <IconTech imageSrc='/icons/next.svg'/>
                <IconTech imageSrc='/icons/python.svg'/>
                <IconTech imageSrc='/icons/c.svg'/>
                <IconTech imageSrc='/icons/django.svg'/>
                <IconTech imageSrc='/icons/javascript.svg'/>
            </Row>
        </Content>
    )
}

export default Tecnologies;