export const classData = [
  /* Initial thesis of: What could possibly be JSON-ified regarding class content
  Some of these things can be "mapped" out from arrays/lists of content
  Course Number
  Class Title
  Class Summary
  Class Reviews
  Professors Names
  Credit Hours
  Career Tracks
  Prerequisite Classes
  Resources
  Rating

  *all subject to change during backend development
  */
    // Template
  // {
  //   id: #,
  //   courseNo: #,
  //   classTitle: "",
  //   classSummary: "",
  //   reviews: "",
  //   professors: ["None Specified"],
  //   credit_hours: 4,
  //   career_tracks: ["None Specified"],
  //   prereqs: ["None Specified"],
  //   resources: ["None Specified"],
  //   rating: "5",
  // },

  // 100-level courses
  {
    id: 1,
    courseNo: 111,
    classTitle: "Program Design I",
    classSummary: "Introduction to programming: control structures; variables and data types; problem decomposition and procedural programming; input and output; aggregate data structures including arrays; programming exercises.",
    reviews: "Intro to basic programming with Python. Weed out class, if you pass Reckinger's material with at least a B, you will be in a good spot for 141.",
    professors: ["Mitchell Theys"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["None Specified"],
    resources: ["None Specified"],
    rating: "4",
  },
  {
    id: 2,
    courseNo: 141,
    classTitle: "Program Design II",
    classSummary: "Data abstraction and modular design; recursion; lists and stacks; dynamic memory allocation; file manipulation; programming exercises. Course Information: 3 hours. Previously listed as CS 102. Extensive computer use required.",
    reviews: "Intro to more advanced programming with C++. Teaches concepts such as pointers, memory management, etc. Doing well in this class will build the foundation for 211 and 251.",
    professors: ["Mitchell Theys"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 111, MATH 180"],
    resources: ["None Specified"],
    rating: "4",
  },
  {
    id: 3,
    courseNo: 151,
    classTitle: "Mathematical Foundations of Computing",
    classSummary: "Discrete mathematics concepts fundamental to computing: propositional logic, predicates and quantifiers; proofs; sets; recursive definitions and induction; functions, relations and graphs; combinatorics and discrete probability; applications.",
    reviews: "Logic and Proof class. Very chill class regardless of prof.",
    professors: ["Daniel Ayala, Zoa Katok"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 111, MATH 180"],
    resources: ["None Specified"],
    rating: "4",
  },

  //200-level courses - Still need to put in reviews for these
  {
    id: 4,
    courseNo: 211,
    classTitle: "Programming Practicum",
    classSummary: "Software development tools and practices; debugging and testing; advanced language features; standard libraries; code management. ",
    reviews: "",
    professors: [""],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141"],
    resources: ["None Specified"],
    rating: "5",
  },
  {
    id: 5,
    courseNo: 251,
    classTitle: "Data Structures",
    classSummary: "Design, usage and analysis of data structures: review of lists, stacks and queues; hash tables, priority queues, search trees, introduction to graphs; searching and sorting; runtime analysis; programming projects and lab exercises.",
    reviews: "",
    professors: ["None Specified"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141", "CS 151"],
    resources: ["None Specified"],
    rating: "5",
  },
  {
    id: 6,
    courseNo: 261,
    classTitle: "Machine Organization",
    classSummary: "Data representation and computer arithmetic; machine language; addressing; memory hierarchy; subroutines; data structures; processor architecture: hardware components, pipelining.",
    reviews: "",
    professors: ["None Specified"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 211"],
    resources: ["None Specified"],
    rating: "5",
  },
  {
    id: 7,
    courseNo: 277,
    classTitle: "Technical and Professional Communication in Computer Science",
    classSummary: "Communication skills for computing students and professionals in various contexts: technical writing, portfolios, job interviews, demos, sales, with speech organization, visuals, and delivery.",
    reviews: "",
    professors: ["None Specified"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141"],
    resources: ["None Specified"],
    rating: "5",
  },

  // Non-CS courses
  {
    id: 16,
    courseNo: 100,
    classTitle: "Engineering Success Seminar for Freshmen",
    classSummary: "A general orientation course on skills pertinent to students for successful completion of their undergraduate degree.",
    reviews: "",
    professors: ["None Specified"],
    credit_hours: 1,
    career_tracks: ["None Specified"],
    prereqs: ["None"],
    resources: ["None Specified"],
    rating: "5",
  },
  {
    id: 17,
    courseNo: 180,
    classTitle: "Calculus I",
    classSummary: "Differentiation, curve sketching, maximum-minimum problems, related rates, mean-value theorem, antiderivative, Riemann integral, logarithm, and exponential functions.",
    reviews: "",
    professors: ["None Specified"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["Credit in MATH 165 or MATH 170", "MATH 121 or Department Placement Test"],
    resources: ["None Specified"],
    rating: "5",
  },
  //300-level courses
  //400-level courses
  
  
];
