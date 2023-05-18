import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Example() {
    const animations = {
        show: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    }

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }
    return (
        <>
            <div className="container-xl" style={{ height: "80vh", background: "linear-gradient(180deg, #f08, #d0e)" }}>
                <div className="row">
                    <div className="col">
                        <motion.div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'white',
                                borderRadius: '20px'
                            }}
                            transition={{ duration: 2 }}
                            variants={animations}
                            initial={'hidden'}
                            animate={'show'}
                        ></motion.div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          variants={list}
                        >
                            <motion.li variants={item}/>
                            <motion.li variants={item}/>
                            <motion.li variants={item}/>

                        </motion.ul>
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
