import AboutHero from "../components/about/AboutHero";
import StoryMissionVision from "../components/about/StoryMissionVision";
import Values from "../components/about/Values";
import Timeline from "../components/about/Timeline";
import Team from "../components/about/Team";
import TrustCta from "../components/about/TrustCta";
import Statss from "../components/about/Statss";

export default function About() {
  return (
    <>
      <AboutHero />
      <StoryMissionVision />
      <Statss />
      <Timeline />
      {/* <Team /> */}
      {/* <TrustCta /> */}
    </>
  );
}
