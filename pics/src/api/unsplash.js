import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 93280573c97ddfe945b3b0c3dd852d5a76852486aa5c354752d88a998e08bd35'
    }
})