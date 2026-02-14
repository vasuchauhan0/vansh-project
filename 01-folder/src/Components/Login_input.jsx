import React from 'react'
import {Link} from 'react-router-dom'

const Login_input = () => {
  return (
     <form className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label className="text-[#00ff41] text-sm flex items-center gap-2 select-none">
                  <span className="animate-pulse">➜</span> USERNAME
                </label>

                <div className="relative group">
                  <input
                    type="text"
                    placeholder="enter_username"
                    autoComplete="username"
                    className="w-full h-12 px-3 bg-[#0a0e0f] border-2 border-[#2d3436] text-[#e8f5e9] placeholder:text-[#808e87] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] transition-all"
                  />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#2d3436] group-focus-within:border-[#00ff41]" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#2d3436] group-focus-within:border-[#00ff41]" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[#00ff41] text-sm flex items-center gap-2 select-none">
                  <span className="animate-pulse">➜</span> PASSWORD
                </label>

                <div className="relative group">
                  <input
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full h-12 px-3 bg-[#0a0e0f] border-2 border-[#2d3436] text-[#e8f5e9] placeholder:text-[#808e87] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] transition-all"
                  />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#2d3436] group-focus-within:border-[#00ff41]" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#2d3436] group-focus-within:border-[#00ff41]" />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#00ff41] hover:bg-[#00d936] text-[#0a0e0f] font-bold tracking-wide uppercase transition-all"
              >
                &gt; EXECUTE_LOGIN
              </button>

              {/* Register */}
              <div className="flex justify-center gap-2 text-sm font-mono">
                <span className="text-[#808e87]">New Entity?</span>
                <Link
                  to="/register"
                  className="text-[#00ff41] hover:text-[#39ff14] hover:underline underline-offset-4"
                >
                  [ Initiate Registration ]
                </Link>
              </div>
            </form>
  )
}

export default Login_input