# 命名规范

## 常量

命名方法：全部大写下划线分割

命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

```javascript
const MAX_COUNT = 10;
const URL = 'http://test.host.com';
```

## 枚举

命名方法：全部大写下划线分割

命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

> 枚举应统一管理，并保持全局唯一，不可出现魔法数字

```javascript
const MARKET_TYPE = {
  1: 'file',
  2: 'video',
  3: 'poster'
};
```

## 变量

命名方法：camelCase

命名规范：类型 + 对象描述或属性的方式

```javascript
// bad
var getTitle = "LoginTable";

// good
let tableTitle = "LoginTable";
let mySchool = "我的学校";
```

#### 方法

命名方法：camelCase

命名规范：统一使用动词或者动词 + 名词形式

```javascript
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog
```


## 计算方法(computed)

命名方法： camelCase

命名规范：根据使用方法，`get`或`set`开头命名

```javascript
// 获取用户名称
getUserName
// 设置用户名称
setUserName
```

## 监听方法（watch）
命名方法： camelCase

命名规范： `watch` + 特定变量

```javascript
// 监听value变化
watchValue
```

## 调用方法

命名方法：camelCase

命名规范：名称（可选）+ 动词

```javascript
// 主动触发事件情况下，使用handle + 名称（可选）+ 动词形式
handleChangeUserName

// 请求数据方法，以 data 结尾
handleGetUserListData
```


### 常用类型

| 动词 |          含义          | 示例       |
| ---- | :--------------------: | --------- | 
| can  | 判断是否可执行某个动作 | canChange | 
| has  |    判断是否有某个值    | hasDate   | 
| is   |    判断是否为某个值    | isShow    | 



## 接口变量定义

命名方法：camelCase

命名规范：接口意义（get, add, del, edit）+ 具体描述 + api

```javascript
// 获取
getUserDataApi
// 添加
addUserApi
// 删除
delUserApi
// edit
editUserDetailApi
```
