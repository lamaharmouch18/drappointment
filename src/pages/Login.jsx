// REHAM

function Login() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Login</h1>

      <form className="max-w-sm space-y-4">
        <input className="border p-2 w-full" placeholder="Email" />
        <input className="border p-2 w-full" type="password" placeholder="Password" />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
