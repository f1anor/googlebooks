import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "utils";
import Categories from "./Categories";

const CategoriesContainer = ({ ...props }) => {
  const history = useHistory();
  const query = useQuery();
  const category = query.get("category");

  let currentCat = category || "";

  const handleChahge = (e) => {
    const { value } = e.target;

    if (!value) {
      query.delete("category");
    } else {
      query.set("category", value);
    }

    history.push(`${history.location.pathname}?${query.toString()}`);
  };

  return <Categories currentCat={currentCat} handleChahge={handleChahge} />;
};
export default CategoriesContainer;
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
//
//
//
//
//
//
// import React from "react";
// import { useHistory } from "react-router-dom";
// import { useQuery } from "utils";
// import Categories from "./Categories";

// const CategoriesContainer = ({ ...props }) => {
//   const history = useHistory();
//   const query = useQuery();
//   const search = query.get("q");

//   let currentCat = !!search ? search.split(":")[1] || "all" : "all";

//   const handleChahge = (e) => {
//     const { value } = e.target;

//     let param = "";

//     if (!value && !search) {
//       return;
//     }

//     if (!search) {
//       param = `:${value}`;
//     } else {
//       const arr = search.split(":") ?? [search];

//       if (!value && !!search) {
//         param = arr[0];
//       } else {
//         arr[1] = value;

//         param = arr.join(":");
//       }
//     }

//     query.set("q", param);

//     history.push(`/?${query.toString()}`);
//   };

//   return <Categories currentCat={currentCat} handleChahge={handleChahge} />;
// };
// export default CategoriesContainer;
