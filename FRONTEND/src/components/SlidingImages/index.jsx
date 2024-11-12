import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

const slider1 = [
    { color: "#e3e5e7", title: "Tor Browser Integration", desc: "Integrating Tor Browser provides secure, anonymous access to the dark web for real-time threat intelligence and tracking cyber threats." },
    { color: "#d6d7dc", title: "Reporting to Authorities", desc: "Any detected breaches display on a personalized dashboard for immediate review and action." },
    { color: "#e3e3e3", title: "Dynamic Frameworks", desc: "Robust Backend and Frontend Frameworks for seamless real-time data processing" },
];

const slider2 = [
    { color: "#e5e0e1", title: "Security Assurance", desc: "Implementing high-level security protocols ensures robust protection of sensitive data and user privacy in applications." },
    { color: "#d7d4cf", title: "Continuous Adaptation", desc: "Adjusting strategies and defenses in real time based on the latest intelligence gathered from dark web activities." },
    { color: "#e1dad6", title: "Immediate Data Collection", desc: "Gathering information continuously from dark web forums, marketplaces, and chat rooms as events unfold." }
];

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    const [hoveredIndex1, setHoveredIndex1] = useState(null); // Track hovered index for slider1
    const [hoveredIndex2, setHoveredIndex2] = useState(null); // Track hovered index for slider2

    const handleMouseEnter1 = (index) => {
        setHoveredIndex1(index);
    };

    const handleMouseLeave1 = () => {
        setHoveredIndex1(null);
    };

    const handleMouseEnter2 = (index) => {
        setHoveredIndex2(index);
    };

    const handleMouseLeave2 = () => {
        setHoveredIndex2(null);
    };

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => handleMouseEnter1(index)} // Set hovered index
                        onMouseLeave={handleMouseLeave1}
                    >
                        <div className={styles.imageContainer}>
                            <motion.div className={styles.title}
                                initial={{ y: -20, opacity: 0 }}
                                animate={hoveredIndex1 === index ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.div>
                            {/* Static description at center */}
                            <div className={styles.description}>
                                {project.desc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => handleMouseEnter2(index)} // Set hovered index
                        onMouseLeave={handleMouseLeave2}
                    >
                        <div className={styles.imageContainer}>
                            <motion.div className={styles.title}
                                initial={{ y: -20, opacity: 0 }}
                                animate={hoveredIndex2 === index ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.div>
                            {/* Static description at center */}
                            <div className={styles.description}>
                                {project.desc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
