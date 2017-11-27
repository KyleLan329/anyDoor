module.exports = {
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "rules": {
        "no-console": ["error",{
            "allow": ["warn", "error", "info"]
        }]
    },
    "parserOptions": {
        "ecmaversion": 6,
        "sourceType": "script"
    },
    "globals": {
        //"window": true
    },
    "env": {
        "browser": false,
        "node": true,
        "es6": true,
        "mocha": true
    }
}