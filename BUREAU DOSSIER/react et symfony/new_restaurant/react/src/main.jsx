import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate,RouterProvider , createBrowserRouter } from 'react-router-dom'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
//component principal
import Home from './Home.jsx'
import App from './App.jsx'
import Visiteur from './Visiteur.jsx'
import ErrorPage from './error-page.jsx'

//pages
import AboutUs from './components/aboutus/AboutUs.jsx'
import Accueil from './components/accueil/Accueil.jsx'
import Contact from './components/contact/Contact'
import Produits from './components/produits/Produits.jsx'
import Decompte from './components/decompte/Decompte.jsx'
import DetailProduit from './components/detailproduit/DetailProduit.jsx'
import ListProductsAdmin from './components/listproductsadmin/ListProductsAdmin.jsx';
import LoginAdmin from './components/loginadmin/LoginAdmin.jsx'
import ListeCategorieAdmin from './components/listecategorieadmin/ListeCategorieAdmin.jsx'
import TableauDeBord from './components/tableaudebordadmin/TableauDeBord.jsx'
import CreateCategorieAdmin from './components/createcategorieadmin/CreateCategorieAdmin.jsx';

    const router = createBrowserRouter([
      {
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Accueil />,
          },
          {
            element: <Visiteur />,
            children: [
              {
                path: "/contact",
                element: <Contact />,
              },
              {
                path: "/qui-sommes-nous",
                element: <AboutUs />,
              },
              {
                //a modifier pour recuperer id :id
                path: "/categories",
                element: <Produits/>,
              },
              {
                //a modifier pour recuperer id :id
                path: "/decompte",
                element: <Decompte/>,
              },
              {
                //a modifier pour recuperer id :id
                path: "/detail-produit/",
                element: <DetailProduit/>,
              },
            ],
          },
          {
            element: <App />,
            children: [
              {
                path: "/admin/login/",
                element: ( <Login><LoginAdmin/></Login>),
              },
              {
                path: "/admin/tableau-de-bord",
                element: ( <PrivateRoute><TableauDeBord/></PrivateRoute>),
              },
              {
                path: "/admin/categories",
                element: ( <PrivateRoute><ListeCategorieAdmin/></PrivateRoute>),
              },
              {
                path: "admin/categories/ajouter",
                element: ( <PrivateRoute><CreateCategorieAdmin/></PrivateRoute>),
              },
              {
                path: "admin/produits",
                element: ( <PrivateRoute><ListProductsAdmin/></PrivateRoute>),
              },
            ]
          }
        ],
      },
    ]);
    function PrivateRoute({ children }) {
      const isAuthenticated = checkUserAuthentication();
      return isAuthenticated ? children : <Navigate to="/admin/login" />;
  }
  function Login({ children }) {
    const isAuthenticated = checkUserAuthentication();
    return isAuthenticated ?  <Navigate to="/admin/tableau-de-bord" />:children;
  }
  function checkUserAuthentication(){
    const auth = useAuthUser()
    const token = useAuthHeader();
  
  
    if(auth== null){
      return false ;
    }
    return true ;
  }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
