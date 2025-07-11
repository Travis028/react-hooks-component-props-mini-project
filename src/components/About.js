import React from "react";

function about({ image = "https://via.placeholder.com/215", about  }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
    );
}
export default about;