export const theme = {
    colors: {
        white: "#fafafa",
        black: "#212121",
        lightBlack: "#808080",
        violet: "#0900114a",
        Crimson: "#DC143C",
        Indigo: "#4B0082",
        iris: "#23a1cf", 
        cloud: '#fcfdfd',
        ocean: "#56cbd3",   
        dairy: '#fcfdfd',
        blue: "#0000FF",
        lightBlue: "#97d3e6",
        lightBlueSecond: "#97deee",
        PowderBlue: "#B0E0E6",
        GreenYellow: "#ADFF2F",
        Tomato: "#FF6347",
        Gray: "#808080",
        Beige: "#F5F5DC",
        MediumBlue: "#0000CD",
        Yellow: "#FFFF00",
        Orange: "#FFA500",
        mainBackground: ['linear-gradient(to top, #0f2027, #203a43, #2c5364)'],
        imageBackground: ['red', 'linear-gradient (90deg, #ff9966,#ff5e62'],
    },

    radii: {
        sm: "4px",
        md: "8px",
        lg: "16px",
    },

    fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
    },
    
    breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

    spasing: (value) => `${value * 4}px`,
}


