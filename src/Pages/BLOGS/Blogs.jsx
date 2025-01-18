import "./Blogs.css";
import {
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
  Blog9,
} from "../../assets/index";

const topics = [
  {
    title: "The Future of AI in Web Development",
    description:
      "Exploring how artificial intelligence is reshaping the way we build websites and applications",
    image: Blog2,
    category: "Technology",
  },
  {
    title: "Sustainable Tech: Green Coding Practices",
    description:
      "How developers can contribute to environmental sustainability through efficient coding",
    image: Blog1,
    category: "Environment",
  },
  {
    title: "Remote Work Culture in 2025",
    description:
      "New trends and tools shaping the future of remote collaboration",
    image: Blog4,
    category: "Workplace",
  },
  {
    title: "Quantum Computing: A Developer's Guide",
    description:
      "Understanding the basics of quantum computing and its implications for software development",
    image: Blog5,
    category: "Technology",
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    description: "Essential security measures for modern web applications",
    image: Blog6,
    category: "Security",
  },
  {
    title: "The Rise of Edge Computing",
    description:
      "How edge computing is revolutionizing data processing and application performance",
    image: Blog7,
    category: "Technology",
  },
  {
    title: "Web3 and the Future of Internet",
    description:
      "Exploring decentralized web technologies and their impact on digital experiences",
    image: Blog7,
    category: "Blockchain",
  },
  {
    title: "Augmented Reality in Web Apps",
    description:
      "Implementing AR features in modern web applications using WebXR",
    image: Blog8,
    category: "Innovation",
  },
  {
    title: "Microservices Architecture Patterns",
    description:
      "Best practices for designing and implementing microservices in 2025",
    image: Blog9,
    category: "Architecture",
  },
  {
    title: "The Psychology of UX Design",
    description:
      "Understanding user behavior and cognitive patterns in modern interface design",
    image: Blog3,
    category: "Design",
  },
];
export default function Portfolio() {
  return (
    <div className="blog-topics">
      <span className="text-white font-semibold text-[2.2em] font-poppins ">
        Blogs
      </span>
      <div
        id="dash"
        className="rounded-md mt-3 bg-amber-400 h-2 w-20 mb-5"
      ></div>
      <div className="topics-grid mt-10">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <div className="topic-image">
              <img src={topic.image} alt={topic.title} />
              <span className="category">{topic.category}</span>
            </div>
            <div className="topic-content">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
