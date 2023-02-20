module.exports = {
    // ... other configurations
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "<rootDir>/node_modules/jest-transform-css"
    }
  };
 
  