import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Card } from "@/components/Card/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { Collapsible } from "@/components/Collapsible/Collapsible";
import Image from "next/image";

// Images
import civet from "@/img/civet.jpg";

const radio = [
  {
    title: "1. Choose the correct answer.",
    question:
      "1. What does the story say about disease transmissions from one animal species to another?",
    options: [
      {
        label:
          "Transmissions are a problem because one animal species may cause another species to have immunity.",
        isCorrect: false,
      },
      {
        label:
          "Most disease transmissions go from one animal species to another.",
        isCorrect: true,
      },
      {
        label:
          "Humans give as many viruses to animal species as animal species give to humans.",
        isCorrect: false,
      },
      {
        label: "This event is called zoonosis." ,
        isCorrect: false,
      },
    ],
  },
  {
    question: "2. What is an example of a disease that is believed to have spread from animals to humans?",
    options: [
      {
        label: "AIDS",
        isCorrect: false,
      },
      {
        label: "COVID-19",
        isCorrect: false,
      },
      {
        label: "Ebola",
        isCorrect: false,
      },
      { 
        label: "All of the above.",
        isCorrect: true,
      },
    ],
  },
  {
    question: "3. What is true about human-to-animal disease transmission?",
    options: [
      {
        label: "Humans give about two times as many viruses to animals than they give to humans.",
        isCorrect: true,
      },
      {
        label: "About 36 percent of transmissions are human-to-animal.",
        isCorrect: false,
      },
      {
        label: "Human-to-animal disease transmission is called zoonosis.",
        isCorrect: false,
      },
      { 
        label: "It happens less often than animal-to-human transmission.",
        isCorrect: false,
      },
    ],
  },
  {
    question: "4. Why does Cedric Tan say bird flu H591 is especially dangerous to other species?",
    options: [
      {
        label: "Birds have no immunity to the disease.",
        isCorrect: false,
      },
      {
        label: "Diseases that come from birds are usually harmful.",
        isCorrect: false,
      },
      {
        label: "The new species has no pre-existing immunity to the disease.",
        isCorrect: true,
      },
      { 
        label: "It is a serious case of anthroponosis.",
        isCorrect: false,
      },
    ],
  },
];

