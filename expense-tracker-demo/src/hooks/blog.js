import { useState, useEffect } from "react";
import { firebaseDb } from "../firebase";
import { collection, onSnapshot, updateDoc } from "firebase/firestore";
//hooks to listen to the firebase database change

//get posts data
export const useFetchPosts = () => {
  const [postData, setPostData] = useState([]);
  //listen to the firestore collection data to make sure the monthlyData is current one
  // [ {}, {}, {}]
  useEffect(() => {
    // onSnapshot listens for real-time updates
    const unsubscribe = onSnapshot(
      collection(firebaseDb, "blog-posts"),
      (snapshot) => {
        const newData = [];
        snapshot.forEach((doc) => {
          newData.push(doc.data());
        });
        setPostData(newData);
      }
    );

    return () => unsubscribe();
  }, []);

  return { postData };
};

export const useFetchPost = () => {};
