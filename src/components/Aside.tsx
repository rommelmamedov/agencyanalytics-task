import { useSelector } from 'react-redux';

import { LikeIcon } from '@/svg/LikeIcon';
import { convertBytesToMB } from '@/utils';
import { useDispatch } from '@/redux/store';
import { selectActiveImage, setImageAsFavorited } from '@/redux/reducer';
import styles from '@/styles/modules/Aside.module.css';
import { formatDate } from '@/utils';

export const Aside = () => {
  const dispatch = useDispatch();
  const activeImage = useSelector(selectActiveImage);

  if (!activeImage) {
    return null;
  }

  const {
    id,
    createdAt,
    description,
    dimensions,
    favorited,
    filename,
    resolution,
    sizeInBytes,
    updatedAt,
    uploadedBy,
    url,
  } = activeImage;

  const handleFavoriteButtonClick = () => {
    dispatch(setImageAsFavorited(id));
  };

  return (
    <aside className={styles.aside}>
      <img src={url} alt={filename} />
      <header>
        <div className={styles.imageHeader}>
          <strong>{filename}</strong>
          <em>{convertBytesToMB(sizeInBytes)} MB</em>
        </div>
        <button className={styles.likeButton} onClick={handleFavoriteButtonClick}>
          <LikeIcon favorited={favorited} />
        </button>
      </header>
      <strong>Information</strong>
      <ul className={styles.imageInformation}>
        <li>
          <p>Uploaded by</p>
          <strong>{uploadedBy}</strong>
        </li>
        <li>
          <p>Created</p>
          <strong>{formatDate(createdAt)}</strong>
        </li>
        <li>
          <p>Last modified</p>
          <strong>{formatDate(updatedAt)}</strong>
        </li>
        <li>
          <p>Dimensions</p>
          <strong>
            {dimensions.width}x{dimensions.height}
          </strong>
        </li>
        <li>
          <p>Resolution</p>
          <strong>
            {resolution.width}x{resolution.width}
          </strong>
        </li>
      </ul>
      <div className={styles.imageDescription}>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
      <button className={styles.deleteButton}>Delete</button>
    </aside>
  );
};
