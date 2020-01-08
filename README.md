## new-key
A simple random and unique key generator.  
Version 1.0.0  

### Install
```
npm i new-key
```

### Usage
```javascript
const newKey = require("new-key");

// Change config settings.
// You can change only those settings that you want to.
newKey.set({
    length: 32
});

// Available config settings.
// length: number = Length of the key generated.
// lowercase: boolean = Lowercase characters allowed or not.
// numbers: boolean = Numbers allowed or not.
// uppercase: boolean = Uppercase characters allowed or not.

// Generate an key.
newKey();
```

### Credits
Developed by **Ruby Kamboj**  
Email: [rubykambojofficial@gmail.com](mailto:rubykambojofficial@gmail.com)  
Facebook: [https://www.facebook.com/rkambojofficial](https://www.facebook.com/rkambojofficial)  
Instagram: [https://www.instagram.com/rkambojofficial](https://www.instagram.com/rkambojofficial)  

### License
MIT License  