# 🌐 Cloudflare + Vercel 域名配置指南

## 📋 配置流程总览

```
Vercel 部署 → 添加自定义域名 → Cloudflare DNS 配置 → 完成！
```

---

## 第 1 步：等待 Vercel 部署完成

### ✅ 检查清单

1. **Vercel 部署状态**: 等待显示 "Deployment Ready" ✅
2. **获取临时域名**: 复制 Vercel 提供的域名（如：`lux-aura-website.vercel.app`）
3. **测试网站**: 访问临时域名，确保网站正常显示

---

## 第 2 步：在 Vercel 添加自定义域名

### 📍 操作步骤

1. **进入项目设置**
   - 在 Vercel Dashboard 找到你的项目
   - 点击 **Settings** 标签
   - 选择 **Domains** 菜单

2. **添加域名**

   **添加主域名**：

   ```
   luxaura.com.au
   ```

   点击 **Add**

   **添加 www 域名**：

   ```
   www.luxaura.com.au
   ```

   点击 **Add**

3. **记录 Vercel 提供的 DNS 信息**

   Vercel 会显示类似这样的信息：

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **⚠️ 重要**：复制这些信息，下一步要用！

---

## 第 3 步：在 Cloudflare 配置 DNS

### 📍 登录 Cloudflare

1. 访问：https://dash.cloudflare.com
2. 登录你的账号
3. 选择域名：**luxaura.com.au**

---

### 🔧 配置 DNS 记录

#### **方式 A：使用 A 记录（推荐）**

点击 **DNS** 标签，然后点击 **Add record**

**记录 1 - 主域名**

```
Type:    A
Name:    @
IPv4 address: 76.76.21.21
Proxy status: DNS only (灰色云朵，不要代理)
TTL:     Auto
```

**记录 2 - WWW 子域名**

```
Type:    CNAME
Name:    www
Target:  cname.vercel-dns.com
Proxy status: DNS only (灰色云朵)
TTL:     Auto
```

---

#### **方式 B：使用 CNAME 记录（推荐用于子域名）**

如果你想用 `www.luxaura.com.au` 作为主域名：

**记录 1**

```
Type:    CNAME
Name:    www
Target:  cname.vercel-dns.com
Proxy status: DNS only (灰色云朵)
TTL:     Auto
```

**记录 2**

```
Type:    CNAME  (使用 CNAME flattening)
Name:    @
Target:  cname.vercel-dns.com
Proxy status: DNS only (灰色云朵)
TTL:     Auto
```

---

### ⚠️ 重要设置

#### **1. 代理状态（Proxy Status）**

**初始设置**：

- ☁️ 灰色云朵（DNS only）- 不启用 Cloudflare 代理
- 这样可以让 Vercel 的 SSL 证书正常工作

**稍后可选**：

- 🟠 橙色云朵（Proxied）- 启用 Cloudflare CDN 和防护
- 需要在 Cloudflare 配置 SSL 为 "Full (strict)"

---

#### **2. SSL/TLS 设置**

在 Cloudflare Dashboard：

1. 点击 **SSL/TLS** 标签
2. 选择加密模式：
   - 🔸 如果用灰色云朵：选择 **Full**
   - 🔸 如果用橙色云朵：选择 **Full (strict)**

---

## 第 4 步：验证配置

### ✅ 检查清单

**在 Vercel**：

1. 回到 Vercel > Settings > Domains
2. 等待域名旁边显示 ✅ "Valid Configuration"
3. SSL 证书自动生成（可能需要几分钟）

**在 Cloudflare**：

1. 检查 DNS 记录是否添加成功
2. DNS 传播时间：5-30 分钟

**测试网站**：

1. 访问：https://luxaura.com.au
2. 访问：https://www.luxaura.com.au
3. 检查 SSL 证书是否正常（浏览器地址栏有锁图标）

---

## 🚀 常见配置

### 配置 1：简单快速（推荐新手）

**Cloudflare DNS**：

```
A    @    76.76.21.21    灰色云朵
CNAME www  cname.vercel-dns.com  灰色云朵
```

**优点**：

- ✅ 配置简单
- ✅ SSL 自动
- ✅ 快速生效

**缺点**：

- ❌ 不使用 Cloudflare CDN
- ❌ 不使用 Cloudflare 安全功能

---

### 配置 2：完整优化（推荐高级用户）

**Cloudflare DNS**：

```
A    @    76.76.21.21    橙色云朵
CNAME www  cname.vercel-dns.com  橙色云朵
```

**Cloudflare SSL/TLS**：

- 模式：Full (strict)

**Cloudflare Page Rules**（可选）：

- 重定向 www → 非 www（或相反）

**优点**：

- ✅ Cloudflare CDN 加速
- ✅ DDoS 防护
- ✅ Web 防火墙
- ✅ 分析统计

---

## 📊 DNS 记录示例

### 完整的 DNS 配置

| Type  | Name | Value                | Proxy    | TTL  |
| ----- | ---- | -------------------- | -------- | ---- |
| A     | @    | 76.76.21.21          | DNS only | Auto |
| CNAME | www  | cname.vercel-dns.com | DNS only | Auto |

---

## 🔍 故障排查

### 问题 1：域名无法访问

**原因**：DNS 还在传播
**解决**：等待 5-30 分钟

**检查工具**：

- https://dnschecker.org
- 输入 `luxaura.com.au` 查看全球 DNS 状态

---

### 问题 2：SSL 证书错误

**原因**：Cloudflare 代理模式与 SSL 设置不匹配
**解决**：

1. Cloudflare 灰色云朵 → SSL 自动正常
2. Cloudflare 橙色云朵 → SSL 设为 "Full (strict)"

---

### 问题 3：Vercel 显示 "Invalid Configuration"

**原因**：DNS 记录配置错误
**解决**：

1. 检查 Vercel 要求的 DNS 记录
2. 确保 Cloudflare 中的记录完全匹配
3. 等待 DNS 传播

---

## 🎯 推荐配置步骤

### 第一次配置（保守方式）

1. ✅ **Cloudflare DNS**：灰色云朵（DNS only）
2. ✅ **Vercel**：添加域名，等待 SSL 证书生成
3. ✅ **测试**：确保网站正常访问
4. ✅ **优化**：稍后可以改为橙色云朵启用 CDN

---

## 📞 需要帮助？

### Vercel 文档

- https://vercel.com/docs/concepts/projects/domains

### Cloudflare 文档

- https://developers.cloudflare.com/dns/

---

## ✅ 配置完成清单

- [ ] Vercel 部署成功
- [ ] Vercel 添加了 luxaura.com.au
- [ ] Vercel 添加了 www.luxaura.com.au
- [ ] Cloudflare 添加了 A 记录
- [ ] Cloudflare 添加了 CNAME 记录
- [ ] Cloudflare SSL 设置正确
- [ ] https://luxaura.com.au 可以访问
- [ ] https://www.luxaura.com.au 可以访问
- [ ] SSL 证书显示正常（锁图标）

---

**🎉 配置完成后，你的网站就上线了！**

需要帮助随时问我！
