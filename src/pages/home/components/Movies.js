import { Link } from "react-router-dom";
import styled from "styled-components";
import { W500_URL } from "../../../constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { mainStyle } from "../../../GlobalStyled";

const Container = styled.section`
  padding: 0 ${mainStyle.moPadding};
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
  color: #fff;
`;

const Title = styled.div`
  margin: 50px 0 20px 0;
  font-size: 22px;
  font-weight: 600;
`;

const Con = styled.div`
  width: 100%;
  /* height: 372px; */
  aspect-ratio: 2/3;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

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

const Movies = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con>
              <Link to={`/detail/${movie.id}`}>
                <img src={W500_URL + movie.poster_path} alt={movie.title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
