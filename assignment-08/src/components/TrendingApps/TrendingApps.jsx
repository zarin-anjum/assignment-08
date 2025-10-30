import React from "react";
import { useNavigate } from "react-router";

const TrendingApps = () => {
  const navigate = useNavigate();

  const appsData = [
    {
      image: "/assets/demo-app (1).webp",
      title: "ChatMaster",
      companyName: "TechNova",
      id: 1,
      description: "AI-powered chat app to improve your productivity.",
      size: 45,
      reviews: 1200,
      ratingAvg: 4.5,
      downloads: 50000,
      ratings: [
        { name: "1 star", count: 50 },
        { name: "2 star", count: 30 },
        { name: "3 star", count: 100 },
        { name: "4 star", count: 400 },
        { name: "5 star", count: 620 },
      ],
    },
    {
      image: "/assets/FitTrack.webp",
      title: "FitTrack",
      companyName: "Healthify",
      id: 2,
      description: "Track your fitness and workouts with ease.",
      size: 60,
      reviews: 850,
      ratingAvg: 4.2,
      downloads: 35000,
      ratings: [
        { name: "1 star", count: 30 },
        { name: "2 star", count: 40 },
        { name: "3 star", count: 150 },
        { name: "4 star", count: 300 },
        { name: "5 star", count: 330 },
      ],
    },
    {
      image: "/assets/Snap.jpg",
      title: "PhotoSnap",
      companyName: "SnapTech",
      id: 3,
      description: "Capture and edit stunning photos effortlessly.",
      size: 80,
      reviews: 940,
      ratingAvg: 4.7,
      downloads: 42000,
      ratings: [
        { name: "1 star", count: 20 },
        { name: "2 star", count: 10 },
        { name: "3 star", count: 60 },
        { name: "4 star", count: 300 },
        { name: "5 star", count: 550 },
      ],
    },
    {
      image: "/assets/demo-app (3).webp",
      title: "TravelMate",
      companyName: "Wanderlust Inc.",
      id: 4,
      description:
        "Plan and book your trips with personalized recommendations.",
      size: 100,
      reviews: 760,
      ratingAvg: 4.3,
      downloads: 28000,
      ratings: [
        { name: "1 star", count: 25 },
        { name: "2 star", count: 35 },
        { name: "3 star", count: 120 },
        { name: "4 star", count: 280 },
        { name: "5 star", count: 300 },
      ],
    },
    {
      image: "/assets/Notewise.png",
      title: "NoteWise",
      companyName: "SmartApps",
      id: 5,
      description: "Organize your notes and ideas efficiently.",
      size: 35,
      reviews: 670,
      ratingAvg: 4.1,
      downloads: 22000,
      ratings: [
        { name: "1 star", count: 20 },
        { name: "2 star", count: 40 },
        { name: "3 star", count: 150 },
        { name: "4 star", count: 250 },
        { name: "5 star", count: 210 },
      ],
    },
    {
      image: "/assets/Foodiefun.jpg",
      title: "FoodieFun",
      companyName: "YumCorp",
      id: 6,
      description: "Discover recipes, restaurants, and food events.",
      size: 55,
      reviews: 1020,
      ratingAvg: 4.6,
      downloads: 47000,
      ratings: [
        { name: "1 star", count: 15 },
        { name: "2 star", count: 20 },
        { name: "3 star", count: 90 },
        { name: "4 star", count: 350 },
        { name: "5 star", count: 545 },
      ],
    },
    {
      image: "/assets/LearnLang.jpg",
      title: "LearnLang",
      companyName: "EduTech",
      id: 7,
      description: "Learn new languages with interactive lessons.",
      size: 70,
      reviews: 880,
      ratingAvg: 4.4,
      downloads: 39000,
      ratings: [
        { name: "1 star", count: 25 },
        { name: "2 star", count: 35 },
        { name: "3 star", count: 130 },
        { name: "4 star", count: 280 },
        { name: "5 star", count: 410 },
      ],
    },
    {
      image: "/assets/MoneyMate.webp",
      title: "MoneyMate",
      companyName: "FinWise",
      id: 8,
      description: "Manage your expenses and budgets effortlessly.",
      size: 40,
      reviews: 950,
      ratingAvg: 4.5,
      downloads: 45000,
      ratings: [
        { name: "1 star", count: 20 },
        { name: "2 star", count: 25 },
        { name: "3 star", count: 100 },
        { name: "4 star", count: 350 },
        { name: "5 star", count: 455 },
      ],
    },
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

  return (
    <div className="p-10 md:p-16 lg:p-20 text-center">
      <h1 className="font-bold text-xl md:text-3xl lg:text-5xl mb-4">Trending Apps</h1>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appsData.map((app) => (
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

      <div>
        <button
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white text-[16px] mt-8 px-5 md:px-7 lg:px-9 py-1 md:py-2 lg:py-3 rounded-sm"
          onClick={() => navigate("/AllApps")}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
