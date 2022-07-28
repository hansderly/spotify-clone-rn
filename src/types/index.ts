/* eslint-disable prettier/prettier */
type Album = {
  id: number;
  name: string;
  artist: string;
  imageCover: string;
};

type AlbumCategoryProps = {
  title: string;
  albumsList: Album[];
};

export type { Album, AlbumCategoryProps };
