export function Leaderboard() {
  return (
    <div className="bg-gray-950 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
        <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-400">
          Dark Mode
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">
              1
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">John Doe</h3>
              <p className="text-gray-400">Score: 1234</p>
            </div>
          </div>
          <div className="text-white font-bold text-lg">1234</div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full">
              2
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Jane Smith</h3>
              <p className="text-gray-400">Score: 1200</p>
            </div>
          </div>
          <div className="text-white font-bold text-lg">1200</div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-full">
              3
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Bob Johnson</h3>
              <p className="text-gray-400">Score: 1150</p>
            </div>
          </div>
          <div className="text-white font-bold text-lg">1150</div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-md">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 text-white font-bold px-3 py-1 rounded-full">
              4
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Alice Williams</h3>
              <p className="text-gray-400">Score: 1100</p>
            </div>
          </div>
          <div className="text-white font-bold text-lg">1100</div>
        </div>
      </div>
    </div>
  );
}
