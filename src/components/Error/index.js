import { Image } from "primereact/image";
import React from "react";
import "./index.css";

const Error = ({ refetch }) => (
  <div>
    <h3>Deu ruim</h3>
    <Image src="sad-pikachu.jpeg" width="300" height="250" />
    <div className="btn-retry" onClick={refetch}>
      tentar novamente
    </div>
  </div>
);

export default Error;
