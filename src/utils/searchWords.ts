import { IDictionary } from "../../interfaces";

export async function searchWords(word: string) {
    try {
      // Faz e espera a requisição
      const response = await fetch(
        "http://localhost:3000/assets/data/dictionary.json"
      );
      // Converte em formato JSON e Faz a Tipagem do Retorno
      const data = (await response.json()) as IDictionary[];
      // Filtra o dicionário para pegar as palavras que contêm a palavra inserida
      const wordsFound = data.filter((dict) => {
        // converte para letra mínuscula para melhor compatibilidade
        return dict.keyword.toLowerCase().includes(word.toLowerCase());
      });
      // Retorna o dicionário filtrado
      return wordsFound;
    } catch (error: any) {
      console.error(error.message);
    }
  }