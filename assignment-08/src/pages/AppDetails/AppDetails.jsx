import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        if (foundApp) {
          setApp(foundApp);
        } else {
          console.error("App not found");
        }
      })
      .catch((err) => console.error("Error loadind app data...", err));
  }, [id]);

  if (!app)
    return (
      <p className="text-center text-gray-500 mt-20">Loading app details...</p>
    );

  const reviewData = [
    { name: "5★", reviews: Math.floor(app.reviews * 0.5) },
    { name: "4★", reviews: Math.floor(app.reviews * 0.25) },
    { name: "3★", reviews: Math.floor(app.reviews * 0.15) },
    { name: "2★", reviews: Math.floor(app.reviews * 0.07) },
    { name: "1★", reviews: Math.floor(app.reviews * 0.03) },
  ];

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 rounded-2xl object-cover shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-4">{app.companyName}</p>

          <div className="flex items-center gap-6 text-gray-700 mb-6">
            <span>⭐ {app.ratingAvg} / 5</span>
            <span>⬇️ {app.size} MB</span>
            <span>💬 {app.reviews.toLocaleString()} Reviews</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#632EE3] hover:bg-[#4f23b8]"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">User Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reviewData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reviews" fill="#632EE3" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">About {app.title}</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
