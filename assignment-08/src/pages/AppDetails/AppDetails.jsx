import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        if (foundApp) setApp(foundApp);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading app data...", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-20">Loading app details...</p>
    );
  }

  if (!app)
    return <p className="text-center text-gray-500 mt-20">App Not Found</p>;

  const reviewData = [
    { name: "5★", reviews: Math.floor(app.reviews * 0.5) },
    { name: "4★", reviews: Math.floor(app.reviews * 0.25) },
    { name: "3★", reviews: Math.floor(app.reviews * 0.15) },
    { name: "2★", reviews: Math.floor(app.reviews * 0.07) },
    { name: "1★", reviews: Math.floor(app.reviews * 0.03) },
  ];

  const formatDownloads = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      duration: 4000,
      position: "top-right",
      style: {
        borderRadius: "12px",
        background: "#00D390",
        color: "#fff",
        padding: "16px 24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontWeight: 600,
        fontSize: "16px",
      },
      icon: "✅",
    });
  };

  return (
    <div className="px-10 lg:px-16 py-12 lg:py-16 bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-12 mb-12">
        <img
          src={app.image}
          alt={app.title}
          className="md:w-68 lg:w-[325px] md:h-68 lg:h-[325px] object-cover shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl lg:text-[32px] font-bold text-gray-900 mb-2">
            {app.title}
          </h1>
          <p className="text-[#627382] text-lg lg:text-xl mb-4">
            Developed By{" "}
            <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {app.companyName}
            </span>
          </p>

          <hr className="border-t border-gray-500 mb-6" />

          <div className="flex items-center gap-14 text-gray-700 mb-6">
            <div className="flex flex-col gap-1">
              <img
                src="/assets/icon-downloads.png"
                alt=""
                className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mb-1 md:mb-2 lg:mb-3"
              />
              <p className="text-[#001931] text-xs md:text-sm lg:text-[16px] mb-0">
                Downloads
              </p>
              <h2 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] text-[#001931] mt-0">
                {formatDownloads(app.downloads)}
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <img
                src="/assets/icon-ratings.png"
                alt=""
                className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mb-1 md:mb-2 lg:mb-3"
              />
              <p className="text-[#001931] text-xs md:text-sm lg:text-[16px] mb-0">
                Average Ratings
              </p>
              <h2 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] text-[#001931] mt-0">
                {app.ratingAvg}
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <img
                src="/assets/icon-review.png"
                alt=""
                className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mb-1 md:mb-2 lg:mb-3"
              />
              <p className="text-[#001931] text-xs md:text-sm lg:text-[16px] mb-0">
                Total Reviews
              </p>
              <h2 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] text-[#001931] mt-0">
                {app.reviews.toLocaleString()}
              </h2>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-sm text-white font-semibold transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#00b378]"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-500 mb-6" />

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={reviewData}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14 }}
              width={10}
            />
            <Tooltip cursor={{ fill: "#f5f5f5" }} />
            <Bar dataKey="reviews" barSize={20} radius={[0, 5, 5, 0]}>
              {reviewData.map((_, i) => (
                <Cell key={i} fill="#FF9C33" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="border-t border-gray-500 mb-6" />

      <div className="bg-white shadow-md rounded-2xl p-6 mt-14">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4">Description</h2>
        {app.description.split("\n\n").map((para, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AppDetails;
