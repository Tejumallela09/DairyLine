import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import BlogPage from "./pages/BlogPage";
//protected User pages
import UserOrderPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilepage";
import UserRegisterPage from "./pages/user/UserRegisterPage";
//protected admin pages
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChartsPage from "./pages/admin/AdminChartsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import ScrollToTop from "./utils/ScrollToTop";
//protected farmers pages
import FarmerProfilepage from "./pages/farmer/FarmerProfilepage";
import FarmerCreateProductspage from "./pages/farmer/FarmerCreateProductspage";
import FarmerEditProductPage from "./pages/farmer/FarmerEditProductPage";
import FarmerOrderDetailsPage from "./pages/farmer/FarmerOrderDetailsPage";
import FarmerProductPage from "./pages/farmer/FarmerProductPage";
import FarmerCapitalBudgettingPage from "./pages/farmer/FarmerCapitalBudgetting";
import FarmerVetListPage from "./pages/farmer/FarmerVetListPage";
import FarmerRegisterPage from "./pages/farmer/FarmerRegisterPage";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserChatComponent />}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blog/page" element={<BlogPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* user protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/orders" element={<UserOrderPage />} />
          <Route path="/user/cart/details" element={<UserCartDetailsPage />} />
          <Route path="/user/order/details" element={<UserOrderDetailsPage />} />
          
        </Route>
        {/* farmer protected routes: */}
        <Route element={<ProtectedRoutesComponent farmer={true} />}>
          <Route path="/farmer-profile" element={<FarmerProfilepage />} />
          <Route path="/farmer-create-products" element={<FarmerCreateProductspage />} />
          <Route path="/farmer-edit-products" element={<FarmerEditProductPage />} />
          <Route path="/farmer-order-details" element={<FarmerOrderDetailsPage />} />
          <Route path="/farmer-product" element={<FarmerProductPage />} />
          <Route path="/farmer-vet-list" element={<FarmerVetListPage />} />
          <Route path="/farmer-cb" element={<FarmerCapitalBudgettingPage />} />
          <Route path="/farmer-register" element={<FarmerRegisterPage />} />
        </Route>
        {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin-user" element={<AdminUserPage />} />
          <Route path="/admin-edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin-products" element={<AdminProductPage />} />
          <Route path="/admin-create-products" element={<AdminCreateProductPage />} />
          <Route path="/admin-edit-products" element={<AdminEditProductPage />} />
          <Route path="/admin-orders" element={<AdminOrdersPage />} />
          <Route path="/admin-orders-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin-charts" element={<AdminChartsPage />} />
          <Route path="/admin-chats" element={<AdminChatsPage />} />
          <Route path="/admin-analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>

  );
}

export default App;
