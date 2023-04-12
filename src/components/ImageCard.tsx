import { Image } from '../types';
import { convertBytesToMB } from '../utils';

export const ImageCard = ({ url, filename, sizeInBytes }: Image) => {
  return (
    <div className="image-box">
      <img src={url} alt={filename} />
      <strong>{filename}</strong>
      <em>{convertBytesToMB(sizeInBytes)} MB </em>
    </div>
  );
};
