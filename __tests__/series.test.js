import axios from "axios";

import {
  verificarSeAtorEstaEmSeriado,
  filtarPorAnoERetornarNome,
  calcularMediaTotalDeEpisodios,
  agruparTituloDasSeriesPorPropriedade,
} from "../src/metodos";

describe("Exemplo de testes", () => {
  const api =
    "https://gustavobuttenbender.github.io/film-array/data/films.json";

  // Deve filtrar as series com ano de estreia maior ou igual a 2010 e retornar uma listagem com os nomes

  it("Deve filtrar as series com ano de estreia maior ou igual a 2010 e retornar uma listagem com os nomes", async () => {
    const resposta = await filtarPorAnoERetornarNome(api, 2010, 2030);

    expect(resposta).toMatchObject([
      "Stranger Things",
      "Game Of Thrones",
      "The Walking Dead",
      "Gus and Will The Masters of the Wizards",
      "10 Days Why",
      "Mr. Robot",
      "Narcos",
      "Westworld",
    ]);
  });

  // Deve retornar true ao procurar ator que está em elenco
  it("Deve retornar true ao procurar ator que está em elenco", async () => {
    const resposta = await verificarSeAtorEstaEmSeriado(
      api,
      1,
      "Peter Dinklage"
    );

    expect(resposta).toBe(true);
  });

  // Deve retornar false ao procurar ator que não participa de elenco
  it("Deve retornar false ao procurar ator que não participa de elenco", async () => {
    const resposta = await verificarSeAtorEstaEmSeriado(api, 1, "Heath Ledger");

    expect(resposta).toBe(false);
  });

  // Deve calcular corretamente a media total de episódios de todas as series

  it("Deve calcular corretamente a media total de episódios de todas as series", async () => {
    const resposta = await calcularMediaTotalDeEpisodios(api);

    expect(resposta).toBe(35.8);
  });

  // Deve agrupar corretamente em um objeto os titulos das series baseado na Distribuidora

  it("Deve agrupar corretamente em um objeto os titulos das series baseado na Distribuidora", async () => {
    const resposta = await agruparTituloDasSeriesPorPropriedade(api, "HBO");

    expect(resposta).toMatchObject([
      "Game Of Thrones",
      "Band of Brothers",
      "Westworld",
    ]);
  });
});
