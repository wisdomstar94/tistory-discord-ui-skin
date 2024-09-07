import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { NotebookPen } from "lucide-react";

export function SideBar() {
  return (
    <>
      <aside
        className={cn(
          "w-side-bar-width h-full fixed top-0 left-0 flex flex-nowrap bg-primary-color"
        )}
      >
        <div
          className={cn(
            "w-side-bar-inner-small-bar-width h-full flex flex-wrap flex-shrink-0 gap-2 relative z-[2]"
          )}
        >
          <s_sidebar>
            <ul className="w-full flex flex-wrap relative items-start content-start">
              <s_sidebar_element>
                <tt_html_comment>방명록</tt_html_comment>
                <li className="group w-full flex fle-wrap relative p-2 box-border">
                  <a
                    href="/guestbook"
                    id="side-bar-guest-book-a"
                    className={cn(
                      "group/side-item-a",
                      "cursor-pointer",
                      "w-full block aspect-square relative transition-all",
                      "bg-white/5 hover:bg-primary-active-color group-[.menu-active]:bg-primary-active-color",
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
                          "text-primary-color-foreground",
                          "bg-primary-color",
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
            </ul>
          </s_sidebar>
        </div>
        <div
          className={cn(
            "w-full h-full flex flex-wrap gap-2 relative",
            "bg-white/5"
          )}
        ></div>
      </aside>
    </>
  );
}
