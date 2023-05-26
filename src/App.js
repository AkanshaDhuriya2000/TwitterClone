
import { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App () {

  const [ user, setuser ] = useState( '' )

  onAuthStateChanged( auth, ( user ) => {
    if ( user )
    {

      const uid = user.uid;
      setuser( uid )

    } else
    {
      // User is signed out
      // ...
    }
  } );


  return (
    <div>
      {
        user ?
          <HomePage />
          :
          <div className='flex flex-row items-center justify-center'>
            <Register />
            {/* <SignIn /> */ }
          </div>


      }
    </div>

  );
}

export default App;
