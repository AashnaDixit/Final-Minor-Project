'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './login.module.scss';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard'); // Redirect to dashboard without authentication
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.title}>
        <h2>Log in with</h2>
        <div className={styles.socialButtons}>
          <button onClick={() => alert('Facebook login triggered')} className={styles.socialButton}>
            <FaFacebookF />
          </button>
          <button onClick={() => alert('GitHub login triggered')} className={styles.socialButton}>
            <FaGithub />
          </button>
          <button onClick={() => alert('Google login triggered')} className={styles.socialButton}>
            <FaGoogle />
          </button>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleLoginSubmit}>
        {/* You can remove required or optional validation here if you want to skip it */}
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <div className={styles.rememberMeContainer}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>Remember me</label>
        </div>
        <button type="submit" className={styles.submitButton}>LOG IN</button>
      </form>
      <p className={styles.signUpText}>
        Don't have an account? <Link href="/signup" className={styles.signUpLink}>Sign up</Link>
      </p>
    </div>
  );
}
