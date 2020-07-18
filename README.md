# Quaco (Frontend)

https://quaco-frontend-milooy.endpoint.ainize.ai/

## 빌드 및 도커 올리기
```
# 도커 빌드
docker build -t jayjinjay/quaco-frontend .

# 빌드된 이미지 보기
docker images

# 80포트에 빌드된 이미지 올리기
docker run -p 80:80 -d jayjinjay/quaco-frontend

# 돌고 있는 컨테이너 보기
docker ps

# 돌고 있는 컨테이너 죽이기
docker stop {컨테이너아이디}

# 빌드된 이미지 로컬에서 띄우기
docker run -p 80:80 -d jayjinjay/quaco-frontend

# 도커 허브에 올리기
docker push jayjinjay/quaco-frontend
```

## Links
- Docker hub: https://hub.docker.com/repository/docker/jayjinjay/quaco-frontend/general
- Anize page: https://ainize.ai/milooy/quaco-frontend
- Aninize tutorial: https://ai-network.gitbook.io/ainize-tutorials/ainize/hello-world#dockerize-steps
