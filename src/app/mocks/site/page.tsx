import {
  ukUSflag,
  howYouDoing,
  meComputer,
  groupIcon,
  clockIcon,
  laptopComputerIcon,
} from "@/img/index";
import Image from "next/image";

import styles from "./styles.module.css";
import { Card } from "@/components";

export default function Site() {
  return (
    <>
      <div className="flex-8px-center-wrap">
        <div className="flex-8px-center-wrap">
          <p>Email:</p>
          <input type="text" />
        </div>
        <div className="flex-8px-center-wrap">
          <p>Password:</p>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className={styles["margin-top"]}>
        <div className="flex-col-center">
          <p className="">DAILY BASIS ENGLISH COURSE</p>
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
            <p>...</p>
            <p>...</p>
            <p>...</p>
          </div>
          <div>
            <p className="bold">Contato</p>
          </div>
        </div>
      </div>
    </>
  );
}