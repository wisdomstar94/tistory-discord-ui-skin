import { cn } from "@/utils/cn";
import { PostsIndexItem } from "../posts-index-item/posts-index-item.component";
import { PostsPermalinkItem } from "../posts-permalink-item/posts-permalink-item.component";
import { Var } from "@/consts/torytis-variable-object";

export function Posts() {
  return (
    <>
      <ul
        data-title="article-list"
        className={cn(
          "w-full flex-wrap relative list-empty:hidden",
          Var["[##_var_list_display_type_##]"],
          Var["[##_var_list_grid_max_col_count_##]"],
          // ""
          "flex list_display_type_grid:grid",
          "gap-2 list_display_type_grid:gap-4",

          // "list_display_type_grid:items-stretch",
          "list_display_type_grid:p-content-area-padding",

          "list_display_type_grid:list_grid_max_col_2:grid-cols-2",
          "list_display_type_grid:list_grid_max_col_3:grid-cols-3",
          "list_display_type_grid:list_grid_max_col_4:grid-cols-4",
          "list_display_type_grid:list_grid_max_col_5:grid-cols-5",
          "list_display_type_grid:list_grid_max_col_6:grid-cols-6",
          "list_display_type_grid:list_grid_max_col_7:grid-cols-7",
          "list_display_type_grid:list_grid_max_col_8:grid-cols-8"
        )}
      >
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
