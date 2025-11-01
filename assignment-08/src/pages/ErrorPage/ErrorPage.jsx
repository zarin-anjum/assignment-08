import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-100">
      <img src="/assets/App-Error.png" alt="" className="w-88 h-88"/>
      <h2 className="text-4xl font-bold mb-4 text-gray-800 mt-4">Oops!</h2>
      <p className="text-lg text-gray-600 mb-4">
        {error?.statusText || "The page you are looking for is not available."}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg font-semibold hover:bg-[#00b378] transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
