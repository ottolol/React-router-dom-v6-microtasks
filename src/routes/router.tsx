import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  RouteObject,
  Outlet,
  Navigate,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  ERROR: "/error",
  MODEL: "/:brand/:id",
  ADMIN: "/admin",
  LOGIN: "/login"
} as const 

const publicRoutes:RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  }, 
  {
    path: PATH.MODEL,
    element: <Model />,
  }, 
  {
    path: PATH.LOGIN,
    element: <Login />,
  }, 
  {
    path: "*",
    element: <Error404 />,
  },
]

const privateRoutes:RouteObject[] = [
  {
    path: PATH.ADMIN,
    element: (
        <ProtectedPage />
    ),
  }, 
]

export const PrivateRoutes = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} replace />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <Error404 />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes
      },
      ...publicRoutes
    ]
  },
  {
    path: "about",
    element: <div>About - Page</div>,
  },
]);

//------------------------------------------------------------------------------------------
// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import App from "../App";
// import { Error404 } from "../components/pages/Error404";
// import { Adidas } from "../components/pages/Adidas";
// import { Puma } from "../components/pages/Puma";
// import { Abibas } from "../components/pages/Abibas";
// import { Prices } from "../components/pages/Prices";
// import { Model } from "../components/pages/Model";
// import { ProtectedPage } from "../components/pages/ProtectedPage";
// import { ProtectedRoute } from "./ProtectedRoute";
// import { Login } from "../components/pages/Login";

// export const PATH = {
//   ADIDAS: "/adidas",
//   PUMA: "/puma",
//   ABIBAS: "/abibas",
//   PRICES: "/prices",
//   ERROR: "/error",
//   MODEL: "/:brand/:id",
//   ADMIN: "/admin",
//   LOGIN: "/login"
// } as const 

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     //errorElement: <Error404 />,
//     children: [
//       {
//         path: PATH.ADIDAS,
//         element: <Adidas />,
//       },
//       {
//         path: PATH.PUMA,
//         element: <Puma />,
//       },
//       {
//         path: PATH.ABIBAS,
//         element: <Abibas />,
//       },
//       {
//         path: PATH.PRICES,
//         element: <Prices />,
//       }, 
//       {
//         path: PATH.MODEL,
//         element: <Model />,
//       }, 
//       {
//         path: PATH.ADMIN,
//         element: (
//           <ProtectedRoute>
//             <ProtectedPage />
//           </ProtectedRoute>
//         ),
//       }, 
//       {
//         path: PATH.LOGIN,
//         element: <Login />,
//       }, 
//       {
//         path: "*",
//         element: <Error404 />,
//       },
//     ]
//   },
//   {
//     path: "about",
//     element: <div>About - Page</div>,
//   },
// ]);