# Gitee 版本控制设置指南 (GitHub 替代方案)

由于 GitHub 在国内访问不稳定，本指南将帮助您设置 Gitee (码云) 作为替代的版本控制系统。

## 1. 创建 Gitee 账户

1. 访问 [Gitee 官方网站](https://gitee.com)
2. 点击右上角的「注册」按钮
3. 填写注册信息并完成注册过程
4. 登录您的 Gitee 账户

## 2. 在 Gitee 创建新仓库

1. 登录后，点击右上角的「+」按钮，选择「新建仓库」
2. 填写仓库信息：
   - 仓库名称：建议使用 `plant-buddies`
   - 仓库介绍：简要描述您的项目
   - 选择可见性：公开或私有
   - 勾选「使用 README 文件初始化这个仓库」
3. 点击「创建」按钮

## 3. 初始化本地仓库并关联 Gitee

### 配置 Git 用户名和邮箱

打开命令行工具，输入以下命令（使用您的信息替换）：

```bash
git config --global user.name "您的用户名"
git config --global user.email "您的邮箱"
```

### 初始化仓库并关联 Gitee

在您的项目目录中（当前已经在 `C:\Users\Book\Desktop\Plant` 目录）：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交文件
git commit -m "初始化项目"

# 关联 Gitee 远程仓库（请替换为您的 Gitee 仓库 URL）
git remote add origin https://gitee.com/您的用户名/plant-buddies.git

# 推送到 Gitee 仓库
git push -u origin master
```

## 4. 后续使用流程

### 日常工作流程

```bash
# 查看修改状态
git status

# 添加修改的文件
git add 文件名 或 git add . （添加所有修改）

# 提交更改
git commit -m "提交信息"

# 推送到远程仓库
git push
```

### 从远程仓库拉取更新

```bash
git pull origin master
```

## 5. Git 忽略文件 (.gitignore)

建议创建一个 `.gitignore` 文件来忽略不需要版本控制的文件：

```
# 忽略依赖目录
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 忽略 IDE 文件
.idea/
.vscode/
*.swp
*.swo
*~

# 忽略系统文件
.DS_Store
Thumbs.db

# 忽略环境变量文件
.env
.env.local
.env.*.local
```

## 6. 常见问题解决

### 推送失败

如果推送失败，可能是因为远程仓库有更新，先拉取更新再推送：

```bash
git pull --rebase origin master
git push
```

### 连接问题

如果连接到 Gitee 遇到问题，可以尝试使用 SSH 连接代替 HTTPS，这通常更加稳定且不需要每次都输入密码。

请参考 Gitee 的 [SSH 公钥管理](https://gitee.com/help/articles/4181) 文档设置 SSH 连接。

## 7. 其他可用的替代方案

如果您对 Gitee 不满意，以下是其他在中国可用的 Git 托管服务：

1. **Coding.net (腾讯云开发)** - https://coding.net
2. **GitLab 自建实例** - 可部署在国内服务器上
3. **Bitbucket** - 有时比 GitHub 在中国访问更稳定

祝您使用愉快！