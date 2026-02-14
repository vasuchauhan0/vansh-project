import { ChevronRight, Terminal } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
  return (
    <section className="relative min-h-screen w-full bg-[#0a0e0f] flex items-center justify-center overflow-hidden font-mono">

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
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2d3436 1px, transparent 1px), linear-gradient(90deg, #2d3436 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#00ff41]/5 blur-[120px] rounded-full" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-[#151b1e] border border-[#2d3436] shadow-xl rounded-lg overflow-hidden">

        {/* Window bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2d3436] border-b border-[#0a0e0f]">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-[#808e87]">usr_reg_protocol.exe</span>
          <span className="w-8" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">

          {/* Title */}
          <div>
            <h1 className="text-[#e8f5e9] text-2xl flex items-center gap-2">
              <ChevronRight className="text-[#00ff41]" />
              INITIALIZE_USER
              <span className="w-3 h-6 bg-[#00ff41] animate-pulse ml-1" />
            </h1>
            <p className="text-[#808e87] text-sm mt-2 ml-8">
              Create a new secure access node
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {[
              { label: "username_", type: "text", placeholder: "codename" },
              { label: "password_", type: "password", placeholder: "••••••••" },
              { label: "confirm_password_", type: "password", placeholder: "••••••••" },
            ].map((field) => (
              <div key={field.label} className="space-y-1">
                <label className="text-xs text-[#00ff41] uppercase tracking-wider">
                  &gt; {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-11 px-3 bg-[#0a0e0f] border border-[#2d3436]
                  text-[#e8f5e9] placeholder:text-[#2d3436] rounded
                  focus:border-[#00ff41] focus:outline-none
                  focus:shadow-[0_0_8px_rgba(0,255,65,0.2)]
                  transition"
                />
              </div>
            ))}

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-[#00ff41] text-[#0a0e0f] font-bold uppercase
              flex items-center justify-center gap-2 rounded
              hover:bg-[#00d936]
              shadow-[0_0_15px_rgba(0,255,65,0.25)]
              hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]
              transition"
            >
              <Terminal className="w-4 h-4" />
              Execute Registration
            </button>

            {/* Login link */}
            <p className="text-xs text-center text-[#808e87]">
              // Existing user?{" "}
              <Link
                to="/login"
                className="text-[#00ff41] hover:underline"
              >
                Login_Here
              </Link>
            </p>
          </form>
        </div>

        {/* Status bar */}
        <div className="flex justify-between px-4 py-2 text-[10px] text-[#808e87] bg-[#0a0e0f] border-t border-[#2d3436] uppercase">
          <span>Status: Idle</span>
          <span>Mem: 64K OK</span>
        </div>
      </div>
    </section>
  );
};

export default Register;
