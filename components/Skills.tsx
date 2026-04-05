type SkillGroup = {
  title: string;
  skills: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "LLM & AI Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "LoRA/QLoRA",
      "Prompt Engineering",
      "Hugging Face",
      "Gemini API",
    ],
  },
  {
    title: "Infra & Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "SQLite",
    ],
  },
  {
    title: "ML & Computer Vision",
    skills: [
      "PyTorch",
      "TensorFlow",
      "TFLite",
      "ONNX",
      "Scikit-learn",
      "MediaPipe",
      "BiLSTM",
      "MLOps",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <header>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            03 / SKILLS
          </p>
          <h2
            id="skills-heading"
            className="font-heading mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[color:var(--text-primary)]"
          >
            What I Work With
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-[10px] border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-6"
            >
              <h3 className="font-heading mb-3 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-[color:var(--accent)]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[4px] border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-2.5 py-1 font-mono text-[0.72rem] text-[color:var(--text-secondary)] transition-colors duration-150 hover:border-[color:var(--border-bright)] hover:text-[color:var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
