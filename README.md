# [SDI-M03-library](https://github.com/NTU-Team3/library/)

A NTU / SkillsUnion Software Developer Immersive group project to showcase our skills and knowledge on Backend Development.

We have developed a library site with backend code structured using N-tier Architecture with REST endpoints.

## ERD

![image](https://user-images.githubusercontent.com/98152745/167982146-b909b2dd-8f51-4a71-b678-f85606f602b5.png)


#### Deployment

https://t3library.herokuapp.com/

## Endpoints

### _/admin_

### _/public_

### _/review_

### _/member/cart_

### _/member/history_

| Method | Path            | Description                                                      |
| ------ | --------------- | ---------------------------------------------------------------- |
| POST   | /create         | 'userId', 'bookId' - create history record                       |
| PUT    | /update/:userId | 'userId' - update history of user                                |
| GET    | /:userId        | 'userId' - display history of user, with association model: book |

```
Test Cases For POST:
```

- https://t3library.herokuapp.com/member/create

```
Test Cases For PUT:
```

- https://t3library.herokuapp.com/member/update/2

```
Test Cases For GET:
```

- https://t3library.herokuapp.com/member/history/1
- https://t3library.herokuapp.com/member/history/10
- https://t3library.herokuapp.com/member/history/100



## Authors

- [Irene](https://www.github.com/trainingresult6361)
- [Ming Sheng](https://www.github.com/kmings93)
- [Royston](https://www.github.com/roystonlau)
- [Saiful](https://www.github.com/saifu7bahri)
- [Wai Chee](https://www.github.com/swaichee)

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
