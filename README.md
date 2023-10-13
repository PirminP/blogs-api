# :construction: README em construção ! :construction:

# Project Blogs API

#### This project consists of a database API for producing content for a blog.

* Developed using Node.js, Express, Sequelize, MySQL & Docker
* Using REST practices
* Applied Software Architecture: Model, Service & Controller layers

### Instructions
* To run the repository locally, clone the project and use the following commands to initialize Docker, install all dependencies & configure data bank:
  
  ```
  npm run prestart // create data bank & migrations
  npm run seed // populate data bank
  docker-compose up -d // start application with docker
  docker attach blogs_api
  npm install // install dependencies
  docker-compose down // stop application
  ```

Use the following command to run the application:
  ```
  npm start // start application
  ou
  npm run debug // start application in development environment
  ```

### Endpoints
#### Login

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   |   | http://localhost:3000/ |

The following JSON is to be entered in the request:
  ```

  ```

#### User

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `PUT`   |  | http://localhost:3000/ |
  | `POST`   |  | http://localhost:3000/ |
  | `DELETE`   |  | http://localhost:3000/ |

The following JSON is to be entered in the request PUT & POST:
  ```

  ```

#### Categories

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `PUT`   |  | http://localhost:3000/ |
  | `POST`   |  | http://localhost:3000/ |
  | `DELETE`   |  | http://localhost:3000/ |

The following JSON is to be entered in the request PUT & POST:
  ```

  ```

#### Post

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `GET`   |  | http://localhost:3000/ |
  | `PUT`   |  | http://localhost:3000/ |
  | `POST`   |  | http://localhost:3000/ |
  | `DELETE`   |  | http://localhost:3000/ |

The following JSON is to be entered in the request PUT & POST:
  ```

  ```
