import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-4">
          We're sorry, but we encountered an unexpected error.
        </p>
        {error && (
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
            {error.message}
          </pre>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-primaryBlue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;