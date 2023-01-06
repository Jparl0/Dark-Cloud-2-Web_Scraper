import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
