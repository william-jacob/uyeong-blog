import styled from '@_settings/styled';

export const StyledBlogPost = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.BP.PC};
  margin: 0 auto;
  padding: 50px 25px 100px 25px;

  & > article {
    border: 1px solid black;
    min-height: 300px;
    width: 100%;

    & .blog-post-image-wrapper {
      // border: 5px solid black;
      display: inline-flex;
      position: relative;
      top: 0;
      left: 0;
      width: 800px;
      height: 550px;
    }
  }
`;
