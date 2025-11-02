import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const MIN_LOADER_TIME = 5000;

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const [loaderStartTime, setLoaderStartTime] = useState(null);

  useEffect(() => {
    let timeout;

    if (navigation.state === "loading") {
      setShowLoader(true);
      setLoaderStartTime(Date.now());
    } else if (navigation.state === "idle" && loaderStartTime) {
      const elapsed = Date.now() - loaderStartTime;
      const remaining = MIN_LOADER_TIME - elapsed;

      timeout = setTimeout(
        () => {
          setShowLoader(false);
          setLoaderStartTime(null);
        },
        remaining > 0 ? remaining : 0
      );
    }

    return () => clearTimeout(timeout);
  }, [navigation.state, loaderStartTime]);

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { zIndex: 9999 } }}
      />
      {showLoader && <Loading />}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
