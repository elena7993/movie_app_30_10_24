import { useEffect, useState } from "react";
// import { useEffect as changeName } from "react";
// =>as를 사용해서 이름을 바꿔줄 수 있다
import { nowPlaying, popular, topRated, upComming } from "../../api";
// import styled from "styled-components";
// import { mainStyle } from "../../GlobalStyled";
// import { ORIGINAL_URL } from "../../constant/imgUrl";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";
import { mainStyle } from "../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const Container = styled.section`
  padding: 0 ${mainStyle.moPadding};
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const Title = styled.div`
  margin: 50px 0;
  font-size: 24px;
  font-weight: 400;
`;

const Con = styled.div``;

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

  console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  const params = {
    spaceBetween: 10,
    slidesPerView: 3.3,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },

      640: {
        spaceBetween: 15,
        slidesPerView: 4.5,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 3.3,
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <div>
              <Banner data={nowData} />
              <Container>
                <Title>현재 상영중</Title>
                <Swiper {...params}>
                  {nowData.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <Con>
                        <Link to={`/detail/${movie.id}`}>
                          <img
                            src={W500_URL + movie.poster_path}
                            alt={movie.title}
                          />
                        </Link>
                      </Con>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>
            </div>
          )}
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
