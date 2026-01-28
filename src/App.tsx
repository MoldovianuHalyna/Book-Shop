import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";

const HomePage = lazy(() => import("./pages/Homepage/HomePage"));
const BookShelfPage = lazy(() => import("./pages/BookShelfPage/BookShelfPage"));
const BookDetailsPage = lazy(
  () => import("./pages/BookDetailsPage/BookDetailsPage"),
);
const BookClubPage = lazy(() => import("./pages/BookClubPage/BookClubPage"));
const RatingPage = lazy(() => import("./pages/RatingPage/RatingPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-shelf" element={<BookShelfPage />} />
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
          <Route path="/book-club" element={<BookClubPage />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer />
      </Suspense>
    </Layout>
  );
}

export default App;
