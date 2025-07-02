import { Session } from "next-auth";

interface Props {
  session?: Session | null;
  handleSignOut: () => Promise<void>;
}

const Navbar = ({ session, handleSignOut }: Props) => {
  console.log("Session Nav: ", session?.user);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Todo List</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex flex-fill align-items-center justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Action</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Preview</a>
            </li>
          </ul>
          <div className="ms-auto p-2 bd-highlight">
            <li className="nav-item dropdown d-flex flex-fill ">
              <a className="nav-link dropdown-toggle d-flex flex-fill justify-content-end align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {session ? session.user?.name : "unknown"}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Preview</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item align-items-center justify-content-center d-flex flex-fill" onClick={handleSignOut}>SIGN OUT</a>
                </li>
              </ul>
            </li>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;