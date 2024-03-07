'use client';
import Image from "next/image";
import {
    ContainerBanner, 
    ContainerSection,
    Title, 
    Subtitle, 
    ButtonAbout, 
    ButtonCV, 
    ContainerImage, 
    Content,
    SectionButton
} from './style'

const Banner = () => {
    return (
        <ContainerBanner>
            <ContainerSection>
                <Title>Olá, me chamo Laura Luna, sou web designer e desenvolvedora Front-End</Title>
                <Subtitle>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet </Subtitle>
                <SectionButton>
                    <ButtonAbout>About</ButtonAbout>
                    <ButtonCV>Download CV</ButtonCV>
                </SectionButton>
            </ContainerSection>
            <ContainerImage>
                <Content />
                <Image src={'ilustration.svg'} width={20} height={20} alt="my-ilustration"></Image>
            </ContainerImage>
        </ContainerBanner>
    )
}

export default Banner;