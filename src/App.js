import Navbar from "./Components/Navbar/Navbar";
import Mainslider from "./Components/Mainslider/Mainslider";
import Categories from "./Components/Categories/Categories";
import { RouterProvider,createHashRouter } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout/Mainlayout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Authlayout from "./Layout/Authlayout/Authlayout";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Notfound from "./Components/Notfound/Notfound";
import { Offline, Online } from "react-detect-offline";
import React, { useEffect, useState } from "react";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Productdetails from "./Components/Productdetalis/Productdetails";
import Storecontextprovider from "./Context/Context";
import { Bounce, ToastContainer } from "react-toastify";
import Address from "./Components/Address/Address";

export default function App() {
  const [onlineElementVisible, setOnlineElementVisible] = useState(false);
  const [offlineElementVisible, setOfflineElementVisible] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setOnlineElementVisible(true);

      // Set a timeout to hide the online element after 30 seconds
      setTimeout(() => {
        setOnlineElementVisible(false);
      }, 10000);
    };
    const handleOffline = () => {
      setOfflineElementVisible(true);

      // Set a timeout to hide the offline element after 10 seconds
      setTimeout(() => {
        setOfflineElementVisible(false);
      }, 10000);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  let routes = createHashRouter([
    {
      path: "",
      element: <Mainlayout />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoutes>
              <Wishlist />
            </ProtectedRoutes>
          ),
        },
        {
          path: "Productdetails/:id",
          element: (
            <ProtectedRoutes>
              <Productdetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "address/:id",
          element: (
            <ProtectedRoutes>
              <Address />
            </ProtectedRoutes>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/",
      element: <Authlayout />,
      children: [
        { path: "/", element: <Signin /> },
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);
  return (
    <>
      <Storecontextprovider>
        <RouterProvider router={routes} />
      </Storecontextprovider>
      <ToastContainer theme="colored"  autoClose={700} draggable={true} />
      <div>
        {onlineElementVisible && (
          <Online>
            {" "}
            <div className="online"> you're online now !</div>{" "}
          </Online>
        )}
        {offlineElementVisible && (
          <Offline>
            {" "}
            <div className="offline"> you're offline now !</div>
          </Offline>
        )}
      </div>
    </>
  );
}
