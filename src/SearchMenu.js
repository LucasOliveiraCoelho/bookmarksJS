import React from "react";

function SearchMenu(props) {
  return (
    <form onSubmit={props.submit}>
      <input
        name="filterTag"
        type="text"
        value={props.value}
        onChange={props.filterTag}
        placeholder="Filter by tag"
      />
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
}

export default SearchMenu;
