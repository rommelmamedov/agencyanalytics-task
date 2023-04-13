import { Image } from '@/types';
import { convertBytesToMB } from '@/utils';
import styles from '@/styles/modules/Figure.module.css';

interface FigureProps extends Image {
  tabIndex: number;
}

export const Figure = ({ url, tabIndex, filename, sizeInBytes }: FigureProps) => (
  <figure className={styles.imageCard} tabIndex={tabIndex + 1}>
    <img src={url} alt={filename} loading="lazy" />
    <figcaption>
      <h2>{filename}</h2>
      <span>{convertBytesToMB(sizeInBytes)} MB</span>
    </figcaption>
  </figure>
);
