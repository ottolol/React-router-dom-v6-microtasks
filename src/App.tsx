import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import { Model } from "./components/pages/Model";

export const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  PAGE4: "/:brand/:id",
  ERROR: "/page/error",
} as const 
// as const пишем, чтобы нельзя было переопределить в коде новые имена страниц

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <NavLink to={PATH.PAGE1} className={({ isActive }) => (isActive ? styles.active : "")}>Adidas</NavLink>
          <NavLink to={PATH.PAGE2} className={({ isActive }) => (isActive ? styles.active : "")}>Puma</NavLink>
          <NavLink to={PATH.PAGE3} className={({ isActive }) => (isActive ? styles.active : "")}>Abibas</NavLink>

          {/* <div><NavLink to={"/page3"} className={({ isActive }) => isActive ? "activeNavLink" : "navLink"}>Page3</NavLink></div> */}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.PAGE1} />} />

            <Route path={PATH.PAGE1} element={<Adidas />} />
            <Route path={PATH.PAGE2} element={<Puma />} />
            <Route path={PATH.PAGE3} element={<Abibas />} />

            <Route path={PATH.PAGE4} element={<Model />} />
            
            {/* <Route path={PATH.ERROR} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={PATH.ERROR} />} /> */}
            
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2025</div>
    </div>
  );
}

export default App;