import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <div className="font-poppins max-w-screen-2xl mx-auto relative text-sm text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
