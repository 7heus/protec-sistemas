import Header from "../components/header";
import { Link } from "react-router-dom";

export default function Home() {
  const serviceImages = [
    {
      src: "/public/assistenciais-img.png",
      to: "/",
      txt: "Planos assistenciais",
    },
    {
      src: "/public/internacionais-img.png",
      to: "/",
      txt: "Sistemas internacionais",
    },
    {
      src: "/public/consultorio-img.png",
      to: "/",
      txt: "Clínicas e consultórios",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col items-start pt-8 pl-5">
        <h1>Nossos serviços</h1>
        <div className="flex justify-between w-full pr-5 pt-2">
          {serviceImages.map((x, index) => (
            <Link to={x.to} key={index}>
              <div
                className={`text-white text-xs bg-[url('${x.src}')] w-[25vw] h-[10vh] bg-cover`}
              >
                <div
                  className="w-full h-full flex flex-col justify-end text-left"
                  style={{
                    background:
                      "var(--Gradient, linear-gradient(180deg, rgba(42, 87, 122, 0.14) 45.87%, rgba(16, 50, 77, 0.76) 79.64%), rgba(217, 217, 217, 0.00))",
                    opacity: "90%",
                  }}
                >
                  <p className="pl-2 pb-2">{x.txt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
