// themes.ts

export interface Theme {
    name: string;
    label: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        base: string;
    };
}

export const THEMES: Theme[] = [
    {
        name: "light",
        label: "Light",
        colors: {
            primary: "#5a67d8",
            secondary: "#8b5cf6",
            accent: "#1a202c",
            base: "#ffffff",
        },
    },
    {
        name: "dark",
        label: "Dark",
        colors: {
            primary: "#8b5cf6",
            secondary: "#ec4899",
            accent: "#1a202c",
            base: "#1f2937",
        },
    },
];
