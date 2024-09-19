import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import LogInPage from './pages/Auth/LogInPage';
import UserTable from "./pages/admin/tables/Users/Users";
import EmployeeTable from "./pages/admin/tables/Emlpoyee/Employee";
import CategoryTable from "./pages/admin/tables/Category/Category";
import BookingTable from "./pages/admin/tables/Booking/Booking";
import CompanyTable from "./pages/admin/tables/Company/Company";
import NotificationTable from "./pages/admin/tables/Notication/Notifcation";
import CarRentTable from "./pages/admin/tables/CarRent/CarRent";
import OfferTable from "./pages/admin/tables/Offer/Offer";
import PromoTable from "./pages/admin/tables/Promo/Promo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyForm from './pages/admin/Form/companyForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogInPage/>} />
      <Route path= '/login' element={<LogInPage/>} />
      
      <Route path='admin'>
        <Route index element={<AdminDashboard/>} />
        <Route path='user-table' element={<UserTable/>} />
        <Route path= 'category-table' element={<CategoryTable />} />
        <Route path= 'company-table' element={<CompanyTable />} />
        <Route path= 'employee-table' element={<EmployeeTable />} />
        <Route path= 'promo-table' element={<PromoTable />} />
        <Route path= 'offer-table' element={<OfferTable />} />
        <Route path= 'car-rent-table' element={<CarRentTable />} />
        <Route path= 'booking-table' element={<BookingTable />} />
        <Route path= 'notification-table' element={<NotificationTable />} />
        <Route path= 'new-company' element={<CompanyForm />} />
      </Route>

    </Routes>
    <ToastContainer theme="colored" position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
