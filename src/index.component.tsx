import { SideBar } from "@/components/layouts/side-bar/side-bar.component";
import { version } from "../package.json";
import "./index.scss";
import { TopBar } from "./components/layouts/top-bar/top-bar.component";
import { ContentArea } from "./components/layouts/content-area/content-area.component";
import { AdArea } from "./components/layouts/ad-area/ad-area.component";
import { Posts } from "./components/post/posts/posts.component";
import { Pagination } from "./components/pagination/pagination.component";
import { Lists } from "./list/lists/lists.component";
import { GuestBook } from "./components/guest-book/guest-book.component";
import { LatestVersionCheck } from "./components/latest-version-check/latest-version-check.component";

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
      <body
        id="[##_body_id_##]"
        data-skin-name="tistory-discord-ui-skin"
        data-skin-version={version}
        className="bg-murky-color-3 overflow-x-hidden shadow-murky-color-1/20"
      >
        {/* <s_t3> */}
        <SideBar />
        <TopBar />
        <ContentArea>
          <AdArea upper />
          <Posts />
          {/* <Lists /> */}
          <GuestBook />
          <Pagination />
          <AdArea lower />
          <LatestVersionCheck />
        </ContentArea>
        {/* </s_t3> */}
      </body>
    </html>
  );
}
