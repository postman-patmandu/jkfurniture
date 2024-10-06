import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/private-route/private-route.component';
import HomeScreen from './routes/home-screen/home-screen.component';
import AdminRoute from './components/admin-route/admin-route.component';
import ProductScreen from './routes/product-screen/product-screen.component';
import CartScreen from './routes/cart-screen/cart-screen.component';
import LoginScreen from './routes/login-screen/login-screen.component';
import RegisterScreen from './routes/register-screen/register-screen.component';
import ShippingScreen from './routes/shipping-screen/shipping-screen.component';
import PaymentScreen from './routes/payment-screen/payment-screen.component';
import PlaceOrderScreen from './routes/place-order-screen/place-order-screen.component';
import OrderScreen from './routes/order-screen/order-screen.component';
import NewPaymentSuccess from './routes/payment-success/new-payment-success.component';
import ProfileScreen from './routes/profile-screen/profile-screen.component';
import PrivacyScreen from './routes/privacy-screen/privacy-screen.component';
import SupportScreen from './routes/support-screen/support-screen.component';
import TermsScreen from './routes/terms-screen/terms-screen.component';
import ContactScreen from './routes/contact-screen/contact-screen.component';
import LivingRoomScreen from './routes/living-room-screen/living-room-screen.component';
import DiningRoomScreen from './routes/dining-room-screen/dining-room-screen.component';
import BedroomScreen from './routes/bedroom-screen/bedroom-screen.component';
import StyleTips from './routes/style-tips-screen/style-tips-screen.component';
import OrderListScreen from './routes/admin/order-list-screen/order-list-screen.component';
import ProductListScreen from './routes/admin/product-list-screen/product-list-screen.component';
import ProductEditScreen from './routes/admin/product-edit-screen/product-edit-screen.component';
import UserListScreen from './routes/admin/user-list-screen/user-list-screen.component';
import UserEditScreen from './routes/admin/user-edit-screen/user-edit-screen.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/living/:keyword/' element={<LivingRoomScreen />} />
      <Route path='/dining/:keyword/' element={<DiningRoomScreen />} />
      <Route path='/bedroom/:keyword/' element={<BedroomScreen />} />
      <Route path='/styling-tips' element={<StyleTips />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/privacy' element={<PrivacyScreen />} />
      <Route path='/terms' element={<TermsScreen />} />
      <Route path='/support' element={<SupportScreen />} />
      <Route path='/contact' element={<ContactScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/success' element={<NewPaymentSuccess />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
      </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
