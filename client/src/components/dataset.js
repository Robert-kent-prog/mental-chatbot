const responses = [
    // Greetings
    { keyword: 'hello', response: "Hello! How can I assist you today?" },
    { keyword: 'hi', response: "Hi there! How are you feeling?" },
    { keyword: 'sasa', response: "Sasa! What's on your mind today?" },
    { keyword: 'mambo', response: "Mambo! How can I help with your mental well-being?" },
    { keyword: 'hey', response: "Hey! Nice to see you. How can I assist you?" },
    { keyword: 'niaje', response: "Niaje! Let's talk about how you're doing today." },
    { keyword: 'good morning', response: "Good morning! Let's start the day with positivity." },
    { keyword: 'good evening', response: "Good evening! How was your day?" },
    { keyword: 'how are you', response: "I'm just a program, but I'm here to help you! How about you?" },

    // Mental Health Topics
    { keyword: 'stress', response: "Stress is a common issue. Try deep breathing exercises or mindfulness meditation to relax." },
    { keyword: 'anxiety', response: "Anxiety can be managed through therapy, exercise, and healthy lifestyle changes. How are you feeling today?" },
    { keyword: 'depression', response: "Depression is serious but treatable. Please consider speaking with a mental health professional for support." },
    { keyword: 'sleep', response: "Good sleep hygiene includes maintaining a routine, avoiding screens before bed, and creating a restful environment." },
    { keyword: 'relax', response: "Relaxation techniques like yoga, journaling, or listening to calming music can help reduce tension." },
    { keyword: 'help', response: "I'm here to help! Feel free to share what's on your mind, and we can explore ways to support your mental well-being." },
    { keyword: 'therapy', response: "Therapy can be incredibly beneficial. There are many types, such as CBT, talk therapy, and group therapy." },

    // Additional Mental Health Topics
    { keyword: 'self-care', response: "Self-care is vital for mental health. Simple actions like taking breaks, staying hydrated, and setting boundaries can improve your well-being." },
    { keyword: 'loneliness', response: "Loneliness can feel isolating, but talking to someone, engaging in hobbies, or joining a community can help you feel connected." },
    { keyword: 'motivation', response: "Staying motivated can be challenging. Try setting small goals, celebrating achievements, and finding what sparks your interest." },
    { keyword: 'self-esteem', response: "Building self-esteem is a journey. Practice self-compassion, celebrate your strengths, and surround yourself with positive influences." },
    { keyword: 'burnout', response: "Burnout can happen when you're overwhelmed. Taking breaks, delegating tasks, and focusing on self-care can help manage it." },
    { keyword: 'gratitude', response: "Gratitude exercises like journaling what you're thankful for each day can improve mood and reduce stress." },
    { keyword: 'mindfulness', response: "Mindfulness helps you stay in the present moment. Meditation and mindful breathing can increase awareness and reduce stress." },

    { keyword: 'who are you', response: "I'm your chatbot friend! You can talk to me about how you're feeling, and I'll do my best to support you. 😊" },

    // Encouraging Responses
    { keyword: 'feeling down', response: "I'm really sorry you're feeling down. Sometimes it helps to talk about it. I'm here to listen!" },
    { keyword: 'overwhelmed', response: "It sounds like you have a lot going on. It might help to break things down into smaller, manageable steps." },
    { keyword: 'angry', response: "Anger is a natural emotion. Try to take a deep breath, step back, and think about ways to address the issue calmly." },
    { keyword: 'sad', response: "Sadness is okay to feel, but remember that it won't last forever. Talking about it can sometimes lighten the load." },

    // Default Response
    { keyword: 'default', response: "I'm here to assist with mental health and wellness topics. Let me know how I can help!" },
];

// Export the function to get a response based on input
export const getMockResponse = (input) => {
    const match = responses.find((item) => input.includes(item.keyword));
    return match ? match.response : responses[responses.length - 1].response;
};
