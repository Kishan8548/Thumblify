import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 99,
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
        price: 299,
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
        price: 499,
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