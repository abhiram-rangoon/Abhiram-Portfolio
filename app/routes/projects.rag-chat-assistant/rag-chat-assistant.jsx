import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import { Footer } from '~/components/footer';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

const title = 'Modular RAG Chat Assistant (Streamlit + Gemini)';
const description =
  'Designed and implemented a modular Retrieval-Augmented Generation (RAG) system with multi-format document ingestion, persistent ChromaDB storage, hybrid BM25 & dense retrieval, and hallucination mitigation.';
const roles = [
  'RAG Architecture & Pipeline Engineering',
  'Vector Database Management (ChromaDB)',
  'Hybrid Retrieval Strategies (BM25 + Dense Embeddings)',
  'Hallucination Mitigation & LCEL Workflows',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const RagChatAssistant = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`}
              width={750}
              height={1334}
              placeholder={gamestackTexturePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, 400px`}
              alt="Modular RAG Chat Assistant Interface"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview & Document Ingestion</ProjectSectionHeading>
            <ProjectSectionText>
              Handles multi-format document ingestion (PDF, DOCX, Markdown, TXT) with recursive chunking algorithms. Extracted text chunks are embedded via HuggingFace models and persisted inside local ChromaDB vector databases.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Hybrid Retrieval & Hallucination Mitigation</ProjectSectionHeading>
            <ProjectSectionText>
              To maximize precision and recall, the system combines keyword-based BM25 sparse search with dense semantic vector retrieval. Implemented multi-query expansion, contextual compression, and similarity re-ranking to ground model answers strictly on source context and eliminate hallucinations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>LCEL Pipeline & Model Flexibility</ProjectSectionHeading>
            <ProjectSectionText>
              Engineered using LangChain Expression Language (LCEL) to enable configurable embeddings, dynamic prompt templates, transparent source citation generation, and hot-swappable LLM providers (Google Gemini API, HuggingFace, local models).
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
