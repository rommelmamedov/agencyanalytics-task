import { useEffect } from 'react';

import { Tab } from '@/components/Tab';
import { Aside } from '@/components/Aside';
import { loadImages, selectIsAsideOpen } from '@/redux/reducer';
import { useDispatch, useSelector } from '@/redux/store';
import styles from '@/styles/modules/App.module.css';
import { classNames } from '@/utils';

export const App = () => {
  const dispatch = useDispatch();
  const isAsideOpen = useSelector(selectIsAsideOpen);

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="container">
      <main className={classNames(styles.main, isAsideOpen ? styles.shrink : styles.main)}>
        <h1 className={styles.title}>Photos</h1>
        <Tab />
      </main>
      <Aside isOpen={isAsideOpen} />
    </div>
  );
};
