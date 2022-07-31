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

const album = {
  id: 1,
  name: 'Deux Freres',
  artist: 'PNL',
  imageCover: image.deuxfreres,
  releaseDate: '2019',
  songList: [
    {
      id: 1,
      songTitle: 'Au DD',
      isExplicit: false,
    },
    {
      id: 2,
      songTitle: 'Autre monde',
      isExplicit: true,
    },
    {
      id: 3,
      songTitle: 'Blanka',
      isExplicit: true,
    },
    {
      id: 4,
      songTitle: '91',
      isExplicit: true,
    },
    {
      id: 5,
      songTitle: "91's",
      isExplicit: true,
    },
    {
      id: 6,
      songTitle: 'Celcius',
      isExplicit: true,
    },
    {
      id: 7,
      songTitle: 'Shenmue',
      isExplicit: true,
    },
    {
      id: 8,
      songTitle: 'Menace',
      isExplicit: true,
    },
    {
      id: 9,
      songTitle: 'Deconnecté',
      isExplicit: true,
    },
  ],
};

export { data, album };
