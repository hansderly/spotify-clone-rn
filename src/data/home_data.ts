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
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 2,
      songTitle: 'Autre monde',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 3,
      songTitle: 'Blanka',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 4,
      songTitle: '91',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 5,
      songTitle: "91's",
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 6,
      songTitle: 'Celcius',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 7,
      songTitle: 'Shenmue',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 8,
      songTitle: 'Menace',
      artistName: 'PNL',
      isExplicit: true,
    },
    {
      id: 9,
      songTitle: 'Deconnecté',
      artistName: 'PNL',
      isExplicit: true,
    },
  ],
};

export { data, album };
