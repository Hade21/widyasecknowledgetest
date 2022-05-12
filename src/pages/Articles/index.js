import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { setArticlesActive } from "../../app/features/pages/active";
import ArticleDetail from "../../components/ArticleDetail";
import AddArticle from "../../components/addArticle";

const Articles = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.active.profile);
  const article = useSelector((state) => state.active.articles);
  const addArticle = useSelector((state) => state.active.addArticle);

  const handleFullScreen = () => {
    dispatch(setArticlesActive());
  };

  return (
    <div
      className={
        article
          ? "w-full p-24 h-full flex flex-col justify-center transition-all duration-300"
          : profile
          ? "w-0 opacity-0 text-[0px] transition-all duration-300"
          : "w-3/5 p-8 h-full flex flex-col justify-center transition-all duration-300"
      }
    >
      {addArticle ? <AddArticle /> : <ArticleDetail />}
      <p
        className="cursor-pointer text-white font-commisioner font-medium flex gap-4 items-center justify-center mt-32"
        onClick={handleFullScreen}
      >
        {article ? "Hide Articles" : "See Articles"}
        <FontAwesomeIcon icon={article ? faArrowRight : faArrowLeft} />
      </p>{" "}
    </div>
  );
};

export default Articles;
