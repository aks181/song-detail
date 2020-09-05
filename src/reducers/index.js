import { combineReducers } from 'redux';

//reducers
const songsReducer = () => {
    return [
        { title: 'Attention', duration: '3:50', singer: 'Charlie Puth' },
        { title: 'Love the way you lie', duration: '4:10', singer: 'Rihanna' },
        { title: 'See you again', duration: '3:45', singer: 'Wiz Khalifa' },
        { title: 'Despacito', duration: '5:20', singer: 'Luis Fonsi' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});