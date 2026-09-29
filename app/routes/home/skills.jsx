import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './skills.module.css';

const skillCategories = [
  {
    id: 'programming',
    number: '01',
    title: 'Programming & Web Architecture',
    subtitle: 'Full-stack languages, core web standards & async microservices',
    skills: [
      { name: 'Python', category: 'Backend / AI', desc: 'Core language for end-to-end ML pipelines, script automation, and async FastAPI microservices.' },
      { name: 'JavaScript (ES6+)', category: 'Full-Stack', desc: 'Modern JavaScript for building reactive frontends and asynchronous Node.js backend systems.' },
      { name: 'React.js', category: 'Frontend', desc: 'State management, custom hook architectures, component design systems, and dynamic rendering.' },
      { name: 'Node.js', category: 'Backend', desc: 'Scalable server-side JavaScript runtime for event-driven microservice architectures.' },
      { name: 'Express.js', category: 'API Framework', desc: 'Lightweight RESTful API services, custom middleware, and authentication routing.' },
      { name: 'FastAPI', category: 'Python API', desc: 'High-performance async Python API endpoints for serving LLM & ML model inference.' },
      { name: 'HTML5 & CSS3', category: 'Web Standards', desc: 'Semantic HTML markup, CSS Modules, CSS Grid/Flexbox layouts, and responsive UI design.' },
    ],
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI & Generative AI Systems',
    subtitle: 'Large language models, vector search, RAG pipelines & fine-tuning',
    skills: [
      { name: 'PyTorch', category: 'Deep Learning', desc: 'Deep learning framework for tensor computations, model training, and neural network fine-tuning.' },
      { name: 'Transformers', category: 'Model Architecture', desc: 'Hugging Face ecosystem for sequence-to-sequence models, tokenizers, and model inference.' },
      { name: 'LLMs & Model Serving', category: 'GenAI Engine', desc: 'Hands-on experience with Llama 3.2 (Ollama), Gemini 1.5, Claude 3.5, and OpenAI GPT APIs.' },
      { name: 'RAG & Retrieval', category: 'Knowledge Engine', desc: 'Retrieval-Augmented Generation using dense vector search, hybrid BM25 lexical ranking, and multi-query expansion.' },
      { name: 'LoRA & QLoRA', category: 'Fine-Tuning', desc: 'Parameter-efficient fine-tuning (PEFT) technique for adapting LLMs to domain-specific datasets.' },
      { name: 'Embeddings & Vector Search', category: 'Semantic AI', desc: 'High-dimensional embedding models, cosine similarity metrics, and semantic vector indexing.' },
      { name: 'LangChain & LCEL', category: 'AI Orchestration', desc: 'LangChain Expression Language for building composable prompt chains, memory, and tool integration.' },
      { name: 'Autonomous AI Agents', category: 'Agentic Workflows', desc: 'Multi-agent orchestration utilizing tool calling, semantic ATS scoring, and automated Notion knowledge sync.' },
      { name: 'Prompt Engineering', category: 'Optimization', desc: 'System prompt design, structured JSON schema output enforcement, and hallucination mitigation.' },
      { name: 'NLP & ATS Processing', category: 'Text Mining', desc: 'Natural Language Processing for parsing unformatted resume data into structured JSON objects.' },
      { name: 'Scikit-learn', category: 'Classical ML', desc: 'Supervised/unsupervised algorithms, classification metrics, and feature selection strategies.' },
    ],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Infrastructure',
    subtitle: 'Relational & vector databases, containerization & cloud services',
    skills: [
      { name: 'PostgreSQL & Prisma ORM', category: 'Database Engine', desc: 'Relational schema design, index optimization, complex joins, and Prisma ORM data modeling.' },
      { name: 'ChromaDB', category: 'Vector Database', desc: 'Embedding storage, collection management, persistence layer, and similarity query execution.' },
      { name: 'Vector Databases', category: 'Data Architecture', desc: 'High-dimensional vector indexing and fast nearest-neighbor retrieval for RAG workflows.' },
      { name: 'Supabase & MySQL', category: 'Cloud Storage', desc: 'Managed SQL databases, real-time subscriptions, access control policies, and cloud storage.' },
      { name: 'AWS & Cloud Hosting', category: 'Infrastructure', desc: 'Practical exposure to AWS EC2, S3 bucket management, and cloud deployment pipelines.' },
      { name: 'Docker & Microservices', category: 'DevOps', desc: 'Containerizing applications, Dockerfiles, compose multi-container orchestration, and isolated environments.' },
      { name: 'Pandas & NumPy', category: 'Data Science', desc: 'High-performance data manipulation, matrix operations, clean ETL pipelines, and analytical processing.' },
      { name: 'CI/CD & Deployments', category: 'Release Engineering', desc: 'Automated build, test, and release deployment pipelines on Vercel and Cloudflare Pages.' },
    ],
  },
  {
    id: 'tools',
    number: '04',
    title: 'Engineering Standards & Tools',
    subtitle: 'Security protocols, version control & AI-assisted development workflow',
    skills: [
      { name: 'RESTful Microservices', category: 'System Architecture', desc: 'Designing modular microservices with clean boundary separation and low coupling.' },
      { name: 'IAM & RBAC Security', category: 'Auth & Access', desc: 'Centralized Identity Access Management using JWT tokens, Argon2 password hashing, and granular RBAC.' },
      { name: 'Git & Version Control', category: 'Development Workflow', desc: 'Git branching strategies, commit discipline, pull request reviews, and team collaboration.' },
      { name: 'AI Engineering Tools', category: 'Productivity Stack', desc: 'Leveraging Cursor, Antigravity, GitHub Copilot, Claude, and ChatGPT for rapid prototyping and clean code design.' },
    ],
  },
];

