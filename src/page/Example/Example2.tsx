import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Example() {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <motion.div></motion.div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col text-end">
            <Link to="/">BACK HOME</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Example;
