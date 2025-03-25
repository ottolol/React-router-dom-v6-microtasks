import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/PageOne";
import { PageThree } from "./components/pages/PageThree";
import { PageTwo } from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import styled from "styled-components";

const PATH = {
  PAGE1: "/page1",
  PAGE2: "/page2",
  PAGE3: "/page3",
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
          <NavLink to={PATH.PAGE1} className={({ isActive }) => (isActive ? styles.active : "")}>Page1</NavLink>
          <NavLink to={PATH.PAGE2} className={({ isActive }) => (isActive ? styles.active : "")}>Page2</NavLink>
          <NavLink to={PATH.PAGE3} className={({ isActive }) => (isActive ? styles.active : "")}>Page3</NavLink>

          {/* <div><NavLink to={"/page3"} className={({ isActive }) => isActive ? "activeNavLink" : "navLink"}>Page3</NavLink></div> */}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.PAGE1} />} />

            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            
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