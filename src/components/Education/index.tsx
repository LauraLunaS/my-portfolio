import { Container, ContentCard, Content, Title } from './style';
import CardUpper from '../CardsEducation/CardUpper';
 
const Education = () => {
    return (
        <Container>
            <Title>Educação</Title>
            <Content>
                <CardUpper date='2023' imageSrc='/images/graduation.svg' description='Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet '/>
            <ContentCard>
                <CardUpper date='2023' description='Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet '/>
                <CardUpper date='2023' description='Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet '/>
            </ContentCard>
            </Content>
        </Container>
    )
}

export default Education;