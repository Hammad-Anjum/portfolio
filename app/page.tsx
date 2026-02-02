import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Award,
  Briefcase,
  User,
  GraduationCap,
  FileText,
  MessageSquare,
  ChevronUp,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navigation from "@/components/navigation"
import {SiDatacamp} from "react-icons/si";



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            Hammad Anjum
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container pb-16">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Hammad Anjum</h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground"> AI / ML Engineer | Automation Engineer | Data Scientist</h2>
            <p className="text-muted-foreground max-w-md">
              Passionate about creating intuitive and impactful digital experiences. Currently enrolled in Masters of Artificial Intelligence at University of Technology Sydney while having hands-on experience in AI/ML and RPA development.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://drive.google.com/file/d/1lT2BK-eIPg9xALYxe8sE1lS2EjzI0qM0/view?usp=sharing" target="_blank">My Resume</a>
              </Button>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image src={process.env.NODE_ENV === 'production' ? '/portfolio/pfp.png' : '/pfp.png'} alt="Jane Doe" fill className="object-cover" priority />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p>
                I am an AI/ML Engineer and Data Science professional currently pursuing a Masters of Artificial Intelligence at the University of Technology Sydney (UTS). My journey began at FAST-NUCES Lahore, where I developed a fascination for transforming raw data into actionable intelligence.
              </p>
              <p>
                Recently, I have focused on the cutting edge of Generative AI, successfully deploying over five RAG systems and building multimodal applications that bridge the gap between Computer Vision and NLP. I thrive at the intersection of innovation and efficiency—whether I'm fine-tuning a model to 95% accuracy or building automation workflows that reduce manual labor by 90%.
              </p>
              <p>
                When I’m not in the IDE, you’ll likely find me hiking around New South Wales, hunting for Sydney’s best espresso, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-medium">Location:</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Sydney, Australia</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Education:</span>
                  <div className="text-muted-foreground">M.S. Artificial Intelligence</div>
                </div>
                <div>
                  <span className="font-medium">Interests:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">AI</Badge>
                    <Badge variant="secondary">LLMs</Badge>
                    <Badge variant="secondary">Vibe Coding</Badge>
                    <Badge variant="secondary">Automation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

    {/* Experience Section */}
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      </div>
      
      <div className="space-y-6">
        {/* Experience 1 */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <CardTitle>AI/ML Associate</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="font-medium">Nexpred Solutions</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Hybrid
                    </span>
                  </div>
                </CardDescription>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  Sept 2025 - Dec 2025
                </span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Worked on cutting-edge AI projects focusing on natural language processing, retrieval augmented generation (RAG) and computer vision applications using AI.
            </p>
            
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Developed and successfully deployed <b>5+ RAG systems</b> using LangChain and various vector databases to enhance information retrieval and generation capabilities <b>by 73%.</b></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Utilized openAI and external APIs to create <b>2-3 multimodal applications</b> leveraging <b>computer vision</b> and <b>NLP</b> to analyze images and text, delivering contextual recommendations with <b>85–95%</b> model accuracy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Created <b>internal tools</b> for automating data processing workflows along with lead generation reducing <b>manual workload by 86%.</b></span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">HuggingFace</Badge>
                <Badge variant="outline">LangChain</Badge>
                <Badge variant="outline">FAISS</Badge>
                <Badge variant="outline">Pinecone</Badge>
                <Badge variant="outline">ChromaDB</Badge>
                <Badge variant="outline">openAI</Badge>
                <Badge variant="outline">Streamlit</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Selenium</Badge>
              </div>
            </div>

            <div className = "flex flex-col md:items-end gap-2">
            <Button variant="outline" asChild >
                <a href="">View recommendation letter</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Experience 2 */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <CardTitle>RPA Developer</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="font-medium">Sybros Tech</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Lahore, Pakistan
                    </span>
                  </div>
                </CardDescription>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  Sep 2024 - March 2025
                </span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Developed and maintained Robotic Process Automation (RPA) solutions to streamline business processes and improve operational efficiency.
            </p>
            
            <div>
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Created <b>10+ automation workflows</b> to help streamline business processes and reduce hands-on work <b>by 90%.</b></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Developed scripts for multiple CRMs such as <b>Hubspot, Zoho, and Airtable</b> to standardize internal workflows.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Utilized PowerBI and Tableau to create dashboards for tracking key performance indicators for the automation workflows.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">UIpath</Badge>
                <Badge variant="outline">Selenium</Badge>
                <Badge variant="outline">n8n</Badge>
                <Badge variant="outline">Zoho</Badge>
                <Badge variant="outline">Airtable</Badge>
                <Badge variant="outline">App Scripts</Badge>
                <Badge variant="outline">Hubspot</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Mobile Automation</Badge>
                <Badge variant="outline">PowerBI</Badge>
              </div>
            </div>


            <div className = "flex flex-col md:items-end gap-2">
            <Button variant="outline" asChild >
                <a href="">View recommendation letter</a>
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>University of Technology Sydney</CardTitle>
                  <CardDescription>Sydney, Australia</CardDescription>
                </div>
                <Badge> February 2026 - Current</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Masters of Artificial Intelligence</h3>
                {/*<p className="text-muted-foreground">GPA: 3.14/4.0</p>*/}
              </div>
              {/*  Relevant Coursework can be added later 
              <div>
                <h4 className="font-medium">Relevant Coursework</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Data Analysis and Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Generative AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Artificial Intelligence</span>
                  </li>
                </ul>
              </div>
              */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>FAST NUCES</CardTitle>
                  <CardDescription>Lahore , Pakistan</CardDescription>
                </div>
                <Badge> June 2021 - June 2025</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Bachelor of Science in Data Science</h3>
                <p className="text-muted-foreground">GPA: 3.14/4.0</p>
              </div>
              <div>
                <h4 className="font-medium">Relevant Coursework</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Data Analysis and Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Generative AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Artificial Intelligence</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>New Middle East International School</CardTitle>
                  <CardDescription>Riyadh, Saudi Arabia</CardDescription>
                </div>
                <Badge>May 2021</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">O/A Levels</h3>
              </div>
              <div>
                <h4 className="font-medium">Relevant Subjects</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Maths</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Physics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Computer Science</span>
                  </li>

                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            <Card>
              <CardHeader>
                <CardTitle>AI for Data Scientists</CardTitle>
                <CardDescription>DataCamp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge>July 2025</Badge>
                <div className="flex">
                  <Button variant="link" size="sm" className="px-0" asChild>
                    <a href="https://www.datacamp.com/certificate/AEDS0014706321482" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Data Scientist</CardTitle>
                <CardDescription>DataCamp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge>July 2024</Badge>
                <div className="flex">
                  <Button variant="link" size="sm" className="px-0" asChild>
                    <a href="https://www.datacamp.com/certificate/DS0027319922812" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Machine Learning with Python</CardTitle>
                <CardDescription>FreeCodeCamp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge>February 2024</Badge>
                <div className="flex">
                  <Button variant="link" size="sm" className="px-0" asChild>
                    <a href="https://www.freecodecamp.org/certification/fcc9901a92f-fcb8-444a-ac45-ac74c0e2b12c/machine-learning-with-python-v7" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <CardTitle>Associate Data Analyst</CardTitle>
                <CardDescription>DataCamp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge>October 2023</Badge>
                <div className="flex">
                  <Button variant="link" size="sm" className="px-0" asChild>
                    <a href="https://www.datacamp.com/certificate/DAA0016430756652" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/cognify-logo.png' : '/cognify-logo.png'}
                  alt="cognify"
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-110" />
              </div>
              <CardHeader>
                <CardTitle>Final Year Project - Cognify Academy</CardTitle>
                <CardDescription>A full-stack university test preparation platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Built a complete university and other test preparation platform with features like
                  user authentication, use of LLMs to generate questions, adaptive learning and AI along 
                  with user dashboards for a personalized experience.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next</Badge>
                    <Badge variant="outline">PostgresSQL</Badge>
                    <Badge variant="outline">Render</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/RAG.png' : '/RAG.png'}
                  alt="AI Health Assistant"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>PDF text RAG</CardTitle>
                <CardDescription>A RAG setup to extract PDF content and text for Q&A.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Developed an AI-powered PDF text retriever that can provides contextual answers
                  based upon the provided PDF.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Langchain</Badge>
                    <Badge variant="outline">openAI</Badge>
                    <Badge variant="outline">Streamlit</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/PDF-Text-RAG" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/ytcc.png' : '/ytcc.png'}
                  alt="Smart Home Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Youtube Comments Classifier</CardTitle>
                <CardDescription>Classifying youtube comments with ML and DL models</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Extracted, processed and classified youtube comments from various youtube channels
                  using two ML and DL models to compare performances
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">NLTK</Badge>
                    <Badge variant="outline">Scikit Learn</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/Youtube-Comments-Classifier" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/hppf.png' : '/hppf.png'}
                  alt="Data Visualization Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>House Price Predictor</CardTitle>
                <CardDescription>A house price prediction model built on flask</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Created a house price prediction model using various regression techniques and nunmerous 
                  input parameters. Deployed it using Flask APIs and render to host the application.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Scikit Learn</Badge>
                    <Badge variant="outline">Flask</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/House-Price-Prediction-Flask" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


          <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/ats.png' : '/ats.png'}
                  alt="Data Visualization Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Arxiv Text Summarizer</CardTitle>
                <CardDescription>Trained Llama 7B on arxiv summarization dataset</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Trained and fine-tuned Llama 7B model on arxiv dataset to summarize the research papers.
                  built the model using huggingface and deployed using gradioUI.

                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">HuggingFace</Badge>
                    <Badge variant="outline">Transformers</Badge>
                    <Badge variant="outline">GradioUI</Badge>
                    <Badge variant="outline">Flask</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/arxiv-summarization" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


                      <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/asa.png' : '/asa.png'}
                  alt="Data Visualization Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Airline Satisfaction Analysis</CardTitle>
                <CardDescription>Conducted analysis and built 7+ ML models on an airline satisfaction dataset</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Conducted EDA and predictive modeling on airline satisfaction data using Python (Pandas, Scikit-learn). 
                  Identified critical service factors and developed a classification model with 94% F1-score.

                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Scikit-Learn</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">NumPy</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">SMOTE</Badge>
                    <Badge variant="outline">LIME</Badge>
                    <Badge variant="outline">SHaP</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/Airline-Satisfaction-Analysis" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/datacamp.png' : '/datacamp.png'}
                  alt="Data Visualization Tool"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Datacamp Projects</CardTitle>
                <CardDescription>Various projects completed on Datacamp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Completed multiple projects on Datacamp to enhance data science and machine learning skills.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">HuggingFace</Badge>
                    <Badge variant="outline">Transformers</Badge>
                    <Badge variant="outline">Sklearn</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Numpy</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">LLMs</Badge>
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">OpenAI</Badge>
                    <Badge variant="outline">Llama</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/DataCamp-projects" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>View All</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/freecodecamp.png' : '/freecodecamp.png'}
                  alt="Data Analyst Associate Exam"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Free Code Camp Projects</CardTitle>
                <CardDescription>Projects completed for Free Code Camp certification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Completed the Free Code Camp certification to enhance machine learning and AI skills.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">pyTorch</Badge>
                    <Badge variant="outline">Numpy</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/FreeCodeCamp-MLwithTensorflow" target="_blank" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>View All</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


          </div>
        </section>



                
        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>C++</Badge>
                      <Badge>HTML/CSS</Badge>
                      <Badge>SQL</Badge>
                      <Badge>R</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frameworks & Libraries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>HuggingFace</Badge>
                      <Badge>LangChain</Badge>
                      <Badge>OpenAI</Badge>
                      <Badge>Scikit-Learn</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>PyTorch</Badge>
                      <Badge>NLTK</Badge>
                      <Badge>Numpy</Badge>  
                      <Badge>Pandas</Badge>
                      <Badge>Seaborn</Badge>
                      <Badge>Matplotlib</Badge>
                      <Badge>Flask</Badge>
                      <Badge>Selenium</Badge>
                      <Badge>BeautifulSoup</Badge>
                      <Badge>OpenCV</Badge>
                      <Badge>OpenAI</Badge>
                      <Badge>Ollama</Badge>
                      <Badge>GradioUI</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Git & GitHub</Badge>
                      <Badge>AWS</Badge>
                      <Badge>CI/CD</Badge>
                      <Badge>Google Cloud</Badge>
                      <Badge>Weights & Biases</Badge>
                      <Badge>Pinecone</Badge>
                      <Badge>ChromaDB</Badge>
                      <Badge>Streamlit</Badge>
                      <Badge>GradioUI</Badge>
                      <Badge>Tensorboard</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Automation & RPA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>UiPath</Badge>
                      <Badge>Power Automate</Badge>
                      <Badge>n8n</Badge>
                      <Badge>Zoho</Badge>
                      <Badge>Airtable</Badge>
                      <Badge>Hubspot</Badge>
                      <Badge>Selenium</Badge>
                      <Badge>App Scripts</Badge>

                    </div>
                  </CardContent>
                </Card>


                 <Card>
                  <CardHeader>
                    <CardTitle>Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>PostgreSQL</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>MySQL</Badge>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>
            <TabsContent value="soft" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Excellent written and verbal communication skills. Experienced in presenting technical concepts to
                      both technical and non-technical audiences. Skilled in documentation and technical writing.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Strong analytical thinking and creative problem-solving abilities. Capable of breaking down
                      complex problems into manageable components and developing effective solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Teamwork</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Collaborative team player with experience working in diverse groups. Comfortable giving and
                      receiving feedback, and adapting to different team dynamics and work styles.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Time Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Excellent at prioritizing tasks, meeting deadlines, and managing multiple projects simultaneously.
                      Experienced with agile methodologies and project management tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Achievements & Awards Section */}
        <section id="achievements" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Achievements & Awards</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">


            <Card>
              <CardHeader>
                <CardTitle>Associate AI Engineer for Data Scientists</CardTitle>
                <CardDescription>Datacamp track, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This career track equips data scientists with essential AI engineering skills, covering model deployment, 
                  MLOps, deep learning (TensorFlow/PyTorch), and building scalable AI solutions of 40 hours.
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/d84c9dc78a87df7be2c875b7ea9f513fbd4b8658" target="_blank" className="flex items-right gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Accomplishment</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Introducing Generative AI with AWS</CardTitle>
                <CardDescription>Udacity, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed a comprehensive track on as part of AWS AI/ML Scholar covering LLMs, Generative AI, and
                  building AI applications with AWS, including SageMaker, PartyRock, and more of 20+ hours.
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.udacity.com/certificate/e/018e3e5c-4148-11f0-930d-9b64663606bf" target="_blank" className="flex items-right gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Accomplishment</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Data Analyst with Power BI</CardTitle>
                <CardDescription>Datacamp track, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed a comprehensive track on DataCamp covering essential data visualization methods and practices with Power BI, along with DAX, dashboards, reports of 50+ hours.
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/86ebddbd98be7c91ac20848a6f8a710ac6da9962" target="_blank" className="flex items-right gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Accomplishment</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            

            
            <Card>
              <CardHeader>
                <CardTitle>Associate Data Scientist</CardTitle>
                <CardDescription>Datacamp track, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed a comprehensive track on DataCamp covering essential data science skills, including Python, R, SQL, and machine learning of 80+ hours.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/a13939fcc9e7b3ce37c30d1455579d1e7f40dfd2" target="_blank" className="flex items-right gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Accomplishment</span>
                    </a>
                  </Button>
                </div>

              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Data Analyst</CardTitle>
                <CardDescription>Datacamp track, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed a comprehensive track on DataCamp covering essential data science skills, including Python, R, data literacy and visualizations of 30+ hours.
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/e21801983883725c8b8e6f9d0cbc00cb1df26ced" target="_blank" className="flex items-right gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Accomplishment</span>
                    </a>
                  </Button>
                </div>

              </CardContent>
            </Card>




          </div>
        </section>


                {/* Exams Section */}
        <section id="exams" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Exams</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/AI-data.png' : '/AI-data.png'}
                  alt="AI Engineer for Data Scientists Exam"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>AI Engineer for Data Scientists Exam</CardTitle>
                <CardDescription>Datacamp Certification Exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Completed the AI Engineer for Data Scientists certification exam covering deep learning, model deployment, and AI engineering concepts.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Model Deployment</Badge>
                    <Badge variant="outline">MLOps</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">HuggingFace</Badge>
                    <Badge variant="outline">Ollama</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/certificate/AEDS0014706321482" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Certificate</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/AI%20Engineer%20for%20Data%20Scientists%20Associate%20Exam" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/DS - Twitter.png' : '/DS - Twitter.png'}
                  alt="Data Scientist Exam"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Data Scientist Exam</CardTitle>
                <CardDescription>Datacamp Certification Exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Completed the Data Scientist certification exam covering statistical analysis, machine learning, and data visualization.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Statistics</Badge>
                    <Badge variant="outline">Data Visualization</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">Scikit-Learn</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">NumPy</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">Scipy</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/certificate/DS0027319922812" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Certificate</span>
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/Data%20Scientist%20Professional%20Exam" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={process.env.NODE_ENV === 'production' ? '/portfolio/DA Associate - Twitter.png' : '/DA Associate - Twitter.png'}
                  alt="Data Analyst Associate Exam"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Data Analyst Associate Exam</CardTitle>
                <CardDescription>Datacamp Certification Exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Completed the Data Analyst Associate certification exam covering data manipulation, visualization, and exploratory analysis.
                </p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Cleaning</Badge>
                    <Badge variant="outline">Exploratory Analysis</Badge>
                    <Badge variant="outline">Data Visualization</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Seaborn</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">Python</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.datacamp.com/certificate/DAA0016430756652" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Certificate</span>
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/Data%20Analyst%20Associate%20Exam" target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="hammad95632@gmail.com" className="hover:underline">
                    hammad95632@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Sydney, Australia</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-3">Connect with me</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/hammad6271" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/Hammad-Anjum" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.datacamp.com/portfolio/Hammad-Anjum" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <SiDatacamp className="h-5 w-5" />
                      </a>
                    </Button>

                    <Button variant="outline" size="icon" asChild>
                    <a href="https://www.datacamp.com/portfolio/hammad9" target="_blank" rel="noopener noreferrer" aria-label="DataCamp">
                    <SiDatacamp className="h-5 w-5" />
                    </a>
                    </Button>

                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://drive.google.com/file/d/1lT2BK-eIPg9xALYxe8sE1lS2EjzI0qM0/view?usp=sharing" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#hero" className="scroll-smooth" aria-label="Back to top">
                <ChevronUp className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
