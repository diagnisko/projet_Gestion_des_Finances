export default function Navbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between">
      <h2 className="font-bold text-lg">Dashboard</h2>

      <div>
        <span className="mr-4">Mohamed</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}