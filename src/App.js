import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer"
import About from "./Components/About";
import Error from "./Components/Error";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing


// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
    {
        path: "/", // show path for routing
        element: <AppLayout />, // show component for particular path
        errorElement: <Error />, // show error component for path is different
        children: [
            // show children component for routing
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 