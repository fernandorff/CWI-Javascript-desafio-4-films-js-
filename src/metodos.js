import axios from "axios";

export async function filtarPorAnoERetornarNome(series, ano1, ano2) {
  const getResponse = await axios.get(series).then((response) => response);

  const filtrados = [];
  getResponse.data.forEach((element) => {
    if (element.anoEstreia >= ano1 && element.anoEstreia <= ano2) {
      filtrados.push(element.titulo);
    }
  });
  return filtrados;
}

export async function verificarSeAtorEstaEmSeriado(series, serieId, nomeAtor) {
  const getResponse = await axios.get(series).then((response) => response);

  const lista = getResponse.data;
  const resposta = lista[serieId].elenco.includes(nomeAtor);
  return resposta;
}

export async function calcularMediaTotalDeEpisodios(series) {
  const getResponse = await axios.get(series).then((response) => response);

  const lista = getResponse.data;
  let totalEpisodios = 0;
  lista.forEach((element) => {
    totalEpisodios += element.numeroEpisodios;
  });
  let mediaEpisodios = totalEpisodios / lista.length;
  return mediaEpisodios;
}

export async function agruparTituloDasSeriesPorPropriedade(
  series,
  propriedade
) {
  const getResponse = await axios.get(series).then((response) => response);

  const lista = getResponse.data;
  const filtrados = [];
  lista.forEach((element) => {
    if (element.distribuidora == propriedade) {
      filtrados.push(element.titulo);
    }
  });
  return filtrados;
}
