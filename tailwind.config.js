module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                merriewether: "Merrieweather, serif",
                commisioner: "Commissioner, sans-serif",
                righteous: "Righteous, sans-serif",
            },
            backgroundImage: {
                "web-sec": "url('https://pantheon.io/sites/default/files/shutterstock_security_horiz.jpg')",
                glass: "rgba(17,25,40,0.75)",
            },
            backdropBlur: {
                glass: "16px",
            },
            saturate: {
                glass: "180%",
            },
            colors: {
                "glass-border": "rgba(255, 255, 255, 0.125)",
            },
        },
    },
    plugins: [],
};