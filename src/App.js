import { Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Q1/Login';
import Insert_data from './page/Q2/Insert_data';
import Custom_callback from './page/Q3/Custom_callback';
import { Custom_memo } from './page/Q3/Custom_memo';
import Ref from './page/Q3/Custom_ref';
import { Custom_effect } from './page/Q3/Custom_effect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/insert_data" element={<Insert_data />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/callback" element={<Custom_callback />} />
      <Route path="/memo" element={<Custom_memo />} />
      <Route path="/effect" element={<Custom_effect />} />
    </Routes>
  );
}

export default App;
