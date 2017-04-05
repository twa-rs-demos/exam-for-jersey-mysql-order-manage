# 调研

## 使用
```
$ source ./env
$ mysql -u user -ppassword < db_init.sql
$ ./gradlew flywaycleawn flywaymigrate
$ ./gradlew run
```

开另一个 terminal，
```
$ curl localhost:8088/users/001
```
得到如下响应，即说明正常启动了服务器

```json
{
	"role": "BACKGROUND_JOB",
	"name": "admin",
	"links": [{
		"rel": "self",
		"uri": "http://localhost:8088/users/001"
	}],
	"id": "001",
	"email": "admin@example.com"
}
```

