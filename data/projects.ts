export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  highlight: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "fitness-companion",
    title: "Fitness Companion",
    tagline: "Real-time exercise classification and AI coaching",
    stack: [
      "MediaPipe",
      "BiLSTM",
      "TFLite",
      "ONNX",
      "Gemini",
      "SQLite",
    ],
    highlight: "95% accuracy · 7 exercise classes · 95%+ test coverage",
    featured: true,
  },
  {
    slug: "rec-system",
    title: "Distributed Recommendation System",
    tagline: "Event-driven pipeline with LLM-powered re-ranking at scale",
    stack: [
      "FastAPI",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Groq",
      "llama-3.3-70b-versatile",
      "Prometheus",
      "Grafana",
      "AWS",
    ],
    highlight: "Cached hot path · LLM re-ranking · Full observability",
    featured: true,
  },
];
