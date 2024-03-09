import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

const Navigation = lazy(() => import("./Navigation"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {

  return (
    <>
      <Navigation />


      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} >
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
