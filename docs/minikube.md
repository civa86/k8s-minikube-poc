# Minikube

Minikube is a CLI tool that provisions and manages single-node Kubernetes clusters optimized for development workflows.

## Commands

**Profile**

Profile sets the current minikube profile. It is used in order to have multiple VMs and projects.

Profile can be also passed as argument to every single command.

> If not specified profile is: `default`

```bash
minikube profile PROFILE_NAME
```

**Start**

Starts a local kubernetes cluster (create if not exists).

```bash
minikube start [--profile=PROFILE_NAME]
```

**Stop**

Stops a running local kubernetes cluster.

```bash
minikube stop [--profile=PROFILE_NAME]
```

**Delete**

Deletes a local kubernetes cluster.

```bash
minikube delete [--profile=PROFILE_NAME]
```

**Dashboard**

Access the kubernetes dashboard running within the minikube cluster.

```bash
minikube dashboard [--profile=PROFILE_NAME]
```

**Status**

Gets the status of a local kubernetes cluster.

```bash
minikube status [--profile=PROFILE_NAME]
```

**Connect to Minikube Docker**

Run this command to connect to the minikube docker daemon.

```bash
eval $(minikube [--profile=PROFILE_NAME] docker-env)
```

**Minikube IP**

Discover the ip of the minikube VM.

```bash
minikube ip
```
