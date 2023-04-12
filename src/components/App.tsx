import { useEffect, useState } from 'react';

import { Tab } from './Tab';
import { ImageCard } from './ImageCard';

import { Image } from '../types';

export const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [activeTab, setActiveTab] = useState('recent');

  const sortedAndFilteredData = images
    ?.sort((a, b) => {
      if (a.createdAt < b.createdAt) return 1;
      if (a.createdAt > b.createdAt) return -1;
      return 0;
    })
    .filter(({ favorited }) => (activeTab === 'favorite' ? favorited : true));

  useEffect(() => {
    (async () => {
      const response = await fetch('https://agencyanalytics-api.vercel.app/images.json');
      const images = await response.json();
      setImages(images);
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Photos</h1>
      <Tab />
      <div>
        {sortedAndFilteredData ? (
          <div className="image-cards-wrapper">
            {sortedAndFilteredData.map(image => (
              <ImageCard key={image.id} {...image} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
