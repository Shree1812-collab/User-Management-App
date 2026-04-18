import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function AddUser() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched", // Validates as the user interacts
  });

  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const onUserCreate = async (newUser) => {
    setServerError("");

    try {
      const res = await fetch("https://user-management-app-2-0oav.onrender.com/user-api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.ok) {
        // Success: Redirect
        navigate("/user-list");
      } else if (res.status === 409 || data.message?.toLowerCase().includes("exists")) {
        // Targeted error for existing user
        setError("email", {
          type: "manual",
          message: "This email is already registered",
        });
      } else {
        // Generic API errors
        setServerError(data.message || "Something went wrong on our end.");
      }
    } catch (err) {
      setServerError("Network error. Please check your connection or try again later.");
    }
  };

  // Helper to simplify class logic
  const getInputClass = (fieldName) => `
    w-full p-3 border rounded-lg outline-none focus:ring-2 transition-all 
    ${errors[fieldName] 
      ? 'border-red-400 focus:ring-red-100 bg-red-50' 
      : 'border-gray-300 focus:ring-blue-100 focus:border-blue-400'}
  `;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-100">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Join our community by filling out the details below.</p>
        </header>

        {serverError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-start gap-3 animate-pulse">
            <span className="text-lg"></span>
            <p className="text-sm font-medium leading-tight">{serverError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onUserCreate)} className="space-y-6" noValidate>
          {/* Name Field */}
          <section>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Please enter your full name" })}
              className={getInputClass("name")}
              placeholder="e.g. Jane Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
          </section>

          {/* Email Field */}
          <section>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: EMAIL_REGEX, message: "Please enter a valid email address" },
              })}
              className={getInputClass("email")}
              placeholder="jane@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date of Birth */}
            <section>
              <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                {...register("dateOfBirth", { required: "Required" })}
                className={getInputClass("dateOfBirth")}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.dateOfBirth.message}</p>}
            </section>

            {/* Mobile Number */}
            <section>
              <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                {...register("mobileNumber", {
                  required: "Required",
                  minLength: { value: 10, message: "Min 10 digits" },
                  pattern: { value: /^[0-9]+$/, message: "Digits only" }
                })}
                className={getInputClass("mobileNumber")}
                placeholder="1234567890"
              />
              {errors.mobileNumber && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.mobileNumber.message}</p>}
            </section>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-bold py-4 rounded-xl shadow-md transition-all mt-6 flex justify-center items-center gap-3
              ${isSubmitting ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]'}`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              "Register User"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;