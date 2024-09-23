import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();
  const [bodyWidth, setBodyWidth] = useState(document.body.offsetWidth);
  const [top, setTop] = useState(document.body.offsetHeight);
  useEffect(() => {
    const handleResize = () => {
      setBodyWidth(document.body.offsetWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    console.log(top);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {}, [location]);
  const Services = [
    { to: "/", title: "PLANOS ASSISTENCIAIS" },
    { to: "/", title: "SISTEMAS INTERNACIONAIS" },
    { to: "/", title: "CLÍNICAS E CONSULTÓRIOS" },
  ];

  const Products = [
    { to: "/", title: "VORTEX" },
    { to: "/", title: "REALMED" },
    { to: "/", title: "PYXIS" },
  ];

  const contatos = [
    { svg: "/icon-linkedin.svg", to: "https://linkedin.com", alt: "LinkedIn" },
    {
      svg: "/icon-instagram.svg",
      to: "https://instagram.com",
      alt: "Instagram",
    },
    { svg: "/icon-X.svg", to: "https://linkedin.com", alt: "X" },
    { svg: "/icon-facebook.svg", to: "https://facebook.com", alt: "Facebook" },
  ];

  return (
    <footer
      className={`flex flex-col bg-[#2a577a] w-full h-[40vh] justify-between gap-[35px] lg:gap-[75px] text-[white] items-start pt-[5px] sm:pt-[15px] md:pt-[35px] lg:pt-[55px] mt-[auto] left-0 bottom-0 mr-[auto]`}
    >
      <div
        className={`flex items-center text-lg not-italic font-normal leading-[normal] pl-3 sm:pl-[35px] md:pl-[55px] lg:pl-[80px] ${
          bodyWidth > 640 ? "justify-between" : "justify-center"
        } sm:gap-[50px] md:gap-[80px] lg:gap-[129px] content-end gap-y-[21px] shrink-0 self-stretch sm:flex-wrap`}
      >
        <div className="flex flex-col items-center gap-0">
          <img
            src="/protec-logo-mono.svg"
            alt="Protec Logo"
            className="lg:scale-[100%] md:scale-[75%] scale-[55%]"
          />
          <p className="text-xs pt-2">Tecnologia gerando resultados.</p>
        </div>
        {/* {bodyWidth > 100000 && (
          <div className="flex sm:ml-5 md:ml-10 lg:ml-[90px] gap-10 self-stretch items-center">
            <div className="flex items-center gap-0 sm:gap-5 md:gap-10 lg:gap-[75px] text-[10px] sm:text-xs justify-between gap-3 mt-5 pr-3 sm:pr-5 md:pr-10 lg:pr-[80px] text-start">
              <div className="flex flex-col justify-start">
                <Link to={"/about"}>
                  <p className="mb-1 hover:underline">SOBRE NÓS</p>
                </Link>
                <Link to={"/"}>
                  <p className="hover:underline">HOME</p>
                </Link>
              </div>
              <div className="frame-2">
                <Link to={"/services"}>
                  <h6 className="mb-2 hover:underline">SERVIÇOS</h6>
                </Link>
                {Services.map((x, index) => (
                  <Link to={x.to} key={index}>
                    <p className="hover:underline">{x.title}</p>
                  </Link>
                ))}
              </div>
              <div className="frame-3">
                <Link to={"/products"}>
                  <h6 className="mb-2 hover:underline">PRODUTOS</h6>
                </Link>
                {Products.map((x, index) => (
                  <Link to={x.to} key={index}>
                    <p className="hover:underline">{x.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )} */}
      </div>
      <div className="flex justify-between items-start flex-[1_0_0] self-stretch not-italic font-normal leading-[normal] pl-3 sm:pl-[35px] md:pl-[55px] lg:pl-[80px] text-xs mb-5 pr-3 sm:pr-[35px] md:pr-[55px] lg:pr-[80px] gap-3 text-left">
        <div className="footer-horario">
          <p className="font-bold">HORÁRIO DE FUNCIONAMENTO</p>
          <p className="text-[11px]">SEG - SEX: 8:00AM - 6:00PM</p>
          <p className="text-[11px]">SÁB: 9:00AM - 12:00PM</p>
          <p className="text-[11px]">DOM: FECHADO</p>
          <p className="font-bold mt-2">ENDEREÇO</p>
          <p className="text-[11px] mt-1">
            R. Galileu, Qd.1 Lt.24 - St Bouganville Anapolis - GO - Brasil -
            75.075-570
          </p>
        </div>
        <div className="pr-3">
          <p className="font-bold pb-2">CONTACTO</p>
          <div className="flex gap-3 justify-start mb-3">
            {contatos.map((x, index) => (
              <Link to={x.to} key={index} target="_blank">
                <img
                  src={x.svg}
                  alt={x.alt}
                  className="bg-[#f7f9ff] rounded-full p-1 w-6 hover:bg-blue-500"
                />
              </Link>
            ))}
          </div>
          <div className="flex gap-1 text-[11px] mb-2 items-center">
            <img
              src="/icon-phone.svg"
              alt="Phone"
              className="bg-[#f7f9ff] rounded-full p-1 w-6"
            />
            <a
              href="tel:+55 62 3321 7200"
              className="hover:underline"
              target="_blank"
            >
              +55 62 3321 7200
            </a>
          </div>
          <div className="flex gap-1 text-[11px] items-center">
            <img
              src="/icon-mail.svg"
              alt="Mail"
              className="bg-[#f7f9ff] rounded-full p-1 w-6"
            />
            <a
              href="mailto:contato@protecsistemas.com.br"
              className="hover:underline"
              target="_blank"
            >
              contato@protecsistemas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
