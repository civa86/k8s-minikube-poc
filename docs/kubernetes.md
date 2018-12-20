# Kubernetes

kubectl controls the Kubernetes cluster manager.

**Show all**

```bash
kubectl get all
```

**Use selectors**

Use label selector in order to identify multiple elements.

> `app: kmp` is the common metadata -> label of each kubernetes elements in this project

```bash
kubectl <COMMAND> -l app=kmp
```
