import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      console.log('🚀 ~ file: useOnClickOutside.ts:8 ~ listener ~ event.target:', event.target);
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
