import Image from "next/image";

import styles from "../styles.module.css";

import { meLinkedIn } from "@/img/index";
import { Card } from "@/components";

export default function About() {
  return (
    <>
      <div className="line-break">
          <div className="flex-12px">
            <Image
              src={meLinkedIn}
              alt="Avatar"
              className={styles["about-picture"]}
            />
            <p className="justify">
              Fundador do Daily Basis English Course, é apaixonado pelos estudos
              da língua inglesa desde 96. Começou a lecionar aulas de inglês
              particulares em meados de 2004. Já morou nos EUA - Califórnia.
              Estuda web development e programação desde 2022 com o objetivo de
              criar a sua própria plataforma de ensino.
            </p>
          </div>
         <div className="line-break">
            <Card bgColor="black" textColor="white"><p className="bold">Formação</p></Card>
            <div>
              <p className="bold">
                • Los Angeles Music Academy LAMA, Pasadena – CA
              </p>
              <p>Setembro 2000 – Março 2001</p>
              <p>Majoring in Drums</p>
            </div>
            <div>
              <p className="bold">• Intrax English Institute, San Diego – CA</p>
              <p>Março 2000 – Agosto 2000</p>
              <p>Intensive Course</p>
            </div>
            <div>
              <p className="bold">
                • UEC, Universal English Course, Salvador – BA
              </p>
              <p>Dezembro 1998.</p>
              <p>Grammar Research and Oral (GROW)</p>
            </div>
            <div>
              <p className="bold">
                • UEC, Universal English Course, Salvador – BA
              </p>
              <p>Janeiro 1996 – Fevereiro 1998</p>
              <p>Basic Course</p>
            </div>
         </div>
          <div className="line-break">
            <Card bgColor="black" textColor="white"><p className="bold">Experiência</p></Card>
            <div>
              <p className="bold">• Seven Idiomas</p>
              <p>Julho 2019 - Jan 2024</p>
              <p>
                Aulas em escola de ingles para turmas de todas as idades e níveis.
              </p>
            </div>
            <div>
              <p className="bold">• DAILY BASIS ENGLISH COURSE</p>
              <p>Janeiro 2008 – até o momento</p>
              <p>
                Aulas em empresas de grande porte, estabelecimentos comerciais e
                residências, ministradas presencialmente ou por videoconferência.
              </p>
            </div>
            <div>
              <p className="bold">
                • MANHATTAN VILLAGE (Market Leader Business English), São Paulo –
                SP
              </p>
              <p>Novembro, 2006 – Agosto, 2007</p>
              <p>
                Aulas particulares presenciais em empresas de diversos segmentos.
              </p>
            </div>
            <div>
              <p className="bold">
                • AIMHIGH Idiomas (Callan Method), São Paulo – SP
              </p>
              <p>Abril 2005 – Dezembro 2008</p>
              <p>
                Aulas particulares presenciais em empresas de diversos segmentos e
                em domicílios.
              </p>
            </div>
            <div>
              <p className="bold">• Osborn English School, São Paulo – SP</p>
              <p>Março 2005 – Abril 2005</p>
              <p>
                Aulas em escola de ingles direcionadas para o publico adolescente.
              </p>
            </div>
            <div>
              <p className="bold">• House Teacher, Salvador – BA</p>
              <p>Fevereiro 2002 – Setembro 2002</p>
              <p>
                Aulas em escola de ingles para turmas de todas as idades e níveis.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
