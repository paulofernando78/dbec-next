import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Paragraph } from "@/components/Paragraph/Paragraph";

import doc from "./doctor-patient.png";

const paragraphs = [
  {
    imgSrcBefore: doc,
    altNameBefore: "Doctor with patient",
    enParagraph: "Gene treatments are being credited with permitting several children born with deafness to hear again.",
    ptParagraph: "Os tratamentos genéticos estão sendo creditados por permitir que várias crianças nascidas com surdez voltem a ouvir.",
    imgSrcAfter: "",
    altNameAfter: "...",
  },
  {
    enParagraph: "Gene therapy is a medical treatment that aims to change a few of a patient's genes to cure a genetic disease.",
    ptParagraph: "A terapia genética é um tratamento médico que visa modificar alguns dos genes de um paciente para curar uma doença genética."
  },
  {
    enParagraph: "A small study <mark>re</mark>cently published in The Lancet reported improvements in the hearing in five of six children who were treated in China.",
    ptParagraph: "Um pequeno estudo publicado recentemente no The Lancet relatou melhorias na audição em cinco de seis crianças que foram tratadas na China."
  },
  {
    enParagraph: "Around the same time, the Children's Hospital of Philadelphia in the U.S. eastern state of Pennsylvania announced similar improvements in an 11-year-old boy treated there. And earlier, Chinese researchers published a study showing similar improvements in two other children.",
    ptParagraph: "Por volta do mesmo período, o Hospital Infantil da Filadélfia, no estado oriental da Pensilvânia, nos Estados Unidos, anunciou melhorias semelhantes em um menino de 11 anos lá tratado. E anteriormente, pesquisadores chineses publicaram um estudo mostrando melhorias semelhantes em outras duas crianças."
  },
  {
    enParagraph: "The experimental methods, or therapies, target only one rare condition. But scientists say similar treatments could someday help many more children with other kinds of deafness caused by genes.",
    ptParagraph: "Os métodos experimentais, ou terapias, visam apenas uma condição rara. Mas os cientistas afirmam que tratamentos semelhantes poderiam, um dia, ajudar muitas mais crianças com outros tipos de surdez causada por genes."
  },
  {
    enParagraph: "Around the world, 34 million children have deafness or hearing loss. And information from the U.S. Centers for Disease Control and Prevention says genes are responsible for up to 60 percent of cases.",
    ptParagraph: "Ao redor do mundo, 34 milhões de crianças têm surdez ou perda de audição. E informações dos Centros de Controle e Prevenção de Doenças dos Estados Unidos indicam que os genes são responsáveis por até 60 por cento dos casos."
  },
  {
    enParagraph: "Deafness caused by genes is passed down from parents to children. It is called hereditary deafness. It is the latest condition scientists are targeting with gene therapy. Gene therapy is already approved to treat illnesses such as sickle cell disease and severe hemophilia.",
    ptParagraph: "A surdez causada por genes é transmitida dos pais para os filhos. É chamada de surdez hereditária. É a mais recente condição que os cientistas estão visando com terapia genética. A terapia genética já é aprovada para tratar doenças como a anemia falciforme e a hemofilia grave"
  },
  {
    enParagraph: "Children with hereditary deafness often get a device called a cochlear implant that helps them hear sound.",
    ptParagraph: "Crianças com surdez hereditária frequentemente recebem um dispositivo chamado implante coclear, que as ajuda a ouvir os sons.",
    imgSrcAfter: "",
    altNameAfter: "..."
  },
  {
    enParagraph: "<b>Treatment results</b>",
    ptParagraph: "<b>Resultado dos tratamentos</b>"
  },
  {
    enParagraph: "The team recorded videos of patients. One shows a baby, who formerly could not hear at all, looking back in response to a doctor's words six weeks after treatment. Another shows a little girl 13 weeks after treatment repeating father, mother, grandmother, sister, and “I love you.”",
    ptParagraph: "A equipe gravou vídeos dos pacientes. Em um deles, um bebê, que anteriormente não conseguia ouvir nada, olha para trás em resposta às palavras de um médico seis semanas após o tratamento. Em outro vídeo, uma menininha, 13 semanas após o tratamento, repete \"pai\", \"mãe\", \"avó\", \"irmã\" e \"eu te amo\"."
  },
  {
    enParagraph: "All the children in the experiments have a condition that is believed to cause two to eight percent of hereditary deafness. It is caused by changes in a gene responsible for an inner ear protein called otoferlin, which helps hair cells send sound signals to the brain.",
    ptParagraph: "Todas as crianças nos experimentos têm uma condição que se acredita causar de dois a oito por cento da surdez hereditária. É causada por mudanças em um gene responsável por uma proteína do ouvido interno chamada otoferlina, que ajuda as células ciliadas a enviar sinais sonoros para o cérebro."
  },
  {
    enParagraph: "The researchers say that the one-time therapy gives a working copy of that gene to the inner ear during a medical operation. Most of the children were treated in one ear, although one child in the two-person study was treated in both ears.",
    ptParagraph: "Os pesquisadores afirmam que a terapia única fornece uma cópia funcional desse gene para o ouvido interno durante uma operação médica. A maioria das crianças foi tratada em um ouvido, embora uma criança no estudo com duas pessoas tenha sido tratada em ambos os ouvidos."
  },
  {
    enParagraph: "The study with six children took place at Fudan University in Shanghai. Dr. Yilai Shu helped lead the study and trained in Chen's laboratory. Chen was involved in the research. Chinese science organizations and biotechnology company Shanghai Refreshgene Therapeutics helped provide financial support.",
    ptParagraph: "O estudo com seis crianças ocorreu na Universidade Fudan, em Xangai. O Dr. Yilai Shu ajudou a liderar o estudo e foi treinado no laboratório do Dr. Chen. Chen esteve envolvido na pesquisa. Organizações científicas chinesas e a empresa de biotecnologia Shanghai Refreshgene Therapeutics ajudaram a fornecer apoio financeiro."
  },
  {
    enParagraph: "Researchers observed the children for about six months. They do not know why the treatment did not work in one of them. But the five others, who were completely deaf, can now hear a normal discussion, the researchers said.",
    ptParagraph: "Os pesquisadores observaram as crianças por cerca de seis meses. Eles não sabem por que o tratamento não funcionou em uma delas. Mas os outros cinco, que eram completamente surdos, agora podem ouvir uma discussão normal, afirmaram os pesquisadores."
  },
  {
    enParagraph: "Chen estimated they now hear at a level 60 percent to 70 percent of normal. The therapy caused no major side effects.",
    ptParagraph: "Chen estimou que agora eles ouvem em um nível de 60 a 70 por cento do normal. A terapia não causou grandes efeitos colaterais graves."
  },
  {
    enParagraph: "Early results from other research have shown similar results.",
    ptParagraph: "Resultados iniciais de outras pesquisas têm mostrado resultados semelhantes."
  },
  {
    enParagraph: "Regeneron Pharmaceuticals is a biotech company based in New York state. It announced in October that a child under two years old showed improvements six weeks after gene therapy. The results came from a study Regeneron did with support from Decibel Therapeutics, a company in Boston.",
    ptParagraph: "A Regeneron Pharmaceuticals é uma empresa de biotecnologia sediada no estado de Nova York. Em outubro, anunciou que uma criança com menos de dois anos mostrou melhorias seis semanas após a terapia genética. Os resultados vieram de um estudo realizado pela Regeneron com apoio da Decibel Therapeutics, uma empresa sediada em Boston."
  },
  {
    enParagraph: "Columbia University's Dr. Lawrence Lustig is involved in the Regeneron study. He said although the children in these studies do not end up with very good hearing, \"even a moderate hearing loss recovery in these kids is pretty astounding.\"",
    ptParagraph: "O Dr. Lawrence Lustig, da Universidade de Columbia, está envolvido no estudo da Regeneron. Ele disse que, embora as crianças nessas pesquisas não resultam com uma audição muito boa, \"mesmo uma recuperação moderada da perda auditiva nessas crianças já é bastante impressionante\"."
  },
  {
    enParagraph: "He added that many questions remain. They include how long the therapies will last and if hearing will continue to improve in the children.",
    ptParagraph: "Ele acrescentou que muitas questões ainda permanecem (precisam ser discutidas). Elas incluem quanto tempo as terapias vão durar e se a audição continuará a melhorar nas crianças."
  },
  {
    enParagraph: "Some people question if gene therapy for deafness is ethical.",
    ptParagraph: "Alguns questionam se a terapia genética para surdez é ética."
  },
  {
    enParagraph: "Teresa Blankmeyer Burke is a professor who is deaf and who deals with medical ethics. She teaches at Gallaudet University, a university for deaf people in Washington, D.C. She said that there is no agreement about the need for gene therapy targeting deafness.",
    ptParagraph: "Teresa Blankmeyer Burke é uma professora surda que lida com ética médica. Ela leciona na Universidade Gallaudet, uma universidade para pessoas surdas em Washington, D.C. Ela disse que não há consenso sobre a necessidade de terapia genética direcionada à surdez."
  },
  {
    enParagraph: "She also pointed out that deafness does not cause severe or deadly illness. Blankmeyer Burke said that it is important to work with deaf community members about the importance of gene therapy. She added gene therapy is seen by many as a possible threat to \"signing Deaf communities.\"",
    ptParagraph: "Ela também observou que a surdez não causa doenças graves ou mortais. Blankmeyer Burke disse que é importante trabalhar com membros da comunidade surda sobre a importância da terapia genética. Ela acrescentou que a terapia genética é vista por muitos como uma possível ameaça para as \"comunidades surdas que usam a língua de sinais\"."
  },
  {
    enParagraph: "However, Chen said: \"This is real proof showing gene therapy is working.\" And he added, \"It opens up the whole field.\"",
    ptParagraph: "No entanto, Chen disse: \"Esta é uma prova real de que a terapia genética está funcionando.\" E ele acrescentou: \"Isso abre todo o campo (da genética para novas possibilidades e oportunidades).\""
  },
  {
    enParagraph: "I’m Faith Pirlo. And I’m Gregory Stachel.",
  },
];

export default function StudiesGeneTreatmentLetsChildrenDeafAtBirthHear() {
  return (
    <div>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={[
          "Articles",
          "Studies: Gene Treatment Lets Children Deaf at Birth Hear",
        ]}
      />
      <div>
        <Paragraph paragraphs={paragraphs} />
      </div>
    </div>
  );
}
