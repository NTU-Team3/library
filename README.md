# [SDI-M03-library](https://github.com/NTU-Team3/library/)

A NTU / SkillsUnion Software Developer Immersive group project to showcase our skills and knowledge on Backend Development.

We have developed a library site with backend code structured using N-tier Architecture with REST endpoints.

## ERD

![image](https://user-images.githubusercontent.com/98152745/167982146-b909b2dd-8f51-4a71-b678-f85606f602b5.png)

## Deployment

https://t3library.herokuapp.com/

## Endpoints

&nbsp;

### 🚩 _/template-endpoint-path_

| Method | Path | Description |
| ------ | ---- | ----------- |
|        | /    |             |
|        | /    |             |
|        | /    |             |

&nbsp;

_POST:_

- https://t3library.herokuapp.com/

_PUT:_

- https://t3library.herokuapp.com/

_GET:_

- https://t3library.herokuapp.com/
- https://t3library.herokuapp.com/
- https://t3library.herokuapp.com/

&nbsp;

---

&nbsp;

### 🚩 _/review_

| Method | Path    | Description                   |
| ------ | ------- | ----------------------------- |
| GET    | /review | displaying the latest reviews |

&nbsp;

_GET:_

- https://t3library.herokuapp.com/review

&nbsp;

---

&nbsp;

### 🚩 _/member/cart_

| Method | Path     | Description           |
| ------ | -------- | --------------------- |
| GET    | /cart    | display list of cart  |
| POST   | /addCart | add bookId and userId |

&nbsp;

_POST:_

- https://t3library.herokuapp.com/member/cart/addCart

_GET:_

- https://t3library.herokuapp.com/member/cart

&nbsp;

---

&nbsp;

### 🚩 _/member/history_

| Method | Path               | Description                                                                                |
| ------ | ------------------ | ------------------------------------------------------------------------------------------ |
| GET    | /:userId           | List all history records of user, along with association model 'Book'.                     |
| POST   | /create            | Create new history record of user with 'userId' and 'bookId'.                              |
| PUT    | /update/:historyId | Update history of user with 'historyId', 'returnDate' will be populated with current date. |

&nbsp;

_GET:_

- https://t3library.herokuapp.com/member/history/abc
- https://t3library.herokuapp.com/member/history/1
- https://t3library.herokuapp.com/member/history/4
- https://t3library.herokuapp.com/member/history/100

_POST:_

- https://t3library.herokuapp.com/member/history/create

_PUT:_

- https://t3library.herokuapp.com/member/history/update/3

&nbsp;

---

&nbsp;

### 🚩 _/admin_

| Method | Path         | Description                                  |
| ------ | ------------ | -------------------------------------------- |
| GET    | /admin/setup | setup database with all tables and demo data |
| GET    | /admin/reset | reset database; drop all tables              |

&nbsp;

_GET:_

- https://t3library.herokuapp.com/admin/setup
- https://t3library.herokuapp.com/admin/reset

&nbsp;

---

&nbsp;

### 🚩 _/public_

| Method | Path         | Description                       |
| ------ | ------------ | --------------------------------- |
| GET    | /public/book | display all books in the library. |

&nbsp;

_GET:_

- https://t3library.herokuapp.com/public/book

&nbsp;

## Authors

- [Irene](https://www.github.com/trainingresult6361)
- [Ming Sheng](https://www.github.com/kmings93)
- [Royston](https://www.github.com/roystonlau)
- [Saiful](https://www.github.com/saifu7bahri)
- [Wai Chee](https://www.github.com/swaichee)

&nbsp;

## Built With

- Node.js
- Express
- Sequelize
- Heroku App
- Heroku Postgresql
- EJS
- HTML / CSS
- Git / GitHub
- Agile / Scrum

&nbsp;
