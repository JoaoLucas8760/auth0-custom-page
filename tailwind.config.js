module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bronze: {
          400: '#c27c2ccc',
          500: '#C27C2C',
        },
      },
      keyframes: {
        appearFromLeft: {
          from: {
            transform: 'translateX(-30px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        typing: {
          from: {
            color: '#fff2e3',
          },
          to: {
            color: '#c27c2c',
          },
        },
        toRight: {
          from: { right: '-50px' },
          to: { right: '0px' },
        },
        dotLoading: {
          '0%': { opacity: 0.4, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-0.3rem)' },
          '100%': { opacity: 0.4, transform: 'translateY(0)' },
        },
      },
      animation: {
        appearFromLeft: 'appearFromLeft 0.7s ease',
        dotLoading: 'dotLoading 0.8s ease-in-out infinite',
      },
      backgroundImage: {
        'form-pattern': "url('/images/bg-form-pattern.png')",
        'line-form-pattern': "url('/images/bg-form-line-pattern.png')",
      },
    },
  },
  plugins: [],
};
