import React from 'react';

const ViewResume = () => {
    return (
      <section id="ViewResume" className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">My Resume</h1>
  
        <div className="w-full max-w-5xl h-[90vh] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          <iframe
            src="/Saloni_Resume.pdf"
            title="Saloni Jaiswal Resume"
            className="w-full h-full"
          ></iframe>
        </div>
  
        <a
          href="/Saloni_Resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          📥 Download Resume
        </a>
      </section>
    );
  };
  
  export default ViewResume;
  