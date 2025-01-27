import { IDictionary } from "@/components/Molecules/Cards/WordCard/types";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

async function getDictionaryData(): Promise<IDictionary[]> {
  const requests = alphabet.map((letter) =>
    fetch(`/assets/data/dictionary/${letter}.json`).then((data) => data.json())
  );

  const dictionaryData = await Promise.all(requests);
  return dictionaryData.flat();
}

// export async function searchWords(word: string): Promise<IDictionary[]> {
//   try {
//     // Directly use the imported dictionary data
//     const data: IDictionary[] = await getDictionaryData();
//     console.log(data);
//     // Filtra o dicionário para pegar as palavras que contêm a palavra inserida
//     const wordsFound = data.filter((dict) => {
//       // converte para letra mínuscula para melhor compatibilidade
//       return dict.keyword?.toLowerCase().includes(word.toLowerCase());
//     });

//     // Retorna o dicionário filtrado
//     return wordsFound;
//   } catch (error: any) {
//     console.error(error.message);
//     return [];
//   }
// }

export async function searchWords(word: string): Promise<IDictionary[]> {
  try {
    const data: IDictionary[] = await getDictionaryData();
    
    // Filtrar palavras usando o campo `word` das definições
    const wordsFound = data.filter((dict) => 
      dict.definitions.some((definition) =>
        definition.word?.toLowerCase().includes(word.toLowerCase())
      )
    );

    return wordsFound;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
}
