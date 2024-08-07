import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './ComponentsModule/Dashboard/Dashboard';
import Layout from './Layout';
import { DcontextProvider } from './Contextapi/DashboardContext';

function App() {
  return (
    <div className="App">
      <DcontextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DcontextProvider>

    </div>
  );
}

export default App;
