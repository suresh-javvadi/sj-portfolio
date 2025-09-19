import React from "react";
import AppRoutes from "./routes/AppRoutes";
import FullScreenWrapper from "./components/FullScreeenWrapper";

const App = () => {
  return (
    <FullScreenWrapper>
      <AppRoutes />
    </FullScreenWrapper>
  );
};

export default App;
