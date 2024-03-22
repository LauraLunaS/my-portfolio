'use client';
import { 
    Container, 
    Box, 
    Title,
    Description, 
    BoxText, 
    BoxIcon,
    BoxPerfil
} from './style';
import IconProfile from '../IconProfile';

const Profile = () => {
    return (
        <Container>
            <Box>
                <BoxPerfil>
                    <img src='/profile.svg'></img>
                </BoxPerfil>
                <BoxText>
                    <Title>Eu, Laura Luna de Siqueira</Title>
                    <Description>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet </Description>
                    <BoxIcon>
                        <IconProfile IconSvg='/iconsProfile/github.svg' />
                        <IconProfile IconSvg='/iconsProfile/behance.svg' />
                        <IconProfile IconSvg='/iconsProfile/linkedln.svg' />
                    </BoxIcon>
                </BoxText>
            </Box>
        </Container>
    )
}

export default Profile;