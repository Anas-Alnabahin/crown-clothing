import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((catagory) => (
        <DirectoryItem key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
};

export default Directory;
