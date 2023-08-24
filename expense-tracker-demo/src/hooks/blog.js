import { useState, useEffect } from "react";
import { firebaseDb } from "../firebase";
import { collection, onSnapshot, getDoc, doc } from "firebase/firestore";
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
          newData.push({ id: doc.id, ...doc.data() });
        });
        setPostData(newData);
      }
    );

    return () => unsubscribe();
  }, []);

  return { postData };
};

export const useFetchPost = (postId) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(firebaseDb, "blog-posts", postId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.error("Error post id");
        }
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    };

    fetchData();
  }, [postId]);

  return { post };
};
