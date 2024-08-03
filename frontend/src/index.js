import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
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
import OrderListScreen from './routes/admin/order-list-screen/order-list-screen.component';
import ProductListScreen from './routes/admin/product-list-screen/product-list-screen.component';
import ProductEditScreen from './routes/admin/product-edit-screen/product-edit-screen.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

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
        <Route path='/admin/product/:id' element={<ProductEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
