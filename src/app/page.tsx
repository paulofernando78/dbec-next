"use client";
import { useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { Login } from "@/components/Molecules/Inputs/Login";
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
import "./styles.css";

const card1 = "Aula individual ou em grupo.";
const card2 = [
  "Aulas de 50 minutes ou mais conforme a disponibilidade do aluno e do professor.",
];
const card3 = "Material como áudios, vídeos e exercícios online.";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="position-relative">
      {/* <Login /> */}
      <Button label="Student Acess" onClick={() => setIsOpen(true)} />
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
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
            <div className="flex-col-8px-center cards">
              <Image src={groupIcon} alt="Icon of a group" className="icons" />
              <p>{card1}</p>
            </div>
            <div className="flex-col-8px-center cards">
              <Image src={clockIcon} alt="Icon of a clock" className="icons" />
              <p>{card2}</p>
            </div>
            <div className="flex-col-8px-center cards">
              <Image
                src={laptopComputerIcon}
                alt="Icon of a laptop computer"
                className="icons"
              />
              <p>{card3}</p>
            </div>
          </div>
          <div>
            <p className="flex-8px-center"><Image src={contentIcon} alt="Content icon"  className="icon-general"/> Sample (Amostra)</p>
            <p className="flex-8px-center"><Image src={infoIcon} alt="Content icon"  className="icon-general"/> About (Sobre)</p>
            <p className="flex-8px-center"><Image src={moneyIcon} alt="Content icon"  className="icon-general"/> Pricing (Preço)</p>
            {/* <IconLink imgSrc={contentIcon} link="/" prompt="Amostra conteúdo" />
            <IconLink imgSrc={infoIcon} link="/about" prompt="Sobre" />
            <IconLink imgSrc={moneyIcon} link="/" prompt="Preço" /> */}
          </div>
          <div>
            <p className="bold" id="contact-me">
              Contato
            </p>
            <p className="flex-8px-center"><Image src={emailIcon} alt="Email icon" className="icon-general" />paulofernando78@gmail.com</p>
            <p className="flex-8px-center"><Image src={whatsappIcon} alt="Whatsapp icon" className="icon-general"/>+55 (11) 981672145</p>
          </div>
        </div>
      </div>
    </div>
  );
}
