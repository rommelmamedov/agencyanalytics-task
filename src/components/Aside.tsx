import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { LikeIcon } from '@/svg/LikeIcon';
import { formatDate, convertBytesToMB, classNames } from '@/utils';
import { useDispatch } from '@/redux/store';
import { selectActiveImage, setAsideProps, setDeleteImage, setImageAsFavorited } from '@/redux/reducer';
import { CloseIcon } from '@/svg/CloseIcon';
import styles from '@/styles/modules/Aside.module.css';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => {
  const asideRef = useRef(null);
  const dispatch = useDispatch();
  const activeImage = useSelector(selectActiveImage);

  const handleCloseButtonClick = () => dispatch(setAsideProps({ isAsideOpen: false, activeImage: null }));
  // useOnClickOutside(asideRef, handleCloseButtonClick);

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

  const handleDeleteButtonClick = () => dispatch(setDeleteImage(id));
  const handleFavoriteButtonClick = () => dispatch(setImageAsFavorited(id));

  return (
    <aside ref={asideRef} className={classNames(styles.aside, isOpen ? styles.visible : '')}>
      <button className={styles.closeButton} onClick={handleCloseButtonClick}>
        <CloseIcon />
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
      {description && (
        <div className={styles.imageDescription}>
          <h1>Description</h1>
          <p>{description}</p>
        </div>
      )}
      <button className={styles.deleteButton} onClick={handleDeleteButtonClick}>
        Delete
      </button>
    </aside>
  );
};
