---
id: C++学习-结构体
title: C++学习-结构体
---

## 结构体

学习了很多int char …等类型，在我们实际应用中，每一种变量进行一次声明，再结合起来显然是不太实际的，我们需要把一些相关的变量组合起来，以一个整体形式对对象进行描述，这就是结构体的好处。

### 结构体的定义

struct Student

{

  string name;
  
  int age;
  
  int score
  
};

### 创建学生结构体

- 第一种

struct studet s1；

s1.name=“张三”；

s1.age=18；

s1.score=100；

- 第二种

struct studet s2={“李四”，18,99}；

- 第三种：在定义结构体的时候创建结构体变量

struct Student

{

  string name;
  
  int age;
  
  int score
  
}s3;

s3.name=“王五”；

s3.age=19；

s3.score=98；

## 结构体数组

struct Student

{

  string name;
  
  int age;
  
  int score
  
};

struct Student stu[3]

{

  {“张三”，18,100}

  {“李四”，18,99}

  {“王五”，19,98}
  
}；

## 结构体指针

struct Student

{

  string name;
  
  int age;
  
  int score
  
};

struct studet s2={“李四”，18,99}；

struct studet *p =&s2;

### 指针引用结构体成员

p->name

p->age

p->score

## 结构体嵌套结构体

struct Student

{

  string name;
  
  int age;
  
  int score
  
};

struct teacher

{

 int id;

 int age;

 string name;

 struct Student stu;

}

### 创建老师结构体

teacher t；

t.id=10000;

t.name="老王"；

t.age=44;

t.stu.name="小王"；

t.stu.age=20;

t.stu.score=99;

## 参考与致谢

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
