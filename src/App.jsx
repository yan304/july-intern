import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { AuthHeader } from './utils'

axios.defaults.baseURL = `http://localhost/api`

axios.defaults.headers = AuthHeader();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
