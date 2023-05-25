import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import React, { useEffect } from "react";

function App() {
  const content = useRoutes(routes);

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleConsoleOpen = () => {
      console.log("Console đã được mở.");
    };

    console.warn("%cDừng lại!", "color: red; font-size: 3rem;");
    console.warn(
      "%cĐây là một tính năng của trình duyệt dành cho các nhà phát triển.",
      "color: black; font-size: 1.2rem;"
    );

    window.addEventListener("devtoolschange", handleConsoleOpen);

    return () => {
      window.removeEventListener("devtoolschange", handleConsoleOpen);
    };
  }, []);

  return <div className="app">{content}</div>;
}

export default App;
