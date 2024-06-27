import { useState } from 'react';
import { useRouter } from 'next/router';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import "../styles/globals.css";

function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [transition, setTransition] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    setTransition(true);
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setTransition(false);
    }, 500); // duration of the transition
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`transition-opacity duration-500 ${transition ? 'opacity-0' : 'opacity-100'}`}>
        {isSignUp ? <SignUp onSwitchToSignIn={switchToSignIn} /> : <SignIn />}
      </div>
      <button
        onClick={handleNavigation}
        className="absolute bottom-4 right-4 text-blue-500 hover:underline"
      >
        {isSignUp ? 'Already Have An Account? Please Login.' : "Don't have an account? Create Account"}
      </button>
    </div>
  );
}

export default App;
