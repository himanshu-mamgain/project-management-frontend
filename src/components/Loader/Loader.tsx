import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <Circles height={"120"} width={"120"} color="#000" visible={true} />
    </div>
  );
}

export default Loader;
