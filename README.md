# Demo1
Simple incremental counter container Example

cd to Demo1\App folder

Run command: docker build . -t counter-img:v1.0

Run comamnd: docker run --name counter-container --rm -i -t counter-img:v1.0 5 bash

This will run the image in the container and destroy the container once finished

# Demo2
A simple greeting image hosted in single container. Run the below command after setting the docker-compose for the Demo2 project

docker-compose up -d --build

Access the URL: http://localhost/api/greeting/asdadasdddd to test the application

# Demo3
Multiple containers with the same image behind load balancer

2 containers of greetings image and 1 container of nginx (load balancer) image. Run the command after setting the docker-compose for the Demo3 project

docker-compose up -d --scale greetings=2 --build

Access the URL: http://localhost:4000/api/greeting/asdadasdddd to test the application
