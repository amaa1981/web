import { IconNameOutline, IconNameSolid } from "@/components/IconLibrary";
import Challenges from "@/components/services/sections/Challenges";

// src/lib/servicesData.tsx
export interface HeroData {
  variant: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: {
    src: string;
    alt: string;
  };
  images?: { src: string; alt: string }[];
  slots?: number[][];
}

export interface TechTool {
  name: string;
  logo: string;
}

export interface TechCategory {
  category: string;
  logo: string;
  tools: TechTool[];
}

export interface TechStackSection {
  heading: string;
  subheading: string;
  categories: TechCategory[];
}


export interface UseCaseItem  {
  title: string;
  description: string;
  image?: string; 
  accent?: string;
  icon?: string;
}


export interface UseCasesData  {
  variant: 1 | 2 | 3 | 4;
  heading: string;
  subheading: string;
  useCase: UseCaseItem[];
}



export interface ChallengeItem {
  title: string;
  description: string;
  icon: IconNameOutline;
}

export interface ServiceContent {
  slug: string;
  name: string;
  shortDescription: string;
  hero: HeroData;
  overview: {
    heading: string;
    subheading: string;
    description: string;
    bullets: { title: string; description: string; icon: IconNameSolid }[];
    image: string;
  };
  challenges?: {
    heading: string;
    subheading: string;
    challenges: ChallengeItem[];
  };
  whyItMatters?: {
    heading: string;
    description: string;
    stats: { value: string; label: string; detail: string; height: string }[];
    features: { name: string; description: string }[];
  };
  useCases?: UseCasesData;
  techStack?: TechStackSection;
  integrations?: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  cta: {
    heading: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const services: ServiceContent[] = [
  {
    slug: "it-optimization-automation",
    name: "IT Optimization & Automation",
    shortDescription:
      "Streamline IT operations and cut costs with our expert automation services for businesses in Saudi Arabia.",
    hero: {
      variant: 3,
      title: "IT Optimization & Automation Services",
      subtitle:
        "Transform your business operations from manual and costly to automated, efficient, and scalable. We leverage cutting-edge open-source tools and AI to give you a competitive edge.",
      ctaText: "Get Started",
      ctaLink: "",
      image: {
        src: "/images/it-optimization-automation-hero.png",
        alt: "A dashboard showcasing the results of IT automation and optimization for a Saudi enterprise, managed by OpenCode Solutions.",
      },
    },
    overview: {
      heading: "Unlock Peak Efficiency: Optimize and Automate Your IT",
      subheading: "Why It Matters",
      description:
        "In today's hyper-competitive market, manual IT processes are a bottleneck to growth. Our IT Optimization & Automation services are designed to eliminate these inefficiencies. We analyze your entire technology stack, from on-premise data centers to hybrid infrastructure, to implement intelligent automation solutions that reduce human error, accelerate innovation, and empower your expert teams to focus on high-value projects.",
      bullets: [
        {
          title: "Infrastructure as Code (IaC)",
          description:
            "We use Ansible, Terraform, and Kubernetes to automate complex infrastructure configurations, ensuring 100% consistency and eliminating configuration drift.",
          icon: "CodeBracketSquare",
        },
        {
          title: "Proactive Performance Monitoring",
          description:
            "Leverage AI-driven predictive analytics (AIOps) to monitor your systems, forecast capacity needs, and prevent downtime before it impacts your customers.",
          icon: "ChartBar",
        },

        {
          title: "Hybrid Infrastructure Automation",
          description:
            "Achieve consistent, reliable operations and security policies across your entire hybrid infrastructure, from on-premise data centers to container platforms.",
          icon: "CloudArrowUp",
        },
      ],
      image: "",
    },
    challenges: {
      heading: "Key Challenges in IT Optimization",
      subheading: "",
      challenges: [
        {
          title: "Managing Ever-Growing Hybrid Complexity",
          description:
            "As businesses grow and adopt hybrid models, managing disparate systems, security policies, and data flows becomes a significant challenge without a unified automation strategy.",
          icon: "ArrowsPointingOut",
        },
        {
          title: "High Operational Costs & Inefficiency",
          description:
            "Manual provisioning, patching, and troubleshooting consume valuable engineering hours and increase the risk of downtime, directly impacting your bottom line.",
          icon: "CurrencyDollar",
        },
        {
          title: "Slow Service Delivery & Innovation",
          description:
            "Lengthy deployment cycles and slow provisioning for development teams can cause you to lose ground to more agile competitors.",
          icon: "RocketLaunch",
        },
        {
          title: "Security Vulnerabilities & Compliance Drift",
          description:
            "Manual configurations are prone to human error, creating inconsistent security postures across your servers and infrastructure. This opens doors for cyber threats and makes it nearly impossible to consistently enforce and prove compliance with regulatory standards.",
          icon: "ShieldExclamation",
        },
      ],
    },
    whyItMatters: {
      heading: "Why Automation is a Competitive Necessity",
      description:
        "In a rapidly evolving digital landscape, embracing automation is no longer optional, it's essential for survival and growth. Enterprises that adopt intelligent IT automation can significantly reduce operational costs, mitigate security risks, and accelerate their go-to-market strategies. This frees up critical resources to invest in innovation and customer-centric initiatives.",
      stats: [
        {
          value: "Up to 40%",
          label: "Operational Cost Reduction",
          detail:
            "achieved by enterprises that replace manual IT tasks with automated workflows.",
          height: "h-56",
        },
        {
          value: "3x-5x",
          label: "Faster Deployment Cycles",
          detail:
            "when leveraging Infrastructure as Code (IaC) and CI/CD automation pipelines.",
          height: "h-85",
        },
        {
          value: "75%",
          label: "Reduction in Downtime",
          detail:
            "by using predictive monitoring and automated remediation to resolve issues proactively.",
          height: "h-68",
        },
      ],
      features: [
        {
          name: "Predictive Maintenance & AIOps",
          description:
            "We implement AI for IT Operations (AIOps) to proactively identify potential failures in your infrastructure, preventing costly downtime and protecting your revenue.",
        },
        {
          name: "Elastic Scalability for Peak Demand",
          description:
            "Automatically scale your on-premise and private infrastructure resources up or down to handle traffic spikes during peak business periods, ensuring a flawless customer experience.",
        },
        {
          name: "Automated Security & Compliance",
          description:
            "Enforce security policies and compliance standards (like ISO 27001 and CIS Benchmarks) across your entire infrastructure automatically, reducing risk and ensuring audit-readiness.",
        },
      ],
    },
    useCases: {
      variant: 1,
      heading: "Use Cases for IT Optimization",
      subheading: "Real-World Applications",
      useCase: [
        {
          title: "Data Center & VM Resource Optimization",
          description:
            "Eliminate VM sprawl and slash data center costs. Automate idle VM reclamation, workload consolidation, and resource right-sizing to reduce CapEx and operational expenses.",
          image: "/images/undraw_server-cluster_7ugi_g.svg",
        },
        {
          title: "Accelerated DevOps & CI/CD Pipelines",
          description:
            "Automate CI/CD pipelines with GitLab, Ansible, and Kubernetes/OpenShift. Accelerate software delivery, reduce errors, and deploy applications with speed and reliability.",
          image: "/images/dev_it_opt.svg",
        },
        {
          title: "Zero-Touch Infrastructure Provisioning",
          description:
            "Automate end-to-end provisioning for physical servers, VMs, and network devices. Cut infrastructure deployment time from weeks to minutes for enterprise and telco.",
          image: "/images/undraw_algorithm-execution_rksm.svg",
        },
        {
          title: "Automated Compliance & Security Enforcement",
          description:
            "Implement policy-as-code to automate security and compliance. Continuously enforce baselines, prevent configuration drift, and simplify audits for standards.",
          image: "/images/undraw_secure-server_lz9x.svg",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      subheading:
        "Our proven toolchain spans infrastructure automation, container orchestration, CI/CD, and monitoring to power enterprise IT transformation",
      categories: [
        {
          category: "Configuration Management & IaC",
          logo: "/logos/categories/cube.svg",
          tools: [
            {
              name: "Red Hat Ansible Automation Platform",
              logo: "/logos/tools/ansible.svg",
            },
            { name: "HashiCorp Terraform", logo: "/logos/tools/terraform.svg" },
            { name: "HashiCorp Vault", logo: "/logos/tools/vault.svg" },
          ],
        },
        {
          category: "Container Orchestration & Runtimes",
          logo: "/logos/categories/ship.svg",
          tools: [
            { name: "Kubernetes (K8s)", logo: "/logos/tools/kubernetes.svg" },
            { name: "Red Hat OpenShift", logo: "/logos/tools/openshift.svg" },
            { name: "Docker", logo: "/logos/tools/docker.svg" },
            { name: "Podman", logo: "/logos/tools/podman.svg" },
          ],
        },
        {
          category: "CI/CD & Version Control",
          logo: "/logos/categories/git-branch.svg",
          tools: [
            { name: "GitLab CI/CD", logo: "/logos/tools/gitlab.svg" },
            { name: "GitHub Actions", logo: "/logos/tools/github.svg" },
            { name: "Jenkins", logo: "/logos/tools/jenkins.svg" },
            { name: "Git", logo: "/logos/tools/git.svg" },
          ],
        },
        {
          category: "Virtualization & On-Premise Cloud",
          logo: "/logos/categories/stack-middle.svg",
          tools: [
            { name: "VMware vSphere / ESXi", logo: "/logos/tools/vmware.svg" },
            {
              name: "Red Hat Virtualization (RHV)",
              logo: "/logos/tools/rhv.svg",
            },
            { name: "OpenStack", logo: "/logos/tools/openstack.svg" },
          ],
        },
        {
          category: "Operating Systems",
          logo: "/logos/categories/device-desktop.svg",
          tools: [
            {
              name: "Red Hat Enterprise Linux (RHEL)",
              logo: "/logos/tools/rhel.svg",
            },
            { name: "Ubuntu Server", logo: "/logos/tools/ubuntu.svg" },
          ],
        },
      ],
    },
    faqs: [
      {
        question:
          "What is the difference between Automation and Orchestration?",
        answer:
          "Automation focuses on making a single task repeatable without human intervention (e.g., deploying a server). Orchestration is the process of coordinating multiple automated tasks into a cohesive, end-to-end workflow (e.g., deploying a server, configuring it, installing an application, and adding it to a load balancer). We specialize in both.",
      },
      {
        question:
          "How long does it take to see ROI from an Ansible automation project?",
        answer:
          "The return on investment is often rapid. For well-defined projects like network configuration or server patching, clients typically see significant time savings and cost reductions within the first 3-6 months. The long-term ROI from increased agility and reduced downtime is even greater.",
      },
      {
        question: "Can you automate our existing legacy infrastructure?",
        answer:
          "Absolutely. Our expertise lies in hybrid environments. We excel at creating unified automation strategies that manage both your on-premise legacy systems (like VMware vSphere) and your modern cloud-native applications on Kubernetes, providing a single pane of glass for your entire IT operation.",
      },
      {
        question: "How does automation affect our existing IT team's roles?",
        answer:
          "Our philosophy is to empower, not replace, your team. Automation eliminates the tedious, repetitive, and error-prone tasks that often lead to burnout. This frees your skilled engineers to focus on high-value, strategic initiatives like system architecture, performance tuning, and innovation. We help transition your team from manual system administration to becoming automation experts, boosting morale and developing valuable new skills.",
      },
    ],
    cta: {
      heading: "Ready to Transform Your IT Operations?",
      subtitle:
        "Stop letting manual processes and infrastructure complexity slow you down. Our experts are ready to discuss your specific challenges and build a tailored automation strategy that delivers measurable results. Let's start the conversation.",
      ctaText: "Schedule a Consultation",
      ctaLink: "",
    },
    meta: {
      title:
        "Enterprise IT Automation & Optimization Services | OpenCode Solutions",
      description:
        "Boost efficiency and cut operational costs with expert enterprise IT automation & optimization services. We leverage Ansible, Kubernetes & Terraform. Contact us for a consultation.",
    },
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortDescription:
      "Develop and deploy custom AI and machine learning solutions, from LLMs to computer vision, with end-to-end MLOps to drive business intelligence and operational efficiency.",
    hero: {
      variant: 3,
      title: "Artificial Intelligence Solutions",
      subtitle:
        "We transform your unique data into a competitive advantage by designing, training, and deploying high-performance AI models, available as a managed service or a turnkey hardware solution.",
      ctaText: "Build Your AI Solution",
      ctaLink: "",
      image: {
        src: "/images/undraw_artificial-intelligence_43qa.svg",
        alt: "An abstract visualization of a neural network processing data, representing OpenCode's AI and MLOps services.",
      },
    },
    overview: {
      heading: "From Raw Data to Real-World Impact",
      subheading: "Our Full-Stack AI Development Process",
      description:
        "Artificial Intelligence is more than just an algorithm; it's a transformative business capability. Our end-to-end service covers the entire AI lifecycle. We start by understanding your business challenges, then architect custom models, be it for conversational AI, predictive analytics, or computer vision. Using a robust MLOps framework, we ensure your models are not just built, but are reliably deployed, monitored, and continuously improved in production.",
      bullets: [
        {
          title: "Generative AI & LLMs",
          description:
            "Build intelligent chatbots, RAG systems, and custom assistants powered by fine-tuned Large Language Models to automate customer support and internal workflows.",
          icon: "ChatBubbleLeftRight",
        },
        {
          title: "Predictive Analytics & Data Science",
          description:
            "Unlock insights from your business data. We develop predictive machine learning models for demand forecasting, customer churn prediction, and financial anomaly detection.",
          icon: "ChartBar",
        },
        {
          title: "Computer Vision Systems",
          description:
            "Automate visual tasks with AI. Our custom computer vision solutions are perfect for manufacturing quality control, worksite safety monitoring, and retail foot traffic analytics.",
          icon: "Camera",
        },
      ],
      image: "/images/overview-ai-lifecycle.svg",
    },
    challenges: {
      heading: "Overcoming Common AI Implementation Challenges",
      subheading: "Why AI Projects Fail to Deliver ROI",
      challenges: [
        {
          title: "The 'Last Mile' Problem of MLOps",
          description:
            "Many organizations build prototype models but struggle with production deployment and integration. This MLOps gap is where most AI initiatives fail to deliver business value.",
          icon: "PuzzlePiece",
        },
        {
          title: "Data Preparation & Engineering",
          description:
            "Effective AI requires clean, well-structured data. Our data engineering services help you overcome data silos, inconsistent formats, and poor labeling to build a solid foundation for machine learning.",
          icon: "Funnel",
        },
        {
          title: "High Cost & Scarcity of AI Expertise",
          description:
            "Assembling and retaining a team of data scientists, ML engineers, and MLOps experts is expensive. We provide a full-stack AI team as a service, giving you access to top-tier talent on demand.",
          icon: "UserGroup",
        },
        {
          title: "Integrating AI with Legacy Systems",
          description:
            "Seamlessly connecting AI insights into your existing ERP, CRM, or operational software is critical for user adoption. We specialize in building robust integration layers and APIs.",
          icon: "ArrowsRightLeft",
        },
      ],
    },
    whyItMatters: {
      heading: "Why Custom AI Development Delivers True ROI",
      description:
        "Off-the-shelf AI tools provide generic solutions. To gain a real competitive advantage, you need AI models trained on *your* proprietary data and tailored to *your* business processes. Custom AI unlocks hyper-personalized experiences, uncovers unique operational efficiencies, and creates a defensible moat your competitors cannot replicate.",
      stats: [
        {
          value: "35%",
          label: "Increase in Operational Efficiency",
          detail:
            "reported by businesses that implement custom AI solutions in their core processes.",
          height: "h-56",
        },
        {
          value: "80%",
          label: "Of Business Data is Unstructured",
          detail:
            "representing a massive, untapped source of value that only custom NLP and computer vision can unlock.",
          height: "h-85",
        },
        {
          value: "4x",
          label: "More Likely to Outperform Peers",
          detail:
            "for companies that have embedded a full-stack AI strategy across the enterprise.",
          height: "h-85",
        },
      ],
      features: [
        {
          name: "Bespoke Model Development",
          description:
            "We don't just wrap generic APIs. We design and train bespoke neural networks and machine learning models tailored precisely to your specific business problem and dataset.",
        },
        {
          name: "Managed MLOps Services",
          description:
            "Our service goes beyond model creation. We manage the full lifecycle including deployment, monitoring, versioning, and retraining to ensure your AI solution delivers continuous, peak performance.",
        },
        {
          // SEO: Added "Edge AI" keyword.
          name: "Turnkey Edge AI Hardware",
          description:
            "For edge computing or high-performance use cases, we deliver an integrated package: your custom AI model pre-loaded and optimized on powerful inference hardware for real-time processing.",
        },
      ],
    },
    useCases: {
      variant: 2,
      heading: "See AI Development Services in Action",
      subheading: "Real-World Applications & Use Cases",
      useCase: [
        {
          title: "AI-Powered Customer Support Automation",
          description:
            "Deploy AI chatbots and virtual assistants that understand context, access internal knowledge bases (RAG), and resolve complex queries 24/7, reducing support overhead and improving customer satisfaction.",
          image: "/images/support_of_ai_usecase.png",
          accent: "Support",
        },
        {
          title: "Intelligent Video Analytics (IVA) for Security & Operations",
          description:
            "Transform existing CCTV cameras into smart sensors. Our computer vision models analyze live video to monitor retail foot traffic, detect safety compliance breaches on construction sites, or identify unauthorized access in real-time.",
          image:
            "/images/deep-learning-ai-inference-iva-smart-city-297-tm@2x.jpg",
          accent: "Security",
        },
        {
          title: "AI-Powered Knowledge Discovery",
          description:
            "Unlock your internal data. Our custom RAG systems create an intelligent knowledge base from Confluence, SharePoint, and PDFs for instant, source-cited answers that boost productivity.",
          image: "/images/knowledge_of_ai_usecase.png",
          accent: "Knowledge",
        },
        {
          title: "Predictive Forecasting",
          description:
            "Leverage ML for accurate demand forecasting and inventory optimization. Analyze historical sales, market, and operational data to make proactive, data-driven decisions.",
          image: "/images/sales_of_ai_usecase.png",
          accent: "Forecast",
        },
        {
          title: "Edge AI for Smart Devices & IoT",
          description:
            "Deploy turnkey hardware for low-latency Edge AI. Get real-time inference on smart devices, cameras, and industrial IoT sensors, even in low-connectivity environments.",
          image: "/images/edge_of_ai_usecase.png",
          accent: "Edge",
        },
      ],
    },
    techStack: {
      heading: "Our AI & MLOps Technology Stack",
      subheading:
        "We build robust, production-grade AI solutions using a curated stack of best-in-class open-source and enterprise technologies. Our expertise spans the entire lifecycle, from data processing and model training to scalable deployment and MLOps.",
      categories: [
        {
          category: "AI & ML Frameworks",
          logo: "/logos/categories/brain.svg",
          tools: [
            { name: "Python", logo: "/logos/tools/python.svg" },
            { name: "TensorFlow", logo: "/logos/tools/tensorflow.svg" },
            { name: "PyTorch", logo: "/logos/tools/pytorch.svg" },
            {
              name: "PyTorch Lightning",
              logo: "/logos/tools/pytorch-lightning.svg",
            },
            { name: "Scikit-learn", logo: "/logos/tools/scikit-learn.svg" },
            {
              name: "Hugging Face Transformers",
              logo: "/logos/tools/hugging-face.svg",
            },
            { name: "Keras", logo: "/logos/tools/keras.svg" },
            { name: "XGBoost", logo: "/logos/tools/xgboost.svg" },
            { name: "ONNX", logo: "/logos/tools/onnx.svg" },
            { name: "JAX", logo: "/logos/tools/jax.svg" },
            { name: "timm", logo: "/logos/tools/timm.svg" },
          ],
        },
        {
          category: "MLOps & Data Platforms",
          logo: "/logos/categories/adjustments-cog.svg",
          tools: [
            {
              name: "Red Hat OpenShift AI",
              logo: "/logos/tools/openshift-ai.svg",
            },
            { name: "Kubeflow", logo: "/logos/tools/kubeflow.svg" },
            { name: "Apache Spark", logo: "/logos/tools/spark.svg" },
          ],
        },
        {
          category: "Computer Vision & NLP",
          logo: "/logos/categories/camera.svg",
          tools: [
            { name: "OpenCV", logo: "/logos/tools/opencv.svg" },
            { name: "spaCy", logo: "/logos/tools/spacy.svg" },
            { name: "NLTK", logo: "/logos/tools/nltk.svg" },
          ],
        },
        {
          category: "Hardware & GPU Acceleration",
          logo: "/logos/categories/cpu.svg",
          tools: [
            { name: "NVIDIA", logo: "/logos/tools/nvidia.svg" },
            { name: "AMD", logo: "/logos/tools/amd.svg" },
            { name: "Intel", logo: "/logos/tools/intel.svg" },
            { name: "AWS", logo: "/logos/tools/aws.svg" },
            { name: "Raspberry Pi", logo: "/logos/tools/raspberry.svg" },
          ],
        },
      ],
    },
    faqs: [
      {
        question:
          "Why should we build a custom AI solution instead of adopting off-the-shelf tools?",
        answer:
          "Off-the-shelf tools provide standardized functionality but can’t capture your unique business processes or proprietary data. A custom model creates a defensible competitive advantage by tailoring AI to your specific workflows, terminology, and challenges—resulting in higher accuracy, better adoption, and long-term ROI.",
      },
      {
        question:
          "What does a typical AI project engagement look like with your team?",
        answer:
          "Our projects follow a proven four-phase approach:\n 1) **Discovery & Data Audit** – Clarify business objectives and assess your data.\n 2) **Prototyping & Model Development** – Build iterative proof-of-concepts aligned to your KPIs.\n 3) **Deployment with MLOps** – Integrate models into production systems with full lifecycle support.\n 4) **Continuous Improvement** – Monitor, retrain, and scale AI performance over time.",
      },
      {
        question:
          "What is a Retrieval-Augmented Generation (RAG) system, and how does it improve AI accuracy?",
        answer:
          "RAG combines large language models with your private knowledge base. Instead of relying only on general pre-training, the model retrieves relevant facts from your own datasets (PDFs, Confluence, SharePoint, etc.) before generating an answer. This reduces AI ‘hallucinations,’ ensures accuracy, and provides source-cited responses.",
      },
      {
        question: "How do you ensure ethical AI usage and compliance?",
        answer:
          "We embed ethical AI practices into our workflows, including bias detection in datasets, transparent model reporting, and compliance with GDPR, HIPAA, or industry-specific regulations. Our models are designed not only for accuracy, but also for fairness, security, and trustworthiness.",
      },
      {
        question: "When is edge AI or turnkey hardware the right solution?",
        answer:
          "Edge AI is ideal when you need low-latency, real-time processing on-site—such as live video analytics, industrial robotics, or IoT devices in unreliable network conditions. Our turnkey hardware comes pre-configured with your AI models, ensuring maximum performance and data privacy.",
      },
      {
        question:
          "How do you guarantee data privacy and security in AI projects?",
        answer:
          "We provide flexible deployment options from your private cloud to fully on-premise setups, ensuring sensitive data never leaves your secure environment. When using turnkey edge hardware, all inference runs locally, so no raw data is shared. Security, compliance, and governance are integral to every stage of your AI lifecycle.",
      },
    ],
    cta: {
      heading: "Ready to Unlock Your Data's Potential?",
      subtitle:
        "Move beyond the hype and start building AI solutions that deliver real business value. Our team is ready to help you navigate every step, from initial strategy to production deployment. Let's build the future, together.",
      ctaText: "Discuss Your AI Project",
      ctaLink: "#contact",
    },
    meta: {
      title: "Custom AI & MLOps Solutions | OpenCode Solutions",
      description:
        "We design, train, and deploy custom AI models for computer vision, NLP, and predictive analytics. Full MLOps lifecycle management and turnkey hardware solutions.",
    },
  },
  {
    slug: "hybrid-cloud",
    name: "Hybrid Cloud Enablement",
    shortDescription:
      "Achieve consistent operations and application portability across your on-premise and cloud environments.",
    hero: {
      variant: 3,
      title: "Seamless Hybrid Cloud Operations & Management",
      subtitle:
        "Your infrastructure is hybrid. Your operations shouldn't be. We build the platform layer that unifies your on-premise data centers and public cloud environments, enabling you to deploy any application, anywhere, with consistent security and performance.",
      ctaText: "Unify Your Operations",
      ctaLink: "#contact",
      image: {
        src: "/images/undraw_cloud-hosting_tfeh.svg",
        alt: "An abstract diagram showing seamless application portability between an on-premise data center and a public cloud, enabled by OpenCode Solutions.",
      },
    },
    overview: {
      heading: "Unify Your Infrastructure, Unleash Your Applications",
      subheading: "The Platform Engineering Approach to Hybrid Cloud",
      description:
        "A hybrid cloud strategy offers immense flexibility, but it often creates operational silos, inconsistent security, and developer friction. Our Hybrid Cloud Enablement service solves this. We don't build the underlying clouds; we build the essential platform *on top* of them. Using Kubernetes and OpenShift as a unified control plane, we provide a consistent, single pane of glass for deploying, managing, and securing your applications, regardless of where they run.",
      bullets: [
        {
          title: "True Application Portability",
          description:
            "Build your applications once and deploy them without modification to your private data center or any public cloud, eliminating vendor lock-in.",
          icon: "ArrowsRightLeft",
        },
        {
          title: "Unified Operations & Management",
          description:
            "Manage your entire application fleet from a single control plane. Gain consistent logging, monitoring, and deployment workflows across all environments.",
          icon: "Cog",
        },
        {
          title: "Consistent Security Posture",
          description:
            "Define and enforce your security and compliance policies once, and apply them automatically across your entire hybrid landscape, from on-premise to the edge.",
          icon: "ShieldExclamation",
        },
      ],
      image: "/images/overview-hybrid-platform.svg",
    },
    challenges: {
      heading: "The Friction of a Disjointed Hybrid Strategy",
      subheading: "Common Operational Hurdles",
      challenges: [
        {
          title: "Operational Silos & Inefficiency",
          description:
            "Separate teams using different tools and processes for on-premise and cloud environments leads to duplicated effort, communication breakdowns, and slower operations.",
          icon: "UserGroup",
        },
        {
          title: "Vendor Lock-In & Spiraling Costs",
          description:
            "When applications are tightly coupled to a specific cloud provider's services, it becomes nearly impossible to move them, leaving you vulnerable to price hikes and limited in your architectural choices.",
          icon: "CurrencyDollar",
        },
        {
          title: "Inconsistent Security & Compliance",
          description:
            "Applying and auditing security policies is drastically different between an on-premise VMware environment and a public cloud, creating security gaps and a compliance nightmare.",
          icon: "ShieldExclamation",
        },
        {
          title: "Developer Friction & Slow Innovation",
          description:
            "Forcing developers to learn and navigate multiple deployment targets and APIs for each environment creates complexity, slows down development cycles, and stifles innovation.",
          icon: "Clock",
        },
      ],
    },
    whyItMatters: {
      heading: "Strategic Flexibility is the Ultimate Advantage",
      description:
        "A true hybrid cloud capability, enabled by a unified application platform, is the ultimate strategic asset. It allows your business to make infrastructure decisions based on what's best for the application, not based on technical limitations. You can optimize for cost, performance, data sovereignty, or compliance on a per-application basis, giving you the agility to adapt to any future market or regulatory changes.",
      stats: [
        {
          value: "60%",
          label: "Increase in Operational Efficiency",
          detail:
            "by unifying management tools and processes across hybrid environments.",
          height: "h-56",
        },
        {
          value: "5x",
          label: "Faster Application Deployment",
          detail:
            "when developers have a single, consistent platform to target, regardless of the underlying infrastructure.",
          height: "h-85",
        },
        {
          value: "95%",
          label: "Of Enterprises View Hybrid Cloud",
          detail:
            "as the ideal IT model, but struggle with the operational complexity we are built to solve.",
          height: "h-68",
        },
      ],
      features: [
        {
          name: "Platform-First, Not Infrastructure-First",
          description:
            "Our focus is on the application and developer experience. We abstract the underlying infrastructure, providing a consistent, powerful platform for your teams.",
        },
        {
          name: "Built on an Open-Source Foundation",
          description:
            "We leverage the power of Kubernetes, OpenShift, and the Cloud Native ecosystem to ensure your platform is open, flexible, and free from vendor lock-in.",
        },
        {
          name: "Policy as Code for Governance",
          description:
            "We use automation to codify your security, compliance, and operational policies, ensuring they are applied consistently and automatically everywhere.",
        },
      ],
    },
    useCases: {
      variant: 4,
      heading: "Hybrid Cloud Strategies in Action",
      subheading: "Real-World Applications",
      useCase: [
        {
          title: "Workload Optimization & Cost Management",
          description:
            "Run stable, predictable workloads on your cost-effective on-premise infrastructure while leveraging a public cloud for burstable, high-demand applications.",
          icon: "CurrencyDollar",
        },
        {
          title: "High-Availability & Disaster Recovery",
          description:
            "Use a public cloud as a cost-effective, on-demand disaster recovery site for your critical on-premise applications, ensuring business continuity without doubling your hardware costs.",
          icon: "ArrowPath",
        },
        {
          title: "Data Sovereignty & Regulatory Compliance",
          description:
            "Keep sensitive user data within your on-premise data center to meet strict data residency requirements, while using global cloud regions for stateless application components.",
          icon: "ShieldExclamation",
        },
        {
          title: "Phased & Low-Risk Cloud Migration",
          description:
            "Migrate complex applications to the cloud gradually by running components across both environments simultaneously, reducing the risk of a 'big bang' migration failure.",
          icon: "CloudArrowUp",
        },
      ],
    },
    techStack: {
      heading: "Our Hybrid Cloud Enablement Stack",
      subheading:
        "We master the technologies that bridge the gap between your disparate infrastructure environments.",
      categories: [
        {
          category: "Unified Control Plane",
          logo: "/logos/categories/ship.svg",
          tools: [
            { name: "Red Hat OpenShift", logo: "/logos/tools/openshift.svg" },
            { name: "Kubernetes (K8s)", logo: "/logos/tools/kubernetes.svg" },
          ],
        },
        {
          category: "Infrastructure as Code (IaC)",
          logo: "/logos/categories/cube.svg",
          tools: [
            { name: "Terraform", logo: "/logos/tools/terraform.svg" },
            { name: "Ansible", logo: "/logos/tools/ansible.svg" },
          ],
        },

        {
          category: "GitOps for Consistent Deployment",
          logo: "/logos/categories/git-branch.svg",
          tools: [{ name: "Argo CD", logo: "/logos/tools/argo-cd.svg" }],
        },
      ],
    },
    faqs: [
      {
        question:
          "What is 'Hybrid Cloud Enablement' if you don't build the actual clouds?",
        answer:
          "Our role is that of a platform engineer. We assume you already have your infrastructure (e.g., a VMware data center and a cloud account). We build and manage the crucial layer *on top* of it, a unified platform like OpenShift, that makes both environments operate as a single, cohesive system from an application and developer perspective.",
      },
      {
        question:
          "How do you ensure security is consistent across different environments?",
        answer:
          "We use a 'Policy as Code' approach. By defining security rules, network policies, and access controls in code within the platform layer (e.g., Kubernetes NetworkPolicies, OPA Gatekeeper), we can enforce those rules identically, no matter if the application is running on your on-premise server or in a public cloud.",
      },
      {
        question:
          "Does this mean our developers have to learn the specifics of each cloud?",
        answer:
          "No, and that is the primary benefit. Our platform abstracts away the underlying infrastructure. Your developers only need to learn how to deploy to one target: the Kubernetes/OpenShift platform. The platform then handles the specifics of running it in the correct environment, drastically simplifying their workflow.",
      },
      {
        question: "How does this approach help control hybrid cloud costs?",
        answer:
          "It helps in two main ways. First, by enabling true application portability, you can move workloads to the most cost-effective venue without expensive re-architecting. Second, it provides a centralized point for monitoring and governance, allowing you to identify and manage resource consumption across all your environments more effectively.",
      },
    ],
    cta: {
      heading: "Tame Your Hybrid Cloud Complexity.",
      subtitle:
        "Stop struggling with operational silos and inconsistent environments. Our expert platform engineers can build the unified control plane you need to unlock true hybrid agility, security, and performance.",
      ctaText: "Unify Your Hybrid Operations",
      ctaLink: "#contact",
    },
    meta: {
      title:
        "Hybrid Cloud Management & Application Portability | OpenCode Solutions",
      description:
        "Achieve seamless operations across on-premise and cloud with our Hybrid Cloud Enablement services. We specialize in Kubernetes, OpenShift, and platform engineering.",
    },
  },
  {
    slug: "kubernetes-containerization",
    name: "Kubernetes & Containerization Services",
    shortDescription:
      "Deploy, manage, and scale containerized applications with our expert Kubernetes and OpenShift services.",
    hero: {
      variant: 3,
      title: "Kubernetes & Containerization Services",
      subtitle:
        "Go from legacy monoliths to scalable, resilient microservices. We handle the complexity of container orchestration so you can focus on rapid application delivery and innovation.",
      ctaText: "Modernize Your Applications",
      ctaLink: "#contact",
      image: {
        src: "/images/undraw_container-ship_t6yx.svg",
        alt: "An abstract diagram of a complex Kubernetes cluster architecture, managed by OpenCode Solutions.",
      },
    },
    overview: {
      heading: "Build Your Modern Application Platform",
      subheading: "The Power of Container Orchestration",
      description:
        "Containerization packages your applications and all their dependencies into a single, portable unit. Kubernetes and OpenShift orchestrate these containers at scale, automating deployment, scaling, and management. While incredibly powerful, production-grade Kubernetes is notoriously complex. Our service provides the deep expertise needed to design, build, and manage a secure, reliable, and cost-effective container platform tailored to your enterprise needs.",
      bullets: [
        {
          title: "Platform Design & Deployment",
          description:
            "We architect and deploy production-ready Kubernetes or OpenShift clusters, configured for high availability, security, and performance from day one.",
          icon: "RocketLaunch",
        },
        {
          title: "Application Modernization & Migration",
          description:
            "We guide you through the process of containerizing your legacy applications and migrating them to your new Kubernetes platform, unlocking scalability and agility.",
          icon: "ArrowPath",
        },
        {
          title: "Managed Day 2 Operations",
          description:
            "Our service extends beyond setup. We manage the crucial Day 2 operations: monitoring, logging, security patching, updates, and disaster recovery.",
          icon: "WrenchScrewdriver",
        },
      ],
      image: "/images/overview-kubernetes-platform.svg",
    },
    challenges: {
      heading: "The Complexity of Production-Grade Kubernetes",
      subheading: "Common Adoption Hurdles",
      challenges: [
        {
          title: "Steep Learning Curve & Talent Gap",
          description:
            "Kubernetes has a vast and complex ecosystem. Finding, training, and retaining engineers with deep expertise in networking, storage, and security is a major challenge.",
          icon: "AcademicCap",
        },
        {
          title: "Security & Governance at Scale",
          description:
            "Securing a multi-tenant Kubernetes cluster is a full-time job. It requires robust RBAC policies, network security, container image scanning, and runtime threat detection.",
          icon: "ShieldExclamation",
        },
        {
          title: "Day 2 Operational Burden",
          description:
            "The real work begins after deployment. Managing cluster upgrades, monitoring performance, troubleshooting failures, and optimizing costs can overwhelm unprepared teams.",
          icon: "ExclamationTriangle",
        },
        {
          title: "Ecosystem & Tooling Overload",
          description:
            "The Cloud Native landscape is flooded with tools for service mesh, monitoring, logging, and storage. Choosing, integrating, and maintaining the right stack is a complex task.",
          icon: "SquaresPlus",
        },
      ],
    },
    whyItMatters: {
      heading: "Why a Container Platform is Your Strategic Asset",
      description:
        "A well-architected container platform is the foundation for modern digital innovation. It enables your teams to build and ship software faster, create more resilient and scalable services, and avoid vendor lock-in by ensuring application portability across any infrastructure. This agility is the key to outmaneuvering competitors and responding rapidly to market changes.",
      stats: [
        {
          value: "50%",
          label: "Faster Time-to-Market",
          detail:
            "for new applications and features by leveraging automated CI/CD on a container platform.",
          height: "h-56",
        },
        {
          value: "Up to 80%",
          label: "Improved Infrastructure Utilization",
          detail:
            "by efficiently packing applications onto fewer servers, significantly reducing hardware and licensing costs.",
          height: "h-85",
        },
        {
          value: "40%",
          label: "Increase in Developer Productivity",
          detail:
            "by providing self-service environments and abstracting away the underlying infrastructure complexity.",
          height: "h-68",
        },
      ],
      features: [
        {
          name: "Production-Ready, Hardened Clusters",
          description:
            "We don't just run an installer. We build clusters based on security best practices, including CIS benchmarks, network policies, and principle of least privilege.",
        },
        {
          name: "GitOps & Automation at the Core",
          description:
            "We implement GitOps (using tools like Argo CD) to manage your entire platform declaratively, ensuring consistent, auditable, and repeatable deployments.",
        },
        {
          name: "Full Observability Stack",
          description:
            "Your platform comes with a pre-configured monitoring, logging, and tracing stack (Prometheus, Grafana, Loki) so you have deep visibility from day one.",
        },
      ],
    },
    useCases: {
      variant: 3,
      heading: "Kubernetes & OpenShift in Action",
      subheading: "Real-World Applications",
      useCase: [
        {
          title: "Monolith to Microservices Transformation",
          description:
            "Break down large, unwieldy monolithic applications into manageable, independently deployable microservices running on a scalable and resilient Kubernetes platform.",
          image: "/images/1_TXPmC8qLCfZ5vpnW56h49w 1.png",
        },
        {
          title: "Scalable CI/CD & DevOps Platforms",
          description:
            "Build a powerful, automated software delivery pipeline on Kubernetes. Dynamically scale build agents and create ephemeral testing environments to accelerate development.",
          image: "/images/devops-pipeline.png",
        },
        {
          title: "Hybrid & Multi-Cloud Application Portability",
          description:
            "Design applications that can run consistently anywhere, on-premise data centers, private clouds, or public clouds, without modification, avoiding vendor lock-in.",
          image: "/images/aws-azure-google-cloud.png",
        },
        {
          title: "High-Performance AI/ML Platforms",
          description:
            "Provide data scientists with a powerful, scalable platform for training and serving machine learning models, complete with GPU support and MLOps tooling.",
          image: "/images/openshift-ai 1.png",
        },
      ],
    },
    techStack: {
      heading: "Our Containerization & Kubernetes Technology Stack",
      subheading:
        "We master the complete Cloud Native ecosystem to build and manage enterprise-grade container platforms.",
      categories: [
        {
          category: "Orchestration Platforms",
          logo: "/logos/categories/ship.svg",
          tools: [
            { name: "Kubernetes (K8s)", logo: "/logos/tools/kubernetes.svg" },
            { name: "Red Hat OpenShift", logo: "/logos/tools/openshift.svg" },
          ],
        },
        {
          category: "Container Runtimes & Tools",
          logo: "/logos/categories/cube.svg",
          tools: [
            { name: "Docker", logo: "/logos/tools/docker.svg" },
            { name: "Podman", logo: "/logos/tools/podman.svg" },
  
          ],
        },
        {
          category: "GitOps & CI/CD",
          logo: "/logos/categories/git-branch.svg",
          tools: [
            { name: "Argo CD", logo: "/logos/tools/argo-cd.svg" },
            { name: "GitLab CI/CD", logo: "/logos/tools/gitlab.svg" },
          ],
        },
        {
          category: "Data Protection & Backup",
          logo: "/logos/categories/shield.svg",
          tools: [{ name: "Kasten K10", logo: "/logos/tools/kasten.svg" }],
        },
      ],
    },
    faqs: [
      {
        question:
          "What is the main difference between Kubernetes and Red Hat OpenShift?",
        answer:
          "Kubernetes is the powerful open-source engine. Red Hat OpenShift is a complete enterprise platform built around Kubernetes. OpenShift adds integrated developer tools, enhanced security features, a web console, and full enterprise support, making it an excellent choice for organizations that need a ready-to-use, fully supported solution.",
      },
      {
        question: "What are 'Day 2 Operations' for Kubernetes?",
        answer:
          "Day 2 Operations refers to everything that happens after the initial cluster deployment. This includes critical tasks like monitoring, logging, alerting, security scanning, managing updates and patches, capacity planning, and disaster recovery. This is often the most complex and resource-intensive part of running Kubernetes, and it's where our managed services provide the most value.",
      },
      {
        question:
          "Can you help us migrate our existing applications to containers?",
        answer:
          "Yes, this is a core part of our service. We perform a thorough assessment of your existing applications to determine the best containerization strategy. We then work with your team to refactor, containerize, and deploy them onto the new Kubernetes platform, ensuring a smooth transition with minimal disruption.",
      },
      {
        question: "How do you handle Kubernetes security?",
        answer:
          "Security is built-in, not bolted on. We follow a defense-in-depth strategy that includes hardening the cluster nodes, implementing strict RBAC policies, using network policies to isolate workloads, integrating container image scanning into the CI/CD pipeline, and deploying runtime security monitoring to detect threats.",
      },
      {
        question: "Do you provide ongoing support and training for our team?",
        answer:
          "Absolutely. Beyond managing the platform, we also provide training and knowledge transfer sessions tailored to your team's skill level. This ensures your developers, DevOps engineers, and platform operators are fully equipped to work confidently within the Kubernetes ecosystem.",
      },
      {
        question: "Can Kubernetes work in a hybrid or multi-cloud environment?",
        answer:
          "Yes. Kubernetes was designed for portability and flexibility. We help you architect a hybrid or multi-cloud strategy so your applications can run seamlessly across on-premise data centers, private clouds, and public cloud providers—avoiding vendor lock-in while maximizing resilience and scalability.",
      },
    ],
    cta: {
      heading: "Ready to Modernize Your Applications?",
      subtitle:
        "Move past the complexity and unlock the full potential of containerization. Our team of certified Kubernetes experts is ready to architect and manage a platform that accelerates your business. Let's build your future-proof infrastructure.",
      ctaText: "Architect Your Container Platform",
      ctaLink: "#contact",
    },
    meta: {
      title: "Managed Kubernetes & OpenShift Services | OpenCode Solutions",
      description:
        "Deploy, manage, and scale containerized applications with expert Kubernetes and Red Hat OpenShift services. We handle orchestration, security, and Day 2 operations.",
    },
  },
  {
    slug: "database-design-installation",
    name: "Database Design & Installation",
    shortDescription:
      "Expert architecture, deployment, and optimization for high-performance SQL, NoSQL, and Vector databases.",
    hero: {
      variant: 3,
      title: "High-Performance Database Architecture Services",
      subtitle:
        "Your application is only as fast and reliable as its database. We design and deploy bespoke data foundations, from relational SQL to scalable NoSQL and AI-ready Vector DBs, built for performance and resilience.",
      ctaText: "Architect Your Data Foundation",
      ctaLink: "#contact",
      image: {
        src: "/images/undraw_server-status_7viz.svg",
        alt: "An abstract visualization of a high-performance, clustered database architecture designed by OpenCode Solutions.",
      },
    },
    overview: {
      heading: "The Foundation of Every Great Application",
      subheading: "Expert Database Design, Deployment, and Optimization",
      description:
        "A database is more than a place to store data; it's the beating heart of your application. A poorly designed database leads to slow performance, scalability nightmares, and data integrity issues. We take a holistic approach, starting with a deep dive into your application's needs to architect the perfect data model and select the right technology. We then deploy a secure, highly-available cluster and provide ongoing optimization to ensure peak performance as you scale.",
      bullets: [
        {
          title: "Custom Database Architecture",
          description:
            "We design optimized schemas and data models, and help you choose the right database technology (SQL, NoSQL, Vector) for your specific workload.",
          icon: "CodeBracketSquare",
        },
        {
          title: "Secure & Resilient Deployment",
          description:
            "We install and configure production-grade database clusters with a focus on high availability, automated backups, and robust security hardening.",
          icon: "RocketLaunch",
        },
        {
          title: "Performance Tuning & Management",
          description:
            "Our service includes deep query optimization, strategic indexing, and performance monitoring to eliminate bottlenecks and ensure your database runs at maximum speed.",
          icon: "WrenchScrewdriver",
        },
      ],
      image: "/images/overview-database-schema.svg",
    },
    challenges: {
      heading: "The Hidden Costs of a Poorly-Architected Database",
      subheading: "Common Data Layer Pitfalls",
      challenges: [
        {
          title: "Choosing the Wrong Database Technology",
          description:
            "Using a relational database for a use case that demands a NoSQL model (or vice-versa) is a common and costly mistake that leads to complex workarounds and poor performance.",
          icon: "PuzzlePiece",
        },
        {
          title: "Crippling Performance & Scalability Issues",
          description:
            "An unoptimized database with inefficient queries and improper indexing can bring your entire application to a halt as user load increases.",
          icon: "Clock",
        },
        {
          title: "Data Integrity & Availability Risks",
          description:
            "Without a proper high-availability and disaster recovery strategy, a single server failure can lead to catastrophic data loss and extended downtime, destroying user trust.",
          icon: "ShieldExclamation",
        },
        {
          title: "Complex Migrations & Vendor Lock-in",
          description:
            "Moving from a legacy system or a managed cloud database to a more flexible solution requires careful planning and execution to avoid data loss and minimize downtime.",
          icon: "ArrowsRightLeft",
        },
      ],
    },
    whyItMatters: {
      heading: "Your Data is Your Most Valuable Asset",
      description:
        "A well-architected database is the key to unlocking the value of your data. It powers seamless user experiences, enables real-time analytics, and provides a single source of truth for your entire organization. Investing in a solid data foundation is not just an IT decision; it's a core business strategy that enables agility, intelligence, and sustainable growth.",
      stats: [
        {
          value: "99.999%",
          label: "Target Availability ('Five Nines')",
          detail:
            "achievable with a properly designed high-availability database cluster, translating to less than few minutes of downtime per year.",
          height: "h-85",
        },
        {
          value: "10x",
          label: "Faster Query Response Times",
          detail:
            "is a common result of proper indexing and query optimization, dramatically improving application performance.",
          height: "h-85",
        },
        {
          value: "Up to 50%",
          label: "Reduction in Infrastructure Costs",
          detail:
            "by optimizing database performance and right-sizing resources, preventing over-provisioning.",
          height: "h-68",
        },
      ],
      features: [
        {
          name: "Technology-Agnostic Recommendations",
          description:
            "We are not tied to any single vendor. We recommend the best database for your specific needs, whether it's open-source powerhouse PostgreSQL or massively-scalable MongoDB.",
        },
        {
          name: "Built for High Availability",
          description:
            "We architect every database with a 'no single point of failure' philosophy, using replication and clustering to ensure your application stays online.",
        },
        {
          name: "Continuous Performance Optimization",
          description:
            "A database is not 'set it and forget it.' We provide ongoing monitoring and tuning to ensure your database evolves and performs as your application grows.",
        },
      ],
    },
    techStack: {
      heading: "Our Database Technology Expertise",
      subheading:
        "We master the leading open-source database technologies to build powerful, reliable data platforms.",
      categories: [
        {
          category: "Relational Databases (SQL)",
          logo: "/logos/categories/database.svg",
          tools: [
            { name: "PostgreSQL", logo: "/logos/tools/postgresql.svg" },
            { name: "EDB (EnterpriseDB)", logo: "/logos/tools/edb.svg" },
            { name: "MySQL", logo: "/logos/tools/mysql.svg" },
            { name: "MariaDB", logo: "/logos/tools/mariadb.svg" },
          ],
        },
        {
          category: "NoSQL Databases",
          logo: "/logos/categories/stack-middle.svg",
          tools: [
            { name: "MongoDB", logo: "/logos/tools/mongodb.svg" },
            { name: "Redis", logo: "/logos/tools/redis.svg" },
          ],
        },
        {
          category: "Vector Databases (for AI)",
          logo: "/logos/categories/brain.svg",
          tools: [
            { name: "Milvus", logo: "/logos/tools/milvus.svg" },
            { name: "Pinecone", logo: "/logos/tools/pinecone.svg" },
            { name: "Weaviate", logo: "/logos/tools/weaviate.svg" },
            { name: "Chroma", logo: "/logos/tools/chroma.svg" },
          ],
        },
      ],
    },
    faqs: [
      {
        question: "When should I choose a SQL vs. a NoSQL database?",
        answer:
          "Choose SQL (like PostgreSQL) when you have structured data and require strong transactional consistency (ACID compliance), common in financial or e-commerce applications. Choose NoSQL (like MongoDB) when you have unstructured or semi-structured data, need high scalability, and flexible schemas, common in content or IoT platforms.",
      },
      {
        question: "What does 'High Availability' for a database actually mean?",
        answer:
          "High Availability means designing your database system to prevent a single point of failure. This is typically achieved through techniques like replication (keeping copies of data on multiple servers) and automated failover (if the primary server fails, a replica is automatically promoted to take its place), ensuring your application remains online.",
      },
      {
        question:
          "Our application is slow. Can you help optimize our existing database?",
        answer:
          "Yes. This is one of our core services. We perform a comprehensive database health audit, analyzing your schema, indexing strategy, and slow queries. Based on our findings, we provide and implement a concrete action plan to resolve performance bottlenecks.",
      },
      {
        question: "What is a Vector Database and why do I need one for AI?",
        answer:
          "A Vector Database is a specialized database designed to store and search high-dimensional vectors, which are mathematical representations of data like text or images. They are essential for modern AI applications like semantic search or RAG systems (used by LLMs) because they can find results based on conceptual meaning, not just exact keyword matches.",
      },
    ],
    cta: {
      heading: "Build a Database That Scales with Your Ambition.",
      subtitle:
        "Don't let performance bottlenecks or data integrity risks hold your business back. Our expert architects are ready to design and deploy a robust, scalable, and high-performance data foundation for your most critical applications.",
      ctaText: "Optimize Your Database Performance",
      ctaLink: "#contact",
    },
    meta: {
      title:
        "Database Design & Optimization Services | PostgreSQL, MongoDB | OpenCode Solutions",
      description:
        "Expert database design, installation, and optimization services for SQL (PostgreSQL) and NoSQL (MongoDB). We build scalable, high-availability data foundations.",
    },
  },
  {
    slug: "training",
    name: "Enterprise Technology Training",
    shortDescription:
      "Empower your teams with customized, hands-on training for Kubernetes, Automation, and AI.",
    hero: {
      variant: 3,
      title: "Training & Team Enablement",
      subtitle:
        "Technology is only half the solution. We bridge the skills gap by transforming your teams into self-sufficient experts on the platforms that power your business, ensuring you maximize your ROI.",
      ctaText: "Empower Your Team",
      ctaLink: "#contact",
      image: {
        src: "/images/undraw_hr-presentation_uunk.svg",
        alt: "A team of engineers collaborating in a hands-on training workshop for enterprise technology, led by an OpenCode Solutions expert.",
      },
    },
    overview: {
      heading: "Unlock Your Team's Full Potential",
      subheading: "Beyond the Manuals: Practical, Hands-On Learning",
      description:
        "A technology investment that isn't fully adopted is wasted. Generic online courses often fail because they don't address the unique complexities of your specific environment. Our training programs are different. We deliver customized, hands-on workshops and bootcamps designed around your stack, your goals, and your team's existing skill level, ensuring practical knowledge that can be applied from day one.",
      bullets: [
        {
          title: "Kubernetes & OpenShift Mastery",
          description:
            "From beginner fundamentals to advanced Day 2 operations, we equip your platform engineers with the skills to manage a production-grade container platform.",
          icon: "RocketLaunch",
        },
        {
          title: "Enterprise Automation with Ansible",
          description:
            "Teach your team to think in terms of 'automation first'. We cover everything from writing effective playbooks to building complex, orchestrated workflows.",
          icon: "WrenchScrewdriver",
        },
        {
          title: "Applied AI & MLOps",
          description:
            "Demystify AI for your teams. Our training covers the practical aspects of deploying, managing, and monitoring machine learning models in production.",
          icon: "Sparkles",
        },
      ],
      image: "/images/overview-training-workshop.svg",
    },
    useCases: {
      variant: 3,
      heading: "Tailored Training for Every Role",
      subheading: "From Operations to Development",
      useCase: [
        {
          title: "Platform Engineering & Ops Team Upskilling",
          description:
            "A deep-dive bootcamp for your infrastructure team covering Kubernetes architecture, security hardening, monitoring, andoperational best practices.",
          image:
            "/images/role-of-data-scientists_upscayl_2x_digital-art-4x.png",
          accent: "Resilience",
        },
        {
          title: "Developer Enablement & Onboarding",
          description:
            "Equip your application developers with the essential skills to containerize their applications, write Dockerfiles, and effectively deploy and debug on Kubernetes.",
          image: "/images/containers.png",
          accent: "Agility",
        },

        {
          title: "AI & MLOps for Data Science Teams",
          description:
            "Bridge the gap between data science and production. We train your data scientists on the MLOps tools needed to package, deploy, and monitor their models at scale.",
          image: "/images/AI-Machine-Learning-Mathematics.png",
          accent: "Intelligence",
        },
        {
          title: "Ansible for Network & System Admins",
          description:
            "A practical, hands-on workshop designed to transition your traditional system administrators into powerful automation engineers using Red Hat Ansible.",
          image: "/images/ansibleAutomationPlatform.png",
          accent: "Automation",
        },
      ],
    },
    faqs: [
      {
        question: "Do you offer on-site training at our offices?",
        answer:
          "Yes, absolutely. We can deliver training on-site at your location for a fully immersive experience. We also offer live, instructor-led virtual training for distributed teams.",
      },
      {
        question: "Can the curriculum be customized for our specific needs?",
        answer:
          "Customization is our specialty. We believe it's the only way to deliver effective training. We will work with you to understand your goals and technical environment to create a curriculum and lab exercises that are 100% relevant to your team.",
      },
      {
        question: "What are the prerequisites for your courses?",
        answer:
          "Prerequisites vary depending on the course. For example, a basic understanding of Linux is recommended for our Ansible course. We will provide a clear list of prerequisites for any training program we design for you and can even offer foundational courses if needed.",
      },
      {
        question: "Do you provide certifications upon completion?",
        answer:
          "We provide an official Certificate of Completion to all attendees who successfully complete a course. Our primary focus is on building practical, demonstrable skills rather than just 'passing a test.' We ensure your team can actually *do* the work, which is more valuable than any paper certification.",
      },
    ],
    cta: {
      heading: "Invest in Your Most Valuable Asset",
      subtitle:
        "Bridge the skills gap and unlock the full return on your technology investments. Our expert-led programs are the fastest way to build a high-performing, self-sufficient engineering team.",
      ctaText: "Design Your Training Program",
      ctaLink: "#contact",
    },
    meta: {
      title:
        "Enterprise Technology Training | Kubernetes, Ansible, AI | OpenCode Solutions",
      description:
        "Empower your team with hands-on, expert-led training in Kubernetes, OpenShift, Ansible, and MLOps. Customized curriculum to accelerate your digital transformation.",
    },
  },
];
