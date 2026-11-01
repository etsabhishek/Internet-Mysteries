export type CaseStatus =
  | "Unresolved"
  | "Partially solved"
  | "Disputed"
  | "Explained"
  | "Unverified"
  | "Likely fiction";

export type MysteryCase = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: CaseStatus;
  statusTone: "red" | "amber" | "green" | "slate";
  year: string;
  readTime: string;
  summary: string;
  question: string;
  overview: string;
  evidence: { title: string; detail: string; type: string; url: string }[];
  theories: { title: string; detail: string; confidence: string }[];
  timeline: { date: string; event: string }[];
  openQuestions: string[];
  tags: string[];
};

export const cases: MysteryCase[] = [
  {
    slug: "cicada-3301",
    title: "Cicada 3301",
    subtitle: "The puzzle that recruited the internet",
    category: "Cryptography",
    status: "Partially solved",
    statusTone: "amber",
    year: "2012–2014",
    readTime: "8 min investigation",
    summary: "A sequence of elaborate online puzzles used cryptography, steganography, literature and real-world clues. The organizers and ultimate purpose remain unconfirmed.",
    question: "Who created Cicada 3301, and what were they looking for?",
    overview: "In January 2012, an image posted online invited readers to find a hidden message. Solvers uncovered a chain of increasingly difficult challenges that moved between websites, cryptographic techniques and physical locations. Later puzzle rounds appeared in 2013 and 2014. The puzzles are documented; the identity, structure and purpose of the group behind them are not publicly established.",
    evidence: [
      { title: "The original 2012 image", detail: "A preserved copy of the image that began the first widely documented puzzle round. Treat reposts as copies and compare their provenance.", type: "Primary artifact", url: "https://web.archive.org/" },
      { title: "Community research archive", detail: "A starting point for comparing puzzle stages, solutions and surviving artifacts. Community-maintained material should be independently checked.", type: "Research archive", url: "https://www.reddit.com/r/cicada/" }
    ],
    theories: [
      { title: "A recruitment exercise", detail: "The puzzles may have been designed to identify people with strong cryptographic, technical or problem-solving skills. The organizers' identity and objective remain unverified.", confidence: "Plausible, unconfirmed" },
      { title: "An art or puzzle collective", detail: "The literary references and elaborate construction are also consistent with a private puzzle collective or artistic project.", confidence: "Possible" }
    ],
    timeline: [
      { date: "January 2012", event: "The first widely recognized puzzle image appears online." },
      { date: "2013", event: "A second major puzzle round is reported." },
      { date: "2014", event: "A further round introduces the Liber Primus material." },
      { date: "Today", event: "Some material remains unsolved publicly; attribution and purpose remain unconfirmed." }
    ],
    openQuestions: ["Who operated the accounts and infrastructure behind the puzzles?", "What was the intended purpose of the recruitment-like process?", "Which parts of the Liber Primus have a publicly verified solution?"],
    tags: ["Cryptography", "Online puzzles", "Recruitment", "2010s"]
  },
  {
    slug: "webdriver-torso",
    title: "Webdriver Torso",
    subtitle: "The YouTube channel full of rectangles",
    category: "Digital folklore",
    status: "Explained",
    statusTone: "green",
    year: "2013",
    readTime: "5 min investigation",
    summary: "A prolific YouTube channel uploaded thousands of short videos featuring colored rectangles and tones, triggering theories before its test-channel purpose became known.",
    question: "Why did a mysterious account upload so many abstract videos?",
    overview: "Webdriver Torso became a viral internet mystery because its repetitive videos looked like coded transmissions. The case is a useful example of how automated testing, platform behavior and limited context can create an apparent mystery. It is substantially explained, so this file focuses on how the story spread rather than presenting it as an active conspiracy.",
    evidence: [
      { title: "The channel itself", detail: "The videos are the primary artifacts. Compare upload patterns and video structure rather than relying on screenshots of commentary.", type: "Primary source", url: "https://www.youtube.com/@WebdriverTorso" },
      { title: "Contemporary reporting", detail: "Coverage from the period documents the public theories and subsequent explanation.", type: "Secondary source", url: "https://www.bbc.com/news/technology" }
    ],
    theories: [
      { title: "Automated video testing", detail: "The uploads were associated with Google's internal video-quality testing. This is the accepted broad explanation.", confidence: "Substantially established" },
      { title: "A hidden message", detail: "The geometric patterns inspired decoding theories, but no credible evidence established a secret broadcast.", confidence: "Unsupported" }
    ],
    timeline: [
      { date: "2013", event: "The channel's unusual uploads attract attention." },
      { date: "2014", event: "Online speculation grows and media coverage follows." },
      { date: "2014 onward", event: "The testing explanation becomes public." }
    ],
    openQuestions: ["Which details of the internal testing workflow were never publicly documented?", "How did the visual pattern encourage so many competing interpretations?"],
    tags: ["YouTube", "Automation", "Digital folklore", "Solved"]
  },
  {
    slug: "973-eht-namuh-973",
    title: "973-eht-namuh-973",
    subtitle: "A maze of strange pages and unanswered questions",
    category: "Lost websites",
    status: "Unverified",
    statusTone: "slate",
    year: "2000s web",
    readTime: "6 min investigation",
    summary: "A frequently discussed strange website remembered for cryptic text and unsettling imagery. The surviving record is fragmented, and many claims about its origin are repeated without clear provenance.",
    question: "Who created the site, and was there an intentional narrative?",
    overview: "This case is a reminder that an archived screenshot, a repost and an original website are not interchangeable evidence. The site has been discussed as an art project, an alternate-reality experience, a prank and other possibilities. This file deliberately treats those explanations as hypotheses until they can be tied to primary artifacts.",
    evidence: [
      { title: "Wayback Machine index", detail: "Search archived captures and record exact capture dates. A missing capture does not prove intentional deletion.", type: "Archive search", url: "https://web.archive.org/web/*/973-eht-namuh-973.com" },
      { title: "Community discussion", detail: "Use discussions to discover leads, not as proof of authorship or intent.", type: "Community lead", url: "https://www.reddit.com/r/InternetMysteries/" }
    ],
    theories: [
      { title: "An experimental art website", detail: "The unusual presentation may have been an intentionally constructed web-art experience. No creator attribution is established here.", confidence: "Possible" },
      { title: "An ARG or puzzle trail", detail: "Some visitors interpreted the site's structure as a puzzle, but a confirmed game framework has not been established.", confidence: "Unverified" }
    ],
    timeline: [
      { date: "2000s", event: "The website is reported to have circulated online." },
      { date: "Later years", event: "Screenshots and descriptions circulate in mystery communities." },
      { date: "Current research", event: "Original captures and creator attribution remain the key evidence gaps." }
    ],
    openQuestions: ["What is the earliest independently verifiable capture?", "Can original assets or source files be recovered?", "Is there any reliable evidence identifying the creator?"],
    tags: ["Lost websites", "Web archaeology", "Unverified"]
  },
  {
    slug: "lake-city-quiet-pills",
    title: "Lake City Quiet Pills",
    subtitle: "A forum thread that became an internet rabbit hole",
    category: "Online communities",
    status: "Disputed",
    statusTone: "amber",
    year: "2010s",
    readTime: "9 min investigation",
    summary: "A collection of online posts and interpretations developed into a story about a possible hidden network. The central claims remain disputed and should not be treated as established fact.",
    question: "What do the surviving posts actually demonstrate?",
    overview: "The Lake City Quiet Pills story is a case study in how forum fragments can be assembled into a compelling narrative. Researchers have proposed connections between usernames, posts and real-world events, but inference is not proof. This investigation separates the existence of public posts from claims about the people or activities behind them.",
    evidence: [
      { title: "Original discussion trail", detail: "Locate contemporaneous forum material and preserve exact URLs, timestamps and context before drawing conclusions.", type: "Primary-source lead", url: "https://www.reddit.com/r/InternetMysteries/" },
      { title: "Independent reporting and analysis", detail: "Compare independent accounts and distinguish sourced facts from repeated speculation.", type: "Research lead", url: "https://www.google.com/search?q=Lake+City+Quiet+Pills+investigation" }
    ],
    theories: [
      { title: "A coordinated hidden network", detail: "This interpretation connects fragments into a larger operation, but the connection requires stronger corroboration than pattern matching.", confidence: "Disputed" },
      { title: "Coincidental or misread forum activity", detail: "Some apparent connections may be coincidence, roleplay or incomplete context.", confidence: "Plausible alternative" }
    ],
    timeline: [
      { date: "2010s", event: "Forum posts later associated with the story circulate." },
      { date: "Following years", event: "Online researchers connect fragments and publish competing interpretations." },
      { date: "Current status", event: "The central narrative remains disputed; primary-source provenance is essential." }
    ],
    openQuestions: ["Which posts can be verified in their original context?", "Do independent sources corroborate the proposed connections?", "Which claims rely only on retrospective pattern matching?"],
    tags: ["Forums", "Online communities", "Disputed"]
  },
  {
    slug: "polybius",
    title: "Polybius",
    subtitle: "The arcade cabinet that may never have existed",
    category: "Internet folklore",
    status: "Likely fiction",
    statusTone: "slate",
    year: "1981 legend",
    readTime: "6 min investigation",
    summary: "A story about a mysterious arcade game allegedly appearing in Portland became a durable urban legend. Reliable contemporaneous evidence for the machine has not been established.",
    question: "Was Polybius based on a real arcade cabinet or built entirely as a legend?",
    overview: "Polybius is often presented as an unexplained historical event, but the evidence does not support treating the cabinet as a verified object. The story is better investigated as internet folklore: trace its earliest appearances, later embellishments and the way repetition gives an unsupported claim the appearance of documentation.",
    evidence: [
      { title: "Early online account", detail: "Trace the earliest discoverable versions of the story and distinguish contemporary records from later retellings.", type: "Historical lead", url: "https://web.archive.org/" },
      { title: "Folklore discussion", detail: "Community retellings are useful for studying how the legend changes, not for proving the machine existed.", type: "Community archive", url: "https://www.reddit.com/r/InternetMysteries/" }
    ],
    theories: [
      { title: "A modern urban legend", detail: "The lack of reliable contemporaneous documentation and the story's evolving details are consistent with an urban legend.", confidence: "Best-supported classification" },
      { title: "A real machine inspired the story", detail: "A real cabinet or local event may have inspired parts of the tale, but this has not been established.", confidence: "Unverified" }
    ],
    timeline: [
      { date: "1981 (claimed)", event: "The story places the alleged arcade sightings in Portland." },
      { date: "2000s", event: "The legend spreads through online retellings." },
      { date: "Today", event: "No reliable contemporaneous evidence has established the cabinet's existence." }
    ],
    openQuestions: ["What is the earliest verifiable appearance of the story?", "Which details were added by later retellings?", "Can any contemporary arcade records corroborate the claim?"],
    tags: ["Urban legend", "Arcade", "Folklore"]
  },
  {
    slug: "r-a858",
    title: "The r/a858 signal",
    subtitle: "A stream of cryptic posts with no accepted explanation",
    category: "Cryptography",
    status: "Unresolved",
    statusTone: "red",
    year: "2011 onward",
    readTime: "7 min investigation",
    summary: "A Reddit account posted long strings of apparently structured text. The material inspired decoding attempts, but no broadly accepted explanation resolves the entire archive.",
    question: "Are the repeated strings a code, an artwork, or something else?",
    overview: "The r/a858 archive is a useful investigation because the posts themselves can be collected and analyzed. The challenge is to distinguish reproducible patterns from interpretations that appear only after a theory is proposed. A valid solution should explain more than a small hand-picked sample.",
    evidence: [
      { title: "Original subreddit", detail: "Start with the surviving posts and record exact post IDs, timestamps and text. Avoid relying only on copied compilations.", type: "Primary source", url: "https://www.reddit.com/r/a858/" },
      { title: "Community research", detail: "Compare proposed decoding methods against the full available dataset, including failed attempts.", type: "Research lead", url: "https://www.reddit.com/search/?q=r%2Fa858" }
    ],
    theories: [
      { title: "An encoded message or data stream", detail: "Repeated structures invite cryptographic analysis, but a complete independently reproducible decode is not established.", confidence: "Open hypothesis" },
      { title: "Generative art or experimental posting", detail: "The stream may be an artistic or procedural project rather than a conventional cipher.", confidence: "Open hypothesis" }
    ],
    timeline: [
      { date: "2011", event: "The account's unusual posts attract attention." },
      { date: "Following years", event: "Users publish analyses and competing decoding attempts." },
      { date: "Current status", event: "No generally accepted full explanation has emerged." }
    ],
    openQuestions: ["Can any decoding method explain the entire dataset?", "Are there stable patterns across post timestamps and content?", "Is there a verifiable link between the account and an external source?"],
    tags: ["Reddit", "Cryptography", "Unresolved"]
  }
];

export const getCase = (slug: string) => cases.find((item) => item.slug === slug);