import React, { useState, useEffect } from "react";

const AdminSkills = () => {
  const [jsonText, setJsonText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setJsonText(JSON.stringify(data, null, 2));
      });
  }, []);

  const handleSave = async () => {
    try {
      const parsed = JSON.parse(jsonText);

      await fetch("http://localhost:5000/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed),
      });

      alert("Skills updated successfully ✅");
    } catch (error) {
      alert("Invalid JSON ❌");
    }
  };

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-[#00ff41]">
        Edit Skills JSON
      </h2>

      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        className="w-full h-[500px] bg-[#111] border border-[#2a2a2a] rounded-lg p-4 font-mono text-sm focus:border-[#00ff41] outline-none"
      />

      <button
        onClick={handleSave}
        className="mt-4 bg-[#00ff41] text-black px-6 py-3 rounded font-bold"
      >
        Save JSON
      </button>
    </div>
  );
};

export default AdminSkills;
