import logo from './logo.svg';
import './App.scss';
import FormSubmission from './components/FormSubmission';
import { Provider } from 'react-redux';
import { useState } from 'react';

import { store } from './store';
import ThanksComponent from './components/ThanksComponent';


function App() {
  const [ submitted, setSubmitted ] = useState(false);
  return (
    <Provider store={store}>
      <div className="App"  >
          { 
            submitted === false ? 
              <FormSubmission setSubmitted={setSubmitted}/> 
            :
              <ThanksComponent />
          }
      </div>
    </Provider>
  );
}

export default App;
