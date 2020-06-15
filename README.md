# Demo1
Simple incremental counter container Example

cd to Demo1\App folder

Run command: docker build . -t counter-img:v1.0

Run comamnd: docker run --name counter-container --rm -i -t counter-img:v1.0 5 bash

This will run the image in the container and destroy the container once finished

# Demo2
A simple greeting API image hosted in single container. Run the below command after setting the docker-compose for the Demo2 project

docker-compose up -d --build

Access the URL: http://localhost/api/greeting/asdadasdddd to test the application

# Demo3
Multiple containers with the same image (API) behind load balancer

2 containers of greetings image and 1 container of nginx (load balancer) image. Run the command after setting the docker-compose for the Demo3 project

docker-compose up -d --scale greetings=2 --build

Access the URL: http://localhost:4000/api/greeting/asdadasdddd to test the application

# Demo4

UI container with backend service layer container

1 container for Angular UI, 1 container for load balancer, 1 container for service (multiple service container can be spanned as shown in Demo3). Run the command after setting the docker-compose for the Demo4 project

Build the Angular project using command: ng build --prod

Run the docker compose command: docker-compose up -d --build

Access the URL: http://localhost:9000 for the angular UI

# Demo5
Asynchronous communication between containers using RabbitMq. 1 container, Sender, sends the message to the queue, 1 container, Receiver, receive the message from the queue. Run the command after setting the docker-compose for the Demo5 project

Run the docker compose command: docker-compose up -d --build

Access the URL: http://localhost:15672/ to see the RabbitMq management page. Use the credential guest/guest to login to RabbitMq management page.

