import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        Id : uuidv4(),
        question : "What is machine learning?",
        answer : `Machine learning is a subset of AI that allows machines to learn from data without explicit programming. 
                    It uses algorithms to identify patterns and make predictions. 
                    Types include supervised, unsupervised, and reinforcement learning.`,
        display : false
    },
    {
        Id : uuidv4(),
        question : "How can I stay motivated to work?",
        answer : `Set clear, achievable goals and break tasks into smaller steps. Reward yourself for completing
                    milestones and visualize long-term success. Stay consistent, and create a supportive
                    environment with minimal distractions.`,
        display : false
    },
    {
        Id : uuidv4(),
        question : "How do I improve my communication skills?",
        answer : `Practice active listening, and aim for clarity in your speech and writing. Be concise and avoid
                    jargon to ensure others understand your message. Regularly engage in conversations to build
                    confidence and refine your skills.`,
        display : false
    },
    {
        Id : uuidv4(),
        question : "What is AI and how does it work?",
        answer : ` AI (Artificial Intelligence) refers to machines that can mimic human intelligence.
                    It works by processing data, learning patterns, and making decisions based on that data.
                    Common techniques include machine learning, neural networks, and natural language processing.`,
        display : false
    },
    {
        Id : uuidv4(),
        question : "How can I improve my writing skills?",
        answer : `Start by reading regularly and practicing writing often. Focus on grammar, structure, and clarity in your work.
                    Seek feedback, edit your drafts, and gradually expand your vocabulary for better expression.`,
        display : false
    }
]

export default data;