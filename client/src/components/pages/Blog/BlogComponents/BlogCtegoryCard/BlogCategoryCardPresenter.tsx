import { ChangeEvent } from 'react';
import { StyledBlogCategoryCard } from './BlogCategoryCardStyle';
import Button from '@atoms/Button';
import Image from 'next/image';
import { UserResponse } from '@app/services/userApi';

interface Props {
  userData: UserResponse | undefined;
  cardName: string;
  categoryName: {
    name: string;
  };
  isUpdate: boolean;
  onClickEdit: () => void;
  onClickDelete: (cardName: string) => void;
  onClickSave: (cardName: string, currName: string) => void;
  onChangeCategoryNameInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

//수정버튼(input) > 저장버튼 (admin)
//삭제버튼 > 모달 (admin)
//저장버튼
const BlogCategoryCardPresenter = ({
  userData,
  cardName,
  categoryName,
  isUpdate,
  onClickEdit,
  onClickDelete,
  onClickSave,
  onChangeCategoryNameInput,
}: Props) => {
  return (
    <StyledBlogCategoryCard>
      {/* 카드 이미지 */}
      <div className="card-image-wrapper card-image">
        {/* 만약 블로그가 있으면 다른 블로그 첫번째 이미지로 하기 */}
        <Image
          className="card-image"
          src="https://res.cloudinary.com/uyeong/image/upload/v1668671461/uyeong-blog/purplePNG_umvvlq.png"
          alt="category"
          width={400}
          height={200}
        />
      </div>

      {/* 카드 내용 */}
      <div className="card-content">
        {/* 제목 */}
        {/* userData?.user?.role === 'admin' */}
        {isUpdate ? (
          userData?.user?.role === 'admin' && (
            <div className="card-content-title-wrapper">
              <input type="text" value={categoryName.name} onChange={onChangeCategoryNameInput} autoFocus />
              <Button
                variant="update"
                text="Save"
                onClick={() => {
                  if (!categoryName.name) return;
                  onClickSave(cardName, categoryName.name);
                }}
              />
            </div>
          )
        ) : (
          <div className="card-content-title-wrapper">
            {/* 이름 저장시 잠시 이전 이름이 노출되는 이슈 해결 */}
            {/* client data: categoryName.name */}
            {/* server data: cardName */}
            {categoryName.name ? <p>{categoryName.name}</p> : <p>{cardName}</p>}
            {userData?.user?.role === 'admin' && (
              <>
                <Button variant="update" text="Edit" onClick={onClickEdit} />

                <Button variant="delete" text="Delete" onClick={() => onClickDelete(cardName)} />
              </>
            )}
          </div>
        )}

        {/* 포스트 개수, 최근 업데이트 날짜 */}
        <div className="card-content-footer">포스트개수, 마지막 업데이트: ~ 시간 전</div>
      </div>
    </StyledBlogCategoryCard>
  );
};

export default BlogCategoryCardPresenter;
