import { Image } from '@/types';
import { convertBytesToMB } from '@/utils';
import styles from '@/styles/modules/ImageCard.module.css';

interface ImageCardProps extends Image {
  tabIndex: number;
}

export const ImageCard = ({ url, tabIndex, filename, sizeInBytes }: ImageCardProps) => (
  <figure className={styles.imageCard} tabIndex={tabIndex + 1}>
    <img src={url} alt={filename} loading="lazy" />
    <figcaption>
      <h2>{filename}</h2>
      <span>{convertBytesToMB(sizeInBytes)} MB</span>
    </figcaption>
  </figure>
);
