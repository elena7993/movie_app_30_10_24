import { useEffect, useState } from "react";
// import { useEffect as changeName } from "react";
// =>as를 사용해서 이름을 바꿔줄 수 있다
import { nowPlaying, popular, topRated, upComming } from "../../api";
// import styled from "styled-components";
// import { mainStyle } from "../../GlobalStyled";
// import { ORIGINAL_URL } from "../../constant/imgUrl";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
// import { Link } from "react-router-dom";
// import { W500_URL } from "../../constant/imgUrl";
// import { mainStyle } from "../../GlobalStyled";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import styled from "styled-components";
import Movies from "./components/Movies";
// import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setRateData] = useState();
  const [upData, setUpCommingData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <Helmet>
            <title>HOME | PNFLIEX</title>
          </Helmet> */}
          <PageTitle title={"HOME"} />
          {nowData && (
            <div>
              <Banner data={nowData} />
            </div>
          )}

          {nowData && <Movies title="현재 상영 영화" data={nowData} />}
          {popData && <Movies title="인기 영화" data={popData} />}
          {topData && <Movies title="평점 높은 영화" data={topData} />}
          {upData && <Movies title="개봉 예정 영화" data={upData} />}
        </>
      )}
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

// 영화 포스터에 no img 찾아서 넣어볼 것
