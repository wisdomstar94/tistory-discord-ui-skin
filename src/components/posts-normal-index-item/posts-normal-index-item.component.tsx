import { cn } from "@/utils/cn";

export function PostsNormalIndexItem() {
  return (
    <>
      <li className="w-full relative">
        <a className={cn("w-full flex gap-2 relative bg-murky-color-5 box-border p-4", "rounded-xl")} href="[##_article_rep_link_##]">
          <div className="w-full flex flex-wrap relative"></div>
          <div className="w-[100px] aspect-square block flex-shrink-0 relative"></div>
        </a>
      </li>
    </>
  );
}
