import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I specialize in developing  <motion.b whileHover={{color:"orange"}}> mobile applications</motion.b>  and <motion.b whileHover={{color:"orange"}}> websites</motion.b>  websites for businesses and organizations. My focus is on <motion.b whileHover={{color:"orange"}}> crafting seamless digital experiences that meet the unique needs of my clients.</motion.b>   From enhancing user interactions to boosting online presence, I'm dedicated to delivering innovative solutions that drive success in the digital realm. <motion.b whileHover={{color:"orange"}}> Let's collaborate to bring your vision to life!</motion.b> 
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            I specialize in developing  
            <motion.b whileHover={{color:"orange"}}>  mobile applications</motion.b> and 

             <motion.b whileHover={{color:"orange"}}>  websites</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            for
            <motion.b whileHover={{color:"orange"}}>  businesses and organizations</motion.b>.
          </h1>
        </div>
      </motion.div>
      <motion.div className="titleContainer titleContainerTwo" variants={variants}>
        <div className="title">
          <h1>
            My focus is on crafting 
            <motion.b whileHover={{color:"orange"}}>  seamless digital experiences solutions</motion.b> 

             {/* <motion.b whileHover={{color:"orange"}}>  websites</motion.b> */}
          </h1>
        </div>
        <div className="title">
          <h1>
            that meet
            <motion.b whileHover={{color:"orange"}}>  the unique needs of my clients</motion.b>.
          </h1>
        </div>
      </motion.div>

      {/* <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
    
      </motion.div>
   */}
    </motion.div>
  );
};

export default Services;
