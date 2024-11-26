// import { IconLink } from "@/components/Molecules/Icon/IconLink/Index";
import { Card } from "@/components";
import styles from "./styles.module.css";

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
import { Login } from "@/components/Molecules/Inputs/Login";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/materials">
        <p>Login</p>
      </Link>
      {/* <Login /> */}
      <div className={styles["margin-top"]}>
        <div className="flex-col-center">
          <p className={styles["dbec"]}>DAILY BASIS ENGLISH COURSE</p>
          <Image
            src={ukUSflag}
            alt="Uk / USA flag"
            className={styles["uk-us-flag"]}
          />
          <Image
            src={howYouDoing}
            alt="How you doing?"
            className={styles["how-you-doing"]}
          />
          <Image
            src={meComputer}
            alt="Avatar and computer"
            className={styles["me-computer"]}
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
            <Card>
              <div className="flex-col-8px-center">
                <Image
                  src={groupIcon}
                  alt="Icon of a group"
                  className={styles["icons"]}
                />
                <p>Aula individual ou em grupo.</p>
              </div>
            </Card>
            <Card>
              <div className="flex-col-8px-center">
                <Image
                  src={clockIcon}
                  alt="Icon of a clock"
                  className={styles["icons"]}
                />
                <p>
                  Aulas de 1 hora ou mais conforme a disponibilidade do aluno e
                  do professor.
                </p>
              </div>
            </Card>
            <Card>
              <div className="flex-col-8px-center">
                <Image
                  src={laptopComputerIcon}
                  alt="Icon of a laptop computer"
                  className={styles["icons"]}
                />
                <p>Material como áudios, vídeos e exercícios online.</p>
              </div>
            </Card>
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
    </>
  );
}
