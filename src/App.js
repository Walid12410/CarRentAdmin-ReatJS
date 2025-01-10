import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashBoard/AdminDashboard';
import LoginPageAdmin from './pages/Auth/LoginAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ReviewPage from './pages/Employee/Review/ReviewPage';
import User from './pages/admin/Pages/Users';
import CompanyAdmin from './pages/admin/Pages/Company';
import PromoAdmin from './pages/admin/Pages/Promo';
import CategoryAdmin from './pages/admin/Pages/Category';
import AddCompanyAdmin from './pages/admin/Pages/AddCompany';
import CarAdmin from './pages/admin/Pages/Car';
import ReviewAdmin from './pages/admin/Pages/Review';
import EmployeeAdmin from './pages/admin/Pages/Employee';
import AddEmployeeAdmin from './pages/admin/Pages/AddEmployee';
import OfferAdmin from './pages/admin/Pages/Offer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPageAdmin/>} />
      <Route path= '/admin-login' element={<LoginPageAdmin/>} />
      <Route path= '/employee-login' element={<LoginEmployee/>} />

      <Route path='admin'>
        <Route index element={<AdminDashboard/>} />
        <Route path='user-page' element={<User/>} />
        <Route path='company-page' element={<CompanyAdmin />} />
        <Route path='company-page/create' element={<AddCompanyAdmin />} />
        <Route path='promo-page' element={<PromoAdmin />} />
        <Route path='category-page' element={<CategoryAdmin />} />
        <Route path='car-page' element={<CarAdmin />} />
        <Route path='review-page' element={<ReviewAdmin />} />
        <Route path='employee-page' element={<EmployeeAdmin />} />
        <Route path='employee-page/create' element={<AddEmployeeAdmin />} />
        <Route path='offer-page' element={<OfferAdmin />} />

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

        <Route path= 'review-page' element={<ReviewPage/>} />
      </Route>
    </Routes>
    <ToastContainer theme="colored" position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
