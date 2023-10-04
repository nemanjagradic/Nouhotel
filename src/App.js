import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayoutPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RoomPage from "./pages/RoomPage";
import OffersPage from "./pages/OffersPage";
import OfferPage from "./pages/OfferPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "search-result", element: <SearchPage /> },
      { path: "rooms/:roomId", element: <RoomPage /> },
      { path: "offers", element: <OffersPage /> },
      { path: "offers/:offerId", element: <OfferPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
