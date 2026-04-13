import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const defaultOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 0px 0px',
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log('Element is visible, adding animation:', entry.target);
        entry.target.classList.add('visible');
      } else {
        console.log(
          'Element is not visible, removing animation:',
          entry.target,
        );
        entry.target.classList.remove('visible');
      }
    }, defaultOptions);

    if (ref.current) {
      console.log('Starting to observe:', ref.current);
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};
