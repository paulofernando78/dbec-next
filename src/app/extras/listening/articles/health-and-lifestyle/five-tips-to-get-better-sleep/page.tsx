"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { AudioPlayer } from "@/components/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

// Images

const radio = [
  {
    title: "1. Choose the correct answer.",
    question: "1. Question",
    options: [
      { isCorrect: false, label: "Answer 1" },
      { isCorrect: true, label: "Answer 2" },
      { isCorrect: false, label: "Answer 3" },
    ],
  },
];

export default function FiveTipsHowToGetBetterSleep() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={["Five Tips to Get Better Sleep"]}
      />
      <div className="line-break">
        <Card bgColor="black" textColor="white">
          <b>Discussion</b>
        </Card>
        <p>What are some tips to get better sleep in your opinion?</p>
        <p>
          <b>Now listen to the article.</b>
        </p>
        <AudioPlayer audioSrc="/assets/audio/specific-purposes/medicine/articles/five-tips-to-get-better-sleep/five-tips-to-get-better-sleep.mp3" />
        <div>
          <p>
            Do you spend too many nights trying to fall asleep? You are not
            alone.
          </p>
          <p className="portuguese">
            Você passa muitas noites tentando adormecer? Você não está sozinho.
          </p>
        </div>

        <div>
          <p>
            Nearly one-third of American adults say they do not get the
            suggested seven to nine hours of sleep a night.
          </p>
          <p className="portuguese">
            Quase um terço dos adultos americanos dizem que não dormem as sete a
            nove horas sugeridas por noite.
          </p>
        </div>

        <div>
          <p>
            Some of the major causes are <b>stress</b>,{" "}
            <DictionaryCard label="anxiety" audioSrc="/a/anxiety.mp3" />, and a
            culture that experts say is about{" "}
            <DictionaryCard
              label="productivity"
              audioSrc="/p/productivity.mp3"
            />
            , not rest.
          </p>
          <p className="portuguese">
            Algumas das principais causas são o estresse, a ansiedade e uma
            cultura que os especialistas dizem ser sobre produtividade, não
            sobre descanso.
          </p>
        </div>

        <div>
          <p>
            Molly Atwood of Johns Hopkins School of Medicine said, "You need to
            understand what your body needs and try your hardest to{" "}
            <DictionaryCard label="prioritize" audioSrc="/p/prioritize.mp3" />{" "}
            that and not just see sleep as kind of what’s left over of the day.
          </p>
          <p className="portuguese">
            Molly Atwood, da Escola de Medicina Johns Hopkins, disse: "Você
            precisa entender o que seu corpo precisa e tentar ao máximo
            priorizar isso e não apenas ver o sono como o que sobra do dia".
          </p>
        </div>

        <div>
          <p>
            Sleep experts say that you should avoid unproven methods to fall
            asleep and stay asleep. Instead, they suggest five simple ideas:
          </p>
          <p className="portuguese">
            Os especialistas em sono dizem que você deve evitar métodos não
            comprovados para adormecer e permanecer dormindo. Em vez disso, eles
            sugerem cinco ideias simples:
          </p>
        </div>

        <div>
          <p>1. Create a buffer zone</p>
          <p className="portuguese">Criar um "ambiente".</p>
        </div>

        <div>
          <p>
            First, try creating a “buffer zone” - a time of separation - between
            the end of your work day and your bedtime. Experts suggest leaving
            your work and daily responsibilities alone about an hour before bed.
          </p>
          <p className="portuguese">
            Primeiro, tente criar uma "zona de buffer" - um período de separação
            - entre o final do seu dia de trabalho e a hora de dormir.
            Especialistas sugerem deixar o trabalho e as responsabilidades
            diárias de lado cerca de uma hora antes de dormir.
          </p>
        </div>

        <div>
          <p>
            While in this "buffer zone," you should not check email, pay bills,
            do housework, or look on social media. Instead, try to relax with a
            book, enjoy a fun activity or spend time with loved ones.
          </p>
          <p className="portuguese">
            Durante esta "zona de buffer", você não deve verificar e-mails,
            pagar contas, fazer tarefas domésticas ou acessar as redes sociais.
            Em vez disso, tente relaxar com um livro, desfrutar de uma atividade
            divertida ou passar tempo com seus entes queridos.
          </p>
        </div>

        <div>
          <p>
            Dr. Annise Wilson of Baylor University said, "Anything that helps to
            center you and just helps you{" "}
            <DictionaryCard label="focus" audioSrc="/f/focus.mp3" /> and release
            a lot of that tension from the day will then help promote sleep.
          </p>
          <p className="portuguese">
            A Dra. Annise Wilson da Universidade Baylor disse: "Qualquer coisa
            que ajude a te centrar e apenas te ajude a focar e liberar muita
            daquela tensão do dia então ajudará a promover o sono.
          </p>
        </div>

        <div>
          <p>
            2. Watch what you{" "}
            <DictionaryCard label="eat" audioSrc="/e/eat.mp3" />
          </p>
          <p className="portuguese">Fique de olho no que você come.</p>
        </div>

        <div>
          <p>
            Eating a large meal right before bedtime can also hurt your sleep.
            So, try to eat in the early evening hours.
          </p>
          <p className="portuguese">
            Comer uma refeição grande imediatamente antes de dormir também pode
            prejudicar seu sono. Portanto, tente comer nas primeiras horas da
            noite.
          </p>
        </div>

        <div>
          <p>
            Atwood said that eating a large meal is "like giving your body a
            really large job to do right before sleep at a time when things are
            supposed to be shutting down."
          </p>
          <p className="portuguese">
            Atwood disse que comer uma refeição grande é "como dar ao seu corpo
            um trabalho realmente grande para fazer antes de dormir, num momento
            em que as coisas deveriam estar desacelerando".
          </p>
        </div>

        <div>
          <p></p>
          <p className="portuguese"></p>
        </div>

        <div>
          <p></p>
          <p className="portuguese"></p>
        </div>
        <div>
          <p>
            But do not go to bed very hungry, either. Try small amounts of food
            with protein or healthy fats, like cheese, almonds or peanut butter
            on whole grain bread.
          </p>
          <p className="portuguese">
            Mas também não vá para a cama com muita fome. Experimente pequenas
            quantidades de alimentos com proteínas ou gorduras saudáveis, como
            queijo, amêndoas ou manteiga de amendoim em pão integral.
          </p>
        </div>
        <div>
          <p>
            <b>3. Avoid caffeine and alcohol</b>
          </p>
          <p className="portuguese">Evite cafeína e álcool.</p>
        </div>
        <div>
          <p>
            Having an alcoholic drink or espresso after dinner could lead to a
            long night.
          </p>
          <p className="portuguese">
            Tomar uma bebida alcoólica ou um café espresso depois do jantar pode
            resultar em uma noite longa.
          </p>
        </div>
        <div>
          <p>
            While alcohol can help you fall asleep at first, it can also hurt
            your sleep cycle. As a result, the quality of sleep declines. The
            chances that you will wake up more often in the middle of the night
            increase.
          </p>
          <p className="portuguese">
            Embora o álcool possa ajudá-lo a pegar no sono inicialmente, também
            pode prejudicar o seu ciclo de sono. Como resultado, a qualidade do
            sono diminui. As chances de você acordar mais vezes durante a noite
            aumentam.
          </p>
        </div>
        <div>
          <p>
            <DictionaryCard label="Caffeine" audioSrc="/c/caffeine.mp3" />{" "}
            blocks{" "}
            <DictionaryCard label="adenosine" audioSrc="/a/adenosine.mp3" />, a
            chemical that helps make you feel sleepy. And it can take your body
            up to 10 hours to clear caffeine.
          </p>
          <p className="portuguese">
            A cafeína bloqueia a adenosina, uma substância química que ajuda a
            fazer você se sentir sonolento. E pode levar até 10 horas para o seu
            corpo eliminar a cafeína.
          </p>
        </div>
        <div>
          <p>
            For these reasons, experts{" "}
            <DictionaryCard label="suggest" audioSrc="/s/suggest.mp3" />{" "}
            finishing up your caffeinated or alcoholic drinks many hours before
            bed.
          </p>
          <p className="portuguese">
            Por esses motivos, os especialistas sugerem terminar de consumir
            bebidas com cafeína ou álcool muitas horas antes de dormir.
          </p>
        </div>
        <div>
          <p>
            <b>4. Limit technology</b>
          </p>
          <p className="portuguese">Limite o uso de tecnologia.</p>
        </div>
        <div>
          <p>
            Light from phones and computer screens can{" "}
            <DictionaryCard label="interfere" audioSrc="/i/interfere.mp3" />{" "}
            with the circadian rhythm – or the internal clock that naturally
            wakes us up. Light has this effect by suppressing melatonin, which
            assists with sleep.
          </p>
          <p className="portuguese">
            A luz dos telefones e das telas de computador pode interferir no
            ritmo circadiano - ou no relógio interno que naturalmente nos
            desperta. A luz tem esse efeito ao suprimir a melatonina, que ajuda
            no sono.
          </p>
        </div>
        <div>
          <p>
            But you will need self-control to stop looking at screens,{" "}
            <DictionaryCard label="suggested" audioSrc="/s/suggested.mp3" />
            Dr. Dianne Augelli of Weill Cornell Medicine.
          </p>
          <p className="portuguese">
            Mas você precisará de autocontrole para parar de olhar para telas,
            sugeriu a Dra. Dianne Augelli da Weill Cornell Medicine.
          </p>
        </div>
        <div>
          <p>
            "TikTok doesn’t want you to stop,” Augelli said. “Only you can stop
            you, so you have to learn to put that stuff away."
          </p>
          <p className="portuguese">
            "O TikTok não quer que você pare", disse Augelli. "Apenas você pode
            se impedir, então você precisa aprender a guardar essas coisas."
          </p>
        </div>
        <div>
          <p>
            <b>5. See your doctor</b>
          </p>
          <p className="portuguese">Consulte o seu médico</p>
        </div>
        <div>
          <p>
            If you are still having a hard time getting a good night’s sleep
            after more than one month of trying, experts say it is time to go to
            a doctor.
          </p>
          <p className="portuguese">
            Se você ainda está tendo dificuldade para dormir bem após mais de um
            mês tentando, os especialistas dizem que é hora de ir ao médico.
          </p>
        </div>
        <div>
          <p>
            This is especially true if your sleepless nights are hurting your
            work performance or your mood.
          </p>
          <p className="portuguese">
            Isso é especialmente verdadeiro se suas noites sem dormir estiverem
            prejudicando seu desempenho no trabalho ou seu humor.
          </p>
        </div>
        <div>
          <p>
            Atwood said, "It doesn’t matter how much relaxation you do. At a
            certain point, it's not going to be effective if there’s a{" "}
            <DictionaryCard label="significant" audioSrc="/s/significant.mp3" />{" "}
            amount of stress... It might involve some problem-solving to figure
            that out."
          </p>
          <p className="portuguese">
            Atwood disse: "Não importa o quanto você relaxe. Em certo ponto, não
            será eficaz se houver uma quantidade significativa de estresse...
            Pode envolver um pouco de resolução de problemas para descobrir
            isso."
          </p>
        </div>
        <div>
          <p>I’m John Russell.</p>
        </div>
        <Card bgColor="black" textColor="white">
          <b>Exercises</b>
        </Card>
        <Radio questions={radio} />
        <Card bgColor="black" textColor="white">
          Extra
        </Card>
        <VideoPlayer videoSrc="https://www.youtube.com/embed/foLf5Bi9qXs?si=vtShmFVU_Cl-wZDG" />
      </div>
    </>
  );
}
