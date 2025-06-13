const Footer = () => {
    return (
      <footer className="bg-gray-950 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Saloni Jaiswal. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="https://github.com/salonijaiswal" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/salonijaiswal" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:salonijaiswal@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  