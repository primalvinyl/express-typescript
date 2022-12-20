export default {
    automock: true,
    collectCoverageFrom: [
        'src/**/*.{ts,js}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
};
