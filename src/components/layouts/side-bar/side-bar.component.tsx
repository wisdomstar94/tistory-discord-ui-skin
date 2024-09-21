import { TistoryLogo } from "@/components/icons/tistory-logo/tistory-logo.component";
import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { Bell, NotebookPen, Plus, Settings, Tags, X } from "lucide-react";
import "./side-bar.scss";
import { SmallSymbolButton } from "@/components/small-symbol-button/small-symbol-button.component";
import { SmallSideBarDivider } from "@/components/small-side-bar-divider/small-side-bar-divider.component";
import { HomeIcon } from "@/components/icons/home-icon/home-icon.component";
import { BlogTitleBar } from "@/components/blog-title-bar/blog-title-bar.component";
import { ContentDivider } from "@/components/content-divider/content-divider.component";

export function SideBar() {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 z-[2] bg-black/70 w-0 h-0 overflow-hidden",
          "side-bar-open:!animate-fade-in-opacity side-bar-close:!animate-fade-out-opacity"
        )}
        tt-onclick="mobileSideBarBackgroundClick();"
      />

      <aside
        className={cn(
          "w-side-bar-width h-full fixed top-0 flex flex-nowrap bg-murky-color-1 z-[2]",
          "transition-all duration-300",
          "-left-side-bar-width lg:left-0 side-bar-open:left-0 side-bar-close:-left-side-bar-inner-small-bar-width"
        )}
      >
        {/* small bar */}
        <div
          className={cn(
            "w-side-bar-inner-small-bar-width h-full flex flex-wrap flex-shrink-0 gap-2 relative z-[3] items-start content-start"
          )}
        >
          <div className={cn("side-small-bar-scroll-area", "w-full h-full relative", "overflow-y-scroll", "scrollbar-hidden")}>
            <ul className="w-full flex flex-wrap relative items-start content-start mt-2">
              <s_sidebar>
                <s_sidebar_element>
                  <tt_html_comment>[small] 티스토리 홈 버튼</tt_html_comment>
                  <li className="w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-tistory-home-a"
                      href="https://www.tistory.com/"
                      aClassName="hover:bg-tistory-color group-[.menu-active]:bg-tistory-color"
                      icon={<TistoryLogo className="text-white/80 w-[24px] h-[24px] inline-flex" />}
                      hoverTitle={"티스토리 홈"}
                      isHoverMinimumActive={true}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full block relative box-border">
                    <SmallSideBarDivider />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 블로그 홈 버튼</tt_html_comment>
                  <li className="w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-blog-home-a"
                      href="/"
                      icon={
                        <>
                          <img src="[##_image_##]" alt="프로필사진" className="w-full h-full relative object-cover object-center" />
                        </>
                      }
                      hoverTitle={"[##_blogger_##]"}
                      hoverTitleIcon={
                        <div className="mt-[4px]">
                          <HomeIcon />
                        </div>
                      }
                      isActive={true}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 방명록 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-guest-book-a"
                      href="/guestbook"
                      aClassName="hover:bg-light-color-1 group-[.menu-active]:bg-light-color-1"
                      icon={<NotebookPen className="text-white/80" />}
                      hoverTitle={"방명록"}
                      isHoverMinimumActive={true}
                    />
                    <Script
                      html={`
                        (function(){
                          const pathname = location.pathname;
                          if (!pathname.startsWith('/guestbook')) return;

                          const a = document.querySelector('#side-bar-guest-book-a');
                          if (a === null) return;

                          a.parentElement?.parentElement?.classList.add('menu-active');
                        })();
                      `}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 공지사항 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-notice-a"
                      href="/notice"
                      aClassName="hover:bg-light-color-1 group-[.menu-active]:bg-light-color-1"
                      icon={<Bell className="text-white/80" />}
                      hoverTitle={"공지사항"}
                      isHoverMinimumActive={true}
                    />
                    <Script
                      html={`
                        (function(){
                          const pathname = location.pathname;
                          if (!pathname.startsWith('/notice')) return;

                          const a = document.querySelector('#side-bar-notice-a');
                          if (a === null) return;

                          a.parentElement?.parentElement?.classList.add('menu-active');
                        })();
                      `}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 태그목록 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-tag-a"
                      href="/tag"
                      aClassName="hover:bg-light-color-1 group-[.menu-active]:bg-light-color-1"
                      icon={<Tags className="text-white/80" />}
                      hoverTitle={"태그"}
                      isHoverMinimumActive={true}
                    />
                    <Script
                      html={`
                        (function(){
                          const pathname = location.pathname;
                          if (!pathname.startsWith('/tag')) return;

                          const a = document.querySelector('#side-bar-tag-a');
                          if (a === null) return;

                          a.parentElement?.parentElement?.classList.add('menu-active');
                        })();
                      `}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full block relative box-border">
                    <SmallSideBarDivider />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 블로그 관리 페이지 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-blog-manage-a"
                      href="/manage"
                      aClassName="hover:bg-murky-color-4 group-[.menu-active]:bg-murky-color-4"
                      icon={<Settings className="text-murky-color-4 group-hover/side-item-a:text-white/80 transition-all" />}
                      hoverTitle={"블로그 관리"}
                      isHoverMinimumActive={true}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 글 작성 페이지 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-manage-post-a"
                      href="/manage/post"
                      aClassName="hover:bg-murky-color-4 group-[.menu-active]:bg-murky-color-4"
                      icon={<Plus className="text-murky-color-4 group-hover/side-item-a:text-white/80 transition-all" />}
                      hoverTitle={"글 작성"}
                    />
                  </li>
                </s_sidebar_element>
              </s_sidebar>
            </ul>
          </div>
        </div>

        {/* big bar */}
        <div className={cn("w-side-bar-inner-big-bar-width", "w-full h-full flex flex-wrap gap-2 relative", "bg-murky-color-2")}>
          <div className={cn("side-big-bar-scroll-area", "w-full h-full overflow-y-scroll scrollbar-hidden block relative")}>
            <div className={cn("blog-title-bar-float-container", "w-full block h-[48px] top-0 left-0 sticky z-[2]")}>
              <div className="background w-full h-full bg-murky-color-2 absolute top-0 left-0 opacity-0"></div>
              <BlogTitleBar />
              <div className="background-bottom-border w-full h-[2px] bg-murky-color-1/80 absolute bottom-[-2px] left-0 opacity-0"></div>
            </div>
            <div className="w-full mt-[-48px]"></div>
            <ul className="w-full flex flex-wrap relative gap-3 items-start content-start side-big-bar">
              <s_sidebar>
                <s_sidebar_element>
                  <tt_html_comment>[big] 블로그 프로필 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative side-blog-profile-item h-[136px]">
                    <div className="w-full h-full block absolute top-0 left-0">
                      {/* blog profile */}
                      <div className="w-full relative h-[136px]">
                        {/* back */}
                        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden">
                          <img
                            src="[##_image_##]"
                            alt="프로필사진"
                            className={cn("profile-image", "w-full h-full relative object-cover object-center flex-shrink-0")}
                          />
                        </div>
                        <div className={cn("movable-profile-area-overlay-bg", "w-full h-full bg-murky-color-2 opacity-0 relative")}></div>
                        <div className="movable-blog-title-bar hidden">
                          <BlogTitleBar />
                        </div>
                      </div>
                    </div>
                  </li>
                </s_sidebar_element>
                {/* <s_sidebar_element>
                  <tt_html_comment>[big] 검색 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative">
                    <div className="w-full box-border px-3 relative">
                      <SearchBar />
                    </div>
                  </li>
                </s_sidebar_element> */}
                <s_sidebar_element>
                  <tt_html_comment>[big] 글 카테고리 메뉴 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative">
                    <div className="w-full block relative text-sm text-light-color-2">[##_category_list_##]</div>
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full relative px-2">
                    <div className={cn("w-full h-[1px] block bg-light-color-3/10")} />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 방문자 수</tt_html_comment>
                  <li className="w-full relative px-2 flex flex-wrap gap-1.5 text-light-color-3/50">
                    <div className="text-sm w-full box-border px-2">방문자 수</div>
                    <ul className="w-full flex flex-wrap gap-1 relative box-border p-2 rounded-md bg-murky-color-7 text-xs">
                      <li className="w-full flex gap-2 relative min-w-0">
                        <div className="font-bold flex-shrink-0 flex-grow-0">전체:</div>
                        <div>[##_count_total_##]</div>
                      </li>
                      <li className="w-full flex gap-2 relative min-w-0">
                        <div className="font-bold flex-shrink-0 flex-grow-0">오늘:</div>
                        <div>[##_count_today_##]</div>
                      </li>
                      <li className="w-full flex gap-2 relative min-w-0">
                        <div className="font-bold flex-shrink-0 flex-grow-0">어제:</div>
                        <div>[##_count_yesterday_##]</div>
                      </li>
                    </ul>
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full relative px-2">
                    <div className={cn("w-full h-[1px] block bg-light-color-3/10")} />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 최근 댓글</tt_html_comment>
                  <li className="w-full relative px-2 flex flex-wrap gap-1.5 text-light-color-3/50">
                    <div className="text-sm w-full box-border px-2">최근 댓글</div>
                    <ul className="w-full flex flex-wrap gap-2 relative box-border text-xs">
                      <s_rctrp_rep>
                        <li className="w-full flex flex-wrap gap-1 relative min-w-0 text-xs">
                          <a
                            href="[##_rctrp_rep_link_##]"
                            className="p-2 rounded-md bg-murky-color-7 hover:bg-murky-color-1 cursor-pointer w-full flex flex-wrap gap-1 relative min-w-0"
                          >
                            <div className="w-full flex gap-2 relative min-w-0 items-center">
                              <div className="inline-flex whitespace-nowrap overflow-hidden min-w-0 overflow-ellipsis">
                                [##_rctrp_rep_name_##]
                              </div>
                              <div className="inline-flex flex-grow-0 flex-shrink-0 whitespace-nowrap">[##_rctrp_rep_time_##]</div>
                            </div>
                            <div className="w-full">[##_rctrp_rep_desc_##]</div>
                          </a>
                        </li>
                      </s_rctrp_rep>
                    </ul>
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full relative px-2">
                    <div className={cn("w-full h-[1px] block bg-light-color-3/10")} />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 최근 공지</tt_html_comment>
                  <li className="w-full relative px-2 flex flex-wrap gap-1.5 text-light-color-3/50">
                    <s_rct_notice>
                      <div className="text-sm w-full box-border px-2">최근 공지</div>
                      <ul className="w-full flex flex-wrap gap-2 relative box-border text-xs">
                        <s_rct_notice_rep>
                          <li className="w-full flex flex-wrap gap-1 relative min-w-0 text-xs">
                            <a
                              href="[##_notice_rep_link_##]"
                              className="p-2 rounded-md bg-murky-color-7 hover:bg-murky-color-1 cursor-pointer w-full flex flex-wrap gap-1 relative min-w-0"
                            >
                              <div className="w-full">[##_notice_rep_title_##]</div>
                            </a>
                          </li>
                        </s_rct_notice_rep>
                      </ul>
                    </s_rct_notice>
                  </li>
                </s_sidebar_element>
              </s_sidebar>
            </ul>
          </div>
        </div>

        {/* mobile close button */}
        <div className="hidden side-bar-open:inline-flex absolute top-0 right-0 items-center justify-end z-[2]">
          <button
            className="inline-flex p-1 bg-murky-color-1/70 cursor-pointer hover:bg-murky-color-1"
            tt-onclick="sideBarCloseButtonClick()"
          >
            <X className="text-light-color-3/50" />
          </button>
        </div>
      </aside>
      <Script
        html={`
          checkActiveCategory();
        `}
      />
    </>
  );
}
