module.exports = {
  "transform": {
    "^.+\\.js?$": "esbuild-jest-transform"
  },
  "testEnvironment": "node",
  "testPathIgnorePatterns": [
    "node_modules/",
    "dist/"
  ]
}
