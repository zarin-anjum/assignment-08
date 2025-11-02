import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    setLoading(true);
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
    setLoading(false);
  }, []);

  const formatDownloads = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  const handleUninstall = (id) => {
    toast.success("App uninstalled successfully!", {
      duration: 2000,
      style: {
        borderRadius: "12px",
        background: "#FF4D4F",
        color: "#fff",
        padding: "12px 20px",
      },
      icon: "🗑️",
    });

    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  if (loading)
    return <p className="text-center mt-20">Loading installed apps...</p>;
  if (!installedApps.length)
    return (
      <p className="text-center mt-20 mb-20 font-medium text-3xl">
        No apps installed yet.
      </p>
    );

  const sortedApps = [...installedApps];

  if (sortOption === "high") {
    sortedApps.sort((a, b) => b.downloads - a.downloads);
  } else if (sortOption === "low") {
    sortedApps.sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-8 lg:px-10 py-14">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm md:text-lg lg:text-xl mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/*Sorting*/}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl">
          {installedApps.length} App{installedApps.length > 1 ? "s" : ""} Found
        </p>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        >
          <option value="default">Sort by Downloads</option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>
      </div>

      {/*App List */}
      <div className="space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center bg-white shadow-sm rounded-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image || "https://via.placeholder.com/60"}
                alt={app.title}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-xl text-gray-800">
                  {app.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 gap-2 md:gap-6 mt-1">
                  <div className="flex items-center gap-1 md:gap-2">
                    <img
                      src="/assets/icon-downloads.png"
                      alt="download-icon"
                      className="w-4 h-4"
                    />
                    <p className="text-[#00D390] text-[16px]">
                      {formatDownloads(app.downloads)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <img
                      src="/assets/icon-ratings.png"
                      alt="download-icon"
                      className="w-4 h-4"
                    />
                    <p className="text-[#FF8811] text-[16px]">
                      {app.ratingAvg || 5}
                    </p>
                  </div>
                  <span className="text-[16px]">{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-[#00D390] text-white font-medium px-5 py-2 rounded-lg hover:bg-[#00b87d] transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
