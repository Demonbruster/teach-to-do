import React, { useState } from "react";
import Login from "./Login";
import App from "./App";

export default function Authentication() {
  const [isLogin, setIslogin] = useState(false);

  if (isLogin) return <App />;
  else return <Login setIslogin={setIslogin} />;
}
