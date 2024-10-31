import { HashRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/seach/Seach";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
