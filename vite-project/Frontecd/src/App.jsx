import { HashRouter, Routes, Route } from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./pages/Home";
import Schedulecall from "./pages/Schedulecall";
import Form from "./pages/Form";
import Yalladeliver from "./pages/Yalladeliver";
import MalikDelivery from "./pages/MalikDelivery";
import Documentaion from "./pages/Documentaion";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="schedule-call" element={<Schedulecall />} />
          <Route path="form" element={<Form />} />
          <Route path="Yalla" element={<Yalladeliver />} />
          <Route path="Milkdelivery" element={<MalikDelivery />} />
          <Route path="Documentaion" element={<Documentaion />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
