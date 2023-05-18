import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Example() {
  return (
    <>
      <div className="container-xl" style={{height: "200vh"}}>
        <div className="row pt-5">
          <h3>Horizontal movement on scroll - Webflow</h3>
        </div>
        <div className="row" style={{paddingTop: "100vh"}}>
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
