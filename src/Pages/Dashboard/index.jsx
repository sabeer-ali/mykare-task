import { connect } from "react-redux";
import { addLoginDetailsAction } from "../../Redux/actions";
import { Button } from "./dashboard.styles";
import { removeData } from "../../Utils/localStores";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeData("mykare-logins", () => {
      addLoginDetailsAction(null);
      navigate("/login");
    });
  };
  return (
    <div>
      <h1>Welcome to Dashboard Page</h1>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  addLoginDetails: (payload) => dispatch(addLoginDetailsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
