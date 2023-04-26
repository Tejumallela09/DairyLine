import {BrowserRouter, Routes, Route} from "react-router-dom"
//components
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
//user components
import RouteWithUserChatComponent from "./components/user/RouteWithUserChatComponent";
//publicly available pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
//protected User pages
import UserOrderPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilepage";
//protected admin pages
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminCreatProductPage from "./pages/admin/AdminCreatProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChartsPage from "./pages/admin/AdminChartsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";


function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route element = {<RouteWithUserChatComponent/>}>
      {/* publicly available routes */}
      <Route path="/" element={ <HomePage />} />
      <Route path="/product-list" element={ <ProductListPage />} />
      <Route path="/product-details" element={ <ProductDetailsPage />} />
      <Route path="/cart" element={ <CartPage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/register" element={ <RegisterPage />} />
      <Route path="*" element="Page not exists 404" />
      </Route>
      {/* user protected routes: */}
      <Route element={<ProtectedRoutesComponent admin={false}/>}>
      <Route path="/user-profile" element={ <UserProfilePage />} />
      <Route path="/user-orders" element={ <UserOrderPage />} />
      <Route path="/user-cart-details" element={ <UserCartDetailsPage />} />
      <Route path="/user-order-details" element={ <UserOrderDetailsPage />} />
      </Route>
      {/* admin protected routes: */}
      <Route element={<ProtectedRoutesComponent admin={true}/>}>
      <Route path="/admin-user" element={ <AdminUserPage />} />
      <Route path="/admin-edit-user" element={ <AdminEditUserPage />} />
      <Route path="/admin-products" element={ <AdminProductPage />} />
      <Route path="/admin-create-products" element={ <AdminCreatProductPage/>} />
      <Route path="/admin-edit-products" element={ <AdminEditProductPage/>} />
      <Route path="/admin-orders" element={ <AdminOrdersPage />} />
      <Route path="/admin-orders-details" element={ <AdminOrderDetailsPage />} />
      <Route path="/admin-charts" element={ <AdminChartsPage />} />
      <Route path="/admin-analytics" element={ <AdminAnalyticsPage />} />
      </Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
   
  );
}

export default App;
