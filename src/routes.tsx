import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail.tsx";
// import Categories from "./pages/Categories";
// import Variants from "./pages/Variants";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import WebDesign from "./pages/WebDesign";
// import Graphics from "./pages/Graphics";
// import Motion from "./pages/Motion";
// import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/products" element={<Products />} />

            <Route path="/product/:id" element={<ProductDetail/>}/>
            {/*<Route path="/products/categories" element={<Categories />} />*/}
            {/*<Route path="/products/variants" element={<Variants />} />*/}
            {/*<Route path="/services" element={<Services />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="/portfolio" element={<Portfolio />} />*/}
            {/*<Route path="/portfolio/web-design" element={<WebDesign />} />*/}
            {/*<Route path="/portfolio/graphics" element={<Graphics />} />*/}
            {/*<Route path="/portfolio/motion" element={<Motion />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
}
