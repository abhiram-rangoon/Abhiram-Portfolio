import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import p2 from '~/assets/p2.png';
import p22 from '~/assets/p22.png';
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

const title = 'VillageKart Sales Management System (VSMS)';
const description =
  'Designed and developed an end-to-end sales & field operations platform for real-time tracking, agent workflows, daily revenue monitoring, target management, and territory performance analytics.';
const roles = [
  'Full-Stack Web Development',
  'Field Operations Workflow Design',
  'Database Query Optimization (PostgreSQL)',
  'Cloud Deployment & Observability (Render)',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Vsms = () => {
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
              srcSet={`${p2} 1280w`}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="VillageKart Sales Management System (VSMS) Dashboard"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Problem & Project Scope</ProjectSectionHeading>
            <ProjectSectionText>
              Field sales operations faced challenges in tracking daily sales visits, agent commission calculations, and regional revenue metrics in real time. VSMS was engineered to streamline agent workflows, digitize sales logs, and provide executive visibility.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${p22} 1280w`}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="VSMS Operations Dashboard & Territory Performance Metrics"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Key Features & Automation</ProjectSectionHeading>
            <ProjectSectionText>
              • <strong>Real-time Field Sales Tracking:</strong> Live tracking of agent visits and sales completions.<br />
              • <strong>Automated Commission Engine:</strong> Automated calculations for agent incentives based on target achievements.<br />
              • <strong>Territory Analytics:</strong> Interactive dashboards visualizing region-wise sales velocity and agent leaderboard performance.<br />
              • <strong>Audit Activity Logs:</strong> Comprehensive transaction histories ensuring operational integrity.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Engineering & Query Optimization</ProjectSectionHeading>
            <ProjectSectionText>
              Developed decoupled React.js frontend and Express/Node.js backend services. Optimized PostgreSQL database indexing and API query execution paths to handle high-frequency concurrent field transaction writes.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
