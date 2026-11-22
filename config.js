/**
 * ACADEMY CONFIGURATION & SINGLE SOURCE OF TRUTH
 * Ex-Risaldar Major M. K. Pawar NDA & Defence Academy, Pune
 * Domain: https://mkpawarnda.com
 *
 * NOTE ON VERIFICATION:
 * All unverified claims MUST have `verified: false`.
 * These automatically render a brass "TO CONFIRM" stamp until officially documented.
 */

export const CONFIG = {
  meta: {
    siteTitle: "Ex-Risaldar Major M. K. Pawar NDA & Defence Academy | Pune",
    shortTitle: "M. K. Pawar NDA Academy",
    tagline: "PREPARE • TRAIN • LEAD",
    supportLine: "Academic Preparation | Physical Training | Personality Development",
    dossierCode: "MKP-NDA-PUN-2026",
    established: "2026",
    domain: "https://mkpawarnda.com",
    selectionDisclaimer: "Selection is decided solely by UPSC, Services Selection Boards (SSBs), and competent Armed Forces medical boards. The Academy provides preparatory guidance, academic coaching, and physical conditioning."
  },

  contact: {
    phone: "8669099430",
    phoneDisplay: "+91 86690 99430",
    whatsapp: "918669099430",
    whatsappPrefilled: "Jai Hind Sir, I would like to enquire about admission to the M. K. Pawar NDA & Defence Academy residential program.",
    locationName: "Narhe, Pune, Maharashtra",
    coordinates: "18°26'55\"N 73°49'32\"E",
    email: "", // Empty placeholder until officially configured
    fullAddress: "Narhe Campus, Pune, Maharashtra, India",
    googleMapsEmbedUrl: "", // Empty placeholder
    socialLinks: {
      instagram: "",
      youtube: "",
      facebook: "",
      telegram: ""
    }
  },

  leadership: {
    founderDirector: {
      name: "Prof. Ravindra Pawar",
      role: "Founder & Academic Director",
      background: "Director, Kota Rankers Point, Pune",
      experienceYears: 17,
      instituteRunningYears: "10+",
      curriculumExpertise: ["Kota (Rajasthan)", "Madhya Pradesh", "Chhattisgarh", "Maharashtra State Board & CBSE"],
      pledge: "Aapka Baccha Meri Zimmedari Hai.",
      pledgeHindi: "आपका बच्चा मेरी ज़िम्मेदारी है।",
      signOff: "Jai Hind!"
    },
    memorialTribute: {
      honoree: "Ex-Risaldar Major M. K. Pawar",
      epitaph: "A Soldier. A Father. A Blessing.",
      relationship: "In loving memory of the founder's father. This academy is named as a living memorial to his service and ethos.",
      regiment: "61st Cavalry (Armoured Corps)",
      recruitmentCenter: "Jaipur",
      specialization: "Horse Riding Instructor & Equestrian Mentor",
      serviceNote: "Memorial tribute only — not active faculty or administration."
    },
    lineage: {
      generation1: {
        title: "The Great War Era",
        relation: "Grandfather",
        regiment: "Bombay Engineering Group (BEG)",
        force: "British Indian Army",
        era: "First World War Era",
        honourAward: "Honoured with 85 acres of land in Sangli district for gallant service",
        verified: true,
        illustrativeCaption: "Illustrative archival image representing BEG military engineering traditions."
      },
      generation2: {
        title: "The Cavalry Spirit",
        relation: "Father",
        honoree: "Ex-Risaldar Major M. K. Pawar",
        regiment: "61st Cavalry (Armoured Corps)",
        recruitment: "Recruited at Jaipur",
        specialty: "Renowned Horse Riding Instructor",
        verified: true,
        illustrativeCaption: "Illustrative image depicting the ceremonial cavalry saddle, riding boots, and military headgear."
      },
      generation3: {
        title: "The Classroom & Academy",
        relation: "Founder & Son",
        name: "Prof. Ravindra Pawar",
        role: "Founder & Director",
        background: "Kota Rankers Point & Pune Academic Leadership",
        focus: "Bridging rigorous academic science with military personality training.",
        verified: true,
        illustrativeCaption: "Illustrative documentary photography of structured classroom instruction."
      }
    }
  },

  conflictingFamilyRecords: {
    // KEPT INTERNAL & UNPUBLISHED AS PER EDITORIAL INSTRUCTIONS
    fatherServiceDurationVariants: [
      "Variant A: 31 years of military service",
      "Variant B: 1 year training + 3 years active service"
    ],
    fatherRankWordingVariants: ["Ex-Risaldar Major", "Risaldar"],
    grandfatherRank: "To be verified against military archives",
    armyNumber: "Unpublished - pending official record verification",
    postings: "Unpublished - pending official service record release"
  },

  coreValues: [
    { title: "Discipline", hindi: "अनुशासन", desc: "Military precision in daily routine, study schedules, and physical regimen." },
    { title: "Honesty", hindi: "सत्यनिष्ठा", desc: "Absolute integrity in academics, personal conduct, and peer fellowship." },
    { title: "Courage", hindi: "साहस", desc: "Mental resilience to face challenging exams and grueling obstacle courses." },
    { title: "Rashtra Bhakti", hindi: "राष्ट्रभक्ति", desc: "Unwavering devotion to national service in the Armed Forces of India." }
  ],

  courses: [
    {
      id: "nda",
      code: "FILE 01-A",
      title: "NDA Foundation & Written Batch",
      target: "Class 11, 12 & 12th Passed Cadets",
      duration: "1 Year / 2 Year Residential Integrated",
      exam: "UPSC NDA & NA Examination",
      curriculum: ["Mathematics (300 Marks)", "General Ability Test (GAT - 600 Marks)", "Daily Physical Training", "SSB Grooming"],
      heroTile: true,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "ssb",
      code: "FILE 01-B",
      title: "SSB Personality & Interview Guidance",
      target: "NDA, CDS, AFCAT & Direct Entry Call-letter holders",
      duration: "Intensive 14-Day Module / Regular Weekend Batches",
      exam: "Services Selection Board (SSB 5-Day Testing)",
      curriculum: ["Screening (OIR + PPDT)", "Psychological Battery (TAT, WAT, SRT, SD)", "GTO Obstacle Ground Drill", "Personal Interview Mock Panels"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "cds",
      code: "FILE 02-A",
      title: "CDS (Combined Defence Services)",
      target: "Graduating College Students & Graduates",
      duration: "6 Months / 1 Year",
      exam: "UPSC CDS Examination (IMA, OTA, INA, AFA)",
      curriculum: ["Elementary Mathematics", "English Language & Comprehension", "General Knowledge & Current Affairs", "SSB Orientation"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "afcat",
      code: "FILE 02-B",
      title: "AFCAT (Air Force Common Admission Test)",
      target: "Graduates aspiring for Indian Air Force Flying & Ground Duty",
      duration: "6 Months Intensive",
      exam: "IAF AFCAT Examination & EKT",
      curriculum: ["General Awareness", "Verbal Ability in English", "Numerical Ability", "Reasoning & Military Aptitude Test"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "imu-cet",
      code: "FILE 03-A",
      title: "IMU-CET & Merchant Navy Guidance",
      target: "Class 12th PCM Aspirants",
      duration: "1 Year Integrated / Crash Course",
      exam: "Indian Maritime University Common Entrance Test",
      curriculum: ["Physics, Chemistry & Mathematics", "English & General Knowledge", "General Aptitude", "Sponsorship Interview Prep"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "jee",
      code: "FILE 03-B",
      title: "JEE Main & Advanced Integrated",
      target: "Class 11 & 12 Science Aspirants (Dual Technical Route)",
      duration: "2-Year Integrated Residential Program",
      exam: "NTA JEE Main / JEE Advanced & 10+2 TES Army Entry",
      curriculum: ["Kota Rankers Point Proven Science Pedagogy", "Physics & Mathematics Mastery", "Daily Problem Practice (DPP)", "All-India Testing Series"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    },
    {
      id: "cet",
      code: "FILE 03-C",
      title: "MHT-CET & State Engineering Batch",
      target: "Maharashtra State Board & CBSE Students",
      duration: "1 Year / 2 Year Module",
      exam: "MHT-CET Engineering & Technology",
      curriculum: ["Physics & Mathematics High-Yield Problem Solving", "Chemistry Speed Modules", "Speed & Accuracy Mock Exams"],
      heroTile: false,
      verified: true,
      fees: { value: "Contact admissions office", verified: false }
    }
  ],

  facilities: [
    { name: "Cadet Residential Dormitories", spec: "Segregated iron beds, individual study desks, footlockers", verified: false },
    { name: "Regimental Mess & Nutrition", spec: "Balanced high-protein cadet diet planned for physical endurance", verified: false },
    { name: "Obstacle Course (GTO Ground)", spec: "Tarzan swing, rope climbing, tiger leap, balance beams", verified: false },
    { name: "Digital & Scientific Classrooms", spec: "Audio-visual projection, acoustics, Kota methodology", verified: false },
    { name: "Standard 400m Running Track", spec: "Red soil stamina training circuit", verified: false },
    { name: "SSB Group Discussion Chamber", spec: "Circular conference layout with digital recording", verified: false },
    { name: "Medical & First Aid Post", spec: "Routine health monitoring and sports injury management", verified: false },
    { name: "Library & Current Affairs Reading Room", spec: "Military periodicals, defence yearbooks, competitive journals", verified: false }
  ],

  routine0530: [
    { time: "05:00", activity: "First Bugle (Stand-To & Wash)", desc: "Cadets prepare gear, uniforms, and inspection shoes.", verified: false },
    { time: "05:30", activity: "Reveille & Ground Muster", desc: "Fall in at the main parade ground for attendance and warm-up.", verified: false },
    { time: "06:00 - 07:15", activity: "Physical Training & Cross-Country", desc: "Calisthenics, distance running, interval sprints, and obstacle drills.", verified: false },
    { time: "07:30 - 08:15", activity: "Cadet Mess Breakfast", desc: "High-protein breakfast, milk, eggs/sprouts, nuts, and hydration.", verified: false },
    { time: "08:30 - 13:00", activity: "Academic Block 1 (Maths & Science)", desc: "Rigorous lecture sessions, concept derivation, and problem-solving.", verified: false },
    { time: "13:15 - 14:00", activity: "Cadet Lunch & Regimental Rest", desc: "Nutritious balanced lunch followed by brief cognitive rest.", verified: false },
    { time: "14:15 - 16:30", activity: "Academic Block 2 (GAT, English & History)", desc: "General ability, UPSC previous year question workshops, current affairs analysis.", verified: false },
    { time: "16:45 - 18:00", activity: "Obstacle Course / Sports / Drill", desc: "SSB group tasks, basketball/volleyball, drill movement.", verified: false },
    { time: "18:30 - 20:30", activity: "Supervised Self-Study & DPP", desc: "Mandatory quiet hours: solving daily practice problem sheets.", verified: false },
    { time: "20:45 - 21:30", activity: "Cadet Dinner & News Debrief", desc: "Evening meal and 15-minute national security briefing.", verified: false },
    { time: "21:45", activity: "Roll Call & Inspection", desc: "Final verification of quarters, personal kit, and schedule for dawn.", verified: false },
    { time: "22:00", activity: "Lights Out", desc: "Sound sleep for physical recovery and cognitive retention.", verified: false }
  ],

  // EDITORIAL FLAGS (Controls visibility of sections adhering to Honesty Rules)
  flags: {
    showFees: false,           // Fees require direct counseling based on stream
    showResults: false,        // New institution: honest empty state "Verified results will be published here"
    showHostel: true,
    showArmyNumber: false,     // Unverified military archive record
    showFaculty: false,        // Faculty names to be verified on deployment
    showTestimonials: false    // Zero fake testimonials!
  },

  events: [], // Config driven: empty state handled cleanly

  testimonials: [] // Pure empty state: NO fake reviews or ratings
};

// Expose globally for vanilla browser scripts
if (typeof window !== "undefined") {
  window.ACADEMY_CONFIG = CONFIG;
}
