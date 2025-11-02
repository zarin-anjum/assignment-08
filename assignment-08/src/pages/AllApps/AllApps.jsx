import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading/Loading";

const AllApps = () => {
  const navigate = useNavigate();
  const [appsData, setAppsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .catch((err) => console.error("Error loading apps.json:", err));
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setLoadingSearch(true);

    // simulate a small delay for loading spinner
    setTimeout(() => {
      setLoadingSearch(false);
    }, 500);
  };

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-center p-10 md:p-14 lg:p-20 bg-gray-100">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mb-4">
        Our All Applications
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">
          {filteredApps.length} Apps Found
        </p>
        <input
          type="text"
          placeholder="Search Apps"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-sm px-2 py-1 w-1/3 md:w-1/2 lg:w-[400px] focus:outline-none focus:ring-2 focus:ring-[#627382]"
        />
      </div>

      {loadingSearch ? (
        <Loading /> // Shows your spinner while search is "loading"
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="rounded-lg shadow hover:shadow-xl p-4 bg-white"
              onClick={() => navigate(`/app/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="mx-auto mb-4 border-2 border-gray-400 rounded-md"
              />
              <h2 className="font-medium text-xl mb-4">{app.title}</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 bg-[#F1F5E8] p-1">
                  <img
                    src="/assets/icon-downloads.png"
                    alt="download-icon"
                    className="w-4 h-4"
                  />
                  <p className="text-[#00D390]">
                    {formatDownloads(app.downloads)}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#FFF0E1] p-1">
                  <img
                    src="/assets/icon-ratings.png"
                    alt="ratings-icon"
                    className="w-4 h-4"
                  />
                  <p className="text-[#FF8811]">{app.ratingAvg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-gray-700 text-lg mt-10">
          No App Found
        </p>
      )}
    </div>
  );
};

export default AllApps;
