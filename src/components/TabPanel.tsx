import { ImageCard } from '@/components/ImageCard';
import { useSelector } from '@/redux/store';
import { selectApp } from '@/redux/reducer';
import { HTMLAttributes, useMemo } from 'react';
import styles from '@/styles/modules/Tab.module.css';

export const TabPanel = ({ id }: HTMLAttributes<HTMLDivElement>) => {
  const { activeTab, images } = useSelector(selectApp);
  const filteredImages = useMemo(
    () => (activeTab === 'tab-favorite' ? images.filter(image => image.favorited) : images),
    [activeTab, images],
  );

  return (
    <div id={`tabpanel-${id}`} className={styles.tabpanel} role="tabpanel" aria-labelledby={`tab-${id}`}>
      {filteredImages.map((image, index) => (
        <ImageCard key={image.id} tabIndex={index} {...image} />
      ))}
    </div>
  );
};
