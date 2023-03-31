# GitLab Pipelines
相对于github而言，企业中更多使用的是Gitlab。Gitlab也有类似于GitHub Actions的功能，名为GitLab Pipelines。

在GitLab Pipelines中，每个流水线都由一个或多个Job组成，每个Job是独立运行的任务，可以通过配置文件来定义Job的具体操作。常见的GitLab Pipelines配置文件是`项目根目录`的.gitlab-ci.yml，它使用YAML格式来定义Pipeline的配置。

## yaml

下面是一个简单的.gitlab-ci.yml文件的示例，该文件定义了一个执行前端构建任务的Pipeline：

```yaml
# 定义使用的Docker镜像
image: node:12

# 定义流水线的各个阶段
stages:
  - build
  - test
  - deploy

# 定义需要缓存的目录，以便在下一次构建时加速构建过程
cache:
  paths:
    - node_modules/

# 定义构建阶段
build:
  # 指定该阶段的名称
  stage: build
  # 在Docker容器中执行的命令
  script:
    - npm install
    - npm run build
  # 将构建产生的产物进行存储
  artifacts:
    paths:
      - build/

# 定义测试阶段
test:
  # 指定该阶段的名称
  stage: test
  # 在Docker容器中执行的命令
  script:
    - npm install
    - npm test

# 定义部署阶段
deploy:
  # 指定该阶段的名称
  stage: deploy
  # 定义该阶段只有在构建和测试阶段通过后才会执行
  only:
    - master
  # 在Docker容器中执行的命令
  script:
    - apt-get update
    - apt-get install -y sshpass
    - sshpass -p $DEPLOY_PASSWORD scp -r build/* $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
```

## Gitlab Runner
与GitHub Actions一样的是，GitLab Pipelines需要配置GitLab Runner才可以执行。

GitLab Runner需要和GitLab服务器进行通信，并且需要注册到GitLab服务器上，以便GitLab可以向Runner发送作业。每个GitLab Runner都有自己的标识符（Runner Token），这个标识符用于注册Runner到GitLab服务器上。

GitLab Runner的注册过程可以通过以下步骤完成：

- 安装GitLab Runner，可以从官网下载适合自己操作系统的二进制文件或者使用Docker容器来安装。
- 执行gitlab-runner register命令，根据提示输入GitLab服务器的地址、Runner Token、Runner的描述信息等等。
- 在GitLab服务器上确认注册信息，可以在项目的CI/CD设置页面中查看新注册的Runner。

下面是一些具体的注册命令示例，假设GitLab服务器地址为https://gitlab.example.com，Runner Token为XXXXXXXXXXXXXXXXXXXX：

### 使用默认配置注册Runner：

```bash
sudo gitlab-runner register \
  --url https://gitlab.example.com \
  --registration-token XXXXXXXXXXXXXXXXXXXX \
  --description "My Runner" \
  --executor shell
```
### 使用Docker容器注册Runner：
``` bash
sudo docker run -d --name gitlab-runner \
  --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
sudo docker exec -it gitlab-runner gitlab-runner register \
  --url https://gitlab.example.com \
  --registration-token XXXXXXXXXXXXXXXXXXXX \
  --description "My Runner" \
  --executor docker \
  --docker-image "docker:stable"
```

在以上命令中，--description参数用于设置Runner的描述信息，--executor参数用于设置Runner的执行方式，可以选择shell、docker或者其他支持的执行方式。注册成功后，可以在GitLab项目的CI/CD设置页面中查看新注册的Runner。



