import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '164625752617-i15di5g5kn17pk2m5ptgjm0fegvsq9v1.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    // this helper function is used to prevent the "delay" in between getting the user's signed in state
    // i.e. the lag that displays "not sure if signed in" that shows whilst the google api is getting the user's signed in status
    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        }

        if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        }

        else {
            return (
                <button onClick={this.onSignIn} className='ui red google button'>
                    <i className='google icon' />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth