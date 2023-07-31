
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './componets/Header';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './contexts/authContext'

function App() {
  return (
    <div className="App">
      
      <Router>
      <AuthProvider>
        <Header />
        <Routes>
        <Route exact path="/home" element={<PrivateRoute value={1}/>}>
          <Route exact path="/home" element={<HomePage />} />
        </Route>
        <Route element={<LoginPage />} path='/login' />
        </Routes>
        </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
