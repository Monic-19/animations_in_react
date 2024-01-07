import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page2 from "../Pages/Page2";

const router = createBrowserRouter([
    {path : "/", element : <App></App>},
    {path : "*", element : <App></App>},
    {path : "/page2", element : <Page2></Page2>},

])

export default router;