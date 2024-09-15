// import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminBar from "./components/admin-bar/admin-bar.component";
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <>
      <AdminBar />
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
};

export default App;