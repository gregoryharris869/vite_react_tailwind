import logo from "/img/logo.svg";
import beachWorkImage from "/img/beach-work.jpg";

const Header = () => {
  return (
    <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src={logo} alt="Workcation" />
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src={beachWorkImage}
            alt="Woman workcationing on the beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" />{" "}
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when your not on
            vacation.
          </p>
          <div className="mt-4 space-x-1 sm:mt-6">
            <a
              className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
              href="#"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={beachWorkImage}
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  );
};

export default Header;
