import NetflixLogo from "../assets/svg/netflix-logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-[70px]">
      <div>
        <ul className="decoration-white">
          <li>Главная</li>
          <li>Сериалы</li>
          <li>Фильмы</li>
          <li>Последние</li>
          <li>Мой список</li>
        </ul>
      </div>
      <NetflixLogo className="w-40 fill-[#e50914]" />
    </header>
  );
};

export default Header;
