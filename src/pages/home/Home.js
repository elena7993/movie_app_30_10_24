import { useEffect, useState } from "react";
// import { useEffect as changeName } from "react";
// =>as를 사용해서 이름을 바꿔줄 수 있다
import { nowPlaying, popular, topRated, upComming } from "../../api";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setRateData] = useState();
  const [upData, setUpCommingData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        // =>비구조할당 - 굳이 변수를 만들필요 없다
        // console.log(results);
        const { results: pop } = await popular();
        // console.log("현재상영" + nowData);
        // console.log("인기영화" + popData);
        const { results: top } = await topRated();
        const { results: up } = await upComming();

        setNowData(now);
        setPopData(pop);
        setRateData(top);
        setUpCommingData(up);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  return <div>Home</div>;
};

export default Home;

// *동기화
// =>새로고침 후 데이터를 받아오는 것
// =>어느 메소드가 실행하고 있으면 다른 메소드가 접근하는것을 제한

// *비동기화
// =>어느 메소드가 종료 되지 않아도 다른 메소드 실행이 가능하다.
// =>Promise

// 코드를 줄여보자아아아

// (function(){})()

// (() => {})()

// *예외처리
// =>if(){}

// =>try {

// } catch (error) {

// }
