import React, { ChangeEvent, RefObject } from 'react';
import { DIV, SECTION } from './BlogStyle';
import Head from 'next/head';
import BlogHeader from '@pages/Blog/BlogComponents/BlogHeader';
import { BlogPostRes } from '@app/services/blog/postApi';
import { SubFrame } from '@templates/SubFrame';
import InputBox from '@molecules/InputBox/InputBox';
import SearchIcon from '@icons/SearchIcon';
import BlogTags from '../BlogComponents/BlogTags';
import BlogPosts from '@pages/Blog/BlogComponents/BlogPosts';
// import { DIV as DIV_POSTS } from '../BlogComponents/BlogPosts/BlogPosts';
// import { InitialPostsCardArr } from '../BlogComponents/BlogPosts/BlogPosts';
// import dynamic from 'next/dynamic';
import MiniLoader from '@modals/MiniLoader';

// const BlogPosts = dynamic(() => import('../BlogComponents/BlogPosts/BlogPosts'), {
//   loading: () => (
//     <DIV_POSTS.BlogPostsWrapper>
//       {InitialPostsCardArr.map((v) => (
//         <DIV_POSTS.InitialPostsCard key={v}></DIV_POSTS.InitialPostsCard>
//       ))}
//     </DIV_POSTS.BlogPostsWrapper>
//   ),
//   ssr: false,
// });

interface Props {
  targetRef: RefObject<HTMLDivElement>;
  blogPostsBySearch?: BlogPostRes;
  tagUnderline: string;
  searchWordInput?: string;
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickInput?: () => void;
  onFocusInput?: () => void;
  inputRef?: RefObject<HTMLInputElement>;
  onClickTag: (tagName: string) => void;
  isTagClicked: boolean;
  isLoadingPost: boolean;
}

const BlogPresenter: React.FC<Props> = ({
  targetRef,
  blogPostsBySearch,
  tagUnderline,
  searchWordInput,
  onChangeInput,
  onClickInput,
  onFocusInput,
  inputRef,
  onClickTag,
  isTagClicked,
  isLoadingPost,
}) => {
  return (
    <>
      <Head>
        <title>UYeong | Blog</title>
      </Head>
      <SECTION.Frame>
        <BlogHeader />
        <SubFrame>
          <DIV.BlogBlock>
            <BlogTags tagUnderline={tagUnderline} onClickTag={onClickTag} isTagClicked={isTagClicked} />
            <SECTION.BlogMain>
              <DIV.SearchBar>
                <InputBox
                  type="text"
                  value={searchWordInput}
                  onChange={onChangeInput}
                  onClick={onClickInput}
                  onFocus={onFocusInput}
                  ref={inputRef}
                  placeholder=""
                />
                <SearchIcon />
              </DIV.SearchBar>
              <BlogPosts blogPostsBySearch={blogPostsBySearch} />
              <DIV.IntersectionTarget id="posts_intersection_target" ref={targetRef}>
                {isLoadingPost && <MiniLoader />}
              </DIV.IntersectionTarget>
            </SECTION.BlogMain>
          </DIV.BlogBlock>
        </SubFrame>
      </SECTION.Frame>
    </>
  );
};

export default BlogPresenter;
