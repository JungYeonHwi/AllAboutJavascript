'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    console.log('Sign in');
  };

  const handleCreateAccount = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log('User created:', userCredential.user);
      console.log('Username:', username);
      await updateProfile(userCredential.user, {
        displayName: username,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900">
          Create Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
          />

          <button
            type="button"
            onClick={handleCreateAccount}
            className="mt-2 w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <button
            type="button"
            className="ml-1 font-medium text-black hover:underline"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
