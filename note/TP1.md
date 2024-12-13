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

- 远程建立仓库，复制地址
- `git remote add origin git@github.com:startjcu/corp.git`
- 常规添加、提交到本地操作
- `git push -u origin master`

### Vercel 部署

- 网站 `https://vercel.com/`

### 使用 antd

- 安装 `npm i antd`
- 使用 `import { Button } from 'antd'`
- 页面加载 antd 组件闪动
  - `Ant Design、研发、在Next.js中使用、使用App Router`

```tsx
import "./globals.css";
import { ADLaM_Display } from "next/font/google";
// npm install @ant-design/nextjs-registry --save
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geist = ADLaM_Display({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
```

### 动态路由

- 在路由文件夹下，创建`[key]`的文件夹
- 在上一部的文件夹中的 page.tsx 中使用`{ params: { key } }`来获取

### 动态 metadata

- 客户端组件不允许使用`metadata`
  - 可以将组件中需要用到客户端功能的内容单独封装成一个组件
    - 服务端组件可以引用客户端组件，不改变其组件性质
  - 让后在组件中导出 `metadata`
- 使用方法定义动态 metadata `https://nextjs.org/docs`

```tsx
interface IParams {
  params: {
    id: string;
  };
}

// 多次使用到，定义一个接口
export async function generateMetadata({ params }: IParams) {
  const id = (await params).id;
  return { title: `detail ${id}` };
}

// 单次使用，可以直接在后面定义参数类型
export default async function page({ params }: { params: { id: string } }) {
  const id = (await params).id;
  return <div>weblog: {id}</div>;
}
```

### 平行路由

- 使用`@xxx`在一个路由下创建几个平级的路由
- 在`layout`中配置，和`children`是同一级别的
- (子路由)软导航能实现局部完美替代，硬导航会报 404 错误
  - 使用`default.tsx`，但函数名不能命名为 default 关键字

app/parallel/layout.tsx

```tsx
import Link from "next/link";

export default function RootLayout({
  children,
  team,
  visitors,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  visitors: React.ReactNode;
}>) {
  return (
    <div className="p-10">
      <div className="p-6 text-center space-x-8 text-blue-500">
        <Link href="/parallel">Home</Link>
        <Link href="/parallel/visitors">Visitor</Link>
      </div>
      <div className="flex gap-6">
        {team}
        {visitors}
      </div>
      {children}
    </div>
  );
}
```

parallel/@team/page.tsx

```tsx
export default function Team() {
  return (
    <div className="flex-1 h-32 bg-teal-500 rounded-lg flex justify-center items-center text-white text-3xl">
      Team
    </div>
  );
}
```

parallel/@visitor/visitors/page.tsx

```tsx
export default function Visitors() {
  return (
    <div className="flex-1 h-32 bg-orange-400 rounded-lg flex justify-center items-center text-white text-3xl">
      @two visitors
    </div>
  );
}
```

### 拦截路由

- 软导航和硬导航有不同的呈现方式
  - 软导航，页面点击跳转的，写在平行路由的`(.)photos/[id]/page.tsx`中
  - 硬导航，刷新或点击分析链接打开页面，写在正常的文件路由中

### lowdb

- 参考 lowdb 文档 `https://github.com/typicode/lowdb`
