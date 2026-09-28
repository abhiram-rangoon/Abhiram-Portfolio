import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import p1 from '~/assets/p1.png';
import p11 from '~/assets/p11.png';
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

const title = 'Multi-Service Enterprise ERP Platform';
const description =
  'Architected and developed a multi-service enterprise ERP platform integrating consumer services, partner/vendor management, inventory operations, and HRMS with a modular microservices architecture.';
const roles = [
  'Microservices Architecture',
  'Backend Development',
  'IAM & Security (JWT, Argon2)',
  'Database Modeling (PostgreSQL & Prisma)',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const EnterpriseErp = () => {
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
              srcSet={`${p1} 1280w`}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Multi-Service Enterprise ERP Dashboard Interface"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Architecture & System Overview</ProjectSectionHeading>
            <ProjectSectionText>
              The platform is built on a modular microservices architecture designed for high throughput and fault-tolerant enterprise operations. It integrates distinct services across identity management, partner portals, workforce management, and supply chain operations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Identity & Access Management (IAM)</ProjectSectionHeading>
            <ProjectSectionText>
              Implemented centralized authentication using Argon2 password hashing algorithms and signed JWT tokens with granular Role-Based Access Control (RBAC). This enforces access controls across all microservices and API gateways.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${p11} 1280w`}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Enterprise ERP Module Operations & Analytics"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Core Modules & Operations</ProjectSectionHeading>
            <ProjectSectionText>
              • <strong>Partner & Vendor Management Portal:</strong> Automated partner onboarding, ticket settlements, and contractual commission logic.<br />
              • <strong>HRMS Platform:</strong> Employee lifecycle management, automated attendance logging, leaves, and salary workflows.<br />
              • <strong>Inventory & Order Engine:</strong> Real-time visibility into stock levels, automated low-inventory alerts, and transactional audit trails.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack & Key Engineering Accomplishments</ProjectSectionHeading>
            <ProjectSectionText>
              Built with Node.js, Express.js, React.js, PostgreSQL, Prisma ORM, JWT, Argon2, and REST APIs. Database models were normalized and query indexes optimized to deliver response times under 50ms for complex join queries across inventory and settlement tables.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
