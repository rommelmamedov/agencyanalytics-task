import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { LikeIcon } from '@/svg/LikeIcon';
import { convertBytesToMB, classNames } from '@/utils';
import { useDispatch } from '@/redux/store';
import { selectActiveImage, setActiveTab, setAsideProps, setDeleteImage, setImageAsFavorited } from '@/redux/reducer';
import styles from '@/styles/modules/Aside.module.css';
import { formatDate } from '@/utils';

// what to do with ts here?
export const Aside = ({ isOpen }) => {
  const dispatch = useDispatch();
  const activeImage = useSelector(selectActiveImage);

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(setDeleteImage(id));
  }, []);

  const handleCloseButtonClick = useCallback(() => {
    dispatch(setAsideProps({ isAsideOpen: false, activeImage: null }));
  }, []);
  const handleFavoriteButtonClick = useCallback(() => {
    dispatch(setImageAsFavorited(id));
  }, []);

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

  return (
    <aside className={classNames(styles.aside, isOpen ? styles.visible : '')}>
      <button className={styles.closeButton} onClick={handleCloseButtonClick}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a7a7a7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
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
      <button className={styles.deleteButton} onClick={handleDeleteButtonClick}>
        Delete
      </button>
    </aside>
  );
};
