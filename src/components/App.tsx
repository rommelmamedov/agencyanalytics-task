import { useEffect } from 'react';

import { Tab } from 'components/Tab';
import { Aside } from 'components/Aside';
import { classNames } from 'utils';
import { useDispatch, useSelector } from 'redux/store';
import { loadImages, selectIsAsideOpen } from 'redux/reducer';
import styles from 'styles/modules/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isAsideOpen = useSelector(selectIsAsideOpen);

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

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
