import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import siara from'/siara.png';
import soiAttendence from'/soiAttendence.png';
import filtrd from'/filtrd.png';
import howbodiMobile from'/howbodiMobile.png';

const items = [
  {
    id: 1,
    title: "HowBodi App",
    img: howbodiMobile,
    desc: "The Howbodi platform offers access to free mental health assessment tests, providing insights into your mental health status. Your test results can guide you on whether further assessment by mental health professionals is necessary. Additionally, you can directly book a consultation with a therapist without completing assessment forms",
    url:"https://play.google.com/store/apps/details?id=com.pinnacle.howbodi.app"
  },
  {
    id: 2,
    title: "Filtrd App",
    img: filtrd,
    desc: "Filtrd app  helps you take control of your business expenses by unlocking visibility and insights leveraging visual displays so you can budget better and generally optimize your workflow",
        url:"https://play.google.com/store/apps/details?id=com.filtrd.expense_tracker"

  },
  {
    id: 3,
    title: "Soi Attendence App",
    img: soiAttendence,
    desc: "SOI Attendance is an application designed for streamlined attendance management. Leveraging Geolocation and identity tracking tools such as Fingerprint and QR Code scanning, it ensures precise monitoring of subscriber attendance, thereby enhancing efficiency.",
        url:"https://play.google.com/store/apps/details?id=com.soi.attendance.app"

  },
  {
    id: 4,
    title: "Siara App",
    img: siara,
    desc: "Siara app is designed to empower you to report incidents and accidents swiftly and anonymously. With our user-friendly interface, you can easily submit reports on various matters, including health issues, emergencies, outbreaks, and more, contributing to a safer community and quicker emergency response",
        url:"https://play.google.com/store/apps/details?id=com.siara.app"

  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.url}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
