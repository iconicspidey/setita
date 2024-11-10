import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import frame from "../../assets/frame/frame2.png";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function SignInPage() {
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
          <button className="btn btn-outline text-b-900">signin</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 justify-center bg-white gap-10">
        {/* Form Section */}
        <div className="w-full max-w-[500px]  p-6">
          <h2 className="font-semibold text-left mb-2 text-sm">Sign in</h2>

          {/* Social Sign-in Buttons */}
          <div className="space-y-1">
            <button className="btn btn-outline w-full flex items-center gap-2 py-2">
              <FaGoogle className="text-red-600" />
              Continue with Google
            </button>
            <button className="btn btn-outline w-full flex items-center gap-2 py-2">
              <FaTwitter className="text-blue-400" />
              Continue with Twitter
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="border-t flex-grow border-gray-300"></span>
            <span className="text-gray-500 mx-2 text-sm">OR</span>
            <span className="border-t flex-grow border-gray-300"></span>
          </div>

          {/* Sign-in Form */}
          <div className="space-y-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User name or email address</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered bg-w-50 text-w-900 w-full py-1"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-w-700">Your password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  className="input input-bordered bg-w-50 text-b-900 w-full py-1"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <a href="#" className="text-purple-500 text-sm float-right mt-2">
                Forget your password?
              </a>
            </div>

            {/* Sign-in Button */}
            <button className="btn bg-p-200 btn-primary text-w-50 w-full mt-4 py-1">
              Sign in
            </button>

            {/* Sign-up Link */}
            <p className="text-sm mt-4">
              Don’t have an account? <Link to={"/signup"}>Sign up</Link>
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

export default SignInPage;
