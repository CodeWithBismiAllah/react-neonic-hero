// Add TypeScript declarations for Jest globals
declare global {
    const describe: (name: string, fn: () => void) => void
    const it: (name: string, fn: () => void) => void
    const expect: any
    const test: (name: string, fn: () => void) => void
    const beforeEach: (fn: () => void) => void
    const afterEach: (fn: () => void) => void
    const beforeAll: (fn: () => void) => void
    const afterAll: (fn: () => void) => void
  }
  
  export {}
  