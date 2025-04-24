import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUsers'; // <-- Import this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} /> {/* <-- Must match this */}
      </Routes>
    </Router>
  );
}

export default App;
