import { useCallback, useEffect, useMemo } from "react";
import classes from "../components/Layout/Main Navigation/MainNavigation.module.css";

const useStickyNav = (targetEl, options) => {
  const nav = document.querySelector("nav");

  const intersectionCallback = useCallback(
    (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        nav.classList.add(classes["sticky"]);
      } else {
        nav.classList.remove(classes["sticky"]);
      }
    },
    [nav]
  );

  const intersectionOptions = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const stickyNavObserver = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    if (targetEl) stickyNavObserver.observe(targetEl);

    return () => {
      if (targetEl) stickyNavObserver.unobserve(targetEl);
    };
  }, [targetEl, options, intersectionCallback, intersectionOptions]);
};

export default useStickyNav;
