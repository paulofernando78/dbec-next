import { IDictionary } from "../../interfaces";
import Dictionary from "../../public/assets/data/dictionary.json";

export async function searchWords(word: string): Promise<IDictionary[]> {
  try {
    // Directly use the imported dictionary data
    const data: IDictionary[] = Dictionary as IDictionary[];

    // Filtra o dicionário para pegar as palavras que contêm a palavra inserida
    const wordsFound = data.filter((dict) => {
      // converte para letra mínuscula para melhor compatibilidade
      return dict.keyword.toLowerCase().includes(word.toLowerCase());
    });

    // Retorna o dicionário filtrado
    return wordsFound;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
}
