export interface Tutor {
  id: string;
  name: string;
  photo: string;
  country: string;
  isNativeSpeaker: boolean;
  languages: string[];
  subjects: string[];
  specialties: string[];
  hourlyRate: number;
  rating: number;
  totalStudents: number;
  totalLessons: number;
  bio: string;
  availability: {
    days: string[];
    times: string[];
  };
  goals: string[];
  levels: string[];
}

export const mockTutors: Tutor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    photo: "https://i.pravatar.cc/150?img=1",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english", "spanish"],
    subjects: ["english", "spanish"],
    specialties: ["conversational", "businessProfessional", "examPreparation"],
    hourlyRate: 25,
    rating: 4.9,
    totalStudents: 247,
    totalLessons: 1580,
    bio: "Certified ESL teacher with 10 years of experience. Specializing in business English and exam preparation.",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon"]
    },
    goals: ["careerBusiness", "examsCoursework"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "2",
    name: "Miguel Rodriguez",
    photo: "https://i.pravatar.cc/150?img=12",
    country: "philippines",
    isNativeSpeaker: false,
    languages: ["english", "tagalog", "spanish"],
    subjects: ["english", "tagalog"],
    specialties: ["lessonsForKids", "conversational", "pronunciation"],
    hourlyRate: 15,
    rating: 4.8,
    totalStudents: 189,
    totalLessons: 950,
    bio: "Patient and friendly tutor who loves teaching kids. Making learning fun and engaging!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday", "sunday"],
      times: ["afternoon", "evening", "night"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "3",
    name: "Emma Wilson",
    photo: "https://i.pravatar.cc/150?img=5",
    country: "uk",
    isNativeSpeaker: true,
    languages: ["english", "french"],
    subjects: ["english", "french"],
    specialties: ["grammar", "pronunciation", "examPreparation"],
    hourlyRate: 30,
    rating: 5.0,
    totalStudents: 312,
    totalLessons: 2100,
    bio: "Cambridge-certified teacher specializing in IELTS and grammar. Achieve your language goals with precision!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "4",
    name: "David Chen",
    photo: "https://i.pravatar.cc/150?img=13",
    country: "canada",
    isNativeSpeaker: true,
    languages: ["english", "chinese"],
    subjects: ["english", "chinese", "mathematics"],
    specialties: ["conversational", "businessProfessional"],
    hourlyRate: 22,
    rating: 4.7,
    totalStudents: 156,
    totalLessons: 780,
    bio: "Bilingual tutor with expertise in business communication. Let's build your confidence!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "5",
    name: "Maria Santos",
    photo: "https://i.pravatar.cc/150?img=9",
    country: "philippines",
    isNativeSpeaker: false,
    languages: ["english", "tagalog"],
    subjects: ["tagalog", "english"],
    specialties: ["lessonsForKids", "beginnerLevel", "cultureTravel"],
    hourlyRate: 12,
    rating: 4.9,
    totalStudents: 203,
    totalLessons: 1120,
    bio: "Passionate about teaching Tagalog culture and language. Perfect for beginners and kids!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "6",
    name: "James O'Connor",
    photo: "https://i.pravatar.cc/150?img=14",
    country: "ireland",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english"],
    specialties: ["conversational", "pronunciation", "cultureTravel"],
    hourlyRate: 28,
    rating: 4.8,
    totalStudents: 178,
    totalLessons: 890,
    bio: "Experienced conversation tutor. Let's chat about Irish culture and improve your fluency!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "friday", "saturday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "7",
    name: "Yuki Tanaka",
    photo: "https://i.pravatar.cc/150?img=47",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english", "japanese"],
    subjects: ["english", "japanese"],
    specialties: ["lessonsForKids", "conversational", "businessProfessional"],
    hourlyRate: 26,
    rating: 4.9,
    totalStudents: 221,
    totalLessons: 1340,
    bio: "Bilingual teacher with a gentle approach. Great for kids and adult learners alike!",
    availability: {
      days: ["monday", "wednesday", "friday", "sunday"],
      times: ["afternoon", "evening"]
    },
    goals: ["lessonsForKids", "careerBusiness", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "8",
    name: "Sophie Martin",
    photo: "https://i.pravatar.cc/150?img=32",
    country: "australia",
    isNativeSpeaker: true,
    languages: ["english", "french"],
    subjects: ["english", "french"],
    specialties: ["examPreparation", "grammar", "businessProfessional"],
    hourlyRate: 32,
    rating: 5.0,
    totalStudents: 289,
    totalLessons: 1850,
    bio: "TOEFL and IELTS specialist. Proven track record of helping students achieve high scores!",
    availability: {
      days: ["monday", "tuesday", "thursday", "friday"],
      times: ["morning", "evening"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "9",
    name: "Carlos Mendoza",
    photo: "https://i.pravatar.cc/150?img=15",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english", "spanish"],
    subjects: ["english", "spanish"],
    specialties: ["conversational", "businessProfessional"],
    hourlyRate: 24,
    rating: 4.7,
    totalStudents: 142,
    totalLessons: 670,
    bio: "Business professional turned language teacher. Specializing in professional communication!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "10",
    name: "Lisa Park",
    photo: "https://i.pravatar.cc/150?img=44",
    country: "canada",
    isNativeSpeaker: true,
    languages: ["english", "korean"],
    subjects: ["english", "korean"],
    specialties: ["lessonsForKids", "conversational", "pronunciation"],
    hourlyRate: 20,
    rating: 4.8,
    totalStudents: 195,
    totalLessons: 1050,
    bio: "Fun and energetic teacher who makes learning enjoyable for kids and teens!",
    availability: {
      days: ["tuesday", "thursday", "saturday", "sunday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "11",
    name: "Michael Brown",
    photo: "https://i.pravatar.cc/150?img=11",
    country: "newZealand",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english", "science"],
    specialties: ["examPreparation", "conversational", "businessProfessional"],
    hourlyRate: 27,
    rating: 4.9,
    totalStudents: 234,
    totalLessons: 1420,
    bio: "Former university lecturer with a passion for clear communication. Exam prep specialist!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday"],
      times: ["morning", "afternoon"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "12",
    name: "Ana Silva",
    photo: "https://i.pravatar.cc/150?img=31",
    country: "philippines",
    isNativeSpeaker: false,
    languages: ["english", "tagalog", "spanish"],
    subjects: ["english", "tagalog"],
    specialties: ["beginnerLevel", "conversational", "cultureTravel"],
    hourlyRate: 14,
    rating: 4.8,
    totalStudents: 167,
    totalLessons: 820,
    bio: "Warm and patient tutor perfect for beginners. Let's start your language journey together!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "sunday"],
      times: ["afternoon", "evening"]
    },
    goals: ["cultureTravel", "lessonsForKids"],
    levels: ["beginnerLevel"]
  },
  {
    id: "13",
    name: "Robert Taylor",
    photo: "https://i.pravatar.cc/150?img=52",
    country: "southAfrica",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english", "mathematics"],
    specialties: ["businessProfessional", "examPreparation", "grammar"],
    hourlyRate: 29,
    rating: 4.9,
    totalStudents: 201,
    totalLessons: 1190,
    bio: "Business English expert with corporate training experience. Professional communication is my specialty!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["careerBusiness", "examsCoursework"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "14",
    name: "Nina Patel",
    photo: "https://i.pravatar.cc/150?img=45",
    country: "uk",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english"],
    specialties: ["lessonsForKids", "pronunciation", "conversational"],
    hourlyRate: 23,
    rating: 5.0,
    totalStudents: 278,
    totalLessons: 1620,
    bio: "Specialized in teaching young learners with creative and engaging methods!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon"]
    },
    goals: ["lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "15",
    name: "Juan Garcia",
    photo: "https://i.pravatar.cc/150?img=60",
    country: "philippines",
    isNativeSpeaker: false,
    languages: ["english", "spanish", "tagalog"],
    subjects: ["spanish", "english", "tagalog"],
    specialties: ["conversational", "cultureTravel", "beginnerLevel"],
    hourlyRate: 16,
    rating: 4.7,
    totalStudents: 134,
    totalLessons: 690,
    bio: "Trilingual tutor who loves sharing language and culture. Perfect for travel enthusiasts!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday", "sunday"],
      times: ["afternoon", "evening", "night"]
    },
    goals: ["cultureTravel", "careerBusiness"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "16",
    name: "Rachel Lee",
    photo: "https://i.pravatar.cc/150?img=29",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english", "chinese", "korean"],
    subjects: ["english", "chinese"],
    specialties: ["examPreparation", "grammar", "businessProfessional"],
    hourlyRate: 35,
    rating: 5.0,
    totalStudents: 327,
    totalLessons: 2240,
    bio: "Ivy League graduate specializing in SAT, TOEFL, and business English. Results-driven approach!",
    availability: {
      days: ["tuesday", "thursday", "saturday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "17",
    name: "Tom Anderson",
    photo: "https://i.pravatar.cc/150?img=33",
    country: "canada",
    isNativeSpeaker: true,
    languages: ["english", "french"],
    subjects: ["english", "french"],
    specialties: ["conversational", "pronunciation", "cultureTravel"],
    hourlyRate: 21,
    rating: 4.8,
    totalStudents: 172,
    totalLessons: 910,
    bio: "Friendly conversationalist who makes language learning natural and enjoyable!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      times: ["evening", "night"]
    },
    goals: ["cultureTravel", "careerBusiness"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "18",
    name: "Isabella Romano",
    photo: "https://i.pravatar.cc/150?img=48",
    country: "australia",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english"],
    specialties: ["lessonsForKids", "conversational", "pronunciation"],
    hourlyRate: 25,
    rating: 4.9,
    totalStudents: 215,
    totalLessons: 1280,
    bio: "Creative teacher who uses games and activities to make learning fun for children!",
    availability: {
      days: ["monday", "wednesday", "friday", "sunday"],
      times: ["morning", "afternoon"]
    },
    goals: ["lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "19",
    name: "Kevin Nguyen",
    photo: "https://i.pravatar.cc/150?img=51",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english"],
    subjects: ["english"],
    specialties: ["businessProfessional", "conversational"],
    hourlyRate: 26,
    rating: 4.7,
    totalStudents: 149,
    totalLessons: 745,
    bio: "Business communication specialist offering practical English for the modern workplace!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "20",
    name: "Grace Kim",
    photo: "https://i.pravatar.cc/150?img=24",
    country: "philippines",
    isNativeSpeaker: false,
    languages: ["english", "tagalog", "korean"],
    subjects: ["english", "tagalog", "korean"],
    specialties: ["lessonsForKids", "beginnerLevel", "conversational"],
    hourlyRate: 13,
    rating: 4.9,
    totalStudents: 241,
    totalLessons: 1450,
    bio: "Patient and encouraging tutor who specializes in building confidence in young learners!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "21",
    name: "Pierre Dubois",
    photo: "https://i.pravatar.cc/150?img=56",
    country: "france",
    isNativeSpeaker: false,
    languages: ["french", "english"],
    subjects: ["french"],
    specialties: ["grammar", "pronunciation", "cultureTravel"],
    hourlyRate: 28,
    rating: 4.8,
    totalStudents: 186,
    totalLessons: 1120,
    bio: "Native French speaker passionate about sharing French language and culture!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel", "examsCoursework"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "22",
    name: "Akiko Yamamoto",
    photo: "https://i.pravatar.cc/150?img=41",
    country: "japan",
    isNativeSpeaker: false,
    languages: ["japanese", "english"],
    subjects: ["japanese"],
    specialties: ["beginnerLevel", "conversational", "cultureTravel"],
    hourlyRate: 24,
    rating: 4.9,
    totalStudents: 198,
    totalLessons: 1340,
    bio: "Japanese native speaker with a focus on practical conversation and cultural insights!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "saturday", "sunday"],
      times: ["evening", "night"]
    },
    goals: ["cultureTravel", "lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "23",
    name: "Hassan Ahmed",
    photo: "https://i.pravatar.cc/150?img=59",
    country: "egypt",
    isNativeSpeaker: false,
    languages: ["arabic", "english", "french"],
    subjects: ["arabic", "english"],
    specialties: ["grammar", "conversational", "businessProfessional"],
    hourlyRate: 22,
    rating: 4.7,
    totalStudents: 143,
    totalLessons: 890,
    bio: "Experienced Arabic and English tutor specializing in business communication!",
    availability: {
      days: ["sunday", "monday", "tuesday", "wednesday", "thursday"],
      times: ["afternoon", "evening"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "24",
    name: "Lucia Fernandez",
    photo: "https://i.pravatar.cc/150?img=38",
    country: "spain",
    isNativeSpeaker: false,
    languages: ["spanish", "english"],
    subjects: ["spanish"],
    specialties: ["pronunciation", "grammar", "examPreparation"],
    hourlyRate: 26,
    rating: 5.0,
    totalStudents: 267,
    totalLessons: 1680,
    bio: "DELE-certified Spanish teacher from Spain with expertise in exam preparation!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["examsCoursework", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "25",
    name: "Wei Zhang",
    photo: "https://i.pravatar.cc/150?img=68",
    country: "china",
    isNativeSpeaker: false,
    languages: ["chinese", "english"],
    subjects: ["chinese", "mathematics"],
    specialties: ["beginnerLevel", "grammar", "businessProfessional"],
    hourlyRate: 25,
    rating: 4.8,
    totalStudents: 211,
    totalLessons: 1450,
    bio: "Native Mandarin speaker with experience in business Chinese and HSK preparation!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday", "sunday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "examsCoursework"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "26",
    name: "Olivia Thompson",
    photo: "https://i.pravatar.cc/150?img=43",
    country: "usa",
    isNativeSpeaker: true,
    languages: ["english", "german"],
    subjects: ["english", "german"],
    specialties: ["lessonsForKids", "pronunciation", "conversational"],
    hourlyRate: 27,
    rating: 4.9,
    totalStudents: 234,
    totalLessons: 1520,
    bio: "Enthusiastic teacher who makes learning languages exciting for children and adults!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "27",
    name: "Marco Rossi",
    photo: "https://i.pravatar.cc/150?img=58",
    country: "italy",
    isNativeSpeaker: false,
    languages: ["italian", "english"],
    subjects: ["italian"],
    specialties: ["conversational", "cultureTravel", "pronunciation"],
    hourlyRate: 23,
    rating: 4.7,
    totalStudents: 167,
    totalLessons: 970,
    bio: "Native Italian speaker passionate about teaching language through culture and conversation!",
    availability: {
      days: ["wednesday", "thursday", "friday", "saturday", "sunday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "28",
    name: "Soo-Jin Lee",
    photo: "https://i.pravatar.cc/150?img=36",
    country: "korea",
    isNativeSpeaker: false,
    languages: ["korean", "english"],
    subjects: ["korean", "english"],
    specialties: ["grammar", "examPreparation", "businessProfessional"],
    hourlyRate: 29,
    rating: 5.0,
    totalStudents: 289,
    totalLessons: 1890,
    bio: "TOPIK specialist helping students achieve high scores in Korean proficiency exams!",
    availability: {
      days: ["monday", "tuesday", "thursday", "friday"],
      times: ["evening", "night"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "29",
    name: "Andre Silva",
    photo: "https://i.pravatar.cc/150?img=62",
    country: "brazil",
    isNativeSpeaker: false,
    languages: ["portuguese", "english", "spanish"],
    subjects: ["portuguese", "spanish"],
    specialties: ["conversational", "cultureTravel", "beginnerLevel"],
    hourlyRate: 19,
    rating: 4.8,
    totalStudents: 154,
    totalLessons: 820,
    bio: "Brazilian Portuguese teacher who brings the energy and culture of Brazil to every lesson!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday", "sunday"],
      times: ["afternoon", "evening", "night"]
    },
    goals: ["cultureTravel", "lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "30",
    name: "Fatima Al-Mansour",
    photo: "https://i.pravatar.cc/150?img=20",
    country: "uae",
    isNativeSpeaker: false,
    languages: ["arabic", "english", "french"],
    subjects: ["arabic"],
    specialties: ["grammar", "businessProfessional", "conversational"],
    hourlyRate: 31,
    rating: 4.9,
    totalStudents: 198,
    totalLessons: 1230,
    bio: "Expert in Modern Standard Arabic and business communication for professionals!",
    availability: {
      days: ["sunday", "monday", "tuesday", "wednesday", "thursday"],
      times: ["morning", "afternoon"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "31",
    name: "Johan Schmidt",
    photo: "https://i.pravatar.cc/150?img=57",
    country: "germany",
    isNativeSpeaker: false,
    languages: ["german", "english"],
    subjects: ["german"],
    specialties: ["examPreparation", "grammar", "pronunciation"],
    hourlyRate: 30,
    rating: 5.0,
    totalStudents: 256,
    totalLessons: 1750,
    bio: "TestDaF and Goethe exam specialist with a systematic approach to German language learning!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "friday", "saturday"],
      times: ["morning", "evening"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "32",
    name: "Priya Sharma",
    photo: "https://i.pravatar.cc/150?img=42",
    country: "india",
    isNativeSpeaker: false,
    languages: ["hindi", "english"],
    subjects: ["hindi", "english"],
    specialties: ["beginnerLevel", "conversational", "cultureTravel"],
    hourlyRate: 17,
    rating: 4.8,
    totalStudents: 176,
    totalLessons: 950,
    bio: "Patient Hindi tutor specializing in Devanagari script and practical conversation!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["cultureTravel", "lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "33",
    name: "Alexandra Popov",
    photo: "https://i.pravatar.cc/150?img=28",
    country: "russia",
    isNativeSpeaker: false,
    languages: ["russian", "english"],
    subjects: ["russian"],
    specialties: ["grammar", "pronunciation", "examPreparation"],
    hourlyRate: 26,
    rating: 4.9,
    totalStudents: 189,
    totalLessons: 1180,
    bio: "Native Russian speaker with expertise in Cyrillic alphabet and complex grammar!",
    availability: {
      days: ["monday", "wednesday", "friday", "sunday"],
      times: ["evening", "night"]
    },
    goals: ["examsCoursework", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "34",
    name: "Mohammed Hassan",
    photo: "https://i.pravatar.cc/150?img=67",
    country: "morocco",
    isNativeSpeaker: false,
    languages: ["arabic", "french", "english"],
    subjects: ["arabic", "french"],
    specialties: ["conversational", "cultureTravel", "beginnerLevel"],
    hourlyRate: 20,
    rating: 4.7,
    totalStudents: 142,
    totalLessons: 780,
    bio: "Trilingual tutor specializing in Moroccan Arabic (Darija) and French!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday", "sunday"],
      times: ["afternoon", "evening"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "35",
    name: "Ingrid Hansen",
    photo: "https://i.pravatar.cc/150?img=26",
    country: "norway",
    isNativeSpeaker: false,
    languages: ["norwegian", "english"],
    subjects: ["norwegian"],
    specialties: ["pronunciation", "conversational", "grammar"],
    hourlyRate: 28,
    rating: 4.8,
    totalStudents: 134,
    totalLessons: 820,
    bio: "Native Norwegian speaker helping students master this beautiful Scandinavian language!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel", "careerBusiness"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "36",
    name: "Thanh Nguyen",
    photo: "https://i.pravatar.cc/150?img=69",
    country: "vietnam",
    isNativeSpeaker: false,
    languages: ["vietnamese", "english"],
    subjects: ["vietnamese"],
    specialties: ["beginnerLevel", "pronunciation", "cultureTravel"],
    hourlyRate: 18,
    rating: 4.9,
    totalStudents: 167,
    totalLessons: 920,
    bio: "Vietnamese native speaker specializing in tones and authentic pronunciation!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday", "sunday"],
      times: ["afternoon", "evening", "night"]
    },
    goals: ["cultureTravel", "lessonsForKids"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "37",
    name: "Dimitris Papadopoulos",
    photo: "https://i.pravatar.cc/150?img=54",
    country: "greece",
    isNativeSpeaker: false,
    languages: ["greek", "english"],
    subjects: ["greek"],
    specialties: ["grammar", "conversational", "cultureTravel"],
    hourlyRate: 25,
    rating: 4.8,
    totalStudents: 145,
    totalLessons: 870,
    bio: "Greek language enthusiast teaching modern Greek with a focus on practical communication!",
    availability: {
      days: ["tuesday", "thursday", "saturday", "sunday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "38",
    name: "Amara Okafor",
    photo: "https://i.pravatar.cc/150?img=25",
    country: "nigeria",
    isNativeSpeaker: false,
    languages: ["english", "yoruba"],
    subjects: ["english", "yoruba"],
    specialties: ["conversational", "businessProfessional", "pronunciation"],
    hourlyRate: 21,
    rating: 4.7,
    totalStudents: 156,
    totalLessons: 890,
    bio: "Bilingual tutor specializing in English for business and Yoruba language and culture!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "39",
    name: "Katarzyna Nowak",
    photo: "https://i.pravatar.cc/150?img=49",
    country: "poland",
    isNativeSpeaker: false,
    languages: ["polish", "english"],
    subjects: ["polish"],
    specialties: ["grammar", "pronunciation", "examPreparation"],
    hourlyRate: 24,
    rating: 4.9,
    totalStudents: 178,
    totalLessons: 1040,
    bio: "Polish native speaker with expertise in challenging grammar and pronunciation!",
    availability: {
      days: ["monday", "wednesday", "friday", "saturday"],
      times: ["morning", "afternoon"]
    },
    goals: ["examsCoursework", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "40",
    name: "Lars Svensson",
    photo: "https://i.pravatar.cc/150?img=64",
    country: "sweden",
    isNativeSpeaker: false,
    languages: ["swedish", "english"],
    subjects: ["swedish"],
    specialties: ["conversational", "businessProfessional", "pronunciation"],
    hourlyRate: 29,
    rating: 5.0,
    totalStudents: 203,
    totalLessons: 1340,
    bio: "Swedish business professional teaching practical Swedish for work and everyday life!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "evening"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "41",
    name: "Camila Ruiz",
    photo: "https://i.pravatar.cc/150?img=21",
    country: "argentina",
    isNativeSpeaker: false,
    languages: ["spanish", "english"],
    subjects: ["spanish"],
    specialties: ["lessonsForKids", "conversational", "cultureTravel"],
    hourlyRate: 18,
    rating: 4.8,
    totalStudents: 192,
    totalLessons: 1150,
    bio: "Fun and creative Spanish tutor specializing in Latin American Spanish for kids!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      times: ["afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "42",
    name: "Minh Tran",
    photo: "https://i.pravatar.cc/150?img=70",
    country: "vietnam",
    isNativeSpeaker: false,
    languages: ["vietnamese", "english", "chinese"],
    subjects: ["vietnamese", "english"],
    specialties: ["beginnerLevel", "grammar", "businessProfessional"],
    hourlyRate: 22,
    rating: 4.9,
    totalStudents: 187,
    totalLessons: 1090,
    bio: "Multilingual tutor with expertise in Vietnamese grammar and business English!",
    availability: {
      days: ["sunday", "monday", "tuesday", "wednesday", "thursday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "43",
    name: "Elena Ivanova",
    photo: "https://i.pravatar.cc/150?img=30",
    country: "bulgaria",
    isNativeSpeaker: false,
    languages: ["bulgarian", "english", "russian"],
    subjects: ["bulgarian"],
    specialties: ["grammar", "pronunciation", "conversational"],
    hourlyRate: 20,
    rating: 4.7,
    totalStudents: 123,
    totalLessons: 750,
    bio: "Bulgarian native speaker passionate about teaching this unique Slavic language!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday", "sunday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "44",
    name: "Hiroshi Nakamura",
    photo: "https://i.pravatar.cc/150?img=65",
    country: "japan",
    isNativeSpeaker: false,
    languages: ["japanese", "english"],
    subjects: ["japanese"],
    specialties: ["businessProfessional", "grammar", "examPreparation"],
    hourlyRate: 32,
    rating: 5.0,
    totalStudents: 245,
    totalLessons: 1680,
    bio: "JLPT specialist and business Japanese expert with years of corporate experience!",
    availability: {
      days: ["monday", "wednesday", "thursday", "friday"],
      times: ["evening", "night"]
    },
    goals: ["careerBusiness", "examsCoursework"],
    levels: ["conversational", "fluent"]
  },
  {
    id: "45",
    name: "Sofia Andersson",
    photo: "https://i.pravatar.cc/150?img=27",
    country: "finland",
    isNativeSpeaker: false,
    languages: ["finnish", "english", "swedish"],
    subjects: ["finnish"],
    specialties: ["beginnerLevel", "pronunciation", "grammar"],
    hourlyRate: 27,
    rating: 4.8,
    totalStudents: 134,
    totalLessons: 890,
    bio: "Native Finnish speaker helping students navigate this challenging but rewarding language!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["morning", "afternoon"]
    },
    goals: ["cultureTravel", "examsCoursework"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "46",
    name: "Paulo Costa",
    photo: "https://i.pravatar.cc/150?img=63",
    country: "portugal",
    isNativeSpeaker: false,
    languages: ["portuguese", "english", "spanish"],
    subjects: ["portuguese"],
    specialties: ["conversational", "cultureTravel", "pronunciation"],
    hourlyRate: 23,
    rating: 4.9,
    totalStudents: 198,
    totalLessons: 1230,
    bio: "European Portuguese specialist with a focus on natural conversation and culture!",
    availability: {
      days: ["tuesday", "wednesday", "thursday", "saturday", "sunday"],
      times: ["afternoon", "evening"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "47",
    name: "Leila Kazemi",
    photo: "https://i.pravatar.cc/150?img=23",
    country: "iran",
    isNativeSpeaker: false,
    languages: ["persian", "english"],
    subjects: ["persian"],
    specialties: ["grammar", "conversational", "cultureTravel"],
    hourlyRate: 21,
    rating: 4.8,
    totalStudents: 156,
    totalLessons: 940,
    bio: "Persian (Farsi) native speaker teaching beautiful Persian language and poetry!",
    availability: {
      days: ["sunday", "monday", "wednesday", "friday", "saturday"],
      times: ["evening", "night"]
    },
    goals: ["cultureTravel"],
    levels: ["beginnerLevel", "conversational", "fluent"]
  },
  {
    id: "48",
    name: "Daniel Kowalski",
    photo: "https://i.pravatar.cc/150?img=66",
    country: "poland",
    isNativeSpeaker: false,
    languages: ["polish", "english", "german"],
    subjects: ["polish", "german"],
    specialties: ["lessonsForKids", "conversational", "businessProfessional"],
    hourlyRate: 25,
    rating: 4.7,
    totalStudents: 167,
    totalLessons: 980,
    bio: "Multilingual tutor specializing in making Polish fun and accessible for all ages!",
    availability: {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      times: ["afternoon", "evening"]
    },
    goals: ["lessonsForKids", "careerBusiness"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "49",
    name: "Ayumi Sato",
    photo: "https://i.pravatar.cc/150?img=39",
    country: "japan",
    isNativeSpeaker: false,
    languages: ["japanese", "english"],
    subjects: ["japanese"],
    specialties: ["lessonsForKids", "conversational", "pronunciation"],
    hourlyRate: 22,
    rating: 4.9,
    totalStudents: 213,
    totalLessons: 1340,
    bio: "Patient Japanese tutor who makes learning hiragana, katakana, and kanji enjoyable!",
    availability: {
      days: ["tuesday", "thursday", "friday", "saturday", "sunday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["lessonsForKids", "cultureTravel"],
    levels: ["beginnerLevel", "conversational"]
  },
  {
    id: "50",
    name: "Ahmed El-Sayed",
    photo: "https://i.pravatar.cc/150?img=61",
    country: "egypt",
    isNativeSpeaker: false,
    languages: ["arabic", "english"],
    subjects: ["arabic"],
    specialties: ["examPreparation", "grammar", "businessProfessional"],
    hourlyRate: 26,
    rating: 5.0,
    totalStudents: 234,
    totalLessons: 1520,
    bio: "Arabic language expert specializing in Classical Arabic and professional communication!",
    availability: {
      days: ["sunday", "monday", "tuesday", "wednesday", "thursday"],
      times: ["morning", "afternoon", "evening"]
    },
    goals: ["examsCoursework", "careerBusiness"],
    levels: ["conversational", "fluent"]
  }
];
