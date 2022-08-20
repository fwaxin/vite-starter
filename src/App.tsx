import { Route, Routes } from 'react-router-dom';

import ViteDemo from './pages/ViteDemo';
import ViteDemoHome from './pages/ViteDemoHome';

function App() {
  return (
    <Routes>
      {/**
       * The following route object is used as a layout route.
       * Each child will inherit the layout described by the ViteDemo component
       *
       * Note : we'll have to call an <Outlet /> component for each parent in order to achieve that.
       * (set in <ViteDemo /> if you want to see how it's implemented)
       */}
      <Route path="/" element={<ViteDemo />}>
        <Route index element={<ViteDemoHome />} />
      </Route>
    </Routes>
  );
}

export default App;
