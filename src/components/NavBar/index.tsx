'use client';
import Image from "next/image";
import { ContainerNav, SectionLink, Link } from './style';

const Navbar = () => {
    return (
        <ContainerNav>
            <Image src={'logo.svg'} width={20} height={20} alt="my-logo"/>
            <SectionLink>
                <Link>Sobre mim</Link>
                <Link>Meus serviços</Link>
            </SectionLink>
        </ContainerNav>
    )
}

export default Navbar;