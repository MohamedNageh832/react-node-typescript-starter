import { FileInput } from "@/components";
import "./styles.scss";

const VideoUploader = () => {
  return (
    <section className="video-uploader">
      <FileInput>Upload</FileInput>
    </section>
  );
};

export default VideoUploader;
