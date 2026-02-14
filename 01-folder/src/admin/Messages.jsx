import React from "react";
import { Terminal, Search, Filter, RefreshCcw } from "lucide-react";

const ManageMessagesPage = ({ messages = [] }) => {
  return (
    <div className="container mx-auto px-8 py-10 relative z-10 text-white">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 border-b border-[#2a2a2a] pb-6">

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-[#00ff41]" />
            <span className="text-sm text-[#00ff41] uppercase tracking-widest font-mono">
              System // Backend // Inbox
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#e8e8e8]">
            Incoming Transmissions
          </h2>

          <p className="text-[#8b8b8b] mt-1">
            Manage inquiries and encrypted messages.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-4 py-2 border border-[#2a2a2a] bg-[#151515] rounded text-[#8b8b8b] font-mono text-sm">
            TOTAL: <span className="text-[#e8e8e8]">{messages.length}</span>
          </div>

          <button className="h-9 w-9 border border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)] flex items-center justify-center rounded-md">
            <RefreshCcw size={16} />
          </button>
        </div>
      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6 p-4 bg-[#151515] border border-[#2a2a2a] rounded-lg">

        <div className="md:col-span-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b8b8b]" />
          <input
            type="text"
            placeholder="Search subjects or keywords..."
            className="w-full pl-9 bg-[#0a0a0a] border border-[#2a2a2a] text-[#e8e8e8] rounded-md px-3 py-2 focus:border-[#00ff41] outline-none"
          />
        </div>

        <div className="md:col-span-4">
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-3 py-2">
            <Filter className="w-4 h-4 text-[#00ff41]" />
            <select className="bg-black outline-none text-white w-full">
              <option>All Messages</option>
              <option>Unread</option>
              <option>Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="rounded-lg border border-[#2a2a2a] bg-[#151515] overflow-hidden">

        <div className="relative w-full overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-[#0f0f0f] border-b border-[#2a2a2a] text-[#8b8b8b]">
              <tr>
                <th className="p-2 text-left font-mono">ID</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Sender</th>
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Received At</th>
                <th className="p-2 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-16 text-[#8b8b8b] font-mono"
                  >
                    No messages available (API data will appear here)
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr
                    key={msg.id}
                    className="border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
                  >
                    <td className="p-2 font-mono text-[#555]">#{msg.id}</td>
                    <td className="p-2">{msg.status}</td>
                    <td className="p-2">{msg.sender}</td>
                    <td className="p-2">{msg.subject}</td>
                    <td className="p-2 font-mono text-[#8b8b8b]">
                      {msg.date}
                    </td>
                    <td className="p-2 text-right">--</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageMessagesPage;
