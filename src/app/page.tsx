"use client";

// Components
import { useState } from "react";
import { Button, SignIn, SignUp } from "@/components";
import { IconContent } from "@/components/Molecules/IconContent";
import Image from "next/image";
import {
  ukUSflag,
  howYouDoing,
  meComputer,
  groupIcon,
  clockIcon,
  laptopComputerIcon,
  infoIcon,
  moneyIcon,
  emailIcon,
  whatsappIcon,
} from "@/img/index";

// Font
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Styles
import "./global.css";
import styles from "./page.module.css";
import { ThemeSwitch } from "@/components/Molecules/ThemeSwitch";

const iconContent = [
  {
    imgSrc: groupIcon,
    imgAlt: "Group Icon",
    content: "Aula individual ou em grupo.",
  },
  {
    imgSrc: laptopComputerIcon,
    imgAlt: "Group Icon",
    content: "Material como áudios, vídeos e exercícios online.",
    link: "/amostra",
    linkLabel: "Clique aqui (Amostra)",
  },
  {
    imgSrc: clockIcon,
    imgAlt: "Group Icon",
    content:
      "Aulas de 50 minutes ou mais conforme a disponibilidade do aluno e do professor.",
    link: "https://calendar.google.com/calendar/u/0?cid=cGF1bG9mZXJuYW5kbzc4QGdtYWlsLmNvbQ",
    linkLabel: "Clique aqui",
  },
  {
    imgSrc: infoIcon,
    imgAlt: "Info Icon",
    link: "/sobre",
    linkLabel: "Sobre",
  },
  {
    imgSrc: moneyIcon,
    imgAlt: "Money Icon",
    link: "/preco",
    linkLabel: "Preço",
  },
];

const iconContentContact = [
  {
    imgSrc: emailIcon,
    imgAlt: "Email Icon",
    link: "mailto:paulofernando78@gmail.com",
    linkLabel: "paulofernando78@gmail.com",
  },
  {
    imgSrc: whatsappIcon,
    imgAlt: "Whatsapp Icon",
    link: "https://wa.me/+5511981672145",
    linkLabel: "+55 (11) 981672145",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div>
      <div className={styles["page-container"]}>
        <Button label="Student Access" onClick={() => setIsModalOpen(true)} />
      <ThemeSwitch />
      </div>

      {isModalOpen && (
        <div className={styles["wrapper-student-access"]}>
          <div className={styles["sign-in-container"]}>
            <SignIn handleFlipAction={handleFlip} />
          </div>
        </div>
      )}
      {/**/}
      <div className="margin-top bg">
        <div className="flex-col-center">
          <p className={`${lato.className} dbec`}>DAILY BASIS ENGLISH COURSE</p>
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
            <span className="font-bold">DAILY BASIS ENGLISH COURSE</span>{" "}
            oferece aulas especializadas na língua Inglesa, fundamentando-se nas
            quatro habilidades como <span className="font-bold">Speaking</span>{" "}
            (ênfase em conversação),{" "}
            <span className="font-bold">Listening</span> (compreensão auditiva),{" "}
            <span className="font-bold">Reading</span> (Leitura) e{" "}
            <span className="font-bold">Writing</span> (Escrita).
          </p>
          <div>
            <IconContent iconContents={iconContent} />
          </div>
          <div>
            <p className="font-bold" id="contact-me">
              Contato
            </p>
            <div>
              <IconContent iconContents={iconContentContact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
