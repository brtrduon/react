import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit = term => {
        console.log(term)
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