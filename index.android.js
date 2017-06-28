//Place code in here for Android
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return(
    <View style={{ flex: 1, marginBottom: 5}}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};


AppRegistry.registerComponent('album', () => App);