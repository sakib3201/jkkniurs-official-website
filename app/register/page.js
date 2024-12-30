'use client';
import { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (password.length < 6 || confirmPassword.length < 6) {
      setError("*Password must be at least 6 characters long");
      setIsFormValid(false);
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsFormValid(false);
    } else {
      setError("");
      setIsFormValid(true);
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = {
        email: e.target.email.value,
        phone: e.target.phone.value,
        password,
      };
      // console.log("Form Submitted:", formData);

      // API CALL HERE
      
    } else {
      // console.error("Form validation failed");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#264653]">
            Sign Up For An Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#264653]"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-[#264653] shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-[#264653]"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="^0\d{10}$"
                  maxLength={11}
                  autoComplete="tel"
                  placeholder="e.g. 01987654321"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-[#264653] shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#264653]"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={6}
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-[#264653] shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-[#264653]"
              >
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  minLength={6}
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-[#264653] shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#264653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                disabled={!isFormValid}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-red-400 hover:text-[#264653]"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
