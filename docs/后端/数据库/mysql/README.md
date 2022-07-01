## mysql
## 安装mysql数据库
### 下载MySQL
#### 下载mysql，地址：https://dev.mysql.com/downloads/installer/

#### 压缩包下载地址：https://dev.mysql.com/downloads/mysql/5.5.html#downloads

下载好压缩包以mysql-8.0.17-winx64文件为案例，我们放在
C:/mysql/mysql-8.0.17-winx64

第一步：添加系统环境变量
path    C:/mysql/mysql-8.0.17-winx64/bin

第二步：然后打开mysql-8.0.17-winx64文件创建一个my.ini文件
用于初始化mysql，里面的内容为

``` my.ini
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir = C:\\mysql\\mysql-8.0.17-winx64
# 设置mysql数据库的数据的存放目录
datadir = C:\\mysql\\mysql-8.0.17-winx64\\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 创建模式
sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

```

第三步：初始化执行cmd命令
``` cmd
cd C:/mysql/mysql-8.0.17-winx64/bin
mysqld --initialize
```

输入上述命令，按回车，会发现文件夹下会多出一个新的文件夹data。

等待初始化完成会生成一个后缀名为.err的文件，里面存放的是初始化登录mysql的密码；

第四步：打开cmd窗口，输入mysqld --install 命令

``` cmd
cd C:/mysql/mysql-8.0.17-winx64/bin
mysqld --install
```

成功后输出 Service successfully installed.

如果出现 Install/Remove of the Service Denied! 错误的话 请用管理员运行cmd

第五步：开启mysql服务；
``` cmd
net start mysql
```
显示
MySQL 服务正在启动 ....
MySQL 服务已经启动成功。

第六步 使用root账户和刚刚文件里查看的密码进行登录；
在data文件里面找后缀为err的文件
A temporary password is generated for root@localhost: SKDFJKDF
mysql -u账号 -p密码
``` cmd
mysql -uroot -pSKDFJKDF
```
显示登录成功
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 12
Server version: 8.0.22

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

第七步：修改mysql root账户密码：使用命令：alter user 'root'@'localhost' identified with mysql_native_password by ' **这里填写新密码** ';

``` cmd
alter user 'root'@'localhost' identified with mysql_native_password by '123456';
```
显示
Query OK, 0 rows affected (0.03 sec)
