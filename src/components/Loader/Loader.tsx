import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <DNA height="80" width="80" ariaLabel="audio-loading" visible={true} />
    </div>
  );
};
export default Loader;
