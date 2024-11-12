import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function index() {
    const phrase = "Real-time threat intelligence from the dark web involves ongoing monitoring and analysis of dark web forums, marketplaces, and other hidden online spaces to detect emerging threats, data breaches, and other malicious activities.";
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                {/* Apply the highlightedText class here */}
                <p className={styles.highlightedText}>
                    {
                        phrase.split(" ").map((word, index) => {
                            return (
                                <span key={index} className={styles.mask}>
                                    <motion.span
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? "open" : "closed"}
                                        key={index}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            );
                        })
                    }
                </p>
                {/* Updated paragraph with bullet list and line gap */}
                <motion.div className={styles.bulletList} variants={opacity} animate={isInView ? "open" : "closed"}>
                    <strong>Why Choose Our Platform?</strong>
                    <ul>
                        <li>Real-Time Monitoring of Dark Web Activity</li>
                        <li>Advanced Leak Detection</li>
                        <li>Comprehensive Data Protection</li>
                    </ul>
                </motion.div>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About Us</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
}
