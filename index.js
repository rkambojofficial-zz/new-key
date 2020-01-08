let initialConfig = {
    length: 16,
    lowercase: true,
    numbers: true,
    uppercase: true
};
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};
const generateLowercase = () => characters.lowercase[Math.floor(Math.random() * characters.lowercase.length)];
const generateNumber = () => characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
const generateUppercase = () => characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
module.exports = () => {
    let key = "";
    const values = Object.keys(initialConfig).map((key) => initialConfig[key]);
    const count = values.filter((value) => value === true).length;
    for (let i = 0; i < initialConfig.length; i += count) {
        if (initialConfig.lowercase) {
            key += generateLowercase();
        }
        if (initialConfig.numbers) {
            key += generateNumber();
        }
        if (initialConfig.uppercase) {
            key += generateUppercase();
        }
    }
    return key.slice(0, initialConfig.length);
}
module.exports.set = (config = initialConfig) => {
    const length = config.length;
    if (length) {
        if (length < 4) {
            return console.log("Error at set(): Minimum value for length is 4.");
        } else if (length > 256) {
            return console.log("Error at set(): Maximum value for length is 256.");
        }
    }
    if (config.lowercase === false && config.numbers === false && config.uppercase === false) {
        return console.log("Error at set(): One of lowercase, numbers and uppercase should be true.");
    }
    initialConfig = {
        ...initialConfig,
        ...config
    };
}