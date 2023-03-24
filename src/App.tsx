import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import TimeMachine from './pages/TimeMachine/TimeMachine';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TimeMachine />} />
          <Route path="phase2" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
