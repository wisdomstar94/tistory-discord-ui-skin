import { TistoryLogo } from "@/components/icons/tistory-logo/tistory-logo.component";
import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { NotebookPen, Plus, Search, Settings } from "lucide-react";
import "./side-bar.scss";

export function SideBar() {
  return (
    <>
      <aside
        className={cn(
          "w-side-bar-width h-full fixed top-0 left-0 flex flex-nowrap bg-primary"
        )}
      >
        {/* small bar */}
        <div
          className={cn(
            "w-side-bar-inner-small-bar-width h-full flex flex-wrap flex-shrink-0 gap-2 relative z-[2] items-start content-start"
          )}
        >
          <ul className="w-full flex flex-wrap relative items-start content-start mt-2">
            <s_sidebar>
              <s_sidebar_element>
                <tt_html_comment>[small] 티스토리 홈 버튼</tt_html_comment>
                <li className="group w-full flex fle-wrap relative px-3 py-1 box-border">
                  <a
                    href="https://www.tistory.com/"
                    id="side-bar-tistory-home-a"
                    className={cn(
                      "group/side-item-a",
                      "cursor-pointer",
                      "w-full block aspect-square relative transition-all",
                      "bg-white/5 hover:bg-primary-tistory group-[.menu-active]:bg-primary-tistory",
                      "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]"
                    )}
                  >
                    <div className="w-full h-full relative flex flex-wrap items-center justify-center">
                      <TistoryLogo className="text-white/80 w-[24px] h-[24px] inline-flex" />
                    </div>

                    <div className="h-full flex items-center justify-start absolute left-full top-0">
                      <div
                        className={cn(
                          "ml-4 whitespace-nowrap px-6 py-2.5 text-xs rounded-lg",
                          "text-white/90",
                          "bg-primary",
                          "hidden group-hover/side-item-a:inline-flex"
                        )}
                      >
                        티스토리 홈
                      </div>
                    </div>
                  </a>
                </li>
              </s_sidebar_element>
              <s_sidebar_element>
                <tt_html_comment>[small] 방명록 버튼</tt_html_comment>
                <li className="group w-full flex fle-wrap relative px-3 py-1 box-border">
                  <a
                    href="/guestbook"
                    id="side-bar-guest-book-a"
                    className={cn(
                      "group/side-item-a",
                      "cursor-pointer",
                      "w-full block aspect-square relative transition-all",
                      "bg-white/5 hover:bg-primary-active group-[.menu-active]:bg-primary-active",
                      "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]"
                    )}
                  >
                    <div className="w-full h-full relative flex flex-wrap items-center justify-center">
                      <NotebookPen className="text-white/80" />
                    </div>

                    <div className="h-full flex items-center justify-start absolute left-full top-0">
                      <div
                        className={cn(
                          "ml-4 whitespace-nowrap px-6 py-2.5 text-xs rounded-lg",
                          "text-white/90",
                          "bg-primary",
                          "hidden group-hover/side-item-a:inline-flex"
                        )}
                      >
                        방명록
                      </div>
                    </div>
                  </a>
                  <Script
                    html={`
                      (function(){
                        const pathname = location.pathname;
                        if (!pathname.startsWith('/guestbook')) return;

                        const a = document.querySelector('#side-bar-guest-book-a');
                        if (a === null) return;

                        a.parentElement?.classList.add('menu-active');
                      })();
                    `}
                  />
                </li>
              </s_sidebar_element>
              <s_sidebar_element>
                <tt_html_comment>[small] 글 작성 페이지 버튼</tt_html_comment>
                <li className="group w-full flex fle-wrap relative px-3 py-1 box-border">
                  <a
                    href="/manage/post"
                    id="side-bar-guest-book-a"
                    className={cn(
                      "group/side-item-a",
                      "cursor-pointer",
                      "w-full block aspect-square relative transition-all",
                      "bg-white/5 hover:bg-secondary group-[.menu-active]:bg-secondary",
                      "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]"
                    )}
                  >
                    <div className="w-full h-full relative flex flex-wrap items-center justify-center">
                      <Plus className="text-secondary group-hover/side-item-a:text-white/80 transition-all" />
                    </div>

                    <div className="h-full flex items-center justify-start absolute left-full top-0">
                      <div
                        className={cn(
                          "ml-4 whitespace-nowrap px-6 py-2.5 text-xs rounded-lg",
                          "text-white/90",
                          "bg-primary",
                          "hidden group-hover/side-item-a:inline-flex"
                        )}
                      >
                        글 작성
                      </div>
                    </div>
                  </a>
                </li>
              </s_sidebar_element>
              <s_sidebar_element>
                <tt_html_comment>
                  [small] 블로그 관리 페이지 버튼
                </tt_html_comment>
                <li className="group w-full flex fle-wrap relative px-3 py-1 box-border">
                  <a
                    href="/manage"
                    id="side-bar-blog-manage-a"
                    className={cn(
                      "group/side-item-a",
                      "cursor-pointer",
                      "w-full block aspect-square relative transition-all",
                      "bg-white/5 hover:bg-secondary group-[.menu-active]:bg-secondary",
                      "rounded-[30px] hover:rounded-[12px] group-[.menu-active]:rounded-[12px]"
                    )}
                  >
                    <div className="w-full h-full relative flex flex-wrap items-center justify-center">
                      <Settings className="text-secondary group-hover/side-item-a:text-white/80 transition-all" />
                    </div>

                    <div className="h-full flex items-center justify-start absolute left-full top-0">
                      <div
                        className={cn(
                          "ml-4 whitespace-nowrap px-6 py-2.5 text-xs rounded-lg",
                          "text-white/90",
                          "bg-primary",
                          "hidden group-hover/side-item-a:inline-flex"
                        )}
                      >
                        블로그 관리
                      </div>
                    </div>
                  </a>
                </li>
              </s_sidebar_element>
            </s_sidebar>
          </ul>
        </div>

        {/* big bar */}
        <div
          className={cn(
            "w-full h-full flex flex-wrap gap-2 relative",
            "bg-primary-2"
          )}
        >
          <ul className="w-full flex flex-wrap relative gap-3 items-start content-start">
            <s_sidebar>
              <s_sidebar_element>
                <tt_html_comment>[big] 블로그 프로필 영역</tt_html_comment>
                <li className="w-full flex flex-wrap relative">
                  {/* blog profile */}
                  <div className="w-full relative h-[136px]">
                    {/* back */}
                    <div className="w-full h-full absolute top-0 left-0">
                      <img
                        src="[##_image_##]"
                        alt="프로필사진"
                        className="w-full h-full relative object-cover object-center"
                      />
                    </div>
                    {/* front */}
                    <div className="w-full h-full relative box-border p-4">
                      <div className="text-shadow shadow-primary text-sm font-bold text-white">
                        [##_blogger_##]
                      </div>
                    </div>
                  </div>
                </li>
              </s_sidebar_element>
              <s_sidebar_element>
                <tt_html_comment>[big] 검색 영역</tt_html_comment>
                <li className="w-full flex flex-wrap relative">
                  <div className="w-full box-border px-3 relative">
                    <div className="w-full flex flex-nowrap gap-2 relative">
                      <input
                        type="text"
                        placeholder="검색하기"
                        className={cn(
                          "w-full relative bg-primary text-sm box-border px-2 py-1 pr-8",
                          "text-white/80 placeholder:text-primary-foreground",
                          "focus:outline-none"
                        )}
                        name="[##_search_name_##]"
                        tt-value="[##_search_text_##]"
                        tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
                      />
                      <div className="absolute top-[50%] right-0 flex items-center content-center justify-end h-0">
                        <button
                          className="p-2 cursor-pointer"
                          tt-onclick="[##_search_onclick_submit_##]"
                        >
                          <Search className="text-primary-foreground w-[20px] h-[20px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </s_sidebar_element>
              <s_sidebar_element>
                <tt_html_comment>[big] 글 카테고리 메뉴 영역</tt_html_comment>
                <li className="w-full flex flex-wrap relative">
                  <div className="w-full block relative text-sm text-primary-foreground">
                    [##_category_list_##]
                  </div>
                </li>
              </s_sidebar_element>
            </s_sidebar>
          </ul>
        </div>
      </aside>
    </>
  );
}
