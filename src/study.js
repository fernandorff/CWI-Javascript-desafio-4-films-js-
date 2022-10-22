import axios from "axios";

// const getUser = async () => {
//   const getResponse = await axios
//     .get("https://gustavobuttenbender.github.io/film-array/data/films.json")
//     .then((response) => response)
//     .catch((err) => console.log(err));
//   console.log(getResponse.data[0]);
//   return getResponse;
// };

// const getUser1 = async (ano1, ano2) => {
//   const getResponse = await axios
//     .get("https://gustavobuttenbender.github.io/film-array/data/films.json")
//     .then((response) => response)
//     .catch((err) => console.log(err));
//   const filtrados = [];
//   getResponse.data.forEach((element) => {
//     if (element.anoEstreia >= ano1 && element.anoEstreia <= ano2) {
//       filtrados.push(element.titulo);
//     }
//   });
//   return filtrados;
// };

const api = "https://gustavobuttenbender.github.io/film-array/data/films.json";

async function filtarPorAnoERetornarNome(series, ano1, ano2) {
  const getResponse = await axios
    .get(series)
    .then((response) => response)
    .catch((err) => console.log(err));
  const filtrados = [];
  getResponse.data.forEach((element) => {
    if (element.anoEstreia >= ano1 && element.anoEstreia <= ano2) {
      filtrados.push(element.titulo);
    }
  });

  return filtrados;
}

const b = await filtarPorAnoERetornarNome(api, 2010, 2030);
console.log(b);
