import './App.css';

import store from './Redux/stors/store.js';
import Welcome from './components/welcome'
import {Provider} from 'react-redux'
function App() {
  return (
   <Provider store={store}>
     <Welcome/>
   </Provider>
  );
}
export default App;
