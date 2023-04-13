import { useEffect } from 'react';

import { Tab } from '@/components/Tab';
import { Aside } from '@/components/Aside';
import { useDispatch } from '@/redux/store';
import { loadImages } from '@/redux/reducer';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <div
      style={{ display: 'flex', paddingInlineStart: '2em' }}
      // className="container"
    >
      <main>
        <h1 className="title">Photos</h1>
        <Tab />
      </main>
      <Aside />
    </div>
  );
};
