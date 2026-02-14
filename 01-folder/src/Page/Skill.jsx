import React from 'react'
import SkillsMonitor from '../Components/SkillsMonitor'

const Portfolio = () => {
  return (
   <section className="relative w-full min-h-screen bg-[#0a0e0f] text-[#e8f5e9] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="font-mono text-[#00ff41] text-sm mb-4">
              &gt;_ SYSTEM CONFIGURATION
            </div>

            <h2 className="text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Technical </span>
              <span className="text-[#9aa7a1]">Proficiency</span>
            </h2>

            <p className="text-[#9aa7a1] max-w-md leading-relaxed mb-8">
              A structured overview of my technical capabilities, visualized as
              a raw configuration object. This dataset represents the core
              dependencies of my development stack.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#00ff41] text-[#0a0e0f] px-6 py-3 rounded font-mono font-bold uppercase tracking-wide hover:bg-[#00d936] transition shadow-[0_0_20px_rgba(0,255,65,0.35)]">
              COPY JSON
            </button>
          </div>

          {/* RIGHT TERMINAL */}
          <div className="relative max-w-[720px] w-full justify-self-end">

            <div className="bg-[#151b1e] border border-[#2d3436] rounded-xl shadow-[0_0_40px_rgba(0,255,65,0.08)] overflow-hidden">

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#1b2225] border-b border-[#2d3436]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff3b30]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffcc00]" />
                  <span className="w-3 h-3 rounded-full bg-[#00ff41]" />
                </div>
                <span className="text-xs font-mono text-[#9aa7a1]">
                  ~/portfolio/config/skills.json
                </span>
                <span className="w-6" />
              </div>

              {/* Terminal Body */}
              <div className="flex text-sm font-mono leading-relaxed h-[420px] overflow-hidden">

  {/* Line numbers */}
  <div className="px-4 py-6 text-[#556061] text-right select-none border-r border-[#2d3436]">
    {Array.from({ length: 22 }).map((_, i) => (
      <div key={i}>{i + 1}</div>
    ))}
  </div>

  {/* Code area */}
  <div className="flex-1 px-6 py-6 overflow-y-auto text-[#9aa7a1]">

<pre className="whitespace-pre-wrap flex flex-col break-words">
<span className="text-[#00ff41]">{"{"}</span>
  <span className="text-[#00ff41]">"developer_profile"</span>: <span>{"{"}</span>
    <span className="text-[#00ff41]">"status"</span>: <span className="text-[#e8f5e9]">"active"</span>,
    <span className="text-[#00ff41]">"role"</span>: <span className="text-[#e8f5e9]">"Full Stack Engineer"</span>,
    <span className="text-[#00ff41]">"skills_matrix"</span>: <span>{"{"}</span>

      <span className="text-[#00ff41]">"Frontend"</span>: <span>[</span>
        <span>{"{"}</span> <span className="text-[#00ff41]">"name"</span>: <span className="text-[#e8f5e9]">"TypeScript"</span>, <span className="text-[#00ff41]">"level"</span>: <span className="text-[#e8f5e9]">"expert"</span> <span>{"}"}</span>,
        <span>{"{"}</span> <span className="text-[#00ff41]">"name"</span>: <span className="text-[#e8f5e9]">"React.js"</span>, <span className="text-[#00ff41]">"level"</span>: <span className="text-[#e8f5e9]">"expert"</span> <span>{"}"}</span>,
        <span>{"{"}</span> <span className="text-[#00ff41]">"name"</span>: <span className="text-[#e8f5e9]">"Next.js"</span>, <span className="text-[#00ff41]">"level"</span>: <span className="text-[#e8f5e9]">"advanced"</span> <span>{"}"}</span>
      <span>]</span>,

      <span className="text-[#00ff41]">"Backend"</span>: <span>[</span>
        <span>{"{"}</span> <span className="text-[#00ff41]">"name"</span>: <span className="text-[#e8f5e9]">"Node.js"</span>, <span className="text-[#00ff41]">"level"</span>: <span className="text-[#e8f5e9]">"advanced"</span> <span>{"}"}</span>,
        <span>{"{"}</span> <span className="text-[#00ff41]">"name"</span>: <span className="text-[#e8f5e9]">"PostgreSQL"</span>, <span className="text-[#00ff41]">"level"</span>: <span className="text-[#e8f5e9]">"advanced"</span> <span>{"}"}</span>
      <span>]</span>

    <span>{"}"}</span>
  <span>{"}"}</span>
<span className="text-[#00ff41]">{"}"}</span>
</pre>

  </div>
</div>


              {/* Terminal Footer */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-[#2d3436] text-xs font-mono text-[#808e87]">
                <span>JSON</span>
                <span>UTF-8</span>
                <span>Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
      <SkillsMonitor/>
    </section>
  )
}

export default Portfolio