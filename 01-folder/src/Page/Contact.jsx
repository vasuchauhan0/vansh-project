import React from 'react'

const Contact = () => {
  return (
   <section className="w-full bg-[#0a0e0f] text-[#e8f5e9] py-16 lg:py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,52,54,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(45,52,54,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Title */}
        <div className="mb-12 max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
            <span className="text-[#00ff41] mr-2">./</span>
            Initialize_Contact
            <span className="inline-block w-2.5 h-5 bg-[#00ff41] ml-1 animate-pulse align-middle" />
          </h2>
          <p className="text-base text-[#808e87] font-mono">
            Secure channel open. Input your query parameters below to establish a direct link with the developer.
          </p>
        </div>

        {/* Terminal */}
        <div className="max-w-3xl mx-auto bg-[#151b1e] border-2 border-[#2d3436] rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.05)] overflow-hidden">

          {/* Header */}
          <div className="bg-[#2d3436] px-4 py-2 flex items-center justify-between border-b border-black">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff3b30]" />
              <div className="w-3 h-3 rounded-full bg-[#ffcc00]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff41]" />
            </div>
            <span className="text-xs text-[#808e87] font-mono">
              guest@portfolio:~/contact-form
            </span>
            <div className="w-10" />
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-6">

            {/* Logs */}
            <div className="font-mono text-sm text-[#00ff41] opacity-80 space-y-1">
              <p>Loading contact modules... Done.</p>
              <p>Ready for input.</p>
            </div>

            {/* Form */}
            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#808e87] font-mono flex gap-2">
                    <span className="text-[#00ff41]">{">"}</span>
                    IDENTITY_STRING (Name)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alice Smith"
                    className="w-full bg-[#151b1e] border-2 border-[#2d3436] rounded px-4 py-3 font-mono text-[#e8f5e9] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] placeholder:text-[#808e87]/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#808e87] font-mono flex gap-2">
                    <span className="text-[#00ff41]">{">"}</span>
                    COMM_FREQUENCY (Email)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alice@example.com"
                    className="w-full bg-[#151b1e] border-2 border-[#2d3436] rounded px-4 py-3 font-mono text-[#e8f5e9] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] placeholder:text-[#808e87]/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#808e87] font-mono flex gap-2">
                  <span className="text-[#00ff41]">{">"}</span>
                  PACKET_HEADER (Subject)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Project Inquiry"
                  className="w-full bg-[#151b1e] border-2 border-[#2d3436] rounded px-4 py-3 font-mono text-[#e8f5e9] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] placeholder:text-[#808e87]/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#808e87] font-mono flex gap-2">
                  <span className="text-[#00ff41]">{">"}</span>
                  PAYLOAD_DATA (Message)
                </label>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full min-h-[120px] resize-none bg-[#151b1e] border-2 border-[#2d3436] rounded px-4 py-3 font-mono text-[#e8f5e9] outline-none focus:border-[#00ff41] focus:shadow-[0_0_0_3px_rgba(0,255,65,0.2)] placeholder:text-[#808e87]/50"
                />
              </div>

              {/* Footer */}
              <div className="pt-4 flex items-center justify-between border-t border-[#2d3436] mt-8">
                <span className="hidden sm:block text-xs text-[#808e87] font-mono">
                  STATUS: WAITING_FOR_INPUT
                </span>

                <button
                  type="button"
                  className="font-mono font-bold uppercase tracking-wider bg-[#00ff41] text-[#0a0e0f] px-8 py-3 rounded hover:bg-[#00d936] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition"
                >
                  EXECUTE_SEND
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Footer info */}
        <div className="max-w-3xl mx-auto mt-4 flex justify-between text-xs text-[#808e87] font-mono opacity-60">
          <span>v2.4.0-stable</span>
          <span>SECURE // ENCRYPTED</span>
        </div>

      </div>
    </section>
  )
}

export default Contact