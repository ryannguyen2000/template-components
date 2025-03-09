import Accordions from "@/components/accorditions";
import Breadcrumb from "@/components/breadcrum";
import Checkbox from "@/components/checkbox";
import Modal from "@/components/modal";
import Navbar from "@/components/navbar";
import Pagination from "@/components/pagination";
import RegistrationForm from "@/components/registerForm";
import Tab from "@/components/tabs";

export default function Home() {
  return (
    <div className="">
      <Accordions />
      <Navbar />
      <Modal />
      <RegistrationForm />
      <Pagination />
      <Tab />
      <Breadcrumb />
      <Checkbox />
    </div>
  );
}
