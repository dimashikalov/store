import { useState } from "react";
import { authRoutes, publicRoutes } from "../routes/routes";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const AppRouter = () => {
  const { auth } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  console.log("pr", process.env);
  return (
    <Routes>
      {auth &&
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
