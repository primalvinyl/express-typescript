export default {
    collectCoverageFrom: [
        'src/**/*.{ts,js}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: [
        'js',
        'ts',
        'json'
    ],
    preset: 'ts-jest',
};
