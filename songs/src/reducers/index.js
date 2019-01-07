import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'The Night We Met',
            artist: 'Lord Huron',
            duration: '3:28'
        },
        {
            title: 'Ocean Eyes',
            artist: 'Billie Eilish',
            duration: '3:20'
        },
        {
            title: 'Whatever It Takes',
            artist: 'Imagine Dragons',
            duration: '3:21'
        },
        {
            title: 'Adore',
            artist: 'Amy Shark',
            duration: '3:05'
        },
        {
            title: 'Hunger',
            artist: 'Florence + The Machine',
            duration: '3:35'
        },
        {
            title: 'One Foot',
            artist: 'Walk the Moon',
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