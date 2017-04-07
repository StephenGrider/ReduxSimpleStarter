module.exports = {
"env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
   "plugins": [
          "react"
    ],
    "rules": {
        "indent": [ 2, 4 ],                 // 4 spaces, currently silent because of open brace indentation anomalies
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-in-parens":                  // require spaces in parens but not for empty parens.
        [
            2,
            "always",
            { "exceptions": ["empty"] }
        ],
        "space-before-function-paren":      // function and (...) should not be separated by spaces
        [
            2,
            "never"
        ],
        "key-spacing":                      // enforces spacing between keys and values in object literal properties
        [
            2,
            {
                "align": "colon",       // colons have the same vertical position
                "beforeColon": true,    // there is at least 1 space before the colon
                "afterColon": true      // there is exactly 1 space after the colon (in strict mode)
            }
        ],
        "array-bracket-spacing":            // enforces space inside array brackets
        [
            2, "always"
        ]
    }
};
