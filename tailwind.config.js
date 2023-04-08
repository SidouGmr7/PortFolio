module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#27c7b7",
                secondary: "#68fff1",
            },
            textColor: {
                primary: "#68fff1",
            },
            borderColor: {
                "custom-green": "#00FF00",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".headerTitle": {
                    "@apply text-2xl text-primary md:text-4xl font-bold text-center pt-10 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-1 before:bg-secondary":
                        {},
                },
            })
        },
        require("tailwind-scrollbar-hide"),
    ],
}
