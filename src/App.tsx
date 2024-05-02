import {
  BrowserRouter as Router,
  Routes,
  Route,
  // RouterProvider,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/home/home.tsx";
import AddProjects from "./components/Projects/Add Projects/AddProjects.tsx";
import Login from "./pages/login/login.tsx";

import "./App.css";
import Projects from "./pages/projects/project.tsx";
import Error from "./pages/error/Error.tsx";
import { PrivateRoute } from "./components/Layout/PrivateRoute.tsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/projects',
//         element: <Projects />
//       }
//     ]
//   }
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout />}>
//         <Route path="" element={<Home />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="add-projects" element={<AddProjects />} />
//         <Route path="login" element={<Login />} />
//       </Route>
//       <Route path="*" element={<Error />} />
//     </>
//   )
// );

function App() {
  // return <RouterProvider router={router} />;
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="add-projects" element={<AddProjects />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
