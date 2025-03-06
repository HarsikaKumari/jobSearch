import { useSelector } from "react-redux";
import useGetAllJobs from "../hooks/useGetAllJobs.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import HeroSection from "./HeroSection.jsx";
import LatestJobs from "./LatestJobs.jsx";
import Footer from "./shared/Footer.jsx";
import Navbar from "./shared/Navbar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  useGetAllJobs();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Home;
