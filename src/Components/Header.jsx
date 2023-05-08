import Wrapper from "./Wrapper";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useContext } from "react";
import { AppContext } from "../Contexts/appContext";

export default function Header() {
  const { state } = useContext(AppContext);
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <img src={Logo} />
            </Link>
            <Link to="/favorites">
              <div className="favCount">
                <span className="count">{state.favorites.length}</span>My
                Favorites
              </div>
            </Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}
