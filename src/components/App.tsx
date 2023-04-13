import { useEffect } from 'react';

import { Tab } from '@/components/Tab';
import { Aside } from '@/components/Aside';
import { useDispatch } from '@/redux/store';
import { loadImages } from '@/redux/reducer';
import styles from '@/styles/modules/App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Photos</h1>
        <Tab />
      </main>
      <Aside />
    </div>
  );
};
