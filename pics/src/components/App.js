import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 93280573c97ddfe945b3b0c3dd852d5a76852486aa5c354752d88a998e08bd35'
            }
        })

        console.log(res.data.results)
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* we can technically call "onSubmit" in this case anything we want since we are not actually submitting anything in the App component */}
            </div>
        )
    }
}

export default App