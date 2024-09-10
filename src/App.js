import Adds from "./components/Adds/Adds";
import Article from "./components/Article/Article";
import ArticleSlider from "./components/ArticleSlider/ArticleSlider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MoreArticle from "./components/MoreArticle/MoreArticle";
import Slider from "./components/Slider/Slider";
import Sponser from "./components/Sponser/Sponser";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import StoreDetail from "./components/StoreDetail/StoreDetail";
import Store from "./components/Store/Store";
import Blogs from "./components/Blogs/Blogs";
import BlogsDetail from "./components/BlogsDetail/BlogsDetail";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import ExperienceDetail from "./components/Experience/ExperienceDetail";
import Accessories1 from "./components/Accessories/Accessories1";
import Acessory2 from "./components/Accessories/Acessory2";

import HomeBlog from "./components/HomeBlog/HomeBlog";
import TrendingArticle from "./components/TrendingArticle/TrendingArticle";
import SimilarArticle from "./components/SimilarArticle/SimilarArticle";
import AccessoryDetail from "./components/AccessoryDetail/AccessoryDetail";




// Create a layout for pages with header and footer
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
// Import your components as before...

function App() {
  return (
    <Routes>
      {/* Parent route with catch-all redirect */}
      <Route
        path="/*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <HomeBlog />
                    <Slider />
                    {/* <Article /> */}
                    <Adds />
                    <TrendingArticle />
                    <SimilarArticle />
                    {/* <MoreArticle /> */}
                    {/* <ArticleSlider /> */}
                    <Sponser />
                  </>
                }
              />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogsDetail" element={<BlogsDetail />} />
              <Route path="/storeDetail" element={<StoreDetail />} />
              <Route path="/store" element={<Store />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/experienceDetail" element={<ExperienceDetail />} />

              <Route path="/accessories1" element={<Accessories1 />} />
              <Route path="/Acessory2" element={<Acessory2 />} />
              <Route path="/accessoryDetail" element={<AccessoryDetail />} />
            </Routes>
          </DefaultLayout>
        }
      />

      {/* Standalone routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more standalone routes as needed */}
    </Routes>
  );
}

export default App;
