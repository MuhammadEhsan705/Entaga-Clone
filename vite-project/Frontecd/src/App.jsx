import{ createBrowserRouter ,createRoutesFromElements ,Route ,RouterProvider} from "react-router-dom"
import Rootlayout from "./components/Rootlayout";
import Home from "./pages/Home";
import Schedulecall from "./pages/Schedulecall";
import Form from "./pages/Form";
import Yalladeliver from "./pages/Yalladeliver";
import MalikDelivery from "./pages/MalikDelivery";

function App() {
  const router = (createBrowserRouter(createRoutesFromElements
    (<Route path="/" element={<Rootlayout/> }>
      <Route index element={<Home/>}/>
      <Route path="/schedule-call" element={<Schedulecall />} />
      <Route path="/form" element={<Form/>} />
      <Route path="/Yalla" element={<Yalladeliver />} />
      <Route path="/Milkdelivery" element={<MalikDelivery />} />

    </Route>)));
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
