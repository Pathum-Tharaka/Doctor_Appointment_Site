import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (state === 'Sign Up' && !name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    setError('');
    console.log({ name, email, password });
  };

  const switchForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setState(state === 'Sign Up' ? 'Login' : 'Sign Up');
      setError('');
      setEmail('');
      setPassword('');
      setName('');
      setIsAnimating(false);
    }, 300);
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center bg-gradient-to-b from-white to-slate-50">
      <div 
        className={`flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 
          border rounded-xl text-zinc-600 text-sm shadow-lg bg-white
          transition-all duration-300 ease-in-out transform
          ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointments</p>

        {error && (
          <div className="w-full bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {state === 'Sign Up' && (
          <div className="w-full">
            <p className="mb-1">Full Name</p>
            <input 
              className="border border-zinc-300 rounded-lg w-full p-2
                focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400
                transition-all duration-300 hover:border-blue-200"
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              placeholder="John Doe"
            />
          </div>
        )}
        
        <div className="w-full">
          <p className="mb-1">Email</p>
          <input 
            className="border border-zinc-300 rounded-lg w-full p-2
              focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400
              transition-all duration-300 hover:border-blue-200"
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            placeholder="you@example.com"
          />
        </div>

        <div className="w-full">
          <p className="mb-1">Password</p>
          <input 
            className="border border-zinc-300 rounded-lg w-full p-2
              focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400
              transition-all duration-300 hover:border-blue-200"
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-500 w-full p-2 rounded-lg text-white text-base font-medium
            hover:bg-blue-600 active:scale-[0.98] transform
            transition-all duration-200
            hover:shadow-lg hover:shadow-blue-500/25"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm mt-2">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span 
            className="text-blue-500 hover:text-blue-600 underline cursor-pointer
              hover:decoration-2 transition-all duration-200"
            onClick={switchForm}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  );
};

// Add these custom animations to your Tailwind CSS configuration
const styles = `
@keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.popup {
  animation: popup 0.3s ease-out forwards;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Login;