const darkMode = {
    BACKGROUND: '#2f3136',

    PRIMARY: '#ff7bbf'
} as const


const lightMode = {

    dark: false,
    OVER_PRIMARY: 'white',

    LIGHT: '#ff7b65',
    DARK: '#b50011',
    PRIMARY: '#94070a',
    PRIMARY_GRAD: '#c40c0f',

    BACKGROUND: '#f4f4f4',
    BACKGROUND_DARK: '#eaeaea',
    BACKGROUND_LIGTH: '#FFFFFF',
    SHIMMER: ['#c6c4c6', '#e7e5e7', '#c6c4c6'],
    BACKGROUND_ULTRA_DARK: 'rgb(181, 181, 181)',
    LINEAR_VIDEO: ['rgba(0, 10, 10, .7)', 'rgba(10, 10, 10, .5)', 'rgba(10, 10, 10, .7)',],
    LINEAR_VIDEO_DARK: ['rgba(0, 10, 10, .9)', 'rgba(10, 10, 10, .7)', 'rgba(10, 10, 10, .9)',],
    LIVE_LINES: ['rgba(0, 0, 0, .0)', 'rgba(0, 0, 0, .2)'],
    LIVE_LINES_NO_VIDEO: ['rgba(0, 0, 0, .0)', 'rgba(0, 0, 0, .08)'],
    TIMER_BACKGROUND: ["rgba(234, 234, 234,0)", "rgba(234, 234, 234,100)", "rgba(234, 234, 234,0)"],

    FONT_COLOR_REVERSE: 'white',
    PRIMARY_FONT_COLOR: '#2b2b2b',
    TERTIARY_FONT_COLOR: 'rgba(0, 0, 0, .3)',
    SECUNDARY_FONT_COLOR: 'rgba(0, 0, 0, .7)',
} as const

export default darkMode
// export default lightMode