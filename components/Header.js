function Header() {
  return (
    <header className="header section max-width-container">
      <h1 className="header__title">
        <span>MOHAMMED </span>
        <span>SABRY </span>
        <span>MOHAMMED</span>
      </h1>
      <p className="header__subtitle">
        FRONT END <br />  DEVELOPER
      </p>
      <div className="header__decor-circle" />
      <div className="header__gallery">
        <div className="header__gallery-left">
          <div className="header__gallery-image header__gallery-image--l">
            <img src="/images/1.jpg" alt="" />
          </div>
          <div className="header__gallery-image header__gallery-image--m">
            <img src="/images/2.jpg" alt="" />
          </div>
          <div className="header__gallery-image header__gallery-image--s">
            <img src="/images/3.jpg" alt="" />
          </div>
        </div>
        <div className="header__gallery-right">
          <div className="header__gallery-image header__gallery-image--l">
            <img src="/images/4.jpg" alt="" />
          </div>
          <div className="header__gallery-image header__gallery-image--m">
            <img src="/images/5.jpg" alt="" />
          </div>
          <div className="header__gallery-image header__gallery-image--s">
            <img src="/images/6.jpg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
