# 使用 Node.js 官方提供的 Node 镜像作为基础镜像
FROM node:latest

# 更换为中国科学技术大学的源
RUN echo 'deb http://mirrors.ustc.edu.cn/debian/ bullseye main non-free contrib' > /etc/apt/sources.list && \
    echo 'deb-src http://mirrors.ustc.edu.cn/debian/ bullseye main non-free contrib' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.ustc.edu.cn/debian-security/ bullseye-security main' >> /etc/apt/sources.list && \
    echo 'deb-src http://mirrors.ustc.edu.cn/debian-security/ bullseye-security main' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.ustc.edu.cn/debian/ bullseye-updates main non-free contrib' >> /etc/apt/sources.list && \
    echo 'deb-src http://mirrors.ustc.edu.cn/debian/ bullseye-updates main non-free contrib' >> /etc/apt/sources.list

# 更新系统并安装必要的工具
#RUN apt-get update && \
#    apt-get upgrade -y && \
#    apt-get install -y git wget curl vim net-tools iproute2 && \
#    apt-get clean && \
#    rm -rf /var/lib/apt/lists/* \

# 设置工作目录
WORKDIR /app

# 将本地的 Vitepress 项目文件复制到容器的工作目录
COPY . /app

# 切换淘宝镜像源
RUN npm config set registry https://registry.npmmirror.com

RUN npm config get registry

# 安装 pnpm，并忽略证书检查
RUN npm install -g --unsafe-perm pnpm

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install --arch=x64 --platform=linux esbuild

# 重新安装正确平台版本的 esbuild
#RUN rm -rf node_modules/.vitepress/node_modules/esbuild

# 构建 Vitepress 项目
RUN pnpm run docs:build

# 暴露 Vitepress 默认端口
EXPOSE 5173

# 启动 Vitepress 项目
CMD ["pnpm", "run", "docs:dev"]
