import { MouseEvent, useCallback } from 'react';

import { ImageCard } from './ImageCard';
import { useDispatch, useSelector } from '../redux/store';
import { selectApp, setActiveTab } from '../redux/reducer';
import { classNames } from '../utils';
import { ActiveTab } from '../types';

import styles from '../styles/modules/Tab.module.css';

export const Tab = () => {
  const dispatch = useDispatch();
  const { activeTab, images, isLoading } = useSelector(selectApp);

  const handleTabButtonClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    dispatch(setActiveTab(event.currentTarget.id as ActiveTab));
  }, []);

  return (
    <section className="tabs">
      <div
        role="tablist"
        aria-label="Sample Tabs" // TODO:
        className={styles.tabContainer}
      >
        <button
          role="tab"
          id="tab-recent"
          className={classNames(styles.tabButton, activeTab === 'tab-recent' ? styles.active : '')}
          onClick={handleTabButtonClick}
          aria-selected={`${activeTab === 'tab-recent' ? 'true' : 'false'}`}
          aria-controls="tabpanel-recent" // TODO:
        >
          Recently added
        </button>
        <button
          role="tab"
          id="tab-favorite"
          className={classNames(styles.tabButton, activeTab === 'tab-favorite' ? styles.active : '')}
          onClick={handleTabButtonClick}
          aria-selected={`${activeTab === 'tab-favorite' ? 'true' : 'false'}`}
          aria-controls="tabpanel-favorite" // TODO:
        >
          Favorites
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div id="tabpanel-recent" role="tabpanel" aria-labelledby="tab-recent">
            {images.map(image => (
              <ImageCard key={image.id} {...image} />
            ))}
          </div>
          <div
            id="tab-favorite"
            role="tabpanel"
            aria-labelledby="tab-favorite"
            hidden // TODO
          >
            {images
              .filter(({ favorited }) => (activeTab === 'tab-favorite' ? favorited : true))
              .map(image => (
                <ImageCard key={image.id} {...image} />
              ))}
          </div>
        </>
      )}
    </section>
  );
};
