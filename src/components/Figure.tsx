import { KeyboardEvent, useCallback } from 'react';

import { Image } from '@/types';
import { convertBytesToMB } from '@/utils';
import { useDispatch } from '@/redux/store';
import { setAsideProps } from '@/redux/reducer';
import styles from '@/styles/modules/Figure.module.css';

interface FigureProps extends Image {
  tabIndex: number;
}

export const Figure = ({ id, url, tabIndex, filename, sizeInBytes, ...otherProps }: FigureProps) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setAsideProps({ isAsideOpen: true, activeImage: { id, url, filename, sizeInBytes, ...otherProps } }));
    // what do you think?

    window.scrollTo(0, 0);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    },
    [handleClick],
  );

  return (
    <figure className={styles.imageCard} tabIndex={tabIndex + 1} onClick={handleClick} onKeyDown={handleKeyDown}>
      <img src={url} alt={filename} loading="lazy" />
      <figcaption>
        <h2>{filename}</h2>
        <span>{convertBytesToMB(sizeInBytes)} MB</span>
      </figcaption>
    </figure>
  );
};
