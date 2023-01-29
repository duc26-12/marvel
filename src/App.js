import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./components/routes/index";
import DefaultLayout from "../src/components/Layout/DefaultLayout/Defaulayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout ? Fragment : DefaultLayout;

            const Page = route.component;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
