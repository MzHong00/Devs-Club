import { createBrowserRouter } from "react-router-dom";
import Home from "../domain/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {

            },
        ]
    }
])

export default router