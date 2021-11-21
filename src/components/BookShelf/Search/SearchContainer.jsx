import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "utils";
import Search from "./Search";

const SearchContainer = ({ ...props }) => {
  const query = useQuery();
  const history = useHistory();

  const search = query.get("search");
  const [value, changeValue] = useState("");

  const ref = useRef();

  useEffect(() => {
    changeValue(search || "");
  }, [changeValue, search]);

  const handleSetSearch = () => {
    // Если поискового запроса нет - то удаляем данный параметр (и соответственно книги не загружаются)
    if (value.length === 0) {
      query.delete("search");
    } else {
      query.set("search", value);
    }
    history.push(`/?${query.toString()}`);
    console.log(ref);
    ref.current.blur();
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) handleSetSearch();
  };
  return (
    <Search
      value={value.split(":")[0]}
      changeValue={changeValue}
      handleSubmit={handleSubmit}
      handleSetSearch={handleSetSearch}
      ref={ref}
      {...props}
    />
  );
};

export default SearchContainer;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useQuery } from "utils";
// import Search from "./Search";

// const SearchContainer = ({ ...props }) => {
//   const query = useQuery();
//   const search = query.get("q");
//   const [value, changeValue] = useState("");
//   useEffect(() => {
//     changeValue(search || "");
//   }, [changeValue, search]);

//   const history = useHistory();

//   const handleSetSearch = () => {
//     // Если поискового запроса нет - то удаляем данный параметр (и соответственно книги не загружаются)
//     if (value.length === 0) {
//       query.delete("q");
//     } else {
//       // В противном случае - выделяем категорию (если такая есть) и прикрепляем к поисковому запросу
//       const category = !!search ? search.split(":")[1] : false;
//       query.set("q", `${value}${!!category ? ":" + category : ""}`);
//     }
//     history.push(`${history.location.pathname}?${query.toString()}`);
//   };

//   const handleSubmit = (e) => {
//     if (e.keyCode === 13) handleSetSearch();
//   };
//   return (
//     <Search
//       value={value.split(":")[0]}
//       changeValue={changeValue}
//       handleSubmit={handleSubmit}
//       handleSetSearch={handleSetSearch}
//       {...props}
//     />
//   );
// };

// export default SearchContainer;
