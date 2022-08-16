import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Payment } from "./Payment";
import { DownloadScreen } from "./DownloadScreen";
import { ProceedPaymentFree } from "./ProceedPaymentFree";
import { Login } from "./Login";
import { Payment1 } from "./Payment1";
import { Payment2 } from "./Payment2";
import { useEffect } from "react";

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
      case "/download-screen":
        title = "";
        metaDescription = "";
        break;
      case "/proceed-payment-free":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
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
      <Route path="/" element={<Payment />} />

      <Route path="/download-screen" element={<DownloadScreen />} />

      <Route path="/proceed-payment-free" element={<ProceedPaymentFree />} />

      <Route path="/login" element={<Login />} />

      <Route path="/payment" element={<Payment1 />} />

      <Route path="/payment" element={<Payment2 />} />
    </Routes>
  );
}
export default App;
