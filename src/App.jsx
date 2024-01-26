// import React from 'react'
// import AddUser from './components/AddUser'
// import Dashboard from './components/Dashboard'
// import EditUser from './components/EditUser'
// import SideBar from './components/SideBar'

// import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'




// function App() {
//   return <div id="wrapper">
// <BrowserRouter>
// <SideBar/>

// <Routes>
//   <Route path='/' element={<Dashboard/>}></Route>
//   <Route path='/adduser' element={<AddUser/>}></Route>
//   <Route path='/edituser/:id' element={<EditUser/>}></Route>
      
//   <Route path='*' element={<Navigate to='/'/>}></Route>

// </Routes>
// </BrowserRouter>

//   </div>
// }

// export default App



import React from 'react'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'

function App() {
  let router=createBrowserRouter(AppRoutes)
  return <>
      <RouterProvider router={router} />
  </>
}

export default App