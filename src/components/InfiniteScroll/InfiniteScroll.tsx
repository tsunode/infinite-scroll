import { useEffect, useRef } from 'react';
import type { IInFiniteScrollProps } from './types';

export const InfineteScroll = ({ callback }: IInFiniteScrollProps) => {
  const divInfiteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async ([entries]) => {
      const ratio = entries.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (divInfiteScrollRef.current)
      intersectionObserver.observe(divInfiteScrollRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiteScrollRef]);

  return <div ref={divInfiteScrollRef} />;
};
