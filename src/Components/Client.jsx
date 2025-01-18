import Amul from "../assets/amul.png";
import MarutiSuzuki from "../assets/suzuki.png";
import Pure from "../assets/pure.png";
import LIC from "../assets/LIC.png";
import "./Client.css";

export default function Client() {
  return (
    <div className="mt-5 w-[100%] sm:w-[90%] absolute top-[52em] left-[3em] pb-10">
      <span className="text-white text-2xl font-poppins font-semibold">
        Clients
      </span>
      <div className="overflow-x-auto mx-10">
        <div className="flex flex-row items-center gap-12">
          <img
            src={Amul}
            alt="Amul Logo"
            className="object-contain h-60 w-80"
          />
          <img
            src={MarutiSuzuki}
            alt="Maruti Suzuki Logo"
            className="object-contain h-60 w-96"
          />
          <img
            src={Pure}
            alt="Pure Logo"
            className="object-contain h-60 w-80"
          />
          <img src={LIC} alt="LIC Logo" className="object-contain h-52 w-60" />
        </div>
      </div>
    </div>
  );
}
