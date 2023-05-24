import { Link } from "react-router-dom";
import { routeList } from "../../data/routeList";
function Home() {
  return (
    <div className="container-xl">
      <h3>Title</h3>
      <ul className="list-group list-group-flush" style={{ height: "100vh" }}>
        {routeList.map((route) => (
          <Link className="list-group-item list-group-item-action" key={route.name} to={route.to}>{route.name}</Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
