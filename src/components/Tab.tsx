import { useMemo } from 'react';

import { TabPanel } from 'components/TabPanel';
import { TabButton } from 'components/TabButton';
import { useSelector } from 'redux/store';
import { selectApp } from 'redux/reducer';
import styles from 'styles/modules/Tab.module.css';

export const Tab = () => {
  const { isLoading, images } = useSelector(selectApp);
  const filteredImages = useMemo(() => images.filter(image => image.favorited), [images]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="tabs">
      <div className={styles.tabContainer} role="tablist" aria-label="Image Tabs">
        <TabButton id="recent">Recently added</TabButton>
        <TabButton id="favorite">Favorites</TabButton>
      </div>
      <TabPanel id="recent" images={images} />
      <TabPanel id="favorite" images={filteredImages} />
    </section>
  );
};
