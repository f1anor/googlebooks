import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "utils";
import Sort from "./Sort";

const SortContainer = () => {
  const history = useHistory();
  const query = useQuery();
  const sort = query.get("sort");

  let currentSort = sort || "";

  const handleChahge = (e) => {
    const { value } = e.target;

    if (!value) {
      query.delete("sort");
    } else {
      query.set("sort", value);
    }

    history.push(`${history.location.pathname}?${query.toString()}`);
  };

  return <Sort currentSort={currentSort} handleChahge={handleChahge} />;
};
export default SortContainer;
