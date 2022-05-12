import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddArticle } from "../app/features/pages/active";
import Button from "./button";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.active.articles);

  const handleSwitch = () => {
    dispatch(setAddArticle());
  };

  return (
    <div>
      <div className="content">
        <h1
          className={`font-merriewether font-bold text-8xl ${
            article ? "text-center" : "text-left"
          } text-white`}
        >
          Title
        </h1>
        {!article && (
          <p className="font-commisioner text-3xl text-left text-slate-300 mt-4">
            Desc
          </p>
        )}
        {article && (
          <div className="body">
            <p
              className={`font-commisioner text-base text-justify text-slate-300 mt-4 ${
                article ? "pr-0" : "pr-32"
              } `}
            >
              Body (quia et suscipit\nsuscipit recusandae consequuntur expedita
              et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum
              est autem sunt rem eveniet architecto)
            </p>
            <div className="footer flex justify-between mt-8">
              <p className="text-lg font-commisioner font-medium text-left text-rose-400">
                Author | publish date
              </p>
              <p className="text-base font-commisioner font-normal text-left text-orange-300">
                Tags
              </p>
            </div>
          </div>
        )}
      </div>
      {article ? (
        <div className="add-article text-white">
          <form onSubmit={handleSwitch}>
            <Button>Tambah Artikel</Button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleDetail;
