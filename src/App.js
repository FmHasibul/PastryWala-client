
import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routers';

function App() {
  return (
    <div className="App  bg-slate-400">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
