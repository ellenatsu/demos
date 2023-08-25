import React, { useRef, useState } from "react";
import "./newpost.css";
import { Editor } from "@tinymce/tinymce-react";
import { Header } from "../header/Header";
import { collection, addDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";

export const NewPost = () => {
  const TINY_KEY = "9k4kugsn5byhvt1vb560bbow4q3ru12vubgqn8apxewritc2";
  const editorRef = useRef(null);
  const init_settings = {
    height: 500,
    menubar: false,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "code",
      "help",
      "wordcount",
    ],
    toolbar:
      "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  };

  //firebase
  const initalFormData = {
    author: "ellen",
    content: "test content",
    date: new Date().toISOString().slice(0, 10),
    tags: "pets",
    title: "test title",
  };
  const [formData, setFormData] = useState(initalFormData);

  // Event handler for input elementss
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //add to firestore collection
    addToFirestore();
    alert("submit successful!");
    //go to the blog page
  };

  const addToFirestore = async () => {
    try {
      const docRef = await addDoc(
        collection(firebaseDb, "blog-posts"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Header />
      <section className="newPost">
        <div className="container boxItems">
          <form action="submit" onSubmit={submitHandler}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Tags"
              value={formData.tags}
              onChange={handleInputChange}
            />

            <Editor
              apiKey={TINY_KEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={init_settings}
              name="content"
              onChange={handleInputChange}
            />
            <button className="button" type="submit">
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
