import{ createBrowserRouter ,createRoutesFromElements ,Route ,RouterProvider} from "react-router-dom"
import Rootlayout from "./components/Rootlayout";
import Home from "./pages/Home";
import Schedulecall from "./pages/Schedulecall";
import Form from "./pages/Form";
import Yalladeliver from "./pages/Yalladeliver";
import MalikDelivery from "./pages/MalikDelivery";
import Documentaion from "./pages/Documentaion";
import Feature from "./pages/Feature";
import Customerweb from "./pages/Customerweb";
import ResturenApplication from "./pages/ResturenApplication";
import RiderApplication from "./pages/RiderApplication";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const router = (createBrowserRouter(createRoutesFromElements
    (<Route path="/" element={<Rootlayout/> }>
      <Route index element={<Home/>}/>
      <Route path="/schedule-call" element={<Schedulecall />} />
      <Route path="/form" element={<Form/>} />
      <Route path="/Yalla" element={<Yalladeliver />} />
      <Route path="/Milkdelivery" element={<MalikDelivery />} />
      <Route path="/Documentaion" element={<Documentaion  />} />
      <Route path="/features" element={<Feature  />} />
      <Route path="/customerweb" element={<Customerweb  />} />
      <Route path="/resturentapllication" element={<ResturenApplication />} />
      <Route path="/riderapplication" element={<RiderApplication  />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />


    </Route>)));
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
