import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Layout2 from './components/Layout/Layout2';
import Layout3 from './components/Layout/Layout3';
import Layout4 from './components/Layout/Layout4';
import Layout5 from './components/Layout/Layout5';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Doctors from './components/Pages/Doctors';
import Blog from './components/Pages/Blog';
import Appointments from './components/Pages/Appointments';
import Departments from './components/Pages/Departments';
import DepartmentDetails from './components/Pages/DepartmentDetails';
import BlogDetails from './components/Pages/BlogDetails';
import DoctorDetails from './components/Pages/DoctorDetails';
import Gallery from './components/Pages/Gallery';
import Timetable from './components/Pages/Timetable';
import Contact from './components/Pages/Contact';
import ErrorPage from './components/Pages/ErrorPage';
import FindHospital from './components/Pages/FindHospital';
import FindBed from './components/Pages/FindBed';
import CreateHospital from './components/Pages/CreateHospital';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="departments" element={<Departments />} />
        <Route
          path="departments/:departmentId"
          element={<DepartmentDetails />}
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="contact" element={<Contact />} />
        {/* Add the new routes */}
        <Route path="find-hospital" element={<FindHospital />} />
        <Route path="find-bed" element={<FindBed />} />
        <Route path="create-hospital" element={<CreateHospital />} />
      </Route>
    </Routes>
  );
}

export default App;