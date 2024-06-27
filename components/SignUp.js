import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('🎉Your account has been successfully created🎉');
      setShowModal(true);
    } catch (error) {
      setMessage(error.message);
      setShowModal(true);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/welcome'); // Change this to your desired route after successful sign-in
    } catch (error) {
      setMessage(error.message);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSignIn(true);
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <AnimatePresence>
        {!showSignIn && (
          <motion.form
            onSubmit={handleSignUp}
            className="bg-white p-6 rounded shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold w-full"
            >
              Create Account
            </button>
            <p className="mt-4">
              Already Have An Account?{' '}
              <button
                type="button"
                onClick={() => setShowSignIn(true)}
                className="text-blue-500 underline"
              >
                Please Login
              </button>
            </p>
          </motion.form>
        )}
        {showSignIn && (
          <motion.form
            onSubmit={handleSignIn}
            className="bg-white p-6 rounded shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold w-full"
            >
              Sign In
            </button>
            <p className="mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setShowSignIn(false)}
                className="text-blue-500 underline"
              >
                Sign Up
              </button>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
      <Modal show={showModal} message={message} onClose={handleCloseModal} />
    </div>
  );
};

export default SignUp;
