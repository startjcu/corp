### 删除 global.css 中默认的样式

- 在 app 文件夹中找到该文件，删除 tailwind 以外的样式

### 导航栏样式

- 左右两侧
  - `flex justify-between`
- 最大宽度（两侧有留白，非 100%）
  - `container`
- 居中
  - `mx-auto`
- 字体大小、加粗
  - `text-3xl font-bold`
- 行元素间距
  - `space-x-2`
- 让导航栏脱离文档流（悬浮）
  - `absolute w-full z-10`

### 内容区样式

- 高度和视口同高
  - `h-screen`

### 抽离组件

```js
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto items-center text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}

// 导入
import Header from "@/components/Header";
```

### 导航链接点击变色

```tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const linkData = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto items-center text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((item, index) => {
            return (
              <Link
                key={index}
                className={path === item.link ? "text-purple-500" : ""}
                href={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

### 添加背景图和从左到右的遮罩

```jsx
import Image from "next/image";
import homeSrc from "@/public/fjh.jpg";

export default function page() {
  return (
    <div className="bg-gray-500 h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={homeSrc}
          alt="home pic"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">Hello World</h1>
      </div>
    </div>
  );
}
```

### 抽离封装成组件

```tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  imgUrl: StaticImageData;
  altText: string;
  content: string;
}

export default function page(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          alt={props.altText}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
```

### 通过页面元数据修改页签名

```jsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
```

### favicon 指定

- 将 favicon.icon 文件放置在 app 文件夹下
  - 若浏览器页签不显示，可右键刷新图标，选择清空缓存刷新

### 自定义 404 页面

- 在 app 文件夹下，创建`not-found.tsx`文件
  - 这是全局的 not found 页面

### 局部 404 页面

- 按照常规创建文件夹和`page.tsx`文件
  - 在页面中手动调用 not found 页面

```tsx
import { notFound } from "next/navigation";

export default function page() {
  notFound();
}
```

### 使用 404 模板

- 打开`https://www.creative-tim.com/`网站
- 在`Resources & AI`中找到`TW Components`
- 搜索`not found`
  - 将`<style></style>`中的内容提取到 css 中
    - 在`VSCode`中选中一长段文本，先点一处，按下`shift`，再点下一处
    - 若有报错，可能是`-`两边出现了空格，删除即可
  - 将`class=`替换为`className=`

### 404 页面隐藏导航栏

- 在 layout 中使用`usePathname`判断
  - layout 不能定义为`use client`，无法使用`usePathname`
- 导航栏组件`Header.tsx`中可以使用
  - 当不满足指定路由时，返回`null`
  - 当路由越来越多时，数据量大，维护困难 ？

```tsx
const accessLinks = ["/", "/about", "/contact", "/blog"];
if (accessLinks.indexOf(path) < 0) return null;
```

### 使用路由组

- 可以给不同的路由组合匹配专属的`layout`
  - 建一个语义化的文件夹`(hear)`
  - 将相关路由文件夹移入上述文件夹下
  - 配置该类路由专属的`layout.tsx`

### 优化网站字体

- 在`https://fonts.google.com/`上可查看字体
- 在`VSCode`中同时替换多处
  - 选中一处后，按`Alt`在选中另外一处
  - 选完后，然后`Ctrl+v`即可全部替换完

```tsx
import { ADLaM_Display } from "next/font/google";

const geist = ADLaM_Display({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
```

### 本地项目连接远程仓库

### Vercel 部署

- 网站 `https://vercel.com/`
