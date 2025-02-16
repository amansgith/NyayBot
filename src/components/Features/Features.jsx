import { Briefcase, FileText, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Features.css";
import ParticlesBackground from "../Particle";

const features = [
  {
    title: "Legal Advice",
    description: "Get AI-powered legal insights tailored to your queries.",
    icon: <Briefcase size={80} className="text-yellow-700" />,
    image: "https://cdn-icons-png.flaticon.com/512/8915/8915768.png",
    linkToChat: true,
  },
  {
    title: "Document Summarizer",
    description:
      "Upload legal documents and get concise, AI-generated summaries.",
    icon: <FileText size={80} className="text-yellow-700" />,
    image: "https://cdn-icons-png.flaticon.com/512/9422/9422946.png",
    linkToChat: true,
  },
  {
    title: "Live Lawyer Assistance",
    description:
      "Connect with professional lawyers in real-time for legal advice via chat.",
    icon: <UserCheck size={80} className="text-yellow-700" />,
    image: "https://cdn-icons-png.flaticon.com/512/3611/3611429.png",
    linkToChat: false,
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <div id="next-section" className=" px-6">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-yellow-800 mb-5">
        What We Offer
      </h2>
      <hr className="w-20 h-2 mx-auto bg-yellow-600 border-0 rounded-md mb-10" />
      {/* Features List */}
      <div className="p-20 w-full mx-auto space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Feature Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className=" desc leading-relaxed text-red-300">
                {feature.description}
              </p>
              <button
                className="mt-3 bg-yellow-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-800 transition"
                onClick={() => feature.linkToChat && navigate("/api/conversation")}
              >
                Learn More
              </button>
            </div>

            {/* Feature Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-40 md:w-52"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
