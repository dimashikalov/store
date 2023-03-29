import React, { useState } from "react";
import { authRoutes, publicRoutes } from "../routes/routes";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(true);

  const navigate = useNavigate();
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
