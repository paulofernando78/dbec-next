"use client";
import { useState } from "react";
import { Button, SignIn } from "@/components/index";
import Image from "next/image";
import {
  ukUSflag,
  howYouDoing,
  meComputer,
  groupIcon,
  clockIcon,
  laptopComputerIcon,
  sampleIcon,
  infoIcon,
  moneyIcon,
  emailIcon,
  whatsappIcon,
} from "@/img/index";
import "./global.css";
import { IconLink } from "@/components/Molecules/IconLink";
import styles from "./styles.module.css";

const iconLink = [
  {
    imgSrc: sampleIcon,
    imgAlt: "Sample Icon",
    link: "/amostra",
    linkLabel: "Amostra (Sample)",
  },
  {
    imgSrc: infoIcon,
    imgAlt: "Info Icon",
    link: "/sobre",
    linkLabel: "Sobre (About)",
  },
  {
    imgSrc: moneyIcon,
    imgAlt: "Money Icon",
    link: "/preco",
    linkLabel: "Preço (Pricing)",
  },
];

const iconLinkContact = [
  {
    imgSrc: emailIcon,
    imgAlt: "Email Icon",
    link: "",
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
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div>
      <div className={styles["page-container"]}>
        <Button label="Student Access" onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <div className={styles["wrapper-student-access"]}>
          {isFlipped ? (
            <div className={styles["sign-in-container"]}>
              <SignIn handleFlipAction={handleFlip} />
            </div>
          ) : (
            <div className={styles["sign-up-container"]}>
              {/* <SignUp handleFlipAction={handleFlip} /> */}
            </div>
          )}
        </div>
      )}

      <div className="margin-top bg">
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
            <span className="font-bold">DAILY BASIS ENGLISH COURSE</span>{" "}
            oferece aulas especializadas na língua Inglesa, fundamentando-se nas
            quatro habilidades como <span className="font-bold">Speaking</span>{" "}
            (ênfase em conversação),{" "}
            <span className="font-bold">Listening</span> (compreensão auditiva),{" "}
            <span className="font-bold">Reading</span> (Leitura) e{" "}
            <span className="font-bold">Writing</span> (Escrita).
          </p>
          <div className="grid-3fr-8px">
            <div className="flex-col-8px-center cards">
              <Image src={groupIcon} alt="Icon of a group" className="icons" />
              <p>Aula individual ou em grupo.</p>
            </div>
            <div className="flex-col-8px-center cards">
              <Image src={clockIcon} alt="Icon of a clock" className="icons" />
              <p>
                Aulas de 50 minutes ou mais conforme a disponibilidade do aluno
                e do professor.
              </p>
            </div>
            <div className="flex-col-8px-center cards">
              <Image
                src={laptopComputerIcon}
                alt="Icon of a laptop computer"
                className="icons"
              />
              <p>Material como áudios, vídeos e exercícios online.</p>
            </div>
          </div>
          <div>
            <IconLink iconLinks={iconLink} />
          </div>
          <div>
            <p className="font-bold" id="contact-me">
              Contato
            </p>
            <div>
              <IconLink iconLinks={iconLinkContact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
