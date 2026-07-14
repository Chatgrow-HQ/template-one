import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/index";
import AboutUs from "./pages/aboutus";
import Services from "./pages/services";
import Blog from "./pages/blog/blogs";
import BlogDetail from "./pages/blog/blog-detail";
import ContactUs from "./pages/contact";
import ScrollToTop from "./components/scroll-to-top";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Legacy links kept as redirects so old bookmarks do not break. */}
        <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
        <Route path="/blogs" element={<Navigate to="/blog" replace />} />
        <Route path="/blog-detail/:id" element={<Navigate to="/blog" replace />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
