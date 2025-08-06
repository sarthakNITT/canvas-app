export default function RememberForgotPassword () {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
            </label>
            </div>
            <button
            type="button"
            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
            Forgot password?
            </button>
        </div>
    )
}