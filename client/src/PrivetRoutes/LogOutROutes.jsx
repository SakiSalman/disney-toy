import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authProvider/AuthProvider";
import { Puff } from "react-loader-spinner";

const LogOutROutes = ({children}) => {
  const { loading, user, setLoading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#ffd662"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
        />
      </div>
    );
  }
  if (!user) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default LogOutROutes;
