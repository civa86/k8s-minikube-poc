# [P.O.C.] Kubernetes - Minikube

Proof of Concept of a Kubernets cluster based on Minikube VM.

## System Setup

Be sure to have installed and running softwares listed below:

- [Docker](https://www.docker.com/)
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://github.com/kubernetes/minikube)

## Minikube

Read the [documentation](./docs/minikube.md) to get started with the minikube environment

## Cluster

This project will run a little k8s cluster:

| Type     | Technology         | Description                            |
| -------- | ------------------ | -------------------------------------- |
| service  | Express + Mongoose | REST Api service to manage sample data |
| database | MongoDB            | NoSql persistence database             |
| frontend | NGINX + VueJS      | Webserver with Single Page Application |

Follow instructions in order to build and run the cluster in your local system

#### Clone Repository

Start with cloning the repository

```bash
git clone ....
```

#### Launch minikube and connect to cluster docker

```bash
minikube start
eval $(minikube docker-env)
```

#### Service

Build the `REST Api Service` image

```bash
cd service
npm install
docker build -t ...
```
