"use client";
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import HeaderSection from './Auth_menu/headerSection';
import InputComponent from '@repo/ui/input';
import InputMenu from './Auth_menu/inputSection';
import TermsAndConditionSection from './Auth_menu/termsAndConditionSection';
import ButtonComponent from '@repo/ui/button';
import DeviderLine from './Auth_menu/deviderLine';
import SocialLogin from './Auth_menu/socialLoginSection';
import LinkSection from './Auth_menu/LinkSection';
import PasswordStrengthIndicator from './Auth_menu/passwordStrengthIndicator';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
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
      console.log('Sign up attempted with:', formData);
      setIsLoading(false);
      alert('Sign up successful! (This is a demo)');
    }, 1500);
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <HeaderSection heading='Create Account' subHeading='Join us and start your journey' icon={<User className="w-8 h-8 text-white" />} />

        {/* Sign Up Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <InputMenu inputBox={<InputComponent icon={true} type='text' placeholder="First name" id="firstName" name='firstName' value={formData.firstName} onChange={handleInputChange} ifError={errors.firstName}/>} heading='First Name' icon={<User className="h-4 w-4 text-gray-400" />} error={errors.firstName} />
              <InputMenu inputBox={<InputComponent icon={false} type='text' placeholder="Last name" id="lastName" name='lastName' value={formData.lastName} onChange={handleInputChange} ifError={errors.lastName}/>} heading='Last Name' error={errors.lastName} />
            </div>

            {/* Email Input */}
            <InputMenu icon={<Mail className="h-4 w-4 text-gray-400" />} inputBox={<InputComponent icon={true} type='email' placeholder="Enter your email" id="email" name='email' value={formData.email} onChange={handleInputChange} ifError={errors.email}/>} heading='Email Address' error={errors.email} />

            {/* Password Input */}
            <div>
              <InputMenu show={showPassword} secureOnclick={()=>setShowPassword(!showPassword)} secure={true} icon={<Lock className="h-4 w-4 text-gray-400" />} inputBox={<InputComponent icon={true} type={showPassword ? 'text' : 'password'} placeholder="Create a password" id="password" name='password' value={formData.password} onChange={handleInputChange} ifError={errors.password}/>} heading='Enter Password' error={errors.password} />
              {/* Password Strength Indicator */}
              <PasswordStrengthIndicator strength={passwordStrength} labelShow={strengthLabels[passwordStrength - 1]} colorShow={strengthColors[passwordStrength - 1]} />
            </div>

            {/* Confirm Password Input */}
            <div>
              <InputMenu show={showConfirmPassword} secureOnclick={() => setShowConfirmPassword(!showConfirmPassword)} secure={true} icon={<Lock className="h-4 w-4 text-gray-400" />} inputBox={<InputComponent icon={true} type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm your password" id="confirmPassword" name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} ifError={errors.confirmPassword}/>} heading='Confirm Password' error={errors.email} />
            </div>

            {/* Terms and Conditions */}
            <TermsAndConditionSection error={errors.terms} checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />

            {/* Sign Up Button */}
            <ButtonComponent loading={isLoading} title='Create Account' secIcon={<ArrowRight className="ml-2 h-5 w-5" />} variant='Auth' size='medium'  />
          </form>

          {/* Divider */}
          <div className="mt-6">
            <DeviderLine title='Or sign up with' />
            <SocialLogin/>
          </div>

          {/* Sign In Link */}
          <LinkSection buttonTitle='Sign in here' text="Already have an account?" onClick={()=>router.back()}/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;