import { Figure } from '@/components/Figure';
import { selectActiveTab } from '@/redux/reducer';
import { useSelector } from '@/redux/store';
import styles from '@/styles/modules/Tab.module.css';
import { Image } from '@/types';

interface TabPanelProps {
  id: string;
  images: Image[];
}

export const TabPanel = ({ id, images }: TabPanelProps) => {
  const activeTab = useSelector(selectActiveTab);
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
        <Figure key={image.id} tabIndex={index} {...image} />
      ))}
    </div>
  );
};
