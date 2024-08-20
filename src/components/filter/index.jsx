import { useState } from "react";
import React from "react";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-desin/icons";

import BookCard from "../../pages/home/card";

function Filter() {
  const [view, setView] = useState(false);
  return (
    <div className="Filter">
      <div className="icon">
        {view === true ? (
          <button
            icon={<UnorderedListOutlined />}
            onClick={() => {
              setView(false);
            }}
          ></button>
        ) : (
          <>
            <button
              icon={<AppstoreOutlined />}
              onClick={() => {
                setView(false);
              }}
            ></button>
          </>
        )}
      </div>

      <>{view === true ? <BookCard /> : <List />}</>
    </div>
  );
}
export default Filter;
