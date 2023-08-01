import { UserResponse } from '@app/services/user/userApi';
import Button from '@atoms/Button';
import BlogHeader from '@pages/Blog/BlogComponents/BlogHeader';
import InputBox from '@molecules/InputBox';
import Head from 'next/head';
import { ChangeEvent, FormEvent } from 'react';
import { StyledBlogCategory, StyledBlogCategoryContent } from './BlogCategoryStyle';
import BlogCategoryCard from '@pages/Blog/BlogComponents/BlogCategoryCard';
import { BlogCategoryRes } from '@app/services/blog/categoryApi';
import { BlogPostRes } from '@app/services/blog/postApi';
import { SubFrame } from '@templates/SubFrame';

interface Props {
  userData?: UserResponse;
  blogPostsData?: BlogPostRes;
  blogCategoryData?: BlogCategoryRes;
  categoryInfo: { name: string };
  error: any;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChangeCategoryInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BlogCategoryPresenter = ({
  userData,
  blogPostsData,
  blogCategoryData,
  categoryInfo,
  error,
  onSubmit,
  onChangeCategoryInput,
}: Props) => {
  const { name } = categoryInfo;

  return (
    <>
      <Head>
        <title>UYeong | Blog</title>
      </Head>
      <SubFrame>
        <StyledBlogCategory>
          <BlogHeader />
          <StyledBlogCategoryContent>
            {/* 카테고리 생성 바 (admin) */}
            {userData?.user?.role === 'admin' && (
              <form onSubmit={onSubmit}>
                <InputBox labelText="category" name="category" value={name} onChange={onChangeCategoryInput} />
                <Button variant="create" type="submit" text="Create" />
                {/* 에러 메세지 */}
                {error && (
                  <div className="blog-category-error" style={{ color: 'red' }}>
                    {error.data.msg}
                  </div>
                )}
              </form>
            )}

            {/* 카테고리 카드들 웨퍼 */}
            <div>
              {blogCategoryData?.categories?.map((category) => (
                <BlogCategoryCard
                  key={category._id}
                  category={category}
                  userData={userData}
                  blogPostsData={blogPostsData}
                />
              ))}
            </div>
          </StyledBlogCategoryContent>
        </StyledBlogCategory>
      </SubFrame>
    </>
  );
};

export default BlogCategoryPresenter;
