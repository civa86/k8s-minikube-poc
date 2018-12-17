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

```bash
# FIRST TIME STEPS...

# Clone Repository
$ git clone ....

# Move into project directory
$ cd k8s-minikube-poc

# Build projects
$ cd backend
$ npm install
$ cd ..

# CLUSTER STEPS...

# Start Minikube
$ minikube start

# Connect to cluster docker daemon
$ eval $(minikube docker-env)





# REST Api Service: docker image
$ docker build -t k8s-minikube-poc-backend:v1 ./backend

# MongoDB: docker image

# Frontend: build

# Frontend: docker image

# Kubernetes run cluster
kubectl create -f kubernetes/backend.yaml
```
