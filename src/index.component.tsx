import "./index.css";
import { SideBar } from "@/components/layouts/side-bar/side-bar.component";
import { version } from "../package.json";
import { TopBar } from "./components/layouts/top-bar/top-bar.component";
import { ContentArea } from "./components/layouts/content-area/content-area.component";
import { AdArea } from "./components/layouts/ad-area/ad-area.component";
import { Posts } from "./components/post/posts/posts.component";
import { Pagination } from "./components/pagination/pagination.component";
import { GuestBook } from "./components/guest-book/guest-book.component";
import { LatestVersionCheck } from "./components/latest-version-check/latest-version-check.component";
import { Tags } from "./components/tags/tags.component";
import { PostsIndex } from "./components/layouts/posts-index/posts-index.component";
import { cn } from "./utils/cn";
import { Var } from "./consts/torytis-variable-object";

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
        {/* <s_if_var_google_adsense_client_key>
          <script
            defer
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${Var["[##_var_google_adsense_client_key_##]"]}`}
            crossOrigin="anonymous"
          ></script>
        </s_if_var_google_adsense_client_key> */}
      </head>
      <body
        id="[##_body_id_##]"
        data-skin-name="tistory-discord-ui-skin"
        data-skin-version={version}
        className={cn(
          "bg-murky-color-3 overflow-x-hidden shadow-murky-color-1/20",
          Var["[##_var_posts_index_default_display_##]"],
          "scrollbar-murky",
          Var["[##_var_pagination_display_horizontal_align_##]"]
        )}
      >
        <s_t3>
          <SideBar />
          <TopBar />
          <ContentArea>
            <AdArea upper />
            <Posts />
            {/* <Lists /> */}
            <GuestBook />
            <Tags />
            <Pagination />
            <AdArea lower />
            <LatestVersionCheck />
          </ContentArea>
          <PostsIndex />
        </s_t3>
      </body>
    </html>
  );
}
