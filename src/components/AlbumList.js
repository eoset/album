import React, { Component } from 'react';
import {ActivityIndicator, ScrollView, View, StyleSheet } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { 
        albums: [],
        isLoading: true
    };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({albums: responseJson});
            this.setState({isLoading: false});
        });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state.albums);
        if(this.state.isLoading){
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;