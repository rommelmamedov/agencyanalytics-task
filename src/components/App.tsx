import { useEffect } from 'react';

import { Tab } from './Tab';
import { Aside } from './Aside';

import { loadImages } from '../redux/reducer';
import { useDispatch } from '../redux/store';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div className="container">
      <main>
        <h1 className="title">Photos</h1>
        <Tab />
      </main>
      <Aside />
    </div>
  );
};
