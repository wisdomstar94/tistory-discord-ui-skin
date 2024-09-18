import { cn } from "@/utils/cn";
import { PostsIndexItem } from "../posts-index-item/posts-index-item.component";
import { PostsPermalinkItem } from "../posts-permalink-item/posts-permalink-item.component";

export function Posts() {
  return (
    <>
      <ul data-title="article-list" className="w-full flex flex-wrap gap-2 relative list-empty:hidden">
        <s_article_rep>
          <s_index_article_rep>
            <PostsIndexItem postType="normal" />
          </s_index_article_rep>
          <s_permalink_article_rep>
            <PostsPermalinkItem postType="normal" />
          </s_permalink_article_rep>
        </s_article_rep>

        <s_notice_rep>
          <s_index_article_rep>
            <PostsIndexItem postType="notice" />
          </s_index_article_rep>
          <s_permalink_article_rep>
            <PostsPermalinkItem postType="notice" />
          </s_permalink_article_rep>
        </s_notice_rep>

        <s_article_protected>
          <s_index_article_rep>
            <PostsIndexItem postType="protected" />
          </s_index_article_rep>
          <s_permalink_article_rep>
            <PostsPermalinkItem postType="protected" />
          </s_permalink_article_rep>
        </s_article_protected>
      </ul>

      <div
        className={cn(
          "p-content-area-padding",
          "hidden text-light-color-3/40",

          "tt-body-index:list-empty:inline-flex",
          "tt-body-category:list-empty:inline-flex",
          "tt-body-search:list-empty:inline-flex"
        )}
      >
        조회된 결과가 없습니다.
      </div>
    </>
  );
}
