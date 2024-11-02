import styled from "styled-components";
import { ORIGINAL_URL } from "../../../constant/imgUrl";
import { mainStyle } from "../../../GlobalStyled";

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
  width: 100%;
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
  @media screen and (min-width: 450px) {
    width: 60%;
    padding: 0 ${mainStyle.pcPadding};
    h3 {
      font-size: 50px;
    }
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

const Banner = ({ data }) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomMovie = data[randomIndex];

  return (
    <MainBanner $coverImg={randomMovie.backdrop_path}>
      <TitleWrap>
        {/* <h3>{data[0]?.title}</h3> */}
        {/* <p>{data[0]?.overview.slice(0, 100) + "..."}</p> */}
        <h3>{randomMovie?.title}</h3>
        <p>{randomMovie?.overview.slice(0, 100) + "..."}</p>
      </TitleWrap>
    </MainBanner>
  );
};

export default Banner;

// =>randomIndex 변수를 만들어 Math.random()으로 data 배열의 임의 인덱스를 선택하고
// =>randomMovie라는 변수를 만들어 data[randomIndex]로 랜덤한 영화 정보를 저장하고,
// =>이 randomMovie를 배너에 표시

// *Math.floor()
// =>내림함수로, 소수점 이하를 버리고 정수로 만들어줌
// =>ex)Math.floor(3.8)은 3이다

// *Math.random()
// =>0 이상 1미만의 무작위 소수를 반환함

// *Math.floor(Math.random() * data.length)
// =>0에서 data.length -1 사이의 정수가 나옴
// =>Math.random()이 만들어내는 값은 항상 0 이상 1 미만이기 때문에, 여기에 data.length를 곱해도 그 결과는 항상 data.length보다 작아. 그래서 Math.floor(Math.random() * data.length)는 0부터 data.length - 1 사이의 정수를 만들어 낸다
