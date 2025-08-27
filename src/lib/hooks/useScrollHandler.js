import { useEffect, useState } from "react";
import _ from "lodash";

const useScrollHandler = (target) => {
  const [isTarget, setIsTarget] = useState < boolean > false;
  const delay = 200;
  //   handler
  useEffect(() => {
    const handleScroll = _.debounce(() => {
      setIsTarget(window.scrollY > target);
    }, delay);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [target, delay]);

  return { isTarget };
};

export default useScrollHandler;
