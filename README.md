# Requirements
MongoDB or Docker
RabbitMQ or Docker
Node

# Steps
- Run RabbitMQ `docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management`
- Run MongoDB `docker run --name mongodb -d -p 27017:27017 mongo`
- `cd public-api`
- `node src/index.js`
- `cd ../queue`
- `node src/index.js`
- visit localhost:3000