export default function StudyHumansGiveMoreVirusesToAnimalsThanTheyGiveUs() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={[
          "Study: Humans Give More Viruses To Animals Than They Give Us",
        ]}
      />
      <div className="line-break">
        <Card bgColor="black" textColor="white">
          <b>Discussion</b>
        </Card>
        <Collapsible labelBold="Can virus be transmitted from animals to humans and vice verse?">
          <div className="line-break">
            <p>
              Yes, certain viruses can infect both humans and animals. These
              viruses are known as zoonotic viruses. Zoonotic viruses can be
              transmitted from animals to humans and vice versa. Here are some
              examples:
            </p>
            <div>
              <p>
                <span className="bold">1. Influenza Virus:</span> Some strains
                of the influenza virus, such as H1N1 and H5N1, can infect both
                humans and animals, particularly birds and pigs.
              </p>
              <p className="portuguese">
                {" "}
                Vírus da Influenza: Algumas cepas do vírus da influenza, (tais)
                como H1N1 e H5N1, podem infectar tanto humanos quanto animais,
                particularmente aves e suínos.
              </p>
            </div>
            <div>
              <p>
                <span className="bold">2. Coronaviruses:</span> The SARS-CoV-2
                virus, responsible for COVID-19, likely originated in animals
                (possibly bats) and jumped to humans. Other coronaviruses, like
                SARS-CoV and MERS-CoV, have also crossed from animals (civets
                and camels, respectively) to humans.
              </p>
              <p className="portuguese">
                O vírus SARS-CoV-2, responsável pela COVID-19, provavelmente se
                originou em animais (possivelmente morcegos) e passou para os
                humanos. Outros coronavírus, como o SARS-CoV e o MERS-CoV,
                também cruzaram de animais (civetas e camelos, respectivamente)
                para humanos.
              </p>
            </div>
            <div>
              <p>African civet</p>
              <Image
                src={civet}
                alt="African civet"
                width={300}
                className="img-border"
              />
            </div>
            <div>
              <p>
                <span className="bold">3. Rabies Virus:</span> Rabies is a
                well-known zoonotic virus that affects mammals, including
                humans, dogs, bats, and other wildlife.
              </p>
              <p className="portuguese">
                3. Vírus da Raiva: A raiva é um vírus zoonótico bem conhecido
                que afeta mamíferos, incluindo humanos, cães, morcegos e outros
                animais selvagens.
              </p>
            </div>
            <div>
              <p>
                <span className="bold">4. Ebola Virus:</span> This virus, which
                causes severe hemorrhagic fever, is thought to be transmitted to
                humans from fruit bats and other wildlife.
              </p>
              <p className="portuguese">
                4. Vírus Ebola: Este vírus, que causa febre hemorrágica grave, é
                considerado transmitido para os humanos a partir de morcegos
                frugívoros e outros animais selvagens.
              </p>
            </div>
            <div>
              <p>
                <span className="bold">5. West Nile Virus:</span> Transmitted by
                mosquitoes, this virus can infect humans, birds, and horses.
              </p>
              <p className="portuguese">
                5. Vírus do Nilo Ocidental: Transmitido por mosquitos, este
                vírus pode infectar humanos, aves e cavalos.
              </p>
            </div>
            <div>
              <p>
                <span className="bold">6. Zika Virus:</span> Also transmitted by
                mosquitoes, it can infect humans and non-human primates.
              </p>
              <p className="portuguese">
                6. Vírus Zika: Também transmitido por mosquitos, pode infectar
                humanos e primatas não humanos.
              </p>
            </div>
            <div>
              <p>
                These viruses can sometimes mutate and adapt to different
                hosts,making cross-species transmission possible. The study of
                zoonotic viruses is crucial for understanding how diseases
                spread and for developing preventive measures to protect both
                human and animal health.
              </p>
              <p className="portuguese">
                Esses vírus podem, às vezes, sofrer mutações e se adaptar a
                diferentes hospedeiros, tornando possível a transmissão entre
                espécies. O estudo de vírus zoonóticos é crucial para entender
                como as doenças se espalham e para desenvolver medidas
                preventivas para proteger tanto a saúde humana quanto a saúde
                animal.
              </p>
            </div>
          </div>
        </Collapsible>
        <p>
          <b>Now listen to the article.</b>
        </p>
        <div className="sticky">
          <AudioPlayer audioSrc="/assets/audio/specific-purposes/medicine/articles/study-humans-give-more-viruses-to-animals-than-they-give-us/study-humans-give-more-viruses-to-animals-than-they-give-us.mp3" />
        </div>
        <div>
          <p>
            Some of the{" "}
            <DictionaryCard label="deadliest" audioSrc="/d/deadliest.mp3" />{" "}
            diseases to infect humans have come from pathogens that jumped from
            animals to people. The virus that causes AIDS, for example, came
            from{" "}
            <DictionaryCard label="chimpanzees" audioSrc="/c/chimpanzees.mp3" />
            . And many experts believe the virus that caused the COVID-19
            pandemic came from bats.
          </p>
          <p className="portuguese">
            Algumas das doenças mais mortais a infectar os seres humanos
            surgiram de patógenos que saltaram de animais para pessoas. O vírus
            que causa a AIDS, por exemplo, veio dos chimpanzés. E muitos
            especialistas acreditam que o vírus que causou a pandemia de
            COVID-19 veio dos morcegos.
          </p>
        </div>
        <div>
          <p>
            But, as a new study shows, this disease exchange has not been just
            from animals to humans. In fact, research of all the publicly
            available viral genome sequences produced a surprising result:
            humans give about two times as many viruses to animals than they
            give to us.
          </p>
          <p className="portuguese">
            Mas, como um novo estudo mostra, essa troca de doenças não tem sido
            apenas de animais para humanos. Na verdade, a pesquisa de todas as
            sequências genômicas virais disponíveis publicamente produziu um
            resultado surpreendente: os humanos transmitem cerca de duas vezes
            mais vírus para os animais do que eles nos transmitem.
          </p>
        </div>
        <div>
          <p>
            The researchers looked at nearly 12 million virus genomes and found
            almost 3,000 times a virus jumped from one species to another. Of
            those, 79 percent involved a virus going from one animal species to
            another animal species. The remaining 21 percent involved humans. Of
            those, 64 percent were human-to-animal transmissions. Thirty-six
            percent were animal-to-human transmissions.
          </p>
          <p className="portuguese">
            Os pesquisadores analisaram quase 12 milhões de genomas de vírus e
            descobriram quase 3.000 vezes em que um vírus saltou de uma espécie
            para outra. Destes, 79% envolveram um vírus passando de uma espécie
            animal para outra espécie animal. Os restantes 21% envolveram
            humanos. Destes, 64% foram transmissões de humano para animal.
            Trinta e seis por cento foram transmissões de animal para humano.
          </p>
        </div>
        <div>
          <p>
            Scientists call the human-to animal transmission anthroponosis.
            Animal-to-human transmission is called zoonosis.
          </p>
          <p className="portuguese">
            Os cientistas chamam a transmissão de humano para animal de
            "antroponose". A transmissão de animal para humano é chamada de
            "zoonose".
          </p>
        </div>
        <div>
          <p>
            The animals affected by anthroponosis included pets like cats and
            dogs; domesticated animals like pigs, horses and cattle; birds such
            as chickens and ducks; primates such as chimpanzees, gorillas and
            howler monkeys; and other wild animals like raccoons and the African
            soft-furred mouse.
          </p>
          <p className="portuguese">
            Os animais afetados pela antroponose incluíam animais de estimação
            como gatos e cachorros; animais domésticos como porcos, cavalos e
            gado; aves como galinhas e patos; primatas como chimpanzés, gorilas
            e macacos-uivadores; e outros animais selvagens como guaxinins e o
            rato africano de pelo macio.
          </p>
        </div>
        <div>
          <p>
            Wild animals were more likely to experience human-to-animal
            transmission than the other way around. The study represents humans’
            large “impact on the environment and the animals around us," said
            Cedric Tan. He is a doctoral student in biology at the University
            College London Genetics Institute. He was a lead writer of the
            study, which appeared recently in the publication Nature Ecology &
            Evolution.
          </p>
          <p className="portuguese">
            Os animais selvagens tinham mais probabilidade de experimentar a
            transmissão de humano para animal do que o contrário. O estudo
            representa o "grande impacto dos humanos no meio ambiente e nos
            animais ao nosso redor", disse Cedric Tan. Ele é estudante de
            doutorado em biologia no Instituto de Genética do University College
            London. Tan foi um dos principais redatores do estudo, que foi
            recentemente publicado na revista Nature Ecology & Evolution.
          </p>
        </div>
        <div>
          <p>
            People and animals carry many microbes that can jump to another
            species through close contact. The study looked at viral
            transmissions involving all the vertebrate groups: mammals, birds,
            reptiles, amphibians and fish.
          </p>
          <p className="portuguese">
            Pessoas e animais carregam muitos micróbios que podem passar para
            outra espécie por meio de contato próximo. O estudo analisou as
            transmissões virais envolvendo todos os grupos de vertebrados:
            mamíferos, aves, répteis, anfíbios e peixes.
          </p>
        </div>
        <div>
          <p>
            Viruses go between species in the same ways viruses are transmitted
            between humans, Tan said. That includes “direct contact with
            infected fluids, or getting bitten by other species, amongst
            others."
          </p>
          <p className="portuguese">
            Os vírus passam entre as espécies da mesma forma que são
            transmitidos entre os humanos, disse Tan. Isso inclui "contato
            direto com fluidos infectados ou ser mordido por outras espécies,
            entre outros."
          </p>
        </div>
        <div>
          <p>
            But before the virus enters a different species, it must either have
            “the biological toolkit, or acquire host-specific adaptations, to
            enter the cells of the new host species and exploit their
            resources," Tan added.
          </p>
          <p className="portuguese">
            Mas antes de o vírus entrar em uma espécie diferente, ele deve ter
            "o conjunto de ferramentas biológicas, ou adquirir adaptações
            específicas do hospedeiro, para entrar nas células da nova espécie
            hospedeira e explorar seus recursos", acrescentou Tan.
          </p>
        </div>
        <div>
          <p>
            Over thousands of years, pandemics that have killed millions of
            people have been caused by pathogens like viruses, bacteria and
            fungi that crossed over to people from animals.
          </p>
          <p className="portuguese">
            Ao longo de milhares de anos, pandemias que mataram milhões de
            pessoas foram causadas por patógenos como vírus, bactérias e fungos
            que passaram para as pessoas a partir de animais.
          </p>
        </div>
        <div>
          <p>
            Francois Balloux is director of the University College London
            Genetics Institute and one of the study’s co-writers. He said a
            large majority of pathogens in humans came from animals at some
            point in time.
          </p>
          <p className="portuguese">
            Francois Balloux é diretor do Instituto de Genética do University
            College London e um dos coautores do estudo. Ele disse que uma
            grande maioria dos patógenos em humanos veio de animais em algum
            momento no tempo.
          </p>
        </div>
        <div>
          <p>
            "The current biggest threat is probably bird flu H5N1, which is
            circulating in wild birds,” he said. The main reason recent pathogen
            jumps can be so harmful is because the “population of host species
            <mark> has no pre-existing immunity” to the new disease</mark>, he
            added.
          </p>
          <p className="portuguese">
            "O maior perigo atual provavelmente é a gripe aviária H5N1, que está
            circulando em aves selvagens", disse ele. A principal razão pela
            qual os saltos de patógenos recentes podem ser tão prejudiciais é
            porque "a população das espécies hospedeiras não possui imunidade
            pré-existente" à nova doença, acrescentou.
          </p>
        </div>
        <div>
          <p>
            In the 14th century, the bacterial disease bubonic plague killed
            millions of people in Europe, Asia, the Middle East and North
            Africa. It was caused by a bacteria normally found in wild rodents.
          </p>
          <p className="portuguese">
            No século XIV, a doença bacteriana peste bubônica matou milhões de
            pessoas na Europa, Ásia, Oriente Médio e Norte da África. Foi
            causada por uma bactéria normalmente encontrada em roedores
            selvagens.
          </p>
        </div>
        <div>
          <p>
            And present-day diseases like the Ebola virus similarly came from
            animals.
          </p>
          <p className="portuguese">
            E doenças contemporâneas como o vírus Ebola também tiveram origem em
            animais.
          </p>
        </div>
        <div>
          <p>
            Most species-to-species transmissions are of little threat, Balloux
            added.
          </p>
          <p className="portuguese">
            Balloux acrescentou que a maioria das transmissões de espécie para
            espécie representa pouco risco.
          </p>
        </div>
        <div>
          <p>
            "In most cases, such infections lead nowhere, as the virus is poorly
            adapted and there is no onward transmission in the new host," he
            said.
          </p>
          <p className="portuguese">
            "Na maioria dos casos, tais infecções não levam a lugar algum, já
            que o vírus está mal adaptado e não há transmissão subsequente no
            novo hospedeiro", disse ele.
          </p>
        </div>
        <div>
          <p>I’m Dan Novak.</p>
          <p className="portuguese"></p>
        </div>
        <Card bgColor="black" textColor="white">
          <b>Extra</b>
        </Card>
        <a href="https://edition.cnn.com/2019/08/02/health/amputation-dog-lick-ohio-woman/index.html">
          <p>
            A woman lost her hands and legs to an infection from puppy kisses
          </p>
        </a>
        <Card bgColor="black" textColor="white">
          <b>Exercises</b>
        </Card>
        <Radio questions={radio} />
      </div>
    </>
  );
}
