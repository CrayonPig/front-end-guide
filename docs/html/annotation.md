# 注释规范
由于 html 代码一般不会经过预处理，出于安全考虑，html 代码中不能出现任何关于业务相关敏感信息的注释。

## 单行注释
一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行
```html
<!-- Comment Text -->
<div>...</div>
```

## 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行

```html
<!-- S Comment Text A -->	
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
  ...
</div>
<!-- E Comment Text B -->
```

## 嵌套模块注释
::: tip
当你代码中需要使用超过二级以上的嵌套关系时，你应该反思是否需要做拆分
:::

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块使用如下
```html
<!-- /Comment Text -->
```
注释写在模块结尾标签底部，单独一行。
```html
<!-- S Comment Text A -->
<div class="mod_a">
		
    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->
    	
    <div class="mod_c">
    	...
    </div>
    <!-- /mod_c -->
		
</div>
<!-- E Comment Text A -->
```


