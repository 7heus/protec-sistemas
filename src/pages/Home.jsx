import Header from "../components/header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start py-8 px-10 lg:px-[10%] lg:py-10 w-full h-screen">
        <h1 className="lg:text-[25px]">Nossos serviços</h1>
        <div className="flex justify-between w-full pt-2 lg:pt-8">
          <Link to="/">
            <div
              className={`transition-transform hover:translate-y-[-15px] text-white text-xs bg-[url('/public/assistenciais-img.png')] w-[25vw] h-[10vh] lg:h-[45vh] bg-cover`}
            >
              <div
                className="w-full h-full flex flex-col justify-end text-left"
                style={{
                  background:
                    "var(--Gradient, linear-gradient(180deg, rgba(42, 87, 122, 0.14) 45.87%, rgba(16, 50, 77, 0.76) 79.64%), rgba(217, 217, 217, 0.00))",
                  opacity: "90%",
                }}
              >
                <p className="pl-2 pb-2 lg:text-[30px] lg:pb-8 lg:pl-8">
                  Planos assistenciais
                </p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div
              className={`transition-transform hover:translate-y-[-15px] text-white text-xs bg-[url('/public/internacionais-img.png')] w-[25vw] h-[10vh] lg:h-[45vh] bg-cover hover:translateY-[15px]`}
            >
              <div
                className="w-full h-full flex flex-col justify-end text-left"
                style={{
                  background:
                    "var(--Gradient, linear-gradient(180deg, rgba(42, 87, 122, 0.14) 45.87%, rgba(16, 50, 77, 0.76) 79.64%), rgba(217, 217, 217, 0.00))",
                  opacity: "90%",
                }}
              >
                <p className="pl-2 pb-2 lg:text-[30px] lg:pb-8 lg:pl-8">
                  Sistemas internacionais
                </p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div
              className={`transition-transform hover:translate-y-[-15px] text-white text-xs bg-[url('/public/consultorio-img.png')] w-[25vw] h-[10vh] lg:h-[45vh] bg-cover`}
            >
              <div
                className="w-full h-full flex flex-col justify-end text-left"
                style={{
                  background:
                    "var(--Gradient, linear-gradient(180deg, rgba(42, 87, 122, 0.14) 45.87%, rgba(16, 50, 77, 0.76) 79.64%), rgba(217, 217, 217, 0.00))",
                  opacity: "90%",
                }}
              >
                <p className="pl-2 pb-2 lg:text-[30px] lg:pb-8 lg:pl-8">
                  Clínicas e consultórios
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
