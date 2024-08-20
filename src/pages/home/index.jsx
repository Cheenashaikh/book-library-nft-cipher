import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import BookCard from "./card";
import List from "../list";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/common/useDebounce.jsx";
// import ServicsFooter from "./servics-footer";
import { data } from "../../utils/card-view/data";
import TopElements from "./top-elements/index.jsx";

function Home({ search }) {
  const [record, setRecord] = useState([]);
  const [view, setView] = useState(false);

  const debounceValue = useDebounce(search, 0.5);

  const fetchBooksData = async () => {
    if (search) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${debounceValue}`
        );
        setRecord(response?.data?.items || []);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchBooksData();
  }, [debounceValue]);

  return (
    <div className="bookCard">
      <div className="container">
        <TopElements data={data} />
        <div className="icon">
          {view === true ? (
            <button
              onClick={() => {
                setView(false);
              }}
            >
              <UnorderedListOutlined />
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setView(true);
                }}
              >
                <AppstoreOutlined />
              </button>
            </>
          )}
        </div>

        <div
          className={
            view === true ? "book-card-container" : "list-view-container"
          }
        >
          {record
            ?.filter((item) =>
              item?.volumeInfo?.title
                ?.toLowerCase()
                ?.includes(search?.toLowerCase())
            )
            ?.map((list, index) => (
              <div key={index} style={{ width: "100%" }}>
                {view === true ? (
                  <BookCard book={list} />
                ) : (
                  <List book={list} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
