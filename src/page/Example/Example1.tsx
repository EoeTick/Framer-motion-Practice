import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Example() {
  return (
    <>
      <div
        className="container-xl"
        style={{
          background: "linear-gradient(180deg, #f08, #d0e)",
          height: "80vh",
        }}
      >
        <div className="row">
          <div className="col">
            <motion.div
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                borderRadius: "20px",
              }}
              animate={{
                x: 50,
                y: 20,
                scale: 0.5,
                rotate: 45,
                opacity: 0.5,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="row">
          <div className="col">
            <p></p>
          </div>
        </div> */}
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
