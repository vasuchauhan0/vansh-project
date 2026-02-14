import React, { useState } from "react";
import AddProjectForm from "../Components/AddProjectForm";
import {
  Terminal,
  Plus,
  Search,
  Filter,
  Code2,
} from "lucide-react";

const Projects = () => {
  const [projects] = useState([]); // Empty for now
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
   const [open, setOpen] = useState(false);

  return (
    <div className="p-8 text-white">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#2a2a2a] pb-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Terminal className="w-6 h-6 text-[#00ff41]" />
            Project Management
          </h2>
          <p className="text-[#8b8b8b] mt-2">
            Manage your portfolio entries and deployment status.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-[#00ff41] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#00e63a] transition"
        >
          + Initialize Project
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sliding Panel */}
      <div
  className={`fixed top-0 right-0 h-full w-[500px] bg-[#111] border-l border-[#2a2a2a] z-50 
  transform transition-transform duration-500 ease-in-out
  overflow-y-auto
  ${open ? "translate-x-0" : "translate-x-full"}`}
>
  <AddProjectForm onClose={() => setOpen(false)} />
</div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#151515] p-4 rounded-lg border border-[#2a2a2a]">

        {/* Search */}
        <div className="md:col-span-5 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b8b8b]" />
          <input
            type="text"
            placeholder="Search projects by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-md px-3 py-2 focus:border-[#00ff41] outline-none transition"
          />
        </div>

        {/* Status Filter */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-3 py-2">
            <Filter className="w-4 h-4 text-[#00ff41]" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-black text-white outline-none w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Live">Live</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>


      </div>

      {/* ================= EMPTY STATE ================= */}
      <div className="mt-8 bg-[#151515] border border-[#2a2a2a] rounded-md p-10 text-center text-[#8b8b8b] font-mono">
        No projects found. Initialize a project to get started.
      </div>

    </div>
  );
};

export default Projects;
