import React, { useState, useEffect, useMemo } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// interface ParentCompProps {
//   childComp?: React.ReactNode;
// }



function App() {




  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomePage/>
          }/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;




// import React, { useState, useEffect, useMemo } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const FetchUsers: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setUsers(data);
//     };

//     fetchData();
//   }, []);

//   const userNames = useMemo(() => {
//     console.log('Computing user names...');
//     return users.map((user) => user.name);
//   }, [users]);

