---
title: 常用的正则表达式
author: 白菜
date: 2022-7-19 19:49:16
tags:
  - Regex
---

## 匹配正整数

`/^[1-9]\d*$/`

## 小数或整数

`/^[1-9][0-9]*([\.][0-9]{1,2})?$/`

## 匹配负整数

`/^-[1-9]\d*$/`

## 匹配非负整数（正整数 + 0）

`/^([1-9]\d*|[0]{1,1})$/`

## 匹配小数 n 位

`/^[1-9][0-9]*([\.][0-9]{1,3})?$/`