"use client";
import { useState } from "react";
import { Card } from "@/components";
import "./styles.css";
import { Button } from "@/components/Atoms/Button";
import Image from "next/image";
import {
  ukUSflag,
  howYouDoing,
  meComputer,
  groupIcon,
  clockIcon,
  laptopComputerIcon,
  contentIcon,
  infoIcon,
  moneyIcon,
  emailIcon,
  whatsappIcon,
} from "@/img/index";

const card1 = [{ text: "Aula individual ou em grupo." }];
const card2 = [
  {
    text: "Aulas de 1 hora ou mais conforme a disponibilidade do aluno e do professor.",
  },
];
const card3 = [{ text: "Material como áudios, vídeos e exercícios online." }];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="position-relative">
      {/* <Login /> */}
      <Button label="Login" onClick={() => setIsOpen(!isOpen)}/>
  
      {isOpen && <div className="login">
        <p className="bold">Email</p>
        <input type="text"></input>
        <p className="bold">Password</p>
        <input type="text"></input>
        <Button
          label="Login"
          onClick={() => (window.location.href = "/materials")}
        ></Button>
        Not a member? Contat me!
      </div>}

      <div className="margin-top">
        <div className="flex-col-center">
          <p className="dbec">DAILY BASIS ENGLISH COURSE</p>
          <Image src={ukUSflag} alt="Uk / USA flag" className="uk-us-flag" />
          <Image
            src={howYouDoing}
            alt="How you doing?"
            className="how-you-doing"
          />
          <Image
            src={meComputer}
            alt="Avatar and computer"
            className="me-computer"
          />
        </div>

        <div className="line-break">
          <p className="justify">
            <span className="bold">DAILY BASIS ENGLISH COURSE</span> oferece
            aulas especializadas na língua Inglesa, fundamentando-se nas quatro
            habilidades como <span className="bold">Speaking</span> (ênfase em
            conversação), <span className="bold">Listening</span> (compreensão
            auditiva), <span className="bold">Reading</span> (Leitura) e{" "}
            <span className="bold">Writing</span> (Escrita).
          </p>
          <div className="grid-3fr-8px">
            <div className="flex-col-8px-center">
              <Image src={groupIcon} alt="Icon of a group" className="icons" />
              <Card cards={card1} />
            </div>
            <div className="flex-col-8px-center">
              <Image src={clockIcon} alt="Icon of a clock" className="icons" />
              <Card cards={card2} />
            </div>
            <div className="flex-col-8px-center">
              <Image
                src={laptopComputerIcon}
                alt="Icon of a laptop computer"
                className="icons"
              />
              <Card cards={card3} />
            </div>
          </div>
          <div>
            {/* <IconLink imgSrc={contentIcon} link="/" prompt="Amostra conteúdo" />
            <IconLink imgSrc={infoIcon} link="/about" prompt="Sobre" />
            <IconLink imgSrc={moneyIcon} link="/" prompt="Preço" /> */}
          </div>
          <div>
            <p className="bold">Contato</p>
            {/* <IconLink
              imgSrc={emailIcon}
              link="/price"
              prompt="paulofernando78@gmail.com"
            />
            <IconLink imgSrc={whatsappIcon} link="/" prompt="..." /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
