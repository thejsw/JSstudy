const { User, Article, Follow } = require("./models/model");
const crypto = require("crypto");
const fs = require("fs");

async function createUser(username, email, password = "123") {
    try {

        const salt = crypto.randomBytes(10).toString("hex");
        const hashedPassword = crypto.pbkdf2Sync(password, salt, 32, "sha256").toString("hex");

        const imgs = fs.readdirSync(`${__dirname}/seeds/profiles`)
        const image = imgs.find(img => img.match(new RegExp("^" + username)))

        const newName = `${createId()}.${image.split(".")[1]}`;

        fs.copyFileSync(`${__dirname}/seeds/profiles/${image}`, `${__dirname}/data/users/${newName}`);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            salt,
            bio: "안녕 내 이름은" + username,
            image: newName
        })
        await user.save()

    } catch (error) {
        console.error(error)
    }
}

// fs.readdirSync(direction): direction을 찾는 method
// const r = fs.readdirSync(`${__dirname}/seeds/profiles`);
// console.log(r)

const imgs = fs.readdirSync(`${__dirname}/seeds/profiles`);
const image = imgs.find(img => img.match(new RegExp("^" + username)));
console.log(imgs)
console.log(image)


const r = imgs.filter(img => {
    if (img.match('/^b')) {
        return img;
    }
})

console.log(r)

