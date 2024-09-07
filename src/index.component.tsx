import { SideBar } from "@/components/layouts/side-bar/side-bar.component";
import "./index.scss";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no"
        />
        <title></title>
      </head>
      <body>
        <SideBar />
      </body>
    </html>
  );
}
