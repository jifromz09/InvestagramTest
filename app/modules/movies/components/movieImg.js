import React from 'react';
import {Image} from 'react-native';
import {IMAGE_DEFAULT_URL} from '../../../const/const';
import {styles} from '../helpers/styles';
export const movieImg = data => {
  const defaultImg = require('../../../assets/img/default.png');
  const movieImage = {uri: IMAGE_DEFAULT_URL + data.poster_path};
  return (
    <Image source={data.poster_path ? movieImage : defaultImg} style={styles.imgStyle} />
  );
};
