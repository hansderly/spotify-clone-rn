/* eslint-disable prettier/prettier */
import { image } from '../constants';
import { AlbumCategoryProps } from '../types';

type HomepageProps = {
  data: AlbumCategoryProps[];
};

const data: HomepageProps = [
  {
    title: 'Jump back in',
    albumsList: [
      {
        id: 1,
        name: 'Demineur',
        artist: 'Lefa',
        imageCover: image.demineur,
      },
      {
        id: 2,
        name: 'Deux Freres',
        artist: 'PNL',
        imageCover: image.deuxfreres,
      },
      {
        id: 3,
        name: 'Evolve',
        artist: 'Imagine Dragons',
        imageCover: image.evolve,
      },
      {
        id: 4,
        name: "J'rap Encore",
        artist: 'Kery James',
        imageCover: image.jrapencore,
      },
      {
        id: 5,
        name: 'Neptune Terminus',
        artist: 'Youssoupha',
        imageCover: image.neptune,
      },
    ],
  },
  {
    title: 'Recently played',
    albumsList: [
      {
        id: 1,
        name: 'Demineur',
        artist: 'Lefa',
        imageCover: image.demineur,
      },
      {
        id: 2,
        name: 'Deux Freres',
        artist: 'PNL',
        imageCover: image.deuxfreres,
      },
      {
        id: 3,
        name: 'Evolve',
        artist: 'Imagine Dragons',
        imageCover: image.evolve,
      },
      {
        id: 4,
        name: "J'rap Encore",
        artist: 'Kery James',
        imageCover: image.jrapencore,
      },
      {
        id: 5,
        name: 'Neptune Terminus',
        artist: 'Youssoupha',
        imageCover: image.neptune,
      },
    ],
  },
  {
    title: 'More of what you like',
    albumsList: [
      {
        id: 1,
        name: 'Demineur',
        artist: 'Lefa',
        imageCover: image.demineur,
      },
      {
        id: 2,
        name: 'Deux Freres',
        artist: 'PNL',
        imageCover: image.deuxfreres,
      },
      {
        id: 3,
        name: 'Evolve',
        artist: 'Imagine Dragons',
        imageCover: image.evolve,
      },
      {
        id: 4,
        name: "J'rap Encore",
        artist: 'Kery James',
        imageCover: image.jrapencore,
      },
      {
        id: 5,
        name: 'Neptune Terminus',
        artist: 'Youssoupha',
        imageCover: image.neptune,
      },
    ],
  },
  {
    title: 'More of what you like',
    albumsList: [
      {
        id: 1,
        name: 'Demineur',
        artist: 'Lefa',
        imageCover: image.demineur,
      },
      {
        id: 2,
        name: 'Deux Freres',
        artist: 'PNL',
        imageCover: image.deuxfreres,
      },
      {
        id: 3,
        name: 'Evolve',
        artist: 'Imagine Dragons',
        imageCover: image.evolve,
      },
      {
        id: 4,
        name: "J'rap Encore",
        artist: 'Kery James',
        imageCover: image.jrapencore,
      },
      {
        id: 5,
        name: 'Neptune Terminus',
        artist: 'Youssoupha',
        imageCover: image.neptune,
      },
    ],
  },
];

export default data;
