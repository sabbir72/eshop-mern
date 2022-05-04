import "./App.css";
import Home from "./component/Home/Home";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./component/Products/ProductDetails";
import Login from "./component/Authentication/Login";
import UserData from "./more/UserData";
import { useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import Store from "./store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./Route/ProtectedRoute";
import Profile from "./component/User/Profile";
import UpdatePassword from "./component/User/UpdatePassword";
import EditProfile from "./component/User/EditProfile";
import About from "./component/about/About";
import Products from "./component/Products/Products";
import Search from "./component/Products/Search";
import Support from "./more/Support";
import Cart from "./Cart/Cart";
import Favourite from "./Cart/Favourite";
import Shipping from "./Shipping/Shipping";
import ConfirmOrder from "./ConfirmOrder/ConfirmOrder";
import axios from "axios";
import Payment from "./Payment/Payment";
import Success from "./Success/Success";
import MoreOption from "./more/MoreOption";
import MyOrder from "./component/User/MyOrder";
import MyOrderDetails from "./component/User/MyOrderDetails";
import Contact from "./component/Home/Contact";
import Rules from "./more/Rules";
import CommingSoon from "./CommingSoon/CommingSoon";
import Dashboard from "./Admin/Dashboard";
import CreateProduct from "./Admin/CreateProduct";
import AllProducts from "./Admin/AllProducts";
import EditProduct from "./Admin/EditProduct";
import AllOrder from "./Admin/AllOrder";
import UpdateOrder from "./Admin/UpdateOrder";
import UpdateUser from "./Admin/UpdateUser";
import AllUsers from "./Admin/AllUsers";
import AllReviews from "./Admin/AllReviews";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Notfound from "./more/Notfound";
// import Loading from './more/Loading';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/products/:keyword" component={Products} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourite} />
        <Route exact path="/faq" component={Rules} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/more" component={MoreOption} />
        <Route exact path="/creator" component={CommingSoon} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
        <ProtectedRoute exact path="/success" component={Success} />
        <ProtectedRoute exact path="/orders" component={MyOrder} />
        <ProtectedRoute exact path="/order/:id" component={MyOrderDetails} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={CreateProduct}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={AllProducts}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={AllOrder}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={UpdateOrder}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={AllUsers}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={AllReviews}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/edit/product/:id"
          component={EditProduct}
        />
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : Notfound
          }
        />
        {/* <Route exact path="/load" component={Loading} /> */}
      </Switch>
    </Router>
  );
}

export default App;
