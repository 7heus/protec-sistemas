import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./active.css";

export default function NavBar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [bodyWidth, setBodyWidth] = useState(document.body.offsetWidth);
  window.onresize = () => setBodyWidth(document.body.offsetWidth);

  useEffect(() => setUrl(location.pathname), [location]);

  const linkList = [
    { to: "/", title: "Home" },
    { to: "/about", title: "Sobre" },
    { to: "/services", title: "Serviços" },
    { to: "/products", title: "Produtos" },
    { to: "/portal", title: "Portal" },
    { to: "/contact", title: "Contato" },
  ];
  return (
    <nav className="w-full flex-0 bg-[#2a577a] sm:flex sm:flex-row sm:justify-between gap-0 sm:gap-[10px] sm:h-[10vh] pb-[5px] pl-[2px] pr-[2px,] py-[1px,] left-0 top-0">
      <img
        className="scale-[50%] pl-[30%] sm:pl-[0]"
        src="/protec-logo-header.svg"
        alt=""
      />
      <div className="w-[Hug_(789px)] flex flex-row justify-between gap-[10px] items-center mr-3 lg:pr-[82px]">
        {linkList.map((x, index) => (
          <Link
            style={{ fontFamily: `"Montserrat", Inter` }}
            key={index}
            to={x.to}
            className={
              "text-[white] no-underline hover:underline text-xs tracking-tight sm:text-base md:pl-[35px] active:text-[gray]" +
              (url === x.to ? " active" : "")
            }
          >
            <p className="text-[white] no-underline">{x.title}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
