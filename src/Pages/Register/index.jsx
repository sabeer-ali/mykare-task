import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/Button";
import { addLoginDetailsAction } from "../../Redux/actions";
import { storeData } from "../../Utils/localStores";
import { Center, Column, Error, Input, Row } from "../Login/login.styles";

const RegisterPage = ({ addLoginDetails }) => {
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

  const handleRegister = () => {
    storeData("mykare-logins", userDetails, () => {
      addLoginDetails(userDetails);
      navigate("/login");
    });
  };

  return (
    <Center>
      <Column height="250px" width="30%">
        <Input
          placeholder="User name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, user: e.target.value })
          }
        />
        <Input
          placeholder="Password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, pass: e.target.value })
          }
        />

        <StyledButton
          width="50%"
          onClick={() => {
            if (userDetails?.user === "" || userDetails?.pass === "") {
              setIsSubmitted({
                status: true,
                message: "Invalid User name & Password",
              });
            } else {
              handleRegister();
            }
          }}
        >
          Register
        </StyledButton>

        {isSubmit.status && isSubmit.message !== "" && (
          <Error>Invalid User name and Password</Error>
        )}
      </Column>
    </Center>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addLoginDetails: (payload) => dispatch(addLoginDetailsAction(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
