"use client";
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ButtonComponent from '@repo/ui/button';
import HeaderSection from './Auth_menu/headerSection';
import InputMenu from './Auth_menu/inputSection';
import InputComponent from '@repo/ui/input';
import RememberForgotPassword from './Auth_menu/rememberForgotPassword';
import DeviderLine from './Auth_menu/deviderLine';
import SocialLogin from './Auth_menu/socialLoginSection';
import LinkSection from './Auth_menu/LinkSection';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign in attempted with:', formData);
      setIsLoading(false);
      alert('Sign in successful! (This is a demo)');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <HeaderSection heading='Welcome back' subHeading='Please sign in to your account' icon={<Lock className="w-8 h-8 text-white" />}/>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <InputMenu icon={<Mail className="h-4 w-4 text-gray-400" />} inputBox={<InputComponent icon={true} type='email' placeholder="Enter your email" id="email" name='email' value={formData.email} onChange={handleInputChange} ifError={errors.email}/>} heading='Email Address' error={errors.email} />

            {/* Password Input */}
            <InputMenu show={showPassword} secureOnclick={()=>setShowPassword(!showPassword)} secure={true} icon={<Lock className="h-4 w-4 text-gray-400" />} inputBox={<InputComponent icon={true} type={showPassword ? 'text' : 'password'} placeholder="Create a password" id="password" name='password' value={formData.password} onChange={handleInputChange} ifError={errors.password}/>} heading='Enter Password' error={errors.password} />

            {/* Remember Me & Forgot Password */}
            <RememberForgotPassword/>

            {/* Sign In Button */}
            <ButtonComponent loading={isLoading} title='Sign In' secIcon={<ArrowRight className="ml-2 h-5 w-5" />} variant='Auth' size='medium' />
          </form>

          {/* Divider */}
          <DeviderLine title='Or continue with' />
          <SocialLogin/>

          {/* Sign Up Link */}
          <LinkSection buttonTitle='Sign up now' text="Don't have an account?" onClick={()=>router.push("/signup")} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;