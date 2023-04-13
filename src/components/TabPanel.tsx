import { ImageCard } from '@/components/ImageCard';
import { selectApp } from '@/redux/reducer';
import { useSelector } from '@/redux/store';
import styles from '@/styles/modules/Tab.module.css';
import { Image } from '@/types';

interface TabPanelProps {
  id: string;
  images: Image[];
}

export const TabPanel = ({ id, images }: TabPanelProps) => {
  const { activeTab } = useSelector(selectApp);
  const tabId = `tab-${id}`;

  return (
    <div
      id={`tabpanel-${id}`}
      className={styles.tabpanel}
      role="tabpanel"
      aria-labelledby={tabId}
      aria-current={`${activeTab === tabId ? 'true' : 'false'}`}
    >
      {images.map((image, index) => (
        <ImageCard key={image.id} tabIndex={index} {...image} />
      ))}
    </div>
  );
};
