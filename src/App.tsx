import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Page1Home } from "./Page1Home1";
import { MainBanner3 } from "./MainBanner3";
import { FrameComponent } from "./FrameComponent";
import { MainBanner2 } from "./MainBanner2";
import { useEffect } from "react";
import {Product} from "./product/src/Product";
import {Competitors} from "./competitors/src/Competitors";
import {Login} from "./payment/src/Login"
import {Payment} from "./payment/src/Payment";
import {Payment1} from "./payment/src/Payment1";
import {Payment2} from "./payment/src/Payment2";
import {DownloadScreen} from "./payment/src/DownloadScreen";
import { ProceedPaymentFree } from "./payment/src/ProceedPaymentFree";
import ForSeniors from "./Seniors/src/pages/ForSeniors";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mainbanner3":
        title = "";
        metaDescription = "";
        break;
      case "/frameComponent":
        title = "";
        metaDescription = "";
        break;
      case "/mainbanner2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Page1Home />} />

      <Route path="/homepage" element={<Page1Home />} />

      <Route path="/mainbanner3" element={<MainBanner3 />} />

      <Route path="/FrameComponent" element={<FrameComponent />} />

      <Route path="/mainbanner2" element={<MainBanner2 />} />

      <Route path="/product" element= {<Product/>} />

      <Route path="/competitors" element= {<Competitors/>} />

      <Route path="/login" element= {<Login/>} />

      <Route path="/payment" element= {<Payment/>} />

      <Route path="/payment1" element= {<Payment1/>} />

      <Route path="/payment2" element= {<Payment2/>} />

      <Route path="/downloadscreen" element= {<DownloadScreen/>} />

      <Route path="/ProceedPaymentFree" element={<ProceedPaymentFree/>} />
      
      <Route path="/ForSeniors" element={<ForSeniors/>} />
      
    </Routes>
  );
}
export default App;
