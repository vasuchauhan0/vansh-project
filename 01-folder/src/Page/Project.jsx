import React from 'react'

const Project = () => {
  return (
    <section className="min-h-screen bg-[#0a0e0f] px-6 py-16">
      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-mono text-[#00ff41]">
          ~/projects
        </h1>

        <p className="text-[#808e87] mt-2 font-mono text-sm">
          Executable builds & experiments
        </p>
      </div>

      {/* PROJECT GRID FORMAT ONLY */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 
          🔥 YOUR PROJECT CARDS WILL RENDER HERE LATER

          Example later:
          {projects.map(project => (
             <ProjectCard />
          ))}
        */}

      </div>
    </section>
  )
}

export default Project