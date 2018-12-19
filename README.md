# [P.O.C.] Kubernetes - Minikube

Proof of Concept of a Kubernets cluster based on Minikube VM.

## System Setup

Be sure to have installed and running softwares listed below:

- [Docker](https://www.docker.com/)
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://github.com/kubernetes/minikube)

## Docker

Read the [documentation](./docs/docker.md) to get started with docker commands

## kubernetes

Read the [documentation](./docs/kubernetes.md) to get started with kubernetes commands

## Minikube

Read the [documentation](./docs/minikube.md) to get started with minikube commands

## Cluster

This project will run a little k8s cluster:

| Type     | Technology         | Description                            |
| -------- | ------------------ | -------------------------------------- |
| backend  | Express + Mongoose | REST Api service to manage sample data |
| database | MongoDB            | NoSql persistence database             |
| frontend | NGINX + VueJS      | Webserver with Single Page Application |

Follow instructions in order to build and run the cluster in your local system

#### Clone Repository

> Step necessary only for the first installation.

```bash
git clone ....
```

#### Start Minikube

```bash
# Start Minikube
minikube start

# Connect to cluster docker daemon
$ eval $(minikube docker-env)
```

#### Build Microservices and Docker Images

> Step necessary only for the first installation or whenever a microservice changes.

```bash
# backend
cd <PATH_TO_K8S-MINIKUBE-POC>/backend
npm run build
docker build -t kmp-backend:v1 .

# frontend
cd <PATH_TO_K8S-MINIKUBE-POC>/frontend
...

```

#### Run the Cluster

```bash
# Be sure to run kubernetes commands inside minikube
$ eval $(minikube docker-env)

kubectl create -f kubernetes/backend.yaml
```

#### Discover Minikube ip address

```bash
minikube ip
```

Open browser and visit the Minikube address ([http://192.168.99.100](http://192.168.99.100)) //TODO: https??
