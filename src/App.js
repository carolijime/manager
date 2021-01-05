import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    //UNSAFE_componentWillMount(){
    componentDidMount(){
        if (!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: 'AIzaSyAhWAlNagfjmBE6nJkCdXvY-hLIZmMhauY', 
                authDomain: 'manager-3c64f.firebaseapp.com',
                databaseURL: 'https://manager-3c64f.firebaseio.com',
                projectId: 'manager-3c64f',
                storageBucket: 'manager-3c64f.appspot.com',
                messagingSenderId: '139095379197',
                appId: '1:139095379197:web:cd7b3d91571b46a942c294'
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        };
    } 

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                {/* <LoginForm /> */} 
                <Router />
            </Provider>
        );
    }
}

export default App;