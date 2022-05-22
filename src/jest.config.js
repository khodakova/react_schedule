const config = {
    rootDir: '../',
    transform: {
        '^.+\\.(jsx?|tsx?)$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        // настройка для импорта ассетов (скоммунизжена с create-react-app)
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/webpack/config/jest/fileTransform.js',
        // настройка для импорта стилей (скоммунизжена с create-react-app)
        '^.+\\.(css|less|scss)$':
            '<rootDir>/webpack/config/jest/cssTransform.js',
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
        // '^.+\\/modules/\\*\\*/route.ts$': '<rootDir>/config/jest/routeMock.js',
    },
};

module.exports = config;
