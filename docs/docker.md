# Docker

List o some useful commands

**Build Image**

```bash
docker build -t <DOCKER_IMAGE_TAG_NAME>:<DOCKER_IMAGE_TAG_VERSION> ./<PATH_TO_DOCKER_FILE>
```

**Remove all unused images**

```bash
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")
```

**Remove images by name**

```bash
docker rmi -f $(docker images '<IMAGE_NAME>')
```
