import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <Logo className="mb-4 md:mb-0 scale-90 origin-left" />
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dhruv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
