import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { setAddArticle, setArticle } from "../app/features/pages/active";
import Button from "./button";
import CardArticle from "./cardArticle";

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.active.articles);
  const content = useSelector((state) => state.active.article);

  useEffect(() => {
    async function GetArticle() {
      try {
        const res = await axios.get("/articles");
        if (res.status === 200) {
          dispatch(setArticle(res.data.articles));
        }
      } catch (error) {
        dispatch(setArticle({}));
      }
    }
    GetArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSwitch = () => {
    dispatch(setAddArticle());
  };

  return (
    <div>
      <div className="content flex flex-col gap-14">
        {content ? (
          !article ? (
            <CardArticle
              title={content[0].title}
              desc={content[0].description}
              body={content[0].body}
              author={content[0].author.username}
              date={content[0].updatedAt}
              tags={content[0].tagList}
              article={article}
            />
          ) : (
            content.map((item, i) => {
              return (
                <CardArticle
                  title={item.title}
                  desc={item.description}
                  body={item.body}
                  author={item.author.username}
                  date={item.updatedAt}
                  tags={item.tagList}
                  article={article}
                  key={i}
                />
              );
            })
          )
        ) : (
          <h1 className="font-merriewether font-bold text-left text-7xl text-white">
            Tidak ada Artikel
          </h1>
        )}
      </div>
      {article ? (
        <div className="add-article text-white mt-36">
          <form onSubmit={handleSwitch}>
            <Button>Tambah Artikel</Button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleDetail;
