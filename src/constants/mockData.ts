import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Programming",
        department: "CS",
        description: "Learn the fundamentals of programming using TypeScript and Python. Topics include loops, variables, and logic.",
        createdAt: new Date("2025-01-10"),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Vectors, matrices, and systems of linear equations. Essential for computer graphics and machine learning.",
        createdAt: new Date("2025-01-15"),
    },
    {
        id: 3,
        code: "ENG102",
        name: "Technical Writing",
        department: "English",
        description: "Developing skills for clear, concise, and professional communication in technical environments.",
        createdAt: new Date("2025-02-01"),
    },
];
