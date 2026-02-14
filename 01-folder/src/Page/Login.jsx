import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Login_input from "../Components/Login_input";


const Login = () => {
    const navigate = useNavigate();
  return (
   <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0e0f] overflow-hidden">



     {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className=" active:scale-95 cursor-pointer absolute top-6 left-6 flex items-center gap-2 text-[#00ff41] hover:text-[#39ff14] transition"
      >
        <ArrowLeft size={20} />
        <span className="font-mono text-xl">Back</span>
      </button>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2d3436 1px, transparent 1px), linear-gradient(90deg, #2d3436 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Container */}
      <div className="relative z-10 w-full max-w-md px-4">

        {/* Card */}
        <div className="bg-[#151b1e] border-2 border-[#2d3436] shadow-[0_4px_16px_rgba(0,0,0,0.5)] rounded-none overflow-hidden font-mono">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#2d3436] py-2 px-4 border-b border-[#2d3436]">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff3b30]" />
              <span className="w-3 h-3 rounded-full bg-[#ffcc00]" />
              <span className="w-3 h-3 rounded-full bg-[#00ff41]" />
            </div>
            <span className="text-xs tracking-widest uppercase text-[#808e87]">
              USER_AUTH_PROTOCOL_V1.5
            </span>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">

            {/* ASCII LOGIN */}
            <div className="text-[#00ff41] text-xs opacity-70 leading-none whitespace-pre select-none text-center">
{` _      ____   _____ _____ _   _ 
| |    / __ \\ / ____|_   _| \\ | |
| |   | |  | | |  __  | | |  \\| |
| |   | |  | | | |_ | | | | . \` |
| |___| |__| | |__| |_| |_| |\\  |
|______\\____/ \\_____|_____|_| \\_|`}
            </div>

            {/* Title */}
            <div className="text-center space-y-2">
              <p className="text-[#e8f5e9] text-xl font-semibold">
                Identify Yourself
              </p>
              <p className="text-[#808e87] text-sm">
                Please enter your credentials to proceed.
              </p>
            </div>

            {/* Form */}
           
           <Login_input/>



          </div>

          {/* Footer */}
          <div className="bg-[#0a0e0f] border-t border-[#2d3436] py-2 px-4 flex justify-between text-[10px] text-[#808e87] font-mono">
            <span>STATUS: Ready</span>
            <span>PORT: 8080</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
