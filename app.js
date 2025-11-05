const { createApp } = Vue

createApp({
    data() {
        return {
            plantCategories: [
                {
                    id: 1,
                    name: "Indoor Leafy Plants",
                    description: "Elegant indoor plants that purify air and add natural ambiance to your home",
                    image: "./images/1.jpg"
                },
                {
                    id: 2,
                    name: "Succulent Collection",
                    description: "Diverse succulents, perfect for busy lifestyles and modern decor",
                    image: "./images/2.jpg"
                },
                {
                    id: 3,
                    name: "Flowering Plants Guide",
                    description: "Colorful blooming plants that bring life and vitality to your space",
                    image: "./images/3.jpg"
                },
                {
                    id: 4,
                    name: "Herbs & Medicinal Plants",
                    description: "Practical herbs and medicinal plants for cooking and natural remedies",
                    image: "./images/4.jpg"
                }
            ],
            communityPosts: [
                {
                    id: 1,
                    title: "How I Saved My Pothos Plant",
                    content: "When I noticed my pothos had yellowing leaves and looked wilted, I adjusted my watering schedule and moved it to a brighter spot. Within two weeks, it was thriving again!",
                    author: "Plant Enthusiast"
                },
                {
                    id: 2,
                    title: "My First Succulent Garden",
                    content: "I just finished my first succulent arrangement in vintage teacups. Can't wait to watch them grow! Any tips for keeping them healthy?",
                    author: "New Plant Parent"
                },
                {
                    id: 3,
                    title: "Monstera Propagation Success!",
                    content: "I wanted to share my successful Monstera propagation experience. I've now grown 3 baby plants from the original mother plant!",
                    author: "Plant Propagator"
                }
            ],
            fictionStories: [
                {
                    id: 1,
                    title: "The Pothos's Magical Journey",
                    description: "An ordinary pothos plant discovers it has consciousness and embarks on a wonderful adventure exploring the human world...",
                    image: "https://picsum.photos/id/106/800/450",
                    chapters: 8,
                    views: 1542
                },
                {
                    id: 2,
                    title: "Secrets of the Succulent Kingdom",
                    description: "In a garden forgotten by humans, succulents have built their own kingdom, guarding an ancient secret...",
                    image: "https://picsum.photos/id/119/800/450",
                    chapters: 12,
                    views: 2356
                },
                {
                    id: 3,
                    title: "The Talking Monstera",
                    description: "A lonely elderly person becomes friends with a talking Monstera plant, and they keep each other company through many warm moments...",
                    image: "https://picsum.photos/id/155/800/450",
                    chapters: 6,
                    views: 1879
                }
            ]
        }
    },
    methods: {
        joinCommunity() {
            alert("Thanks for your interest in joining our community! In a full implementation, this would take you to a registration page.");
        },
        viewGuide(category) {
            alert(`In a full implementation, this would open the guide for: ${category.name}`);
        }
    }
}).mount('#app')