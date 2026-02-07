/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'Jordan',
    lastName: 'Williams',
    fullName: 'Jordan Williams',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Jordan Williams Campaign',
    slogan: 'Your voice matters. Let\u2019s move forward.',
    donateUrl: '#',
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'support@winadvocacy.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Your voice matters. Let\u2019s move forward.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Video Section ──────────────────────────────────────────
  video: {
    headline: 'Jordan Williams knows what it means to fight for a better life,',
    highlightText: "because he\u2019s lived that struggle.",
    description: 'Raised in a working-class family, he relied on community support and public schools early in life to get ahead. He went on to become an advocate for everyday people, earn the trust of his neighbors, and dedicate his career to making sure no one gets left behind.',
  },

  // ── Checklist Section ──────────────────────────────────────
  checklist: {
    heading: 'Fighting for Our Community',
    subheading: 'These are some of the top priorities our campaign is focused on.',
    items: [
      'Housing Affordability',
      'Public Safety',
      'Cost of Living',
      'Education',
      'Jobs & Economy',
    ],
  },

  // ── About Page ─────────────────────────────────────────────
  about: {
    sectionLabel: 'Our Story',
    headline: 'Jordan Williams is fighting for the people who built this community.',
    intro: [
      'Jordan has spent his career showing up for the families and neighborhoods that need it most. He believes real change doesn\u2019t happen in boardrooms alone \u2014 it happens on front porches, at kitchen tables, and through the everyday acts of people coming together.',
      'That\u2019s why Jordan has dedicated himself to building bridges, not walls \u2014 connecting families with the resources they need, advocating for policies that uplift working people, and creating a future where everyone has a fair shot.',
    ],
    bioHeading: 'About Jordan',
    bio: [
      'Jordan Williams was born and raised right here in our community \u2014 growing up wasn\u2019t always easy. Economic hardship, family struggles, and a system that too often looked the other way shaped Jordan\u2019s determination to fight for something better.',
      'A community organizing program opened the door to public service and the power of collective action. Jordan found his voice as an organizer, discovered his purpose, and built a belief that change was possible \u2014 not someday, but now.',
      'Today, Jordan continues the fight \u2014 standing up for working families, expanding opportunity, and making sure every voice in our community is heard. Because for Jordan, leadership isn\u2019t about titles \u2014 it\u2019s about showing up every single day for the people who count on you.',
    ],
    trackRecordHeading: "Jordan's Track Record",
    trackRecordSubheading: 'From the city council to the state legislature, Jordan has delivered real results for the people he serves.',
    accomplishments: [
      { title: 'Community Investment', description: 'Jordan secured millions in funding for affordable housing, youth programs, and neighborhood development \u2014 putting resources directly into the hands of the communities that need them most.' },
      { title: 'Healthcare Access', description: 'Jordan championed legislation to expand healthcare access and protect reproductive rights \u2014 because he believes everyone deserves quality care, regardless of zip code.' },
      { title: 'Criminal Justice Reform', description: 'Jordan co-authored legislation to modernize criminal justice policy, replacing outdated systems with smaller, trauma-informed facilities closer to home.' },
      { title: 'Economic Opportunity', description: 'Jordan has led efforts to protect renters and homeowners from predatory practices, and pushed for fair wages and workforce development programs across the state.' },
    ],
  },

  // ── Plan Page ──────────────────────────────────────────────
  plan: {
    sectionLabel: 'His Vision for America',
    headline: 'A bold plan to restore freedom, security, and prosperity.',
    intro: [
      'Jordan believes that government should work for the people \u2014 not the other way around. His plan puts American families first, cuts wasteful spending, and restores the values that made this nation great.',
      'From securing our borders to defending our constitutional rights, Jordan has a clear, actionable roadmap to deliver results from day one. No empty promises \u2014 just a commitment to the hardworking people of this community.',
    ],
    timelineHeading: 'The Plan: A Timeline for Action',
    timelineSubheading: "Real leadership means having a plan and executing it. Here\u2019s exactly what Jordan will fight for \u2014 and when.",
    timeline: [
      { label: 'Day One', title: 'Secure the Border', description: 'Finish the wall, end catch-and-release, and restore order at our southern border. Jordan will push for stronger enforcement, more border patrol agents, and zero tolerance for illegal crossings.' },
      { label: 'First 100 Days', title: 'Cut Taxes & Reduce Spending', description: "Put money back in the pockets of hardworking families by cutting income taxes, eliminating wasteful government spending, and balancing the budget so our children aren\u2019t buried in debt." },
      { label: 'Year One', title: 'Back the Blue', description: 'Fully fund law enforcement, provide officers with the training and resources they need, and pass legislation that protects our men and women in uniform. Safe streets start with strong support for police.' },
      { label: 'Year Two', title: 'Protect the Second Amendment', description: "Defend every law-abiding citizen\u2019s constitutional right to keep and bear arms. Jordan will oppose any legislation that infringes on the Second Amendment and champion concealed carry reciprocity." },
      { label: 'Year Three', title: 'American Energy Independence', description: 'Unleash American energy by cutting red tape on oil, gas, and clean coal production. Lower gas prices, create thousands of jobs, and end our dependence on foreign energy sources.' },
      { label: 'By End of Term', title: 'Strengthen the Economy & Bring Jobs Home', description: 'Renegotiate bad trade deals, incentivize companies to manufacture in America, and invest in vocational training so every American who wants a good-paying job can find one.' },
    ],
    prioritiesHeading: 'Core Priorities',
    prioritiesSubheading: "These aren\u2019t just talking points \u2014 they\u2019re the pillars of Jordan\u2019s platform and the values he\u2019ll carry into office every single day.",
    priorities: [
      { number: '01', title: 'Faith & Family Values', description: 'Protect the sanctity of life, defend religious liberty, and ensure parents \u2014 not the government \u2014 have the final say in how their children are raised and educated.' },
      { number: '02', title: 'Strong National Defense', description: 'Rebuild our military to be the strongest in the world. Support our veterans with the healthcare and benefits they earned, and stand firm against adversaries who threaten American interests.' },
      { number: '03', title: 'Free Market Economy', description: 'Get government out of the way so small businesses can thrive. Reduce regulations, lower the corporate tax burden, and create an environment where entrepreneurs and innovation flourish.' },
      { number: '04', title: 'Election Integrity', description: 'Require voter ID, clean up voter rolls, and ban ballot harvesting. Every legal vote must count, and every illegal vote must be stopped. Trust in elections is the foundation of our republic.' },
    ],
    ctaHeading: "Join Jordan's Movement",
    ctaText: "Change doesn\u2019t happen from the sidelines. Jordan needs patriots like you to stand up, speak out, and fight for the America we believe in. Whether you donate, volunteer, or simply spread the word \u2014 every action matters.",
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Sign up and be part of the movement for change in our community.',
    description: [
      'Join our community and help us build a stronger future together. Your voice matters, and together we can make a difference in our democracy and our communities.',
      'Every contribution \u2014 no matter the size \u2014 goes directly toward expanding voter outreach, supporting grassroots organizers, and funding the programs that strengthen our neighborhoods. Your donation helps keep this movement independent, people-powered, and focused on the issues that matter most to working families.',
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help build a stronger community together.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Jordan Williams | Your Voice Matters',
    description: 'Join Jordan Williams\u2019s campaign to move our community forward. Jordan is committed to fighting for working families and delivering real results.',
    keywords: 'Jordan Williams, campaign, community, working families, public service',
  },
}

export default siteData
