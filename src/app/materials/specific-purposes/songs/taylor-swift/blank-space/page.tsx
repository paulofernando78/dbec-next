"use client";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { VideoPlayer } from "@/components/Atoms/VideoPlayer";
import { Songs } from "@/components/Templates/Specific-Purposes/Songs";
import { ScrollToTop } from "@/components/Atoms/ScrollToTop";

const songs = [
  {
    enLine: "Nice to meet you, where you been?",
    ptLine: "Prazer em te conhecer, onde você esteve?",
  },
  {
    enLine: "I could show you incredible things",
    ptLine: "Eu posso te mostrar coisas incríveis",
  },
  {
    enLine: "Magic, madness, heaven, sin",
    ptLine: "Magia, loucura, paraíso, pecado",
  },
  {
    enLine: "Saw you there and I thought",
    ptLine: "Te vi ali, e eu pensei",
  },
  {
    enLine: "Oh, my God, look at that face!",
    ptLine: "Ai, meu Deus, olhe esse rosto!",
  },
  {
    enLine: "You look like my next mistake",
    ptLine: "Você parece com o meu próximo erro",
  },
  {
    enLine: "Love's a game, wanna play?",
    ptLine: "O amor é um jogo, quer jogar?",
  },
  {
    enLine: "New money, suit and tie",
    ptLine: "O novo rico, de terno e gravata",
  },
  {
    enLine: "I can read you like a magazine",
    ptLine: "Eu posso te ler como uma revista",
  },
  {
    enLine: "Ain't it funny? Rumors fly",
    ptLine: "Não é engraçado? Os boatos voam",
  },
  {
    enLine: "And I know you heard about me",
    ptLine: "E eu sei que você já ouviu falar de mim",
  },
  {
    enLine: "So hey, let's be friends",
    ptLine: "Então, ei, vamos ser amigos",
  },
  {
    enLine: "I'm dying to see how this one ends",
    ptLine: "Estou louca para ver como isso vai acabar",
  },
  {
    enLine: "Grab your passport and my hand",
    ptLine: "Pegue seu passaporte e a minha mão",
  },
  {
    enLine: "I can make the bad guys good for a weekend",
    ptLine:
      "Eu posso fazer os caras maus ficarem bonzinhos por um final de semana",
  },
  {
    enLine: "So it's gonna be forever",
    ptLine: "Então, vai ser para sempre",
  },
  {
    enLine: "Or it's gonna go down in flames?",
    ptLine: "Ou vai acabar em chamas?",
  },
  {
    enLine: "You can tell me when it's over",
    ptLine: "Você pode me dizer quando terminar",
  },
  {
    enLine: "If the high was worth the pain",
    ptLine: "Se os momentos bons superaram a dor",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "Tenho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "'Cause you know I love the players",
    ptLine: "Porque você sabe que eu adoro os jogadores",
  },
  {
    enLine: "And you love the game",
    ptLine: "E você ama o jogo",
  },
  {
    enLine: "'Cause we're young and we're reckless",
    ptLine: "Pois somos jovens e imprudentes",
  },
  {
    enLine: "We'll take this way too far",
    ptLine: "Vamos passar dos limites",
  },
  {
    enLine: "It'll leave you breathless",
    ptLine: "Vai te deixar sem fôlego",
  },
  {
    enLine: "Or with a nasty scar",
    ptLine: "Ou com uma cicatriz horrível",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "Tenho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "But I've got a blank space, baby",
    ptLine: "Mas eu tenho um espaço em branco, querido",
  },
  {
    enLine: "And I'll write your name",
    ptLine: "E vou escrever seu nome",
  },
  {
    enLine: "Cherry lips, crystal skies",
    ptLine: "Lábios de cereja, céus de cristal",
  },
  {
    enLine: "I could show you incredible things",
    ptLine: "Eu poderia te mostrar coisas incríveis",
  },
  {
    enLine: "Stolen kisses, pretty lies",
    ptLine: "Beijos roubados, mentirinhas",
  },
  {
    enLine: "You're the King, baby, I'm your Queen",
    ptLine: "Você é o rei, querido, sou sua rainha",
  },
  {
    enLine: "Find out what you want",
    ptLine: "Vou descobrir o que você quer",
  },
  {
    enLine: "Be that girl for a month",
    ptLine: "Ser essa garota por um mês",
  },
  {
    enLine: "Wait, the worst is yet to come, oh no",
    ptLine: "Espere, o pior ainda está por vir, oh não",
  },
  {
    enLine: "Screaming, crying, perfect storms",
    ptLine: "Gritando, chorando, uma série de contratempos",
  },
  {
    enLine: "I can make all the tables turn",
    ptLine: "Eu posso fazer o jogo virar",
  },
  {
    enLine: "Rose garden filled with thorns",
    ptLine: "Um jardim de rosas cheias de espinhos",
  },
  {
    enLine: "Keep you second guessing like",
    ptLine: "Você vai ficar se questionando, tipo",
  },
  {
    enLine: "Oh, my God, who is she?",
    ptLine: "Ai, meu Deus, quem é ela?",
  },
  {
    enLine: "I get drunk on jealousy",
    ptLine: "Eu fico louca de ciúmes",
  },
  {
    enLine: "But you'll come back each time you leave",
    ptLine: "Mas você voltará todas as vezes que fugir",
  },
  {
    enLine: "'Cause, darling, I'm a nightmare dressed like a daydream",
    ptLine: "Porque, querido, eu sou um pesadelo vestido de sonho",
  },
  {
    enLine: "So it's gonna be forever",
    ptLine: "Então, vai ser para sempre",
  },
  {
    enLine: "Or it's gonna go down in flames?",
    ptLine: "Ou vai acabar em chamas?",
  },
  {
    enLine: "You can tell me when it's over",
    ptLine: "Você pode me dizer quando terminar",
  },
  {
    enLine: "If the high was worth the pain",
    ptLine: "Se os momentos bons superaram a dor",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "enho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "'Cause you know I love the players",
    ptLine: "Porque você sabe que eu adoro os jogadores",
  },
  {
    enLine: "And you love the game",
    ptLine: "E você ama o jogo",
  },
  {
    enLine: "'Cause we're young and we're reckless",
    ptLine: "Pois somos jovens e imprudentes",
  },
  {
    enLine: "We'll take this way too far",
    ptLine: "Vamos passar dos limites",
  },
  {
    enLine: "It'll leave you breathless",
    ptLine: "Vai te deixar sem fôlego",
  },
  {
    enLine: "Or with a nasty scar",
    ptLine: "Ou com uma cicatriz horrível",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "Tenho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "But I've got a blank space, baby",
    ptLine: "Mas eu tenho um espaço em branco, querido",
  },
  {
    enLine: "And I'll write your name",
    ptLine: "E vou escrever seu nome",
  },
  {
    enLine: "Boys only want love if it's torture",
    ptLine: "Meninos só querem amor se tiver tortura",
  },
  {
    enLine: "Don't say I didn't say, I didn't warn ya",
    ptLine: "Não diga que eu não disse, que eu não te avisei",
  },
  {
    enLine: "Boys only want love if it's torture",
    ptLine: "Meninos só querem amor se tiver tortura",
  },
  {
    enLine: "Don't say I didn't say, I didn't warn ya",
    ptLine: "Não diga que eu não disse, que eu não te avisei",
  },
  {
    enLine: "So it's gonna be forever",
    ptLine: "Então, vai ser para sempre",
  },
  {
    enLine: "Or it's gonna go down in flames?",
    ptLine: "Ou vai acabar em chamas?",
  },
  {
    enLine: "You can tell me when it's over",
    ptLine: "Você pode me dizer quando terminar",
  },
  {
    enLine: "If the high was worth the pain",
    ptLine: "Se os momentos bons superaram a dor",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "Tenho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "'Cause you know I love the players",
    ptLine: "Porque você sabe que eu adoro os jogadores",
  },
  {
    enLine: "And you love the game",
    ptLine: "E você ama o jogo",
  },
  {
    enLine: "'Cause we're young and we're reckless",
    ptLine: "Pois somos jovens e imprudentes",
  },
  {
    enLine: "We'll take this way too far ",
    ptLine: "Vamos passar dos limites",
  },
  {
    enLine: "It'll leave you breathless",
    ptLine: "Vai te deixar sem fôlego",
  },
  {
    enLine: "Or with a nasty scar",
    ptLine: "Ou com uma cicatriz horrível",
  },
  {
    enLine: "Got a long list of ex-lovers",
    ptLine: "Tenho uma longa lista de ex-namorados",
  },
  {
    enLine: "They'll tell you I'm insane",
    ptLine: "Eles te dirão que sou maluca",
  },
  {
    enLine: "But I've got a blank space, baby",
    ptLine: "Mas eu tenho um espaço em branco, querido",
  },
  {
    enLine: "E vou escrever seu nome",
    ptLine: "And I'll write your name",
  },
];

export default function TaylorSwiftbBlankSpace() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Songs"
        descriptions={["Taylor Swift", "Blank Space"]}
      />
      <div className="line-break">
        <div className="video-border">
          <VideoPlayer videoSrc="https://www.youtube.com/embed/e-ORhEE9VVg?si=lF1iWor9wVSYgPzB" />
        </div>
        <Songs songs={songs} />
      </div>
      <ScrollToTop />
    </>
  );
}
