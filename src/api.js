const fetch = require("node-fetch");
// import와 같음(옛날버전임)

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMyYjQxZTU1ZDhiODIxNTUwMDAzMjhmYTI3OTQ0MiIsIm5iZiI6MTczMDM0NzcyNy4yNDY5NTg1LCJzdWIiOiI2NzIxYjQ2MzgyNmZlNTc5OWNjNGE3NzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rGFNjkd9wK9wY5cf-_PWk43pAjEE_Vz3c0mTRLTL3x4",
  },
};

// const url = `${baseUrl}movie/now_playing?language=ko-kr`;

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

// fetch로 요청->url과 options

// then((res) => res.json());
// 받아온 것들을 json형식으로 가공
// 걍 이렇게 생겨먹었음. 식임. 익숙해질 필요 있음

// headers: 요청했을 때 필요한 정보들
