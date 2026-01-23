import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 7,
        period: "month",
        features: [
            "50 AI Thumbnails/mo",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Creator",
        price: 15,
        period: "month",
        features: [
            "Unlimited AI Thumbnails",
            "Premium Templates",
            "4k Resolution",
            "A/B Testing Tools",
            "Priority Support",
            "Custom Fonts",
            "Brand Kit Analysis"
        ],
        mostPopular: true
    },
    {
        name: "studio",
        price: 29,
        period: "month",
        features: [
            "Everything in Pro",
            "API Access",
            "Team Collaboration",
            "Custom Branding",
            "Dedicated Account Manager"
        ],
        mostPopular: false
    }
];