export const Skills = ({ id, sectionRef, visible }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('programming');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const activeCategory = skillCategories.find(c => c.id === activeCategoryId) || skillCategories[0];

  return (
    <Section
      className={styles.skills}
      as="section"
      id={id}
      ref={sectionRef}
      tabIndex={-1}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading className={styles.heading} level={2} data-visible={visible}>
            <DecoderText text="Technical Expertise" start={visible} delay={300} />
          </Heading>
          <Text className={styles.subheading} size="l" data-visible={visible}>
            Production-proven skills in AI/GenAI systems, scalable backend architectures, and data engineering.
          </Text>
        </div>

        {/* Minimal Category Selector Tabs */}
        <div className={styles.categoryNav} data-visible={visible}>
          {skillCategories.map(category => (
            <button
              key={category.id}
              className={styles.navButton}
              data-active={activeCategoryId === category.id}
              onClick={() => {
                setActiveCategoryId(category.id);
                setHoveredSkill(null);
              }}
            >
              <span className={styles.navNumber}>{category.number}</span>
              <span className={styles.navTitle}>{category.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Category Panel */}
        <div className={styles.panel} data-visible={visible}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelNumber}>{activeCategory.number}</span>
              <h3 className={styles.panelTitle}>{activeCategory.title}</h3>
              <p className={styles.panelSubtitle}>{activeCategory.subtitle}</p>
            </div>
          </div>

          <div className={styles.contentLayout}>
            {/* Left: Skill Chips Grid */}
            <div className={styles.skillsList}>
              {activeCategory.skills.map(skill => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <motion.button
                    key={skill.name}
                    className={styles.skillChip}
                    data-active={isHovered}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onClick={() => setHoveredSkill(skill)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.skillDot} />
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillTag}>{skill.category}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Right: Technical Context Inspector */}
            <div className={styles.inspector}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredSkill ? hoveredSkill.name : 'default'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={styles.inspectorContent}
                >
                  {hoveredSkill ? (
                    <>
                      <span className={styles.inspectorBadge}>{hoveredSkill.category}</span>
                      <h4 className={styles.inspectorTitle}>{hoveredSkill.name}</h4>
                      <p className={styles.inspectorDesc}>{hoveredSkill.desc}</p>
                    </>
                  ) : (
                    <div className={styles.inspectorPlaceholder}>
                      <span className={styles.placeholderIcon}>⚡</span>
                      <p className={styles.placeholderText}>
                        Hover or select any technology on the left to inspect detailed engineering context and use cases.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
