import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashBoard/AdminDashboard';
import LoginPageAdmin from './pages/Auth/LoginAdmin';
import EmployeeTable from "./pages/admin/AdminPages/Emlpoyee/Employee";
import Category from "./pages/admin/AdminPages/Category/Category";
import BookingTable from "./pages/admin/AdminPages/Booking/Booking";
import Company from "./pages/admin/AdminPages/Company/Company";
import NotificationTable from "./pages/admin/AdminPages/Notication/Notifcation";
import CarRent from "./pages/admin/AdminPages/CarRent/CarRent";
import OfferTable from "./pages/admin/AdminPages/Offer/Offer";
import PromoTable from "./pages/admin/AdminPages/Promo/Promo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyForm from './pages/admin/AdminForm/CompanyForm/CompanyForm';
import User from './pages/admin/AdminPages/Users/Users';
import EmployeeForm from './pages/admin/AdminForm/EmployeeForm/EmployeeForm';
import CarDetails from './pages/admin/AdminPages/CarRent/CarDetails/CarDetails';
import EmployeeDashBoard from './pages/Employee/EmployeeDashBoard/EmployeeDashBoard';
import LoginEmployee from './pages/Auth/LoginEmployee';
import PromoPage from './pages/Employee/Promo/Promo';
import AddNewCar from './pages/Employee/Car/AddCar';
import EditCar from './pages/Employee/Car/EditCar';
import OfferPage from './pages/Employee/Offer/OfferPage';
import AddNewPromo from './pages/Employee/Promo/AddPromoPage';
import AddNewOffer from './pages/Employee/Offer/AddOfferPage';
import CarPage from "./pages/Employee/Car/CarPage";
import EditPromo from './pages/Employee/Promo/EditPromoPage';
import CompanyPage from './pages/Employee/Company/Company';
import EditOfferPage from './pages/Employee/Offer/EditOfferPage';
import BookingPage from './pages/Employee/Booking/BookingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPageAdmin/>} />
      <Route path= '/admin-login' element={<LoginPageAdmin/>} />
      <Route path= '/employee-login' element={<LoginEmployee/>} />

      <Route path='admin'>
        <Route index element={<AdminDashboard/>} />
        <Route path='user' element={<User/>} />
        <Route path= 'category' element={<Category />} />
        <Route path= 'company' element={<Company />} />
        <Route path= 'new-company' element={<CompanyForm />} />
        <Route path= 'employee' element={<EmployeeTable />} />
        <Route path= 'new-employee' element = {<EmployeeForm />}/>
        <Route path= 'promo' element={<PromoTable />} />
        <Route path= 'offer' element={<OfferTable />} />
        <Route path= 'car-rent' element={<CarRent />} />
        <Route path= 'car-rent/car-details/:id' element={<CarDetails />} />
        <Route path= 'booking' element={<BookingTable />} />
        <Route path= 'notification' element={<NotificationTable />} />
      </Route>

      <Route path='employee'>
        <Route index element={<EmployeeDashBoard/>} />
        <Route path= 'car-page' element={<CarPage />} />        
        <Route path= 'car-page/new-car' element={<AddNewCar />} />
        <Route path= 'car-page/edit-car/:id' element={<EditCar />} />

        <Route path= 'company-page' element={<CompanyPage />} />

        <Route path= 'offer-page' element={<OfferPage />} />
        <Route path= 'offer-page/new-offer' element={<AddNewOffer />} />
        <Route path= 'offer-page/edit-offer/:id' element={<EditOfferPage />} />


        <Route path= 'promo-page' element={<PromoPage />} />
        <Route path= 'promo-page/new-promo' element={<AddNewPromo />} />
        <Route path= 'promo-page/edit-promo/:id' element={<EditPromo />} />


        <Route path= 'booking-page' element={<BookingPage />} />

      </Route>
    </Routes>
    <ToastContainer theme="colored" position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
