// Import components
import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

function App() {

    // Define the state
    const [ amount, saveAmount ]   = useState(0);
    const [ term, saveTerm ]       = useState('');
    const [ total, saveTotal ]     = useState(0);
    const [ loading, saveLoading ] = useState(false);

    let component;

    if(loading){
      component = <Spinner />
    }
    else if(total === 0){
      component = <Message />
    }else{
      component = <Result 
        total  = { total }
        term   = { term }
        amount = { amount }
        />
    }

  return (
    <Fragment>
      <Header />

      <div className="container">
        <Form 
          amount      = { amount }
          saveAmount  = { saveAmount }
          term        = { term }
          saveTerm    = { saveTerm }
          total       = { total }
          saveTotal   = { saveTotal }
          saveLoading = { saveLoading }
        />
          <div className="messages">
            { component }
          </div>
      </div>

      <Footer />
    </Fragment>
    
  );
}

export default App;
