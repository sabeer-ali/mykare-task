import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getStoreData } from "../Utils/localStores";

const PrivateRoute = ({ loginDetails }) => {
  return loginDetails ? <Outlet /> : <Navigate to={"/login"} />;
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(PrivateRoute);
