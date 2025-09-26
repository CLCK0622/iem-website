import { useEffect, useState, type RefObject } from "react";

export const useIsVisible = (ref: RefObject<Element | null>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.5,
      once: true,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
