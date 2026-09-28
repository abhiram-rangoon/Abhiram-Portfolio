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

const title = 'goovahaan — Next-Gen Vehicle Care Platform';
const description =
  'Architected and developed a modular automotive platform connecting vehicle owners, garages, and service providers with decoupled microservices and cross-platform mobile apps.';
const roles = [
  'Mobile App Development (Flutter & Dart)',
  'Backend Architecture (NestJS & TypeScript)',
  'Geospatial Queries & Database (PostgreSQL & Prisma)',
  'Admin & Agent Operational Dashboards',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Goovahaan = () => {
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
              alt="goovahaan Flutter Mobile App Interface"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview & Platform Vision</ProjectSectionHeading>
            <ProjectSectionText>
              goovahaan bridges the gap between vehicle owners and automotive garages by offering seamless service booking, real-time ticket tracking, and verified partner garage onboarding.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Cross-Platform Mobile Experience</ProjectSectionHeading>
            <ProjectSectionText>
              Built using Flutter and Dart, the consumer app provides intuitive vehicle profile management, service appointment scheduling, live service progress updates, and transparent billing.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Backend Architecture & Geospatial Search</ProjectSectionHeading>
            <ProjectSectionText>
              Engineered with NestJS using Clean Architecture principles. Leveraged PostgreSQL and Prisma ORM to implement efficient geospatial search indexing for finding nearby certified garage locations based on the user's live GPS coordinates.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Admin & Partner Workflows</ProjectSectionHeading>
            <ProjectSectionText>
              Developed dedicated agent and admin web dashboards enabling service ticket management, partner verification, customer onboarding, and revenue settlement reports.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
