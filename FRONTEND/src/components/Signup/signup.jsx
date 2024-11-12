// components/Signup/signup.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './signup.module.scss';

export default function Signup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={styles.signupContainer}>
      <div className={styles.title}>
        <h2>Sign Up</h2>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Username" className={styles.inputField} />
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="text" placeholder="First Name" className={styles.inputField} />
        <input type="text" placeholder="Last Name" className={styles.inputField} />
        <input type="password" placeholder="Create Password" className={styles.inputField} />
        <input type="password" placeholder="Confirm Password" className={styles.inputField} />
        <button type="submit" className={styles.submitButton}>SIGN UP</button>
      </form>
      <p className={styles.loginText}>
        Already have an account? <Link href="/login" className={styles.loginLink}>Log in</Link>
      </p>
    </div>
  );
}