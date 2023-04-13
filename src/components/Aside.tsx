import { useSelector } from 'react-redux';

import { convertBytesToMB } from '../utils';
import { selectActiveImage } from '../redux/reducer';
import styles from '../styles/modules/Aside.module.css';

export const Aside = () => {
  const {
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
  } = useSelector(selectActiveImage) ?? {};

  return (
    <aside className={styles.aside}>
      <img src={url} alt={filename} />
      <header>
        <div className={styles.imageHeader}>
          <strong>{filename}</strong>
          {sizeInBytes && <em>{convertBytesToMB(sizeInBytes)} MB</em>}
        </div>
        <button className={styles.likeButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a7a7a7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              fill: favorited ? '#d0311a' : '',
              stroke: favorited ? '#d0311a' : '#a7a7a7',
            }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </header>
      <div className="imageInfo">
        <strong>Information</strong>
        <div>
          <p>Uploaded by</p>
          <strong>{uploadedBy}</strong>
        </div>
        <div>
          <p>Created</p>
          <strong>{createdAt}</strong>
        </div>
        <div>
          <p>Last modified</p>
          <strong>{updatedAt}</strong>
        </div>
        <div>
          <p>Dimensions</p>
          <strong>
            {dimensions?.width}x{dimensions?.height}
          </strong>
        </div>
        <div>
          <p>Resolution</p>
          <strong>
            {resolution?.width}x{resolution?.width}
          </strong>
        </div>
      </div>
      <div className={styles.imageDescription}>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </aside>
  );
};
