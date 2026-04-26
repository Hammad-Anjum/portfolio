export type Project = {
  title: string
  subtitle: string
  image: string
  alt: string
  imageFit?: "cover" | "contain"
  blurb: string
  tech: string[]
  href: string | null
  cta?: string
}

export const projects: Project[] = [
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
    title: "Final Year Project — Cognify Academy",
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
