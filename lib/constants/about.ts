export const aboutDefaults = {
  hero: {
    title: 'About RUWASA',
    subtitle: 'Gombe State Rural Water Supply and Sanitation Agency',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
    ],
  },
  overview: {
    eyebrow: 'WHO WE ARE',
    heading: 'Dedicated to Delivering Clean Water & Sanitation to All',
    paragraphs: [
      'The Gombe State Rural Water Supply and Sanitation Agency (RUWASA) is a government parastatal established to plan, develop, operate, and maintain rural water supply and sanitation facilities across Gombe State.',
      'RUWASA works in close collaboration with rural communities, local government authorities, development partners, and the Federal Government to ensure that every rural household has access to safe, affordable, and reliable water and sanitation services.',
      'Through community-driven approaches, the Agency empowers local water and sanitation committees to manage and sustain infrastructure, building long-term resilience and ownership in every community we serve.',
    ],
    highlights: [
      { value: '2007', label: 'Year Established' },
      { value: '11', label: 'LGAs Covered' },
      { value: '500+', label: 'Staff Members' },
    ],
    image: '/about-overview.png',
    imageAlt: 'RUWASA field engineers at a rural water facility in Gombe State',
  },
  visionMission: {
    vision: {
      heading: 'Our Vision',
      body: 'A Gombe State where every rural community enjoys universal, equitable, and sustainable access to safe water and adequate sanitation services — contributing to the health, dignity, and prosperity of all residents.',
    },
    mission: {
      heading: 'Our Mission',
      body: 'To plan, develop, operate, and maintain rural water supply and sanitation infrastructure through community participation, innovative technology, and strategic partnerships — ensuring safe and reliable water services for all rural communities in Gombe State.',
    },
  },
  mandates: {
    eyebrow: 'OUR MANDATE',
    heading: 'Key Functions & Responsibilities',
    description: 'RUWASA is guided by a clear mandate to transform water and sanitation services across rural Gombe State through six core operational functions.',
    items: [
      { iconName: 'Droplet', tone: 'blue', title: 'Rural Water Supply', body: 'Planning, constructing, and maintaining safe and reliable water supply systems for rural communities across all eleven LGAs of Gombe State.' },
      { iconName: 'Toilet', tone: 'green', title: 'Sanitation Services', body: 'Promoting access to improved sanitation facilities and eliminating open defecation in rural areas through targeted community interventions.' },
      { iconName: 'Users', tone: 'blue', title: 'Community Mobilization', body: 'Engaging and empowering communities to take ownership of water and sanitation infrastructure, fostering local accountability and sustainability.' },
      { iconName: 'GraduationCap', tone: 'green', title: 'Capacity Building', body: 'Training water committees, technicians, and local staff to operate, maintain, and manage water facilities for long-term service delivery.' },
      { iconName: 'Wrench', tone: 'blue', title: 'Infrastructure Maintenance', body: 'Ensuring the functionality and longevity of water supply infrastructure through scheduled maintenance, rehabilitation, and emergency repairs.' },
      { iconName: 'Handshake', tone: 'green', title: 'Stakeholder Coordination', body: 'Coordinating with Federal, State, and international development partners to mobilize resources and align efforts for greater community impact.' },
    ],
  },
  organization: {
    eyebrow: 'LEADERSHIP',
    heading: 'Organisational Structure',
    description: 'RUWASA is managed by a professional team structured to ensure efficient service delivery across all departments and field operations.',
    mediaUrl: '',
    note: 'A full interactive organogram will be integrated in a future update.',
    structure: [
      { label: 'Executive', nodes: [{ title: 'General Manager', subtitle: 'Chief Executive Officer', isTop: true }] },
      { label: 'Directors', nodes: [{ title: 'Director, Technical Services' }, { title: 'Director, Operations' }, { title: 'Director, Finance & Admin' }, { title: 'Director, Planning & M&E' }] },
      { label: 'Department Heads', nodes: [{ title: 'Head, Water Supply' }, { title: 'Head, Sanitation' }, { title: 'Head, Community Dev.' }, { title: 'Head, HR & Admin' }, { title: 'Head, Procurement' }, { title: 'Head, ICT & Data' }] },
      { label: 'Units', nodes: [{ title: 'Field Operations Unit' }, { title: 'Quality Assurance Unit' }, { title: 'Monitoring & Evaluation Unit' }, { title: 'Finance & Accounts Unit' }] },
    ],
  },
  team: {
    eyebrow: 'OUR PEOPLE',
    heading: 'Management Team',
    description: 'Our leadership team brings decades of combined expertise in water resources engineering, public administration, and community development.',
    members: [
      { id: 'gm', name: 'Engr. Musa Ibrahim', position: 'General Manager', bio: 'A seasoned water resources engineer with over 20 years of experience in rural water supply and sanitation management across northern Nigeria.' },
      { id: 'technical', name: 'Engr. Aisha Bello', position: 'Director, Technical Services', bio: "Expert in water infrastructure development and field operations, leading the Agency's technical projects and borehole construction programmes." },
      { id: 'operations', name: 'Mallam Yakubu Danjuma', position: 'Director, Operations', bio: 'Experienced operations manager responsible for coordinating field teams, community engagement, and ensuring service continuity across all LGAs.' },
      { id: 'finance', name: 'Mrs. Fatima Garba', position: 'Director, Finance & Admin', bio: 'Certified public accountant with expertise in government financial management, budget planning, and institutional administration.' },
    ],
  },
  partners: {
    eyebrow: 'WORKING TOGETHER',
    heading: 'Our Partners & Stakeholders',
    description: 'RUWASA collaborates with international organisations, government agencies, and development partners to maximise impact for rural communities.',
    items: [
      { id: 'world-bank', name: 'World Bank', shortName: 'World Bank', category: 'Development Finance' },
      { id: 'unicef', name: "United Nations Children's Fund", shortName: 'UNICEF', category: 'UN Agency' },
      { id: 'federal-ministry', name: 'Federal Ministry of Water Resources', shortName: 'Fed. Min. Water', category: 'Federal Government' },
      { id: 'gombe-state', name: 'Gombe State Government', shortName: 'Gombe State Govt.', category: 'State Government' },
      { id: 'usaid', name: 'United States Agency for International Development', shortName: 'USAID', category: 'Development Partner' },
    ],
  },
  cta: {
    eyebrow: 'GET INVOLVED',
    heading: 'Join Us in Delivering\nClean Water to Every Community',
    body: 'Explore our ongoing projects, learn how we work, or reach out to partner with RUWASA in bringing safe water and sanitation to rural Gombe State.',
    primaryLabel: 'View Our Projects',
    primaryHref: '/projects',
    secondaryLabel: 'Contact RUWASA',
    secondaryHref: '/contact',
  },
};

export type AboutSettings = typeof aboutDefaults;

