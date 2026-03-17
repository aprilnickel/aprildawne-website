# Initial server setup (only need to do this once - not for subsequent deploys)

```
cd /srv
sudo mkdir aprildawne-website
sudo chown deploy aprildawne-website
sudo chgrp deploy aprildawne-website
sudo chmod 750 aprildawne-website

su - deploy
cd /srv/aprildawne-website
touch docker-compose.yml
vim docker-compose.yml # copy from repo
```

---

# Steps for a Manual Deploy (not via Github Actions)

## On local machine:

1. Login to Github Container Registry:

   ```
   docker login ghcr.io
   ```

2. Build & push:

   ```
   docker buildx build --platform linux/amd64 --push -t ghcr.io/aprilnickel/aprildawne-website:latest .
   ```

## On server:

3. Run the following:

   ```
   su - deploy
   cd /srv/aprildawne-website
   docker login ghcr.io
   docker compose pull app
   docker compose up -d app
   ```
