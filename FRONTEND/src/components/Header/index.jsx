// components/Header/index.jsx
'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" });
                },
                onEnterBack: () => {
                    gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false));
                }
            }
        });
    }, []);

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/images/veilvision.jpg" // Ensure the image is in public/images
                        alt="VeilVision Logo"
                        width={50} // Set desired width
                        height={50} // Set desired height
                        className={styles.logoImage}
                    />
                    <div className={styles.name}>
                        <p className={styles.veil}>Veil</p>
                        <p className={styles.vision}>Vision</p>
                        <p className={styles.clarity}>Clarity in the Dark</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            {/* Home Link */}
                            <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                                Home
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Tools</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>

                    {/* Login Button */}
                    <Magnetic>
                        <div className={styles.el}>
                            <Link href="/login" className={styles.loginSignupButton}>Login</Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>

                    {/* Signup Button */}
                    <Magnetic>
                        <div className={styles.el}>
                            <Link href="/signup" className={styles.loginSignupButton}>Signup</Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
