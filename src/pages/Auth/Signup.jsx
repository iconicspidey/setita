import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import frame from "../../assets/frame/frame1.png";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-w-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-sm">
        <div className="text-2xl font-bold text-purple-600">
          <Link to="/">
            <img src={logo} alt="" className="w-[70px]" />
          </Link>
        </div>
        <div className="font-medium">
          <button className="btn btn-outline text-b-900">Sign In</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 justify-center bg-white gap-10">
        {/* Form Section */}
        <div className="w-full max-w-[600px] max-h-[400px] p-6">
          {/* Sign-in Link */}

          {/* Sign-up Form */}
          <div className="space-y-2">
            <p className="text-2xl  text-b-900 font-semibold">
              Welcome to Setita Community{" "}
            </p>
            {/* Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered bg-w-50 text-w-900 w-full py-1"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-w-50 text-w-900 w-full py-1"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-w-700">Your Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered bg-w-50 text-b-900 w-full py-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control"></div>
            <div className="flex space-x-1">
              <input
                type="checkbox"
                id="emailUpdates"
                className="checkbox checkbox-sm"
              />
              <label htmlFor="emailUpdates" className="text-[12px]">
                I want to receive emails about product updates, feature updates,
                events, and marketing promotions.
              </label>
            </div>
            {/* Email Updates Checkbox */}

            {/* Terms and Privacy Policy */}
            <p className="text-sm my-6">
              By creating an account, you agree to the{" "}
              <a href="/terms-of-use" className="text-purple-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-purple-500">
                Privacy Policy
              </a>
              .
            </p>

            {/* Sign-up Button */}
            <button className="btn bg-p-200 btn-primary text-w-50 w-[100px]  mt-4 py-1">
              Sign Up
            </button>
            <p className="text-sm mt-4">
              Already have an account?{" "}
              <Link to="/signin" className="text-purple-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:w-[404px] lg:h-[420px] mt-10">
          <img
            src={frame}
            alt="Right side illustration"
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
