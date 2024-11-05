import { HashRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./pages/search/Search";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
