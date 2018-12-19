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

| Type     | Technology         | Description                            |
| -------- | ------------------ | -------------------------------------- |
| frontend | NGINX + VueJS      | Webserver with Single Page Application |
| backend  | Express + Mongoose | REST Api service to manage sample data |
| database | MongoDB            | NoSql persistence database             |

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

Open browser and visit the Minikube ip address ([http://192.168.99.100](http://192.168.99.100)) //TODO: https??

#### Destroy Cluster

Use label selector in order to identify all deployments and services of this project.

```bash
kubectl delete deployment,service -l app=kmp
kubectl delete pods --all
```

> `app: kmp` is the common metadata -> label of each kubernetes elements in this project

## Development

In order to start microservices in development run npm scripts

##### frontend

```bash
cd frontend
npm run serve
```

##### backend

```bash
cd backend
npm run serve
```
