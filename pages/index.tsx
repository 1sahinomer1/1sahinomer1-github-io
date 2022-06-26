import {
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Medium,
  Mail,
} from "components/Icons";
import type { NextPage } from "next";
import Head from "next/head";

import * as S from "styles/Pages/index";

interface HomeProps {
  theme: string;
}

const Home: NextPage<HomeProps> = ({ theme }) => {
  return (
    <div>
      <Head>
        <title>Ömer</title>
        <meta
          name="description"
          content="Frontend Developer | Computer Engineering student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.InfoMain>
          <section>
            <S.Title>Hello I am Ömer</S.Title>
            <S.Info>
              I am a frontend developer who is passionate about coding I am
              interested in the frontend side.
            </S.Info>
            <S.Info>
              I write blog posts whenever I get the chance. You can read my
              blogs and review my projects from the links below.
            </S.Info>
          </section>
          <S.PhotoSection>
            <S.Photo alt="Omer Sahin" height={250} width={250} src="/pp.jpg" />
          </S.PhotoSection>
        </S.InfoMain>
        <S.Links>
          <S.StyledLink href="https://github.com/1sahinomer1">
            <Github fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="https://www.linkedin.com/in/omersahin1/">
            <Linkedin fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="https://medium.com/@1sahinomer1">
            <Medium fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="https://www.instagram.com/shnomr/">
            <Instagram fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="https://twitter.com/1sahinomer1">
            <Twitter fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="mailto:1sahinomer1@gmail.com">
            <Mail fill={theme === "dark"} />
          </S.StyledLink>
          <S.StyledLink href="/omerSahinCV.pdf">My Resume</S.StyledLink>
        </S.Links>
      </S.Main>
    </div>
  );
};

export default Home;
