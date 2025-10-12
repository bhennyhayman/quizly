
type Topic = "mathematics" | "science" | "english" | "literature"
type DifficultyLevel = 'beginner' | 'intermediate' | 'hard';

interface Question {
  question: string;
  possibleSolutions: string[];
  rightAnswer: string;
  level: DifficultyLevel;
}

type QuestionsData = {
  [key in Topic]: Question[];
};


const questions:QuestionsData = {
  mathematics: [
    {
      "question": "What is 2 + 2?",
      "possibleSolutions": ["3", "4", "5", "6"],
      "rightAnswer": "4",
      "level": "beginner"
    },
    {
      "question": "What is 5 * 3?",
      "possibleSolutions": ["8", "15", "12", "10"],
      "rightAnswer": "15",
      "level": "beginner"
    },
    {
      "question": "What is 12 ÷ 4?",
      "possibleSolutions": ["2", "4", "3", "6"],
      "rightAnswer": "3",
      "level": "beginner"
    },
    {
      "question": "What is 7 - 3?",
      "possibleSolutions": ["5", "3", "4", "10"],
      "rightAnswer": "4",
      "level": "beginner"
    },
    {
      "question": "What is 9 * 2?",
      "possibleSolutions": ["16", "18", "20", "11"],
      "rightAnswer": "18",
      "level": "beginner"
    },
    {
      "question": "What is 15 + 7?",
      "possibleSolutions": ["21", "22", "23", "24"],
      "rightAnswer": "22",
      "level": "beginner"
    },
    {
      "question": "What is 20 ÷ 5?",
      "possibleSolutions": ["3", "4", "5", "6"],
      "rightAnswer": "4",
      "level": "beginner"
    },
    {
      "question": "What is 8 * 4?",
      "possibleSolutions": ["24", "28", "32", "36"],
      "rightAnswer": "32",
      "level": "beginner"
    },
    {
      "question": "What is 25 - 9?",
      "possibleSolutions": ["14", "15", "16", "17"],
      "rightAnswer": "16",
      "level": "beginner"
    },
    {
      "question": "What is 6 * 7?",
      "possibleSolutions": ["42", "36", "48", "54"],
      "rightAnswer": "42",
      "level": "beginner"
    },
    {
      "question": "Solve for x: 2x + 5 = 15",
      "possibleSolutions": ["x = 5", "x = 10", "x = 7.5", "x = 8"],
      "rightAnswer": "x = 5",
      "level": "intermediate"
    },
    {
      "question": "What is the area of a rectangle with length 8 and width 5?",
      "possibleSolutions": ["13", "26", "40", "45"],
      "rightAnswer": "40",
      "level": "intermediate"
    },
    {
      "question": "What is 3² + 4²?",
      "possibleSolutions": ["7", "12", "25", "49"],
      "rightAnswer": "25",
      "level": "intermediate"
    },
    {
      "question": "What is 15% of 200?",
      "possibleSolutions": ["15", "25", "30", "35"],
      "rightAnswer": "30",
      "level": "intermediate"
    },
    {
      "question": "Simplify: (2x + 3)(x - 1)",
      "possibleSolutions": ["2x² + x - 3", "2x² - x - 3", "2x² + 5x - 3", "2x² - 5x - 3"],
      "rightAnswer": "2x² + x - 3",
      "level": "intermediate"
    },
    {
      "question": "What is the value of π (pi) to two decimal places?",
      "possibleSolutions": ["3.12", "3.14", "3.16", "3.18"],
      "rightAnswer": "3.14",
      "level": "intermediate"
    },
    {
      "question": "Solve: 3(x - 2) = 12",
      "possibleSolutions": ["x = 4", "x = 5", "x = 6", "x = 7"],
      "rightAnswer": "x = 6",
      "level": "intermediate"
    },
    {
      "question": "What is the square root of 144?",
      "possibleSolutions": ["11", "12", "13", "14"],
      "rightAnswer": "12",
      "level": "intermediate"
    },
    {
      "question": "Calculate: 7² - 5²",
      "possibleSolutions": ["14", "20", "24", "28"],
      "rightAnswer": "24",
      "level": "intermediate"
    },
    {
      "question": "What is 3/4 of 100?",
      "possibleSolutions": ["65", "70", "75", "80"],
      "rightAnswer": "75",
      "level": "intermediate"
    },
    {
      "question": "Find the derivative of f(x) = 3x² + 2x - 1",
      "possibleSolutions": ["6x + 2", "3x + 2", "6x - 1", "3x² + 2"],
      "rightAnswer": "6x + 2",
      "level": "hard"
    },
    {
      "question": "Solve the quadratic equation: x² - 5x + 6 = 0",
      "possibleSolutions": ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = -1, -6"],
      "rightAnswer": "x = 2, 3",
      "level": "hard"
    },
    {
      "question": "What is the integral of 2x dx?",
      "possibleSolutions": ["x²", "x² + C", "2x²", "2x² + C"],
      "rightAnswer": "x² + C",
      "level": "hard"
    },
    {
      "question": "Calculate the limit: lim(x→2) (x² - 4)/(x - 2)",
      "possibleSolutions": ["0", "2", "4", "Undefined"],
      "rightAnswer": "4",
      "level": "hard"
    },
    {
      "question": "What is the value of sin(90°)?",
      "possibleSolutions": ["0", "0.5", "1", "√2/2"],
      "rightAnswer": "1",
      "level": "hard"
    }
  ],
  english: [
    {
      "question": "Which word is a noun?",
      "possibleSolutions": ["run", "beautiful", "book", "quickly"],
      "rightAnswer": "book",
      "level": "beginner"
    },
    {
      "question": "Choose the correct spelling:",
      "possibleSolutions": ["recieve", "receive", "recieve", "receeve"],
      "rightAnswer": "receive",
      "level": "beginner"
    },
    {
      "question": "What is the past tense of 'go'?",
      "possibleSolutions": ["goed", "went", "gone", "going"],
      "rightAnswer": "went",
      "level": "beginner"
    },
    {
      "question": "Which is a vowel?",
      "possibleSolutions": ["b", "c", "a", "t"],
      "rightAnswer": "a",
      "level": "beginner"
    },
    {
      "question": "What is the plural of 'child'?",
      "possibleSolutions": ["childs", "children", "childes", "childern"],
      "rightAnswer": "children",
      "level": "beginner"
    },
    {
      "question": "Which word is an adjective?",
      "possibleSolutions": ["happily", "happiness", "happy", "happen"],
      "rightAnswer": "happy",
      "level": "beginner"
    },
    {
      "question": "Choose the correct article: ___ apple",
      "possibleSolutions": ["a", "an", "the", "this"],
      "rightAnswer": "an",
      "level": "beginner"
    },
    {
      "question": "What is the opposite of 'hot'?",
      "possibleSolutions": ["warm", "cold", "cool", "freezing"],
      "rightAnswer": "cold",
      "level": "beginner"
    },
    {
      "question": "Which sentence is correct?",
      "possibleSolutions": ["She don't like pizza", "She doesn't likes pizza", "She doesn't like pizza", "She don't likes pizza"],
      "rightAnswer": "She doesn't like pizza",
      "level": "beginner"
    },
    {
      "question": "What is the synonym of 'big'?",
      "possibleSolutions": ["small", "large", "tiny", "little"],
      "rightAnswer": "large",
      "level": "beginner"
    },
    {
      "question": "Identify the preposition: 'The book is on the table.'",
      "possibleSolutions": ["book", "is", "on", "table"],
      "rightAnswer": "on",
      "level": "intermediate"
    },
    {
      "question": "Which sentence is in passive voice?",
      "possibleSolutions": ["The cat chased the mouse", "The mouse was chased by the cat", "The cat is chasing the mouse", "The mouse chases the cat"],
      "rightAnswer": "The mouse was chased by the cat",
      "level": "intermediate"
    },
    {
      "question": "What is the meaning of 'benevolent'?",
      "possibleSolutions": ["cruel", "kind", "selfish", "ignorant"],
      "rightAnswer": "kind",
      "level": "intermediate"
    },
    {
      "question": "Choose the correct conditional: 'If I ___ you, I would study harder.'",
      "possibleSolutions": ["am", "was", "were", "be"],
      "rightAnswer": "were",
      "level": "intermediate"
    },
    {
      "question": "What is the literary device in: 'The wind whispered through the trees'?",
      "possibleSolutions": ["simile", "metaphor", "personification", "hyperbole"],
      "rightAnswer": "personification",
      "level": "intermediate"
    },
    {
      "question": "Which word is a conjunction?",
      "possibleSolutions": ["quickly", "and", "beautiful", "house"],
      "rightAnswer": "and",
      "level": "intermediate"
    },
    {
      "question": "Identify the direct object: 'She gave him the book.'",
      "possibleSolutions": ["She", "gave", "him", "book"],
      "rightAnswer": "book",
      "level": "intermediate"
    },
    {
      "question": "What is the past participle of 'write'?",
      "possibleSolutions": ["wrote", "written", "writed", "writing"],
      "rightAnswer": "written",
      "level": "intermediate"
    },
    {
      "question": "Choose the correct tag question: 'You like coffee, ___?'",
      "possibleSolutions": ["do you", "don't you", "like you", "isn't it"],
      "rightAnswer": "don't you",
      "level": "intermediate"
    },
    {
      "question": "What is the antonym of 'ancient'?",
      "possibleSolutions": ["old", "historic", "modern", "traditional"],
      "rightAnswer": "modern",
      "level": "intermediate"
    },
    {
      "question": "Identify the subordinate clause: 'Although it was raining, we went for a walk.'",
      "possibleSolutions": ["we went for a walk", "Although it was raining", "it was raining", "for a walk"],
      "rightAnswer": "Although it was raining",
      "level": "hard"
    },
    {
      "question": "What rhetorical device is: 'Ask not what your country can do for you...'?",
      "possibleSolutions": ["anaphora", "chiasmus", "litotes", "synecdoche"],
      "rightAnswer": "chiasmus",
      "level": "hard"
    },
    {
      "question": "Which sentence demonstrates correct subjunctive mood?",
      "possibleSolutions": ["I suggest he goes now", "I suggest he go now", "I suggest he went now", "I suggest he going now"],
      "rightAnswer": "I suggest he go now",
      "level": "hard"
    },
    {
      "question": "What is the meaning of 'perspicacious'?",
      "possibleSolutions": ["obscure", "intelligent", "beautiful", "difficult"],
      "rightAnswer": "intelligent",
      "level": "hard"
    },
    {
      "question": "Identify the syntactical error: 'Neither the manager nor the employees was aware of the policy change.'",
      "possibleSolutions": ["subject-verb agreement", "pronoun reference", "parallel structure", "dangling modifier"],
      "rightAnswer": "subject-verb agreement",
      "level": "hard"
    },
    {
      "question": "What literary period did Shakespeare belong to?",
      "possibleSolutions": ["Romantic", "Elizabethan", "Victorian", "Modernist"],
      "rightAnswer": "Elizabethan",
      "level": "hard"
    },
    {
      "question": "Which is an example of zeugma?",
      "possibleSolutions": ["She broke his car and his heart", "The sun smiled down", "He was as brave as a lion", "I came, I saw, I conquered"],
      "rightAnswer": "She broke his car and his heart",
      "level": "hard"
    },
    {
      "question": "What is the difference between 'disinterested' and 'uninterested'?",
      "possibleSolutions": ["They are synonyms", "Disinterested means impartial, uninterested means not interested", "Disinterested means not interested, uninterested means impartial", "No difference"],
      "rightAnswer": "Disinterested means impartial, uninterested means not interested",
      "level": "hard"
    },
    {
      "question": "Identify the metonymy: 'The White House issued a statement.'",
      "possibleSolutions": ["White House", "issued", "statement", "The"],
      "rightAnswer": "White House",
      "level": "hard"
    },
    {
      "question": "What is the correct use of 'whom'?",
      "possibleSolutions": ["Whom is going?", "To whom did you speak?", "Whom she saw?", "I don't know whom is there"],
      "rightAnswer": "To whom did you speak?",
      "level": "hard"
    }
  ],
  science: [
    {
      "question": "What planet is known as the Red Planet?",
      "possibleSolutions": ["Venus", "Mars", "Jupiter", "Saturn"],
      "rightAnswer": "Mars",
      "level": "beginner"
    },
    {
      "question": "What gas do plants breathe in?",
      "possibleSolutions": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "rightAnswer": "Carbon Dioxide",
      "level": "beginner"
    },
    {
      "question": "How many bones are in the human body?",
      "possibleSolutions": ["106", "206", "306", "406"],
      "rightAnswer": "206",
      "level": "beginner"
    },
    {
      "question": "What is H₂O commonly known as?",
      "possibleSolutions": ["Oxygen", "Hydrogen", "Water", "Salt"],
      "rightAnswer": "Water",
      "level": "beginner"
    },
    {
      "question": "What force pulls objects toward Earth?",
      "possibleSolutions": ["Magnetism", "Gravity", "Friction", "Inertia"],
      "rightAnswer": "Gravity",
      "level": "beginner"
    },
    {
      "question": "Which animal is a mammal?",
      "possibleSolutions": ["Shark", "Eagle", "Frog", "Dolphin"],
      "rightAnswer": "Dolphin",
      "level": "beginner"
    },
    {
      "question": "What is the closest star to Earth?",
      "possibleSolutions": ["Proxima Centauri", "Sirius", "Sun", "Polaris"],
      "rightAnswer": "Sun",
      "level": "beginner"
    },
    {
      "question": "What do caterpillars turn into?",
      "possibleSolutions": ["Bees", "Butterflies", "Spiders", "Ants"],
      "rightAnswer": "Butterflies",
      "level": "beginner"
    },
    {
      "question": "Which organ pumps blood?",
      "possibleSolutions": ["Liver", "Heart", "Lungs", "Brain"],
      "rightAnswer": "Heart",
      "level": "beginner"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "possibleSolutions": ["Earth", "Saturn", "Jupiter", "Neptune"],
      "rightAnswer": "Jupiter",
      "level": "beginner"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "possibleSolutions": ["Go", "Gd", "Au", "Ag"],
      "rightAnswer": "Au",
      "level": "intermediate"
    },
    {
      "question": "What process do plants use to make food?",
      "possibleSolutions": ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
      "rightAnswer": "Photosynthesis",
      "level": "intermediate"
    },
    {
      "question": "What is the smallest unit of life?",
      "possibleSolutions": ["Atom", "Cell", "Molecule", "Organ"],
      "rightAnswer": "Cell",
      "level": "intermediate"
    },
    {
      "question": "What gas makes up most of Earth's atmosphere?",
      "possibleSolutions": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "rightAnswer": "Nitrogen",
      "level": "intermediate"
    },
    {
      "question": "What is the speed of light?",
      "possibleSolutions": ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
      "rightAnswer": "300,000 km/s",
      "level": "intermediate"
    },
    {
      "question": "Which blood type is the universal donor?",
      "possibleSolutions": ["A", "B", "AB", "O"],
      "rightAnswer": "O",
      "level": "intermediate"
    },
    {
      "question": "What is Newton's First Law?",
      "possibleSolutions": ["F=ma", "Every action has equal reaction", "Object at rest stays at rest", "Energy cannot be created"],
      "rightAnswer": "Object at rest stays at rest",
      "level": "intermediate"
    },
    {
      "question": "What planet has the most moons?",
      "possibleSolutions": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "rightAnswer": "Saturn",
      "level": "intermediate"
    },
    {
      "question": "What is the main function of mitochondria?",
      "possibleSolutions": ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
      "rightAnswer": "Energy production",
      "level": "intermediate"
    },
    {
      "question": "What is the atomic number of carbon?",
      "possibleSolutions": ["6", "12", "14", "8"],
      "rightAnswer": "6",
      "level": "intermediate"
    },
    {
      "question": "What is Heisenberg's Uncertainty Principle?",
      "possibleSolutions": ["Energy quanta", "Wave-particle duality", "Cannot know position/momentum simultaneously", "Relativity of time"],
      "rightAnswer": "Cannot know position/momentum simultaneously",
      "level": "hard"
    },
    {
      "question": "What is the second law of thermodynamics?",
      "possibleSolutions": ["Energy conservation", "Entropy always increases", "Absolute zero", "Heat transfer"],
      "rightAnswer": "Entropy always increases",
      "level": "hard"
    },
    {
      "question": "What is CRISPR used for?",
      "possibleSolutions": ["Energy production", "Gene editing", "Drug delivery", "Water purification"],
      "rightAnswer": "Gene editing",
      "level": "hard"
    },
    {
      "question": "What is the Higgs boson?",
      "possibleSolutions": ["Dark matter particle", "Gravity particle", "Mass-giving particle", "Light particle"],
      "rightAnswer": "Mass-giving particle",
      "level": "hard"
    },
    {
      "question": "What is quantum entanglement?",
      "possibleSolutions": ["Particle bonding", "Connected particle states", "Atomic fusion", "Electron sharing"],
      "rightAnswer": "Connected particle states",
      "level": "hard"
    },
    {
      "question": "What is the function of tRNA?",
      "possibleSolutions": ["DNA replication", "Protein transport", "Amino acid delivery", "Cell signaling"],
      "rightAnswer": "Amino acid delivery",
      "level": "hard"
    },
    {
      "question": "What is dark energy?",
      "possibleSolutions": ["Black hole energy", "Universal expansion force", "Nuclear energy", "Solar energy"],
      "rightAnswer": "Universal expansion force",
      "level": "hard"
    },
    {
      "question": "What is the Pauli Exclusion Principle?",
      "possibleSolutions": ["Electron pairing", "No two fermions same quantum state", "Energy quantization", "Wave function collapse"],
      "rightAnswer": "No two fermions same quantum state",
      "level": "hard"
    },
    {
      "question": "What is special relativity?",
      "possibleSolutions": ["Gravity theory", "Space-time relationship", "Quantum mechanics", "Thermodynamics"],
      "rightAnswer": "Space-time relationship",
      "level": "hard"
    },
    {
      "question": "What is the role of ribosomes?",
      "possibleSolutions": ["Energy production", "Protein synthesis", "Cell division", "Waste management"],
      "rightAnswer": "Protein synthesis",
      "level": "hard"
    },
    {
      "question": "What is Kepler's first law?",
      "possibleSolutions": ["Equal areas equal times", "Planets orbit in ellipses", "Orbital period relationship", "Gravity description"],
      "rightAnswer": "Planets orbit in ellipses",
      "level": "hard"
    }
  ], literature: [
  {
    "question": "Who wrote 'Romeo and Juliet'?",
    "possibleSolutions": ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"],
    "rightAnswer": "William Shakespeare",
    "level": "beginner"
  },
  {
    "question": "What is the main character’s name in 'Oliver Twist'?",
    "possibleSolutions": ["Harry", "Oliver", "Jack", "Peter"],
    "rightAnswer": "Oliver",
    "level": "beginner"
  },
  {
    "question": "Who is the author of 'Things Fall Apart'?",
    "possibleSolutions": ["Ngũgĩ wa Thiong’o", "Chinua Achebe", "Wole Soyinka", "Ama Ata Aidoo"],
    "rightAnswer": "Chinua Achebe",
    "level": "beginner"
  },
  {
    "question": "In which country is 'Things Fall Apart' set?",
    "possibleSolutions": ["Ghana", "Nigeria", "Kenya", "South Africa"],
    "rightAnswer": "Nigeria",
    "level": "beginner"
  },
  {
    "question": "What type of play is 'Macbeth'?",
    "possibleSolutions": ["Comedy", "Tragedy", "Romance", "Satire"],
    "rightAnswer": "Tragedy",
    "level": "beginner"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "possibleSolutions": ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Louisa May Alcott"],
    "rightAnswer": "Jane Austen",
    "level": "beginner"
  },
  {
    "question": "What is the setting of 'Animal Farm'?",
    "possibleSolutions": ["A factory", "A farm", "A school", "A city"],
    "rightAnswer": "A farm",
    "level": "beginner"
  },
  {
    "question": "In poetry, what is a 'stanza'?",
    "possibleSolutions": ["A verse or group of lines", "A rhyme", "A title", "A character"],
    "rightAnswer": "A verse or group of lines",
    "level": "beginner"
  },
  {
    "question": "Who wrote 'The Adventures of Tom Sawyer'?",
    "possibleSolutions": ["Mark Twain", "Charles Dickens", "Jack London", "Ernest Hemingway"],
    "rightAnswer": "Mark Twain",
    "level": "intermediate"
  },
  {
    "question": "Which novel begins with 'Call me Ishmael'?",
    "possibleSolutions": ["Moby Dick", "The Old Man and the Sea", "The Odyssey", "Treasure Island"],
    "rightAnswer": "Moby Dick",
    "level": "intermediate"
  },
  {
    "question": "Who wrote the poem 'The Raven'?",
    "possibleSolutions": ["Walt Whitman", "Edgar Allan Poe", "Robert Frost", "William Blake"],
    "rightAnswer": "Edgar Allan Poe",
    "level": "intermediate"
  },
  {
    "question": "In 'Julius Caesar', who says 'Et tu, Brute?'",
    "possibleSolutions": ["Brutus", "Julius Caesar", "Cassius", "Antony"],
    "rightAnswer": "Julius Caesar",
    "level": "intermediate"
  },
  {
    "question": "What is the main theme of 'Lord of the Flies'?",
    "possibleSolutions": ["The power of civilization vs. savagery", "Love and betrayal", "Revenge", "Freedom and justice"],
    "rightAnswer": "The power of civilization vs. savagery",
    "level": "intermediate"
  },
  {
    "question": "Who wrote 'A Raisin in the Sun'?",
    "possibleSolutions": ["Toni Morrison", "Lorraine Hansberry", "Alice Walker", "Zora Neale Hurston"],
    "rightAnswer": "Lorraine Hansberry",
    "level": "intermediate"
  },
  {
    "question": "In Shakespeare’s plays, what does 'comic relief' mean?",
    "possibleSolutions": ["A funny scene to lighten a serious play", "A tragedy", "A dance", "A fight"],
    "rightAnswer": "A funny scene to lighten a serious play",
    "level": "intermediate"
  },
  {
    "question": "Who is the main character in 'The Great Gatsby'?",
    "possibleSolutions": ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "Daisy Buchanan"],
    "rightAnswer": "Jay Gatsby",
    "level": "intermediate"
  },
  {
    "question": "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    "possibleSolutions": ["Hamlet", "Othello", "King Lear", "Macbeth"],
    "rightAnswer": "Hamlet",
    "level": "intermediate"
  },
  {
    "question": "Who wrote 'The Waste Land'?",
    "possibleSolutions": ["T.S. Eliot", "W.B. Yeats", "Robert Frost", "Sylvia Plath"],
    "rightAnswer": "T.S. Eliot",
    "level": "hard"
  },
  {
    "question": "What is the literary term for a recurring symbol or theme?",
    "possibleSolutions": ["Motif", "Irony", "Allegory", "Paradox"],
    "rightAnswer": "Motif",
    "level": "hard"
  },
  {
    "question": "In Greek tragedy, what is 'hamartia'?",
    "possibleSolutions": ["A fatal flaw", "A hero", "A chorus", "A prophecy"],
    "rightAnswer": "A fatal flaw",
    "level": "hard"
  },
  {
    "question": "Who wrote 'Waiting for Godot'?",
    "possibleSolutions": ["Samuel Beckett", "Harold Pinter", "George Bernard Shaw", "Tennessee Williams"],
    "rightAnswer": "Samuel Beckett",
    "level": "hard"
  },
  {
    "question": "What narrative perspective uses 'he', 'she', or 'they'?",
    "possibleSolutions": ["Third person", "First person", "Second person", "Omniscient view"],
    "rightAnswer": "Third person",
    "level": "intermediate"
  },
  {
    "question": "What is a sonnet?",
    "possibleSolutions": ["A 14-line poem", "A long novel", "A play", "A short story"],
    "rightAnswer": "A 14-line poem",
    "level": "beginner"
  },
  {
    "question": "Who wrote 'The Odyssey'?",
    "possibleSolutions": ["Homer", "Virgil", "Sophocles", "Aristotle"],
    "rightAnswer": "Homer",
    "level": "intermediate"
  },
  {
    "question": "What is the setting of 'To Kill a Mockingbird'?",
    "possibleSolutions": ["Maycomb, Alabama", "New York City", "London", "Mississippi"],
    "rightAnswer": "Maycomb, Alabama",
    "level": "intermediate"
  },
  {
    "question": "Who is the tragic hero in 'Othello'?",
    "possibleSolutions": ["Othello", "Iago", "Cassio", "Desdemona"],
    "rightAnswer": "Othello",
    "level": "hard"
  },
  {
    "question": "Who wrote 'Beloved'?",
    "possibleSolutions": ["Toni Morrison", "Maya Angelou", "Alice Walker", "Zora Neale Hurston"],
    "rightAnswer": "Toni Morrison",
    "level": "hard"
  },
  {
    "question": "In literature, what does 'foreshadowing' mean?",
    "possibleSolutions": ["A hint of what will happen later", "A flashback", "A twist", "An ending"],
    "rightAnswer": "A hint of what will happen later",
    "level": "beginner"
  },
  {
    "question": "Who wrote 'The Canterbury Tales'?",
    "possibleSolutions": ["Geoffrey Chaucer", "John Milton", "William Blake", "Thomas Hardy"],
    "rightAnswer": "Geoffrey Chaucer",
    "level": "hard"
  },
  {
    "question": "In 'Animal Farm', which animal represents Joseph Stalin?",
    "possibleSolutions": ["Napoleon", "Snowball", "Boxer", "Squealer"],
    "rightAnswer": "Napoleon",
    "level": "intermediate"
  }
]

}


export default questions;