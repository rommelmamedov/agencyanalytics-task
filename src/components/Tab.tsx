import { useState } from 'react';

import styles from '../styles/modules/Tab.module.css';

export const Tab = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const handleTabButtonClick = event => {
    console.log('🚀 ~ file: Tab.tsx:8 ~ handleTabButtonClick ~ event:', event);
    setActiveTab(activeTab);
  };

  return (
    <div role="tablist" aria-label="Sample Tabs" className={styles.tabContainer}>
      <button
        role="tab"
        id="tab-recent"
        aria-selected={`${activeTab === 'recent' ? 'true' : 'false'}`}
        aria-controls="tabpanel-recent" // TODO:
        className={activeTab === 'recent' ? 'active' : ''}
        onClick={handleTabButtonClick}
      >
        Recently added
      </button>
      <button
        role="tab"
        id="tab-favorites"
        aria-selected={`${activeTab === 'favorites' ? 'true' : 'false'}`}
        aria-controls="tabpanel-favorites" // TODO:
        className={activeTab === 'favorites' ? 'active' : ''}
        onClick={handleTabButtonClick}
      >
        Favorites
      </button>
    </div>
  );
};
