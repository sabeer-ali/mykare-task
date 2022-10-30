import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/Button";
import CustomLink from "../../components/Link";
import { getStoreData, storeData } from "../../Utils/localStores";
import { Center, Column, Error, Input, Row } from "./login.styles";

const LoginPage = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({ user: "", pass: "" });
  const [isSubmit, setIsSubmitted] = useState({ status: false, message: "" });

  useEffect(() => {
    if (isSubmit.status) {
      setTimeout(() => {
        setIsSubmitted({ status: false, message: "" });
      }, 2500);
    }
  }, [isSubmit]);

  const checkAuth = (data) => {
    if (data?.user === userDetails?.user && data?.pass === userDetails?.pass) {
      navigate("/");
    } else {
      setIsSubmitted({ status: true, message: "No User Found" });
    }
  };

  const handleLogin = () => {
    getStoreData("mykare-logins", (res) => {
      if (res) {
        checkAuth(res);
      } else {
        setIsSubmitted({ status: true, message: "No User Found" });
      }
    });
  };

  return (
    <Center>
      <Column height="250px" width="30%">
        <Input
          placeholder="User name"
          onChange={(e) => {
            setIsSubmitted(false);
            setUserDetails({ ...userDetails, user: e.target.value });
          }}
        />
        <Input
          placeholder="Password"
          onChange={(e) => {
            setIsSubmitted(false);
            setUserDetails({ ...userDetails, pass: e.target.value });
          }}
        />
        <Row>
          <StyledButton
            width="50%"
            onClick={() => {
              if (userDetails?.user === "" || userDetails?.pass === "") {
                setIsSubmitted({
                  status: true,
                  message: "Invalid User name & Password",
                });
              } else {
                handleLogin();
              }
            }}
          >
            Login
          </StyledButton>
          <CustomLink as="a" onClick={() => navigate("/register")}>
            Register
          </CustomLink>
        </Row>
        <>
          {isSubmit?.status && isSubmit.message !== "" && (
            <Error>{isSubmit?.message}</Error>
          )}
        </>
      </Column>
    </Center>
  );
};

export default LoginPage;
