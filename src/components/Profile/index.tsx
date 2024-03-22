'use client';
import { Container, Box, Title, Description, BoxText } from './style';

const Profile = () => {
    return (
        <Container>
            <Box>
                <img src='/profile.svg'></img>
                <BoxText>
                    <Title>Eu, Laura Luna de Siqueira</Title>
                    <Description>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet </Description>
                </BoxText>
            </Box>
        </Container>
    )
}

export default Profile;