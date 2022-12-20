const jestConfig = {
    preset: "jest-expo",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    // moduleNameMapper: {
    //     '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    //     '^@assets(.*)$': '<rootDir>/src/assets$1',
    //     '^@routes(.*)$': '<rootDir>/src/routes$1',
    //     '^@components(.*)$': '<rootDir>/src/components$1',
    //     '^@pages(.*)$': '<rootDir>/src/pages$1',
    //     '^@services(.*)$': '<rootDir>/src/services$1',
    //     '^@enterprise(.*)$': '<rootDir>/src/enterprise$1',
    //     '^@factory(.*)$': '<rootDir>/src/factory$1',
    // },
    // transform: {
    //     '^.+\\.jsx$': 'babel-jest',
    // },
    // testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    // testPathIgnorePatterns: [
    //     "\\.snap$",
    //     "<rootDir>/node_modules/"
    // ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
    ]
}

export default jestConfig