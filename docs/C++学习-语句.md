---
id: C++学习-语句
title: C++学习-语句
---

## 数据的输入

int a;

cin>>a;//输入a的值

## 数据的输出

int a = 0;

cout << "string" << a << endl

输出结果：string0

## if语句

if（条件一）

{条件一满足执行的语句}

else if（条件二）

{条件二满足执行的语句}

else

{条件都不满足执行的语句}

## switch语句

switch（表达式）
{

case 结果1：执行语句;break;

case 结果2：执行语句;break;

case 结果3：执行语句;break;

case 结果4：执行语句;break;

}

## while语句

while（循环条件）{循环语句}

### do{循环语句}while（循环条件）

注意：与while的区别在于do……while会先执行一次循环语句，再判断循环条件。

## for语句

for（起始循环表达式;条件循环表达式;末尾循环表达式）{循环语句}

### for循环的顺序

i=0  初始化初值

i<10 进行判断,如果条件为真,则继续执行

执行循环体代码

i++ 变量i自增

回到第2步,一直循环下去,直到第2步为假, 退出循环.


## 跳转语句

- break 结束整个循环体

- continue 在循环语句中，跳过本次循环中余下尚未执行的语句，继续执行下一个循环。

- goto 可以无条件的跳转语句

## 三目运算符

c = （a > b ？ a : b）

解释：如果a>b,c=a；否则c=b。

## 参考与致谢

- [基本元器件- 理论基础](https://wiki-power.com)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
