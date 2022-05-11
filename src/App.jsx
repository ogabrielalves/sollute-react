import React from 'react';
import Rotas from './routes';
import AuthProvider from './Context/AuthContext';

function App() {
  return ( 
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
   );
}

export default App
