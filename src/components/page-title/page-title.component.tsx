import { cn } from "@/utils/cn";
import { Script } from "../script/script.component";

export function PageTitle() {
  return (
    <>
      <div
        data-title="page-title"
        className={cn("inline-flex whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0", "text-light-color-3/90", "font-bold")}
      >
        <div className={cn("hidden tt-body-index:block", "whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0")}>
          <ShopChar /> Home
        </div>
        <div
          className={cn("hidden tt-body-category:block", "whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0")}
          data-title="category-title"
        >
          <ShopChar /> <span className="only-title-text"></span>
        </div>
        <div className={cn("hidden tt-body-tag:block", "whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0")}>
          <ShopChar /> 태그
        </div>
        <div className={cn("hidden tt-body-search:block", "whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0")}>
          <ShopChar /> 검색결과
        </div>
        <div className={cn("hidden tt-body-guestbook:block", "whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0")}>
          <ShopChar /> 방명록
        </div>
      </div>
      <Script html="checkPageTitle()" />
    </>
  );
}

function ShopChar() {
  return <span className="inline-flex items-center text-light-color-3/30">#</span>;
}
