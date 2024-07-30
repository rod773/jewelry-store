// import {
//   RouterProvider,
//   createBrowserRouter,
//   Navigate,
// } from "react-router-dom";

// const Routes = () => {
//   const { token } = useAuth();

//   const trabajador = useSelector((state) => state.allTrabajadores.trabajador);

//   const isadmin = trabajador ? trabajador.isadmin : 0;

//   var childrenRoutes = [];

//   if (parseInt(isadmin) === 0)
//     //usuario normal
//     childrenRoutes = [
//       {
//         path: "/",
//         //element: <UserHomePage />,
//         element: <User />,
//         iconClass: "bi bi-house-fill  text-secondary",
//         name: "Inicio",
//       },
//       {
//         path: "/geolocation",
//         element: <Geolocation />,
//         iconClass: "bi bi bi-geo-alt-fill  text-secondary",
//         name: "Geolocalización",
//       },

//       {
//         path: "/jornadasuser",
//         element: <JornadasUser />,
//         iconClass: "bi bi-person-workspace  text-secondary",
//         name: "Jornadas Usuario",
//       },

//       {
//         path: "/logout",
//         element: <Logout />,
//         iconClass: "bi bi-box-arrow-right  text-secondary",
//         name: "Salir",
//       },
//     ];

//   //==========================================

//   if (parseInt(isadmin) === 1)
//     // usuario admin nivel2
//     childrenRoutes = [
//       {
//         path: "/",
//         element: <Admin />,
//         iconClass: "bi bi-house-fill  text-secondary",
//         name: "Inicio",
//       },
//       {
//         path: "/geolocation",
//         element: <Geolocation />,
//         iconClass: "bi bi bi-geo-alt-fill  text-secondary",
//         name: "Geolocalización",
//       },
//       {
//         path: "/jornadas",
//         element: <Jornadas />,
//         iconClass: "bi bi-calendar  text-secondary",
//         name: "Jornadas",
//       },
//       {
//         path: "/profile",
//         element: <h1>User Profile</h1>,
//         iconClass: "bi bi-person text-secondary",
//         name: "Profile",
//       },
//       {
//         path: "/tablatrabajadores",
//         element: <TablaTrabajadores />,
//         iconClass: "bi bi-people-fill  text-secondary",
//         name: "Tabla Trabajadores",
//       },
//       {
//         path: "/tablagrupotrabajadores",
//         element: <TablaGrupoTrabajadores />,
//         iconClass: "bi bi-people-fill  text-secondary",
//         name: "Tabla Grupo Trabajadores",
//       },
//       {
//         path: "/logout",
//         element: <Logout />,
//         iconClass: "bi bi-box-arrow-right  text-secondary",
//         name: "Salir",
//       },
//     ];

//   if (parseInt(isadmin) === 2)
//     // usuario admin nivel2
//     childrenRoutes = [
//       {
//         path: "/",
//         element: <Admin />,
//         iconClass: "bi bi-house-fill  text-secondary",
//         name: "Inicio",
//       },
//       {
//         path: "/geolocation",
//         element: <Geolocation />,
//         iconClass: "bi bi bi-geo-alt-fill  text-secondary",
//         name: "Geolocalización",
//       },
//       {
//         path: "/jornadas",
//         element: <Jornadas />,
//         iconClass: "bi bi-calendar  text-secondary",
//         name: "Jornadas",
//       },
//       {
//         path: "/profile",
//         element: <h1>User Profile</h1>,
//         iconClass: "bi bi-person text-secondary",
//         name: "Profile",
//       },
//       {
//         path: "/tablatrabajadores",
//         element: <TablaTrabajadores />,
//         iconClass: "bi bi-people-fill  text-secondary",
//         name: "Tabla Trabajadores",
//       },
//       {
//         path: "/tablagrupotrabajadores",
//         element: <TablaGrupoTrabajadores />,
//         iconClass: "bi bi-people-fill  text-secondary",
//         name: "Tabla Grupo Trabajadores",
//       },
//       {
//         path: "/logout",
//         element: <Logout />,
//         iconClass: "bi bi-box-arrow-right  text-secondary",
//         name: "Salir",
//       },
//     ];

//   const routesForPublic = [
//     {
//       path: "/service",
//       element: <h1>Service Page</h1>,
//     },
//     {
//       path: "/about-us",
//       element: <h1>About Us</h1>,
//     },

//     {
//       path: "/*",
//       element: <Navigate to="/" />,
//     },
//   ];

//   const routesForAuthenticatedOnly = [
//     {
//       path: "/",
//       element: <ProtectedRoute children={childrenRoutes} />,
//       children: childrenRoutes,
//     },
//   ];

//   const routesForNotAuthenticatedOnly = [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/signup",
//       element: <SignUp />,
//     },
//     {
//       path: "/restorepassword",
//       element: <RestorePassword />,
//     },
//   ];

//   const router = createBrowserRouter([
//     ...routesForPublic,
//     ...(!token ? routesForNotAuthenticatedOnly : []),
//     ...routesForAuthenticatedOnly,
//   ]);

//   // Provide the router configuration using RouterProvider
//   return <RouterProvider router={router} />;
// };

// export default Routes;
