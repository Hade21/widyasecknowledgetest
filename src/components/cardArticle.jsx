import React from "react";

const CardArticle = ({ article, title, desc, body, author, date, tags }) => {
  const tanggal = date.slice(0, 10);
  const jam = date.slice(11, 19);
  return (
    <div className="content">
      <h1
        className={`font-merriewether font-bold  ${
          article ? "text-center text-5xl" : "text-left text-7xl"
        } text-white`}
      >
        {title}
      </h1>
      {!article && (
        <p className="font-commisioner text-3xl text-left text-slate-300 mt-6">
          {desc}
        </p>
      )}
      {article && (
        <div className="body">
          <p
            className={`font-commisioner text-base text-justify text-slate-300 mt-4 ${
              article ? "pr-0" : "pr-32"
            } `}
          >
            {body}
          </p>
          <div className="footer flex justify-between mt-8">
            <p className="text-lg font-commisioner font-medium text-left text-rose-400">
              Ditulis oleh : {author} <br />
              Dirilis pada : {tanggal} | {jam}
            </p>
            <p className="text-base font-commisioner font-normal text-left text-orange-300">
              Tags : {tags}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardArticle;
