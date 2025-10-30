const { createApp } = Vue

createApp({
    data() {
        return {
            plantCategories: [
                {
                    id: 1,
                    name: "室内观叶植物",
                    description: "优雅的室内植物，净化空气并为家居增添自然气息",
                    image: "https://picsum.photos/id/106/800/600"
                },
                {
                    id: 2,
                    name: "多肉植物收藏",
                    description: "形态各异的多肉植物，适合忙碌生活的理想选择",
                    image: "https://picsum.photos/id/119/800/600"
                },
                {
                    id: 3,
                    name: "观花植物指南",
                    description: "色彩缤纷的开花植物，为您的空间带来生机与活力",
                    image: "https://picsum.photos/id/142/800/600"
                },
                {
                    id: 4,
                    name: "药用与香草植物",
                    description: "实用的药用和香草植物，可用于烹饪和自然疗法",
                    image: "https://picsum.photos/id/155/800/600"
                }
            ],
            communityPosts: [
                {
                    id: 1,
                    title: "How I Revived My Dying Pothos",
                    content: "After noticing my pothos was looking sad with yellow leaves, I adjusted its watering schedule and moved it to a brighter spot. Within 2 weeks, it started thriving again!",
                    author: "GreenThumbLover"
                },
                {
                    id: 2,
                    title: "My First Succulent Garden",
                    content: "I just completed my first succulent arrangement in a vintage teacup. So excited to watch them grow! Any tips for keeping them happy?",
                    author: "NewPlantParent"
                },
                {
                    id: 3,
                    title: "Monstera Propagation Success!",
                    content: "I thought I'd share my success story with propagating my monstera. I now have 3 baby plants from the original mother plant!",
                    author: "PlantPropagator"
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