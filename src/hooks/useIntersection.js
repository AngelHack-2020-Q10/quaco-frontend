import { useState, useEffect } from "react";

export default function useIntersection(ref, threshold = 0.5) {
  const [isIntersected, setIsIntersected] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const ob = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.intersectionRatio >= threshold) {
            setIsIntersected(true);
          } else {
            setIsIntersected(false);
          }
        },
        { threshold },
      );
      ob.observe(ref.current);

      return () => {
        ob.unobserve(ref.current);
      };
    }
  }, [ref, threshold]);
  return isIntersected;
}
