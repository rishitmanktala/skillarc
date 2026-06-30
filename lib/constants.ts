// Navigation links for the header and footer
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Media Center", href: "/media" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const IMPACT_STATS = [
  { label: "Students Impacted", value: "500+" },
  { label: "Volunteers Engaged", value: "35+" },
  { label: "Workshops Conducted", value: "15+" },
  { label: "Youth Foundations Collaborated", value: "7+" },
  { label: "Communities Reached", value: "10+" },
] as const;

// core programmatic offerings of SkillARC
export const PROGRAMS = [
  {
    title: "Life Skills Sessions",
    description: "Equipping adolescents with essential decision-making, critical thinking, empathy, and communication skills to navigate everyday challenges confidently.",
  },
  {
    title: "Leadership Programs",
    description: "Empowering the next generation of young leaders through civic awareness, grassroots problem-solving, and community engagement projects.",
  },
  {
    title: "Youth Development Initiatives",
    description: "Promoting personal development and career readiness via mentorship, modern vocational skill building, and career guidance programs.",
  },
  {
    title: "School & Community Initiatives",
    description: "Fostering collaboration with schools and community hubs to host awareness workshops, mental health sessions, and creative learning events.",
  },
] as const;

// UN Sustainable Development Goals (SDGs) aligned with SkillARC's work
export const SDG_GOALS = [
  {
    goal: "SDG 4",
    title: "Quality Education",
    description: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all adolescents and youth.",
  },
  {
    goal: "SDG 10",
    title: "Reduced Inequalities",
    description: "Empowering and promoting the social, economic, and political inclusion of all young people, irrespective of their socio-economic backgrounds.",
  },
  {
    goal: "SDG 17",
    title: "Partnerships for the Goals",
    description: "Strengthening collaborations with government bodies, schools, corporate partners, and other youth organizations to create a unified ecosystem of change.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Shreya Gupta",
    role: "Founder",
    bio: "Passionate about youth development with a vision to empower underprivileged adolescents through critical life skills and leadership training.",
    image: "/images/team/member1.png",
  },
] as const;
