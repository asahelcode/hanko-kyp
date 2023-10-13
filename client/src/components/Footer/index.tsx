const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="flex justify-center py-2 font-sora absolute bottom-0 text-gray-300 bg-gray-50 bg-opacity-20 w-full">
      <p>Copyright &copy; {date}</p>
    </div>
  );
};

export default Footer;
