import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About1 from "./components/AboutProduct/About1";
import About2 from "./components/AboutProduct/About2";
import About3 from "./components/AboutProduct/About3";
import Carousel from "./components/Carousel/Carousel";
import Company from "./components/Company/Company";
import First from "./components/First/First";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import ProductAbout from "./components/ProductAbout/ProductAbout";
import ProductPage from "./components/ProductPage/ProductPage";
import Second from "./components/Second/Second";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";
import TextPage from "./components/TextPage/TextPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Content from "./components/Content/Content";
import AdminProfil from "./pages/AdminProfil/AdminProfil";
import AdminCategory from "./pages/AdminCategory/AdminCategory";
import AdminCatalog from "./pages/AdminCatalog/AdminCatalog";
import AdminProduct from "./pages/AdminProduct/AdminProduct";
import SubCatalog from "./pages/SubCatalog/SubCatalog";
import HomeNews from "./pages/HomeNews/HomeNews";
import ProductTemplate from "./pages/ProductTemplate/ProductTemplate";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="App">
      <AdminProfil />
      <div className="App-div">
        <AdminCategory />
        <Routes>
          <Route path="/category" element={<AdminCatalog />} />
          <Route path="/subcatalog" element={<SubCatalog />} />
          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path="/home-news" element={<HomeNews />} />
          <Route path="/template" element={<ProductTemplate />} />
        </Routes>
      </div>
      {/* <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <First />
              <Section />
              <ProductPage />
              <TextPage />
            </>
          }
        />
        <Route
          path="blogId=:blogsId"
          element={
            <>
              <About1 />
            </>
          }
        />
        <Route
          path="/catalog=:subcatalogID"
          element={
            <>
              <ProductAbout />
              <Second />
            </>
          }
        />
        <Route
          path="/company"
          element={
            <>
              <Company />
              <Carousel />
            </>
          }
        />
        <Route path="/productid=:productId" element={<Content />} />
      </Routes>
      <Map />
      <Footer /> */}
    </div>
  );
}

export default App;
