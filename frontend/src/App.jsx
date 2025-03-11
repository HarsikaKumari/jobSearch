import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browser from './components/Browser.jsx';
import Profile from './components/Profile.jsx';
import JobDescription from './components/JobDescription.jsx';
import Companies from './components/admin/Companies.jsx';
import CreateCompanies from './components/admin/CreateCompanies.jsx';
import CompanySetup from './components/admin/CompanySetup.jsx';
import AdminJobs from './components/admin/AdminJobs.jsx';
import CreateJobs from './components/admin/CreateJobs.jsx';
import Applicants from './components/admin/Applicants.jsx';
import { ProtectedRoute } from './components/admin/ProtectedRoute.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription/>
  },
  {
    path: "/browse",
    element: <Browser />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/admin/companies",
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CreateCompanies /></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },
  {
    path: "/admin/jobs",
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><CreateJobs /></ProtectedRoute>
  },
  {
    path: "/admin/job/:id/applicants",
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
