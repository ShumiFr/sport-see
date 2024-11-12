import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.js";
import Page404 from "./pages/Page404.js";

const GuardedRoute = () => {
  const { id } = useParams();
  const idEnInt = parseInt(id);

  return id === undefined || (idEnInt !== 12 && idEnInt !== 18) ? (
    <Navigate to="/404" />
  ) : (
    <DashboardPage />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<GuardedRoute />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
export default App;
