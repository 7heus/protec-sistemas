import { Link } from "react-router-dom";

export default function Header() {
  const socialLinks = [
    { svg: "/icon-linkedin.svg", to: "https://linkedin.com" },
    { svg: "/icon-instagram.svg", to: "https://instagram.com" },
    { svg: "/icon-X.svg", to: "https://X.com" },
    { svg: "/icon-facebook.svg", to: "https://facebook.com" },
  ];
  return (
    <div className="flex grow w-full flex-col items-start justify-start items-stretch">
      <img src="/header-img.png" alt="" className="" />
      <div className="absolute top-[7%] sm:top-[15%] md:top-[15%] text-left text-xs md:text-sm text-[#2A577A]">
        <img
          src="/header-text.svg"
          alt=""
          className="absolute scale-[30%] sm:scale-[45%] md:scale-[80%] right-[30%] sm:right-[20%] md:right-[0%]"
        />
        <p className="pl-5 sm:pl-6 md:pl-[10%] pt-[15%] sm:pt-[20%] md:pt-[25%] w-[60%] sm:w-[80%] font-bold">
          resolvendo todos os seus problemas tech há mais de 18 anos.
        </p>
        <div className="flex pl-5 md:pl-6 pt-1 justify-between gap-0 md:gap-3 w-auto items-center pr-10">
          {socialLinks.map((x, index) => (
            <Link to={x.to} key={index} target="_blank">
              <img
                src={x.svg}
                alt={x.to}
                className="bg-[#E39D22] rounded-full p-1 w-6 md:w-10"
              />
            </Link>
          ))}
          <Link to={"/about"}>
            <div className="bg-[#E39D22] rounded-lg h-2 text-[9px] md:text-[12px] flex justify-center items-center gap-[10px] text-black px-[5px] md:px-[15px] py-[13px] md:py-[18px]">
              <p>Descubra mais sobre a empresa</p>
              <img src="/icon-arrow-right.svg" alt="" className="scale-[80%]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
