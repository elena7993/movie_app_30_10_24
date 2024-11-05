import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const { pathname } = useLocation();
  // console.log(location);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return;
};

export default useScrollTop;

// 스크롤이 가장 상단에 위치하게 함
