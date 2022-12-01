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
  { text:"TAPAS", title: 'Cocteles', image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203604/Cruel/Tapas_ue78wj.png"}`, to: '/Tapas'  },
  {text:"PRINCIPALES", title: 'Aperitivos', image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203628/Cruel/Principales_t2q4q4.png"}`, to: '/Principales'  },
  {text:"POSTRES", title: 'Tonicos',image: `${"https://res.cloudinary.com/grupo-delsud/image/upload/v1652203547/Cruel/Postres_qqyw6n.png"}`, to: '/Postres'  }
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
    {cards.map((item, index) => (
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
