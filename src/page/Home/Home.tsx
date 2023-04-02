import { Link } from "react-router-dom";
import { routeList } from "../../data/routeList";
function Home() {
  return (
    <div className="container-xl">
      <ul className="list-group list-group-flush">
        {routeList.map((route) => (
          <li className="list-group-item">
            <Link to={route.to}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
