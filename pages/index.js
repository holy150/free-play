function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  const handleNavigation = (targetRoute) => {
    if (router.pathname !== targetRoute) {
      router.push(targetRoute);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isSignUp ? (
        <SignUp />
      ) : (
        <SignIn />
      )}
      <button
        onClick={() => handleNavigation(isSignUp ? '/signIn' : '/signUp')}
        className="absolute bottom-4 right-4 text-blue-500 hover:underline"
      >
        {isSignUp ? 'Already Have An Account? Please Login.' : "Don't have an account? Create Account"}
      </button>
    </div>
  );
}

export default App;