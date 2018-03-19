// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const store = createStore(playList);

function playList(state = [],action) {
    if (action.type === 'ADD_TRACK')
    {
        return [
            ...state,
            action.playload
        ]
    }
    console.log(action);
    //return state;
}

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());  
})

store.dispatch({type: 'ADD_TRACK', playload: 'Smells like spirit'});
store.dispatch({type: 'ADD_TRACK', playload: 'yo!'});
store.dispatch({type: 'ADD_TRACK', playload: 'yo!!!!'});

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')
);