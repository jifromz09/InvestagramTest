import React from 'react';
import {View} from 'react-native';
import {Text, Badge, Body} from 'native-base';
import {movieLength} from '../helpers/movieLength';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const movieGenres = data => {
  return (
    <Body>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: hp('2.2%'),
          marginBottom: 20,
        }}>
        Genre(s)
      </Text>
      <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent:"center"}}>
      {data.genres.map((genre, i) => {
        return (
          <Badge
            key={genre.id}
            style={{alignSelf: 'center', marginLeft: i > 0 ? 2 : 0}}>
            <Text style={{color: '#FFFFFF', fontSize: hp('1.5%')}}>
              {genre.name}
            </Text>
          </Badge>
        );
      })}
      </View>
    </Body>
  );
};
