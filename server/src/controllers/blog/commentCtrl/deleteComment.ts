import { IReqAuth } from "@_types/types";
import { Response } from "express";
// import Comments from "@models/blog/commentModel";

const deleteComment = async (req: IReqAuth, res: Response) => {
  try {
    //middleware auth 잘통과 했는지 확인
    if (!req.user) return res.status(400).json({ msg: "Invalid Authorization." });

    //comment 조회 후 삭제

    res.status(200).json({ msg: "Delete Success!" });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

export default deleteComment;
