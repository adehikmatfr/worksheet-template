## worksheet-template v1 📖

worksheet-template adalah sebuah project template aplikasi yang di bangun untuk membuat restfull api dengan menggunakan database sql dan express sebagai core project 🙂. project ini juga cocok digunakan sebagaibahan pembeleajaran karena folder yang tersetruktur dan code yang mudah di mengerti 🥳. template ini sering saya gunakan karena dapat mempermudah dan mempercepat pekerjaan 🏢.
<br/>
sebelumnya pastikan laptop atau pc kalian sudah terinstall nodejs,npm,git dan database sql. saya sarankan menggunakan versi node yang terbaru dan stable. disini saya menggunakan node v.12 .

```
$ node --version
v12.18.1
$ npm --version
6.14.8
```

## plugins yang di gunakan 🗄

### Required plugins

- 🔏 [bcrypt](https://www.npmjs.com/package/bcrypt)
- 🛠 [body-parser](https://www.npmjs.com/package/body-parser)
- 🚦 [cors](https://www.npmjs.com/package/cors)
- 💼 [dotenv](https://www.npmjs.com/package/dotenv)
- 🦴 [express](https://www.npmjs.com/package/express)
- 🤖 [joi](https://www.npmjs.com/package/joi)
- 🎫 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- 🗂 [sequelize](https://www.npmjs.com/package/sequelize)

### dev plugins

- 🔈 [morgan](https://www.npmjs.com/package/morgan)
- 🛠 [nodemon](https://www.npmjs.com/package/nodemon)
- 🆑 [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

bagi yang belum menggunakan plugin-plugin di atas harap terlebih dahulu mempelajari sebelum menganalisis 🙂.

## fitur yang sudah tersedia

- Authentication users
- validation input
- user model
- validation token
- database mysql config
- router read file

## fitur yang akan di tambahkan

- cacheing with redis
- resend email
- mocha and chai
- docker

## cara install

```
 $ git clone https://github.com/adehikmatfr/worksheet-template.git
 $ cd worksheet-template
 $ npm install
 $ npm run dev
```

jika ingin mencoba route yang telah tersedia anda harus menjalankan dulu langkah langkah berikut :

- buat database sql dengan nama home atau jika ingin custom bisa anda ubah configuraasi file json yang terletak di [src/config/config.json][jsonfile] kemudian ubah nama databse sesuai keinginan dan jangan lupa naca doc sequelize-cli sebagai panduan.

```
$ cd src
$ npx sequelize-cli db:migrate
```

selamat mencoba follow and bagikan, odading mang oleh 🙂

### Bergabung dengan saya:

[<img align="left" alt="youtube | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
[<img align="left" alt="linkedin | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="instagram | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="facebook | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />][facebook]

[linkedin]: https://www.linkedin.com/in/adehikmat
[youtube]: https://www.youtube.com/channel/UCpZ-2cuPYGKO-LSR2YHTrAg/
[instagram]: https://www.instagram.com/adehikmat_fr/
[facebook]: https://www.facebook.com/adehikmat.fanzipauzan
[jsonfile]: https://github.com/adehikmatfr/worksheet-template/blob/master/src/config/config.json
