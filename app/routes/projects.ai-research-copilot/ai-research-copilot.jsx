import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
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

const title = 'AI Research Copilot — Multi-Agent Research Assistant';
const description =
  'Multi-agent AI research assistant integrating real-time web search (SerpAPI), LLM-based analysis, summarization, and concept comparison for automated research workflows and Notion knowledge syncing.';
const roles = [
  'Multi-Agent System Architecture (LangChain)',
  'LLM Integration (Gemini API)',
  'Real-Time Web Search Integration (SerpAPI)',
  'Session Persistence & Notion Sync',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AiResearchCopilot = () => {
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
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="AI Research Copilot Interface"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview & Workflow Goal</ProjectSectionHeading>
            <ProjectSectionText>
              Research tasks usually require manually querying multiple web pages, synthesizing findings, comparing conflicting claims, and compiling reports. AI Research Copilot delegates these tasks to coordinated autonomous specialized agents.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Multi-Agent Architecture</ProjectSectionHeading>
            <ProjectSectionText>
              • <strong>Search & Gathering Agent:</strong> Executes query expansion and queries SerpAPI for real-time live web articles.<br />
              • <strong>Summarization & Analysis Agent:</strong> Extracts key arguments, cross-checks statistics, and synthesizes structured summaries via Gemini LLMs.<br />
              • <strong>Comparison & Critique Agent:</strong> Identifies conceptual overlaps, key differences, and potential source bias.<br />
              • <strong>Knowledge Sync Agent:</strong> Exports structured research pages directly into Notion workspaces.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>UI & Session Management</ProjectSectionHeading>
            <ProjectSectionText>
              Built with a Streamlit interface featuring session state persistence for long-running research tasks, allowing users to pause, inspect source citations, and refine queries interactively.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
