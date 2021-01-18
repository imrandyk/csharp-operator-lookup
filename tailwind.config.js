// tailwind.config.js
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const makeShadow = (name, rgb) => {
  const obj = {}

  obj[`${name}-xs`] = `0 0 0 1px rgba(${rgb}, 0.05)`
  obj[`${name}-xs`] = `0 0 0 1px rgba(${rgb}, 0.05)`
  obj[`${name}-sm`] = `0 1px 2px 0 rgba(${rgb}, 0.05)`
  obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`
  obj[
    `${name}-md`
  ] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`
  obj[
    `${name}-lg`
  ] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`
  obj[
    `${name}-xl`
  ] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`
  obj[`${name}-2xl`] = `0 25px 50px -12px rgba(${rgb}, 0.25)`
  obj[`${name}-inner`] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`
  return obj
}

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  future: {},
  purge: [],
  theme: {
    colors: {
      white: colors.gray[50],
      black: colors.gray[900],
      gray: colors.gray,
      primary: colors.lime,
      pink: colors.pink[500],
      cyan: [colors.cyan[500], colors.cyan[700]],
      red: [colors.red[400], colors.red[700]],
      orange: colors.orange[500],
      violet: [colors.violet[400], colors.violet[600]],
      yellow: [colors.yellow[500], colors.yellow[800]],
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      boxShadow: {
        ...makeShadow('primary', '132, 204, 22'),
      },
    },
  },
  variants: {
    extend: {
      scale: ['focus-within'],
      boxShadow: ['dark'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.object-shadow-sm': {
          filter: 'drop-shadow(30 1px 2px rgba(0, 0, 0, 0.05))',
        },
        '.object-shadow': {
          filter:
            'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06))',
        },
        '.object-shadow-md': {
          filter:
            'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))',
        },
        '.object-shadow-lg': {
          filter:
            'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
