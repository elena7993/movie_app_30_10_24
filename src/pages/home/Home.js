import { useEffect, useState } from "react";
// import { useEffect as changeName } from "react";
// =>as를 사용해서 이름을 바꿔줄 수 있다
import { nowPlaying, popular, topRated, upComming } from "../../api";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { ORIGINAL_URL } from "../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  padding: 0 ${mainStyle.moPadding};
  position: relative;
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const TitleWrap = styled.div`
  position: absolute;
  bottom: 150px;
  left: 0;
  padding: 0 ${mainStyle.moPadding};
  color: #fff;
  h3 {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
    /* =>문단의 색상을 잡아주기 위해서 오퍼시티를 넣음 */
    /* =>강조하는 타이틀을 살리기 위해 문단은 죽임 */
  }
`;

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
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <div>
      <MainBanner $coverImg={nowData[0].backdrop_path}>
        <TitleWrap>
          <h3>{nowData[0]?.title}</h3>
          <p>{nowData[0]?.overview.slice(0, 100) + "..."}</p>
        </TitleWrap>
      </MainBanner>
    </div>
  );
};

export default Home;

// https://image.tmdb.org/t/p/original/

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
