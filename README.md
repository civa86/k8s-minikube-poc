# [P.O.C.] Kubernetes - Minikube

Proof of Concept of a Kubernets cluster based on Minikube VM.

Be sure to have installed and running softwares listed below:

- [Docker](https://www.docker.com/)
  - [Get Started](./docs/docker.md) with docker commands
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
  - [Get Started](./docs/kubernetes.md) with kubernetes commands
- [Minikube](https://github.com/kubernetes/minikube)
  - [Get Started](./docs/minikube.md) with minikube commands

## Cluster

This project will run a little k8s cluster:

| Type     | Technology         | Description                                     |
| -------- | ------------------ | ----------------------------------------------- |
| ingress  | NGINX              | Entrypoint Dispatcher and SSL termination proxy |
| frontend | NGINX + VueJS      | Webserver with Single Page Application          |
| backend  | Express + Mongoose | REST Api service to manage sample data          |
| database | MongoDB            | NoSql persistence database                      |

#### Architecture

TODO....

#### Setup Environment

> Step necessary only for the first installation.

```bash
# Clone repository
git clone ....

# Check minikube version >= v0.14.0
minikube version

# Enable Ingress Addon
minikube addons enable ingress

# Check Addons list
minikube addons list
```

#### Start Minikube

```bash
# Start Minikube
minikube start

# Connect to cluster docker daemon
$ eval $(minikube docker-env)
```

#### Build Docker Images

> Step necessary only for the first installation or whenever a microservice changes.

> Be sure to be connected to the minikube docker daemon.

```bash
# backend
docker build -t kmp-backend:v1 ./backend

# frontend
docker build -t kmp-frontend:v1 ./frontend
```

#### Create the Cluster

```bash
# Be sure to run kubernetes commands inside minikube
$ eval $(minikube docker-env)

kubectl create -f kubernetes/backend.yaml
```

#### Discover Minikube ip address

```bash
minikube ip
```

Open browser and visit the Minikube ip address ([https://192.168.99.100](https://192.168.99.100))

## Development

In order to start microservices in development run npm scripts

##### database

```bash
docker run -d -p 27017:27017 mongo
```

##### backend

```bash
cd backend
npm run serve
```

##### frontend

```bash
cd frontend
npm run serve
```
