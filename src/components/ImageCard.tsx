import { Image } from '@/types';
import { convertBytesToMB } from '@/utils';
import styles from '@/styles/modules/ImageCard.module.css';

export const ImageCard = ({ url, filename, sizeInBytes }: Image) => {
  return (
    <div className={styles.imageCard}>
      <img src={url} alt={filename} />
      <strong>{filename}</strong>
      <em>{convertBytesToMB(sizeInBytes)} MB</em>
    </div>
  );
};
