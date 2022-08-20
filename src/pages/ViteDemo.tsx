import '../App.css';
import { Outlet } from 'react-router-dom';

function ViteDemo() {
  return (
    <div className="App">
      <h1>Vite Starter playground !</h1>
      <Outlet />
    </div>
  );
}

export default ViteDemo;
