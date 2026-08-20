export type Project = {
  title: string
  subtitle: string
  image: string
  /** Optional variant swapped in under the dark theme. */
  imageDark?: string
  alt: string
  imageFit?: "cover" | "contain"
  blurb: string
  tech: string[]
  href: string | null
  /** Which icon the card links show. Defaults to "github". */
  link?: "github" | "external"
  cta?: string
}

export const projects: Project[] = [
  {
    title: "Loxa",
    subtitle: "Open-source local AI node for hardware you own",
    image: "/loxa-mark-ink.svg",
    imageDark: "/loxa-mark-snow.svg",
    alt: "Loxa",
    imageFit: "contain",
    blurb:
      "Apple-Silicon-first node that handles the operations around a local model rather than replacing the engine: hardware-aware model matching, verified downloads, a supervised runtime that stays up, and one OpenAI-compatible endpoint for every local app. Apache-2.0, in early development.",
    tech: [
      "Rust",
      "Apple Silicon",
      "MLX",
      "llama.cpp",
      "OpenAI-compatible API",
      "CLI",
      "Apache-2.0",
    ],
    href: "https://loxa.dev",
    link: "external",
    cta: "Visit site",
  },
  {
    title: "Brew",
    subtitle: "Invite-only iOS app for event follow-ups that actually happen",
    image: "/brew-mark.svg",
    alt: "Brew",
    imageFit: "contain",
    blurb:
      "Turns people met at networking events into scheduled meetings: mutual QR handshake, next-morning triage, invitation-scoped chat, and bilateral meeting confirmation. Swift 6 iOS client over a Fastify/Postgres service, with a fixed 15-person roster and trusted introductions gated on confirmed meeting history.",
    tech: [
      "Swift 6",
      "SwiftUI",
      "GRDB",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Kysely",
      "EventKit",
      "TestFlight",
      "Render",
    ],
    href: null,
  },
  {
    title: "Gemma 4 Good Hackathon 2026 — Eidos",
    subtitle: "On-device AI companion for autistic + ADHD adults",
    image: "/eidos-hackathon.png",
    alt: "Eidos",
    imageFit: "contain",
    blurb:
      "Privacy-first iOS companion that runs Gemma 4 E2B entirely on-device via MLX Swift — zero network egress after the one-time model download. Four AuDHD-shaped flows: voice journaling, photo-to-3-step-plan, scripted grounding for sensory overwhelm, and energy-aware next-task picking.",
    tech: [
      "Swift 6",
      "SwiftUI",
      "MLX Swift",
      "Gemma 4 E2B",
      "Hugging Face",
      "Apple Natural Language",
      "SpeechTranscriber",
      "SwiftData",
      "EventKit",
      "AVFoundation",
      "Mac Catalyst",
      "RAG",
    ],
    href: "https://github.com/Hammad-Anjum/Eidos",
  },
  {
    title: "EduX Hackathon 2026 Oceania — HomeRoom",
    subtitle: "All-in-one AI-powered teaching and parent communication platform",
    image: "/hackathon.png",
    alt: "HomeRoom",
    imageFit: "contain",
    blurb:
      "AI-powered teacher–parent platform for AU K-12. Curriculum RAG, multilingual chat, wellbeing tracking, voice TTS, and CurricuLLM integration.",
    tech: [
      "Python",
      "Hugging Face",
      "Text-to-speech",
      "FastAPI",
      "ChromaDB",
      "Google Translate",
      "CurricuLLM",
      "WebSocket",
      "React",
      "JSON",
    ],
    href: "https://github.com/Hammad-Anjum/EduX-Hackathon-HomeRoom",
  },
  {
    title: "Bachelor Final Year Project — Cognify Academy",
    subtitle: "A full-stack university test preparation platform",
    image: "/cognify-logo.png",
    alt: "Cognify Academy",
    imageFit: "contain",
    blurb:
      "Built a complete university and other test preparation platform with features like user authentication, LLM-generated questions, adaptive learning, and personalized user dashboards.",
    tech: ["LangChain", "Python", "Flask", "React", "Next.js", "PostgreSQL", "Render"],
    href: null,
  },
  {
    title: "FlowDesk",
    subtitle: "All-in-one workflow platform for creative agencies",
    image: "/flowdesk-mark.svg",
    alt: "FlowDesk",
    imageFit: "contain",
    blurb:
      "Replaces Asana, spreadsheet trackers, and manual Drive filing with one tool. Kanban/list/calendar task views, Google Drive sync that files uploads under the right brand and month automatically, a live exportable tracker, and role-scoped multi-tenant access enforced by Postgres row-level security.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Google Drive API",
      "Realtime",
      "shadcn/ui",
      "Tailwind CSS",
      "Resend",
    ],
    href: "https://github.com/Hammad-Anjum/flowdesk",
  },
  {
    title: "MealNest",
    subtitle: "A recipe-sharing and meal-planning platform",
    image: "/mealnest-mark.svg",
    alt: "MealNest",
    imageFit: "contain",
    blurb:
      "Full-stack MERN app for discovering, saving, and planning meals. Recipe upload with images and ingredients, search by ingredient or dietary preference, auto-generated shopping lists from saved recipes, and community ratings and comments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST API"],
    href: "https://github.com/Hammad-Anjum/MealNest",
  },
  {
    title: "PDF Text RAG",
    subtitle: "A RAG setup to extract PDF content and text for Q&A",
    image: "/RAG.png",
    alt: "PDF text RAG",
    blurb:
      "Developed an AI-powered PDF text retriever that provides contextual answers based on the provided PDF.",
    tech: ["Python", "LangChain", "OpenAI", "Streamlit"],
    href: "https://github.com/Hammad-Anjum/PDF-Text-RAG",
  },
  {
    title: "YouTube Comments Classifier",
    subtitle: "Classifying YouTube comments with ML and DL models",
    image: "/ytcc.png",
    alt: "YouTube Comments Classifier",
    blurb:
      "Extracted, processed, and classified YouTube comments from various channels using two ML and DL models to compare performances.",
    tech: ["Python", "TensorFlow", "NLTK", "Scikit-Learn"],
    href: "https://github.com/Hammad-Anjum/Youtube-Comments-Classifier",
  },
  {
    title: "House Price Predictor",
    subtitle: "A house price prediction model built on Flask",
    image: "/hppf.png",
    alt: "House Price Predictor",
    blurb:
      "Created a house price prediction model using various regression techniques and numerous input parameters. Deployed it using Flask APIs and Render to host the application.",
    tech: ["Python", "Scikit-Learn", "Flask"],
    href: "https://github.com/Hammad-Anjum/House-Price-Prediction-Flask",
  },
  {
    title: "Arxiv Text Summarizer",
    subtitle: "Trained Llama 7B on the arxiv summarization dataset",
    image: "/ats.png",
    alt: "Arxiv Text Summarizer",
    blurb:
      "Trained and fine-tuned the Llama 7B model on an arxiv dataset to summarize research papers. Built using Hugging Face and deployed via Gradio UI.",
    tech: ["Python", "HuggingFace", "Transformers", "GradioUI", "Flask"],
    href: "https://github.com/Hammad-Anjum/arxiv-summarization",
  },
  {
    title: "Airline Satisfaction Analysis",
    subtitle: "Conducted analysis and built 7+ ML models on an airline satisfaction dataset",
    image: "/asa.png",
    alt: "Airline Satisfaction Analysis",
    blurb:
      "Conducted EDA and predictive modeling on airline satisfaction data using Python (Pandas, Scikit-learn). Identified critical service factors and built a classifier with a 94% F1-score.",
    tech: ["Python", "Scikit-Learn", "Matplotlib", "NumPy", "Pandas", "SMOTE", "LIME", "SHAP"],
    href: "https://github.com/Hammad-Anjum/Airline-Satisfaction-Analysis",
  },
  {
    title: "LangChain Academy",
    subtitle: "Agents, tool use, and checkpointing with LangGraph",
    image: "/langchain-mark.svg",
    alt: "LangChain Academy",
    imageFit: "contain",
    blurb:
      "Notes and exercises from the LangChain Academy foundation course, including a recipe-search agent that plans around whatever ingredients you have on hand using Tavily search over a LangGraph loop.",
    tech: ["Python", "LangChain", "LangGraph", "HuggingFace", "DeepSeek-R1", "Tavily"],
    href: "https://github.com/Hammad-Anjum/lca-langchain",
    cta: "View All",
  },
  {
    title: "DataCamp Projects",
    subtitle: "Various projects completed on DataCamp",
    image: "/datacamp.png",
    alt: "DataCamp Projects",
    blurb:
      "Completed multiple projects on DataCamp to enhance data science and machine learning skills.",
    tech: [
      "Python",
      "HuggingFace",
      "Transformers",
      "Sklearn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "LLMs",
      "LangChain",
      "OpenAI",
      "Llama",
    ],
    href: "https://github.com/Hammad-Anjum/DataCamp-projects",
    cta: "View All",
  },
  {
    title: "Free Code Camp Projects",
    subtitle: "Projects completed for Free Code Camp certification",
    image: "/freecodecamp.png",
    alt: "Free Code Camp Projects",
    blurb:
      "Completed the Free Code Camp certification to enhance machine learning and AI skills.",
    tech: ["PyTorch", "NumPy", "Matplotlib", "Seaborn", "TensorFlow"],
    href: "https://github.com/Hammad-Anjum/FreeCodeCamp-MLwithTensorflow",
    cta: "View All",
  },
]
