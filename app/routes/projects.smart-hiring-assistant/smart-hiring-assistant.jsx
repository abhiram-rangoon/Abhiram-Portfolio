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

const title = 'Smart Hiring Assistant — Autonomous AI Recruitment Bot';
const description =
  'Engineered an autonomous recruitment agent leveraging local LLMs (Llama 3.2), Gmail API integrations, and semantic ATS scoring logic to parse resumes into structured JSON schemas and automate recruitment workflows.';
const roles = [
  'Autonomous AI Agent Architecture',
  'Local LLM Inference (Ollama Llama 3.2)',
  'Structured Data Extraction (Pydantic / JSON)',
  'Streamlit Live Pipeline & Observability',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartHiringAssistant = () => {
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
              alt="Smart Hiring Assistant Dashboard Interface"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview & Recruitment Bottleneck</ProjectSectionHeading>
            <ProjectSectionText>
              Manual resume screening and candidate evaluation often create severe hiring bottlenecks. Smart Hiring Assistant automates candidate ingestion, parsing, semantic ATS scoring, decision making, and email notifications without human intervention.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Autonomous Ingestion & Semantic ATS Engine</ProjectSectionHeading>
            <ProjectSectionText>
              Integrates with the Gmail API for real-time monitoring of incoming application emails with attached resumes (PDF/DOCX). Uses local Llama 3.2 via Ollama to extract structured Pydantic JSON objects and compute semantic ATS scores beyond superficial keyword matching.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Live Observability & Automated Email Workflows</ProjectSectionHeading>
            <ProjectSectionText>
              Features a threaded Streamlit dashboard providing real-time pipeline observability with live candidate rankings, configurable Proceed/Reject thresholds, and automated personalized response email generation.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
