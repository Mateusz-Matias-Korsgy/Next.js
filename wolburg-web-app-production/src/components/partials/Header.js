import NavBar from "../navBar/navBar";

const Header = () => {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user)
  return (
    <header>
      <NavBar 
        loggedIn={user ? true : false} 
        username={user ? user?.firstName  + " " + user?.lastName : "Guest" } 
        user={user}
      />
    </header>
  );
};

export default Header;
