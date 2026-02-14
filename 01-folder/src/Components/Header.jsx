import React, { useState } from 'react'
import {NavLink,Link} from 'react-router-dom'

const Header = () => {


    const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50  border-b-gray-700  bg-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-green-400 font-mono drop-shadow-[0_0_8px_#00ff00]">
         <Link to='/'> &gt;_ TERMINAL</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-mono text-white">
          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Home
</NavLink>
          <NavLink
  to="/project"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Project
</NavLink>

<NavLink
  to="/skill"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Skills
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Contact
</NavLink>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-6 font-mono">
          <Link to="/login" className="text-white hover:text-green-400 transition">
            Login
          </Link>
          <Link  to='/register' className="rounded-md bg-green-400 active:scale-95 px-5 py-2 font-semibold text-black hover:bg-green-500 transition">
           Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-green-500 font-mono">
          <nav className="flex flex-col items-center gap-6 py-6 text-white">
            <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Home
</NavLink>


          <NavLink
  to="/project"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Project
</NavLink>

<NavLink
  to="/skill"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Skills
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-green-400"
      : "hover:text-green-400 transition"
  }
>
  Contact
</NavLink>

            <div className="flex gap-6 pt-4">
              <Link to="/login" className="text-white hover:text-green-400 transition">
            Login
          </Link>
              <Link  to='/register' className="rounded-md bg-green-400 active:scale-95 px-5 py-2 font-semibold text-black hover:bg-green-500 transition">
           Register
          </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header