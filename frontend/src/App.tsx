import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Calendar = () => <div>Calendar Component</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </Router>
);

export default App;
