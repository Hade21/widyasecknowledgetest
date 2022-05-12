import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddArticle,
  setBody,
  setDes,
  setTagList,
  setTitle,
} from "../app/features/pages/active";
import Button from "./button";
import Input from "./input";

const AddArticle = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.active.title);
  const description = useSelector((state) => state.active.description);
  const body = useSelector((state) => state.active.body);
  const tagList = useSelector((state) => state.active.tagList);

  const handleSubmit = async () => {
    dispatch(setAddArticle());
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <Input
          type="text"
          placeholder="Judul"
          id="title"
          onChange={(e) => dispatch(setTitle(e.target.value))}
        >
          Judul
        </Input>
        <Input
          type="text"
          placeholder="Deskripsi"
          id="description"
          onChange={(e) => dispatch(setDes(e.target.value))}
        >
          Deskripsi
        </Input>
        <div className="body relative w-full sm:w-5/6 mx-auto text-white">
          <textarea
            rows={6}
            className="bg-transparent outline-none focus:outline-none p-2 border-b-2 border-gray-300  focus:border-rose-600 peer w-full font-commisioner placeholder-transparent"
            id="body"
            placeholder="Isi Artikel"
            onChange={(e) => dispatch(setBody(e.target.value))}
          ></textarea>
          <label
            htmlFor="body"
            className="font-commisioner font-medium text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 transition-all duration-300 peer-focus:text-sm peer-focus:-top-3.5 peer-focus:left-0"
          >
            Isi Artikel
          </label>
        </div>
        <Input
          type="text"
          placeholder="Tag"
          id="tagList"
          onChange={(e) => dispatch(setTagList(e.target.value))}
        >
          Tag
        </Input>
        <Button
          disable={!title || !description || !body || !tagList ? true : false}
        >
          Tambah
        </Button>
      </form>
    </div>
  );
};

export default AddArticle;
