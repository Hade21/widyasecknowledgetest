import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import {
  resetArticle,
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
  const userAuth = useSelector((state) => state.register.setAuth);
  const [tag, setTag] = useState("");

  useEffect(() => {
    dispatch(setTagList(tag));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  const cancel = () => {
    dispatch(setAddArticle());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyConfig = {
      article: {
        title,
        description,
        body,
        tagList,
      },
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${userAuth.token}`,
      },
    };
    try {
      const res = await axios.post("/articles", bodyConfig, header);
      if (res.status === 201) {
        console.log(res);
        dispatch(resetArticle());
        dispatch(setAddArticle());
      }
      console.log(res);
    } catch (err) {
      if (!err?.response) {
        alert("No Server Response");
      } else if (err.response?.status === 422) {
        alert("Gagal Menambahkan! Artikel pernah dimuat!");
      } else {
        alert("gagal Menambahkan!");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 text-white">
        <Input
          type="text"
          placeholder="Judul"
          id="title"
          onChange={(e) => dispatch(setTitle(e.target.value))}
          value={title}
          validation={false}
        >
          Judul
        </Input>
        <Input
          type="text"
          placeholder="Deskripsi"
          id="description"
          onChange={(e) => dispatch(setDes(e.target.value))}
          value={description}
          validation={false}
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
            value={body}
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
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          validation={false}
        >
          Tag
        </Input>
        <div className="action flex justify-center mt-8">
          <Button
            disable={!title || !description || !body || !tagList ? true : false}
          >
            Tambah
          </Button>
          <button
            type="button"
            className="px-14 py-3 bg-blue-400 rounded-lg w-fit font-commisioner font-bold mx-auto cursor-pointer"
            onClick={cancel}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
