import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'The Night We Met',
            duration: '3:28'
        },
        {
            title: 'Ocean Eyes',
            duration: '3:20'
        },
        {
            title: 'Whatever It Takes',
            duration: '3:21'
        },
        {
            title: 'Adore',
            duration: '3:05'
        },
        {
            title: 'Hunger',
            duration: '3:35'
        },
        {
            title: 'One Foot',
            duration: '4:21'
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})