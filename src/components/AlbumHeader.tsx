/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import ImageHeaderAlbumOrPlaylist, {
  ImageHeaderAlbumOrPlaylistProps,
} from './ImageHeaderAlbumOrPlaylist';
import ActionRow from './ActionRow';
import AlbumInfo, { AlbumInfoProps } from './AlbumInfo';

export interface AlbumHeaderProps
  extends AlbumInfoProps,
    ImageHeaderAlbumOrPlaylistProps {}

const AlbumHeader = ({
  albumName,
  albumReleaseDate,
  artistName,
  imageUrl,
  imageHeaderUrl,
}: AlbumHeaderProps) => {
  return (
    <>
      <ImageHeaderAlbumOrPlaylist imageHeaderUrl={imageHeaderUrl} />
      <AlbumInfo
        albumName={albumName}
        albumReleaseDate={albumReleaseDate}
        artistName={artistName}
        imageUrl={imageUrl}
      />
      <ActionRow />
    </>
  );
};

export default AlbumHeader;

const styles = StyleSheet.create({});
