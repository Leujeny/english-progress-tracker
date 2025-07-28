interface Session {
    id: number;
    date: string;
    type: string;
    podcast?: string;
    episode?: string;
    duration?: number;
    note?: string;
    grade?: number;
    difficulty?: string;
    vocabulary?: string;//{ en: string; fr: string }[];
    text?: string;
    question?: { question: string; answer: string }
}