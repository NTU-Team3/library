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
