import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";
import { getStoreData } from "../Utils/localStores";
import PrivateRoute from "./PrivateRoute";
import { addLoginDetailsAction } from "../Redux/actions";

const RouterWrapper = (props) => {
  const [loginDetails, setLoginDetails] = useState(null);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    getStoreData("mykare-logins", (res) => {
      addLoginDetailsAction(res);
    });

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div style={{ height: 100 }}>Loading . . . .</div>;
  } else
    return (
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  addLoginDetails: (payload) => dispatch(addLoginDetailsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);
