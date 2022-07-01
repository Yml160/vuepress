## 一.Host is not allowed to connect to this MySQL server

## MySQL不允许远程登录，所以远程登录失败了

1、在装有MySQL的机器上登录MySQL mysql -u root -p密码 ；

2、执行use mysql;

3、执行update user set host = '%' where user = 'root';这一句执行完可能会报错，不用管它。


select host, user from user

4、执行FLUSH PRIVILEGES;
