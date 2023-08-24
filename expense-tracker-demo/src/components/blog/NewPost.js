import React, { useRef } from "react";
import "./newpost.css";
import { Editor } from "@tinymce/tinymce-react";
import { Header } from "../header/Header";

export const NewPost = () => {
  const TINY_KEY = "9k4kugsn5byhvt1vb560bbow4q3ru12vubgqn8apxewritc2";
  const editorRef = useRef(null);
  return (
    <>
      <Header />
      <section className="newPost">
        <div className="container boxItems">
          <form action="submit">
            <input type="text" placeholder="Title" />

            <Editor
              apiKey={TINY_KEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
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
              }}
            />

            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
