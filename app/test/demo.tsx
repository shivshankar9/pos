{
  /* Login Modal */
}
{
  showLoginModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {" "}
        {/* Smaller width for the login modal */}
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
          Login to Access Opportunities
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 border rounded-lg"
        />
        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
          <button
            onClick={() => setShowLoginModal(false)}
            className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setShowSubscriptionModal(true)} // Opens the subscription modal
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Get Credentials
          </button>
        </div>
      </div>
    </div>
  );
}
