import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: "none"
  }
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};

const cards= [
  { text:"COCTELES", title: 'Cocteles', image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203682/Cruel/Cocteles_fify97.png"}`, to: '/CocteleriaDeAutor'},
  {text:"TÓNICOS", title: 'Tonicos',image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203788/Cruel/Tonicos_j6wdog.png"}` ,to: '/Tonicos' },
  {text:"CLASICOS", title: 'Clasicos',image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203816/Cruel/Clasicos_vin7c1.png"}`, to: '/Clasicos' },
  {text:"WHISKYS", title: 'Whiskys',image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203846/Cruel/Whiskys_din2xx.png"}`, to: '/Whiskys' },
  {text:"VINOS",title: 'Vinos',image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203871/Cruel/Vinos_zjqruz.png"}`,to: '/Vinos'},
]



const TabContent = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"

  >
    <div className="cards">
      {cards.map((item, index,) => (
        <motion.div key={index} variants={cardVariant} className="content-card">
         <Link to={item.to}><img src={ item.image } alt={item.title}/>
         <div className="info">
            <h3>{item.text}</h3> 
         </div></Link>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TabContent;
