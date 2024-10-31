import styled from "styled-components";

const Container = styled.header`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 26px;
  font-weight: 700;
  a {
    color: crimson;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    margin-left: 150px;
    a {
      color: #fff;
    }
  }
`;

const Headers = () => {
  return (
    <Container>
      <Logo>
        <Link to={"/"}>아수라발바타</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/"}></Link>
        </li>
        <li>
          <Link to={"/search"}></Link>
        </li>
      </Menu>

      <Footer></Footer>
    </Container>
  );
};
