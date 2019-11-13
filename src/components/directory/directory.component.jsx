import React, { useContext } from "react";

import MenuItem from "../menu-item/menu-item.component";

import DirectoryContext from "../../context/directory/directory.context";
import "./directory.styles.scss";

const Directory = () => {
  const sections = useContext(DirectoryContext);
  return (
    <div className="directory-menu">
      {sections.map((
        { title, imageUrl, id, size, linkUrl } //we can also sperad props
      ) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
