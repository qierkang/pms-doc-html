# [PMS-DOC用户帮助文档](http://doc.zhgcraft-pms.com)

[![coverage](https://img.shields.io/badge/文档创建&贡献者-尔康-blueviolet.svg)](https://www.qekang.com)|[![coverage](https://img.shields.io/badge/blog-important.svg)](https://www.qekang.com)|[![coverage](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)|[![coverage](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

<font face="微软雅黑" size=2 color=#A9A9A9 >版权声明：内容供内部学习使用，请勿外传！转载请附上作者信息</font>

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

### 域名映射
> 部署完成后在分支docs需要新增CNAME文件内容为：doc.zhgcraft-pms.com
> echo "doc.zhgcraft-pms.com" >> CNAME