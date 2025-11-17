export const classData = [
  /* Initial thesis of: What could possibly be JSON-ified regarding class content
  Some of these things can be "mapped" out from arrays/lists of content
  Course Number
  Class Title
  Class Summary
  Class Reviews
  Current Professors
  Credit Hours
  Last Semester Taught
  Difficulty
  Career Tracks
  Prerequisite Classes
  Resources

  *all subject to change during backend development
  */
    // Template
  // {
  //   id: #,
  //   courseNo: #,
  //   classTitle: "",
  //   classSummary: "",
  //   reviews: "N/A",
  //   professors: ["None Specified"],
  //   credit_hours: 4,
  //   career_tracks: ["None Specified"],
  //   prereqs: ["N/A"],
  //   resources: ["N/A"],
  //   difficulty: 5,
  // },

  // Extra data point that can be used when class electives are added
  // Help show when certain classes are offered
//   Last taught: Spring 25, Fall 24
// Currently taught: Yes

  // 100-level courses
  {
    id: 1,
    courseNo: 111,
    classTitle: "Program Design I",
    classSummary: "Introduction to programming: control structures; variables and data types; problem decomposition and procedural programming; input and output; aggregate data structures including arrays; programming exercises.",
    reviews: "Intro to basic programming with Python. Weed out class, if you pass Reckinger's material with at least a B, you will be in a good spot for 141.",
    professors: ["Franke", "Gonzalo Bello"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["N/A"],
    resources: ["N/A"],
    difficulty: 4,
  },
  {
    id: 2,
    courseNo: 141,
    classTitle: "Program Design II",
    classSummary: "Data abstraction and modular design; recursion; lists and stacks; dynamic memory allocation; file manipulation; programming exercises. Course Information: 3 hours. Previously listed as CS 102. Extensive computer use required.",
    reviews: "Intro to more advanced programming with C++. Teaches concepts such as pointers, memory management, etc. Doing well in this class will build the foundation for 211 and 251.",
    professors: ["Zhaochen Gu"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 111", "MATH 180"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 3,
    courseNo: 151,
    classTitle: "Mathematical Foundations of Computing",
    classSummary: "Discrete mathematics concepts fundamental to computing: propositional logic, predicates and quantifiers; proofs; sets; recursive definitions and induction; functions, relations and graphs; combinatorics and discrete probability; applications.",
    reviews: "Logic and Proof class. Very chill class regardless of prof.",
    professors: ["Drishika Dey", "Omar Ibrahim"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 111", "MATH 180"],
    resources: ["N/A"],
    difficulty: 2,
  },

  //200-level courses - Still need to put in reviews for these
  {
    id: 4,
    courseNo: 211,
    classTitle: "Programming Practicum",
    classSummary: "Software development tools and practices; debugging and testing; advanced language features; standard libraries; code management. ",
    reviews: "Learning basic data structures through coding them up in C and applying them. Projects take up a lot of time so plan schedule accordingly and don't keep them to the last day.",
    professors: ["Mark Hodges", "Scott Reckinger"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 5,
    courseNo: 251,
    classTitle: "Data Structures",
    classSummary: "Design, usage and analysis of data structures: review of lists, stacks and queues; hash tables, priority queues, search trees, introduction to graphs; searching and sorting; runtime analysis; programming projects and lab exercises.",
    reviews: "Learning data structures through using them as the base in C++ to build more advanced programs. Projects take up a lot of time so plan schedule accordingly and don't keep them to the last day.",
    professors: ["Daniel Ayala", "Mitchell Theys"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141", "CS 151"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 6,
    courseNo: 261,
    classTitle: "Machine Organization",
    classSummary: "Data representation and computer arithmetic; machine language; addressing; memory hierarchy; subroutines; data structures; processor architecture: hardware components, pipelining.",
    reviews: "Binary, Assembly, and low-level stuff. Not much actual coding, more understanding of concepts. Probably the hardest class below 300.",
    professors: ["Adam Koehler"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 211"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 7,
    courseNo: 277,
    classTitle: "Technical and Professional Communication in Computer Science",
    classSummary: "Communication skills for computing students and professionals in various contexts: technical writing, portfolios, job interviews, demos, sales, with speech organization, visuals, and delivery.",
    reviews: "Communication, networking (LinkedIn), portfolio building (GitHub), resume writing, and interview preparation (LeetCode etc). This is a very easy class with a generous number of drops and make ups that prepares you to start working in the industry. Perfect to take in the spring semester to start applying for internships in summer.",
    professors: ["Jordan Carson", "Cody Cranch"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 141"],
    resources: ["N/A"],
    difficulty: 1,
  },
  //300-level courses
  {
    id: 8,
    courseNo: 301,
    classTitle: "Languages and Automata",
    classSummary: "Regular sets and finite automata. Context-free languages and push-down automata. Parsing. Computability theory including Turing machines and decidability.",
    reviews: "Builds off of 151 as another theory class with automata and state machines. Concepts are more complex than 151's, but not impossible. Will need to know how to write proofs from 151 unless you have DasGupta.",
    professors: ["Zoa Katok", "Gonzalo Bello"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 151", "CS 251"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 9,
    courseNo: 341,
    classTitle: "Programming Language Design and Implementation",
    classSummary: "Programming language paradigms, design and implementation: syntax and semantics; parsing; runtime systems; control; data types; subroutines and exceptions; data and procedural abstraction; functional programming. ",
    reviews: "SQL, Python, F# (database querying and functional programming). Concept-wise, this class is pretty easy, most people manage to finish the hw and projects with high grades. The exams are tricky since not enough time given unless your understanding of the material is solid.",
    professors: ["Shanon Reckinger"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 211", "CS 251"],
    resources: ["N/A"],
    difficulty: 2,
  },
  {
    id: 10,
    courseNo: 342,
    classTitle: "Software Design",
    classSummary: "Software design principles and practices: Object-oriented design; design patterns; software reuse; testing; event driven programming and concurrency; graphical user interface design and development; Team development.",
    reviews: "Object-oriented programming using Java. Honestly the best class in the 300s for SWE. Changed my perspective on planning how to write the code and made it more organized.",
    professors: ["Mark Hallenbeck"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 211", "CS 251"],
    resources: ["N/A"],
    difficulty: 3,
  },
  {
    id: 11,
    courseNo: 361,
    classTitle: "Systems Programming",
    classSummary: "Study of computer systems emphasizing impact on application level programming. Virtual memory and memory management; code optimization; system-level I/O; concurrency: processes, threads, synchronization; introduction to network programming.",
    reviews: "Focuses on low-level computer software stuff with harder theory, building off of 261. Hands down the hardest CS class at UIC below 400. Expect to spend a lot of time per week for the homework/projects and understanding the material.",
    professors: ["George Maratos"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 261"],
    resources: ["N/A"],
    difficulty: 5,
  },
  {
    id: 12,
    courseNo: 362,
    classTitle: "Computer Design",
    classSummary: "Computer hardware building blocks. logic gates; combinational circuits; arithmetic circuits; flip flops and sequential circuits; registers and memory; CPU design; I/O design.",
    reviews: "Arduino coding, more of an Electrical Engineering class tbh. Teaches about logic gates and low level hardware stuff. If you have Diaz, do good on the midterm and you only need to care about your project after that, can skip the final.",
    professors: ["Evan McCarty"],
    credit_hours: 4,
    career_tracks: ["None Specified"],
    prereqs: ["CS 261"],
    resources: ["N/A"],
    difficulty: 2,
  },
  {
    id: 13,
    courseNo: 377,
    classTitle: "Ethical Issues in Computing",
    classSummary: "Communication skills for computing professionals: presentation organization, visual aides, delivery techniques, argument support. Ethical and societal issues in computing: privacy, intellectual property and ownership, crime.",
    reviews: "Ethics class. Definitely take Clayville over Burton if you want easier life.",
    professors: ["J Bandy", "E Burton", "K Clayville"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 251"],
    resources: ["N/A"],
    difficulty: 1,
  },

  //400-level courses
  {
    id: 14,
    courseNo: 401,
    classTitle: "Computer Algorithms I",
    classSummary: "Design and analysis of computer algorithms. Divide-and-conquer, dynamic programming, greedy method, backtracking. Algorithms for sorting, searching, graph computations, pattern matching, NP-complete problems.",
    reviews: "Algorithms, the second hardest required class in UIC CS. Take DasGupta if possible, otherwise you will suffer a lot.",
    professors: ["Reyzin", "A Kshemkalyani", "DasGupta", "T Sidiropolous"],
    credit_hours: 3,
    career_tracks: ["None Specified"],
    prereqs: ["CS 211"],
    resources: ["N/A"],
    difficulty: 5,
  },
  {
    id: 15,
    courseNo: 499,
    classTitle: "Professional Development Seminar",
    classSummary: "Graduating seniors will be provided with information regarding future career paths and will provide information regarding the program to be used for assessment purposes. Students take the CS Major Field Exam as part of this course.",
    reviews: "N/A",
    professors: ["John Bell"],
    credit_hours: 0,
    career_tracks: ["None Specified"],
    prereqs: ["N/A"],
    resources: ["N/A"],
    difficulty: 1,
  },



  // Non-CS courses
  // {
  //   id: 16,
  //   courseNo: 100,
  //   classTitle: "Engineering Success Seminar for Freshmen",
  //   classSummary: "A general orientation course on skills pertinent to students for successful completion of their undergraduate degree.",
  //   reviews: "N/A",
  //   professors: ["None Specified"],
  //   credit_hours: 1,
  //   career_tracks: ["None Specified"],
  //   prereqs: ["None"],
  //   resources: ["N/A"],
  //   difficulty: "5",
  // },
  // {
  //   id: 17,
  //   courseNo: 180,
  //   classTitle: "Calculus I",
  //   classSummary: "Differentiation, curve sketching, maximum-minimum problems, related rates, mean-value theorem, antiderivative, Riemann integral, logarithm, and exponential functions.",
  //   reviews: "N/A",
  //   professors: ["None Specified"],
  //   credit_hours: 4,
  //   career_tracks: ["None Specified"],
  //   prereqs: ["Credit in MATH 165 or MATH 170", "MATH 121 or Department Placement Test"],
  //   resources: ["N/A"],
  //   difficulty: "5",
  // },

  
  
];
