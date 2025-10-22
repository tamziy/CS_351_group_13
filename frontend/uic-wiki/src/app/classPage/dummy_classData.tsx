export const classData = [
  /* Initial thesis of: What could possibly be JSON-ified regarding class content
  Some of these things can be "mapped" out from arrays/lists of content
  Course Number
  Class Title
  Class Summary
  Professors Names
  Credit Hours
  Career Tracks
  Prerequisite Classes
  Resources
  Rating

  *all subject to change during backend development
  */
    // Example
  // {
  //   courseNo: 251,
  //   classTitle: "Data Structures",
  //   classSummary: "",
  //   professors: ["Ayala, Koehler, Theys, Bello, Katok, Troy, Reed, Buy, Grechanik"],
  //   credit_hours: "",
  //   career_tracks: [],
  //   prereqs: [],
  //   resources: [],
  //   rating: "4",
  // },

  // Non-CS courses

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

  //200-level courses
  //300-level courses
  //400-level courses
  
  
];
