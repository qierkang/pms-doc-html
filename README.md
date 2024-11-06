# vite-press-demo 项目源码

## 运行项目

### 安装 pnpm（如果未安装）

```shell
npm install -g pnpm
```

### 安装依赖

```shell
pnpm install
```

### 项目构建

```shell
pnpm run docs:build
```

### 本地运行

```shell
pnpm run docs:dev
```

### Docker 打包本地运行

```shell
# 打包
docker build -t pms-doc-html .
# 运行
docker run -d -u 0 --name pms-doc-html --restart=on-failure --detach \
  --restart=on-failure:3 \
  --network myNetwork --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 5173:5173 \
  --volume /etc/localtime:/etc/localtime \
  --volume $(which docker):/usr/bin/docker \
  pms-doc-html:latest pnpm run docs:dev
# 进入容器
docker exec -it pms-doc-html bash
```

打开：
[http://localhost:5174/vite-press-demo/](http://localhost:5174/vite-press-demo/)



# 推荐内容

【[掘金首页](https://github.com/qierkang)】

【[CSDN 首页](https://github.com/qierkang)】