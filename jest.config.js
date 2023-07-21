module.exports = {
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
