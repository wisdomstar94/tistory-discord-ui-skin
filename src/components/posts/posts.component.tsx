import { PostsNormalIndexItem } from "../posts-normal-index-item/posts-normal-index-item.component";
import { PostsNormalPermalinkItem } from "../posts-normal-permalink-item/posts-normal-permalink-item.component";

export function Posts() {
  return (
    <>
      <ul className="w-full flex flex-wrap gap-2 relative">
        <s_article_rep>
          <s_index_article_rep>
            <PostsNormalIndexItem />
          </s_index_article_rep>
          <s_permalink_article_rep>
            <PostsNormalPermalinkItem />
          </s_permalink_article_rep>
        </s_article_rep>
      </ul>
    </>
  );
}
