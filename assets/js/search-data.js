// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected publications in machine learning, computer vision, and biomedical AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV of Amirhossein Askari Farsangi.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-as-an-ai-engineer-at-klynt-ag-working-on-llm-systems-rag-knowledge-graphs-and-ai-backends-for-m-amp-amp-a-advisory-workflows",
          title: 'Started as an AI Engineer at Klynt AG, working on LLM systems, RAG,...',
          description: "",
          section: "News",},{id: "news-our-paper-certified-human-trajectory-prediction-appeared-at-cvpr-2025",
          title: 'Our paper Certified Human Trajectory Prediction appeared at CVPR 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-stylized-structural-patterns-for-improved-neural-network-pre-training-is-available-on-arxiv",
          title: 'Our paper Stylized Structural Patterns for Improved Neural Network Pre-training is available on...',
          description: "",
          section: "News",},{id: "projects-all-diagnosis-pipeline",
          title: 'ALL Diagnosis Pipeline',
          description: "Multiple-instance learning pipeline for acute lymphoblastic leukemia diagnosis from blood smear images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/all-diagnosis-pipeline/";
            },},{id: "projects-certified-human-trajectory-prediction",
          title: 'Certified Human Trajectory Prediction',
          description: "CVPR 2025 work on certified robustness for trajectory prediction under noisy and adversarial inputs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/certified-human-trajectory-prediction/";
            },},{id: "projects-llm-document-understanding-systems",
          title: 'LLM Document Understanding Systems',
          description: "NDA-safe summary of RAG, evidence-backed answers, and structured document workflows from startup work.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-document-understanding/";
            },},{id: "projects-qgraph",
          title: 'QGraph',
          description: "Production-oriented AI text-analysis platform with Django, Next.js, segmentation, search, and planned RAG/KG reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qgraph/";
            },},{id: "projects-stylized-structural-patterns",
          title: 'Stylized Structural Patterns',
          description: "Synthetic and reverse-stylized pretraining patterns for neural networks and diffusion workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stylized-structural-patterns/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61.%68.%61%73%6B%61%72%69%66%61%72%73%61%6E%67%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/askari1375", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amirhossein-askari", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fQwmxy4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
