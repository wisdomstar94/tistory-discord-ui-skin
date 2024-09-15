import { SideBar } from "@/components/layouts/side-bar/side-bar.component";
import { version } from "../package.json";
import "./index.scss";
import { TopBar } from "./components/layouts/top-bar/top-bar.component";
import { ContentArea } from "./components/layouts/content-area/content-area.component";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content="[##_page_title_##] :: [##_title_##]" />
        <title>[##_page_title_##] :: [##_title_##]</title>
      </head>
      <body id="[##_body_id_##]" data-skin-name="tistory-discord-skin" data-skin-version={version} className="bg-primary-3">
        <SideBar />
        <TopBar />
        <ContentArea>hi</ContentArea>
      </body>
    </html>
  );
}
