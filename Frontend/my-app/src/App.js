import logo from './logo.svg';
import './App.css';

import {
  Route,
  RouterProvider,
  Routes,
  Link,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";


import Folder from './features/Folder';



function App() {
  

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route>
     
      

       
        <Route path='/' element={<Folder/>}/>
     
      </Route>
    )
  )
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}
export default App;
