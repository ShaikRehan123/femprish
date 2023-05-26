const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between w-full h-20 px-4 bg-white shadow-md">
      <div className="flex justify-between w-full">
        <a href="/" className="text-xl font-bold text-pink-500">
          <img src="/logo.jpeg" alt="logo" className="w-16 h-16" />
        </a>
        <div className="flex items-center justify-between ml-4">
          <a
            href="/"
            className="text-sm font-medium text-gray-500 transition-all duration-500 hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="/about-us"
            className="ml-4 text-sm font-medium text-gray-500 transition-all duration-500 hover:text-pink-500"
          >
            About Us
          </a>

          <a
            href="/contact-us"
            className="ml-4 text-sm font-medium text-gray-500 transition-all duration-500 hover:text-pink-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
