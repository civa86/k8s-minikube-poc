# Kubernetes

kubectl controls the Kubernetes cluster manager.

**Show all**

```bash
kubectl get all
```

**Use selectors**

Use label selector in order to identify multiple elements.

```bash
kubectl <COMMAND> -l <KEY>=<VALUE>

# Delete all stuff identified by app:kmp
kubectl delete all -l app=kmp
```

> `app: kmp` is the common metadata -> label of each kubernetes elements in this project
