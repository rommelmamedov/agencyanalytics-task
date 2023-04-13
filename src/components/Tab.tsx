import { TabPanel } from '@/components/TabPanel';
import { TabButton } from '@/components/TabButton';
import { useSelector } from '@/redux/store';
import { selectApp } from '@/redux/reducer';
import styles from '@/styles/modules/Tab.module.css';

export const Tab = () => {
  const { isLoading } = useSelector(selectApp);

  return (
    <section className="tabs">
      <div className={styles.tabContainer} role="tablist" aria-label="Image Tabs">
        <TabButton id="recent">Recently added</TabButton>
        <TabButton id="favorite">Favorites</TabButton>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TabPanel id="recent" />
          <TabPanel id="favorite" />
        </>
      )}
    </section>
  );
};
