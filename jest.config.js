// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  // pastas irgnoradas pelo jest
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // mapeamento do "path alias" do Next 13
  moduleNameMapper: {
    '@/components(.*)$': '<rootDir>/src/components/$1',
    '@/lib(.*)$': '<rootDir>/src/lib/$1',
  },
  // caminho do arquivo de configuração do Jest
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  // utilização do babel para converter arquivos typescript
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // ambiente de teste
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
