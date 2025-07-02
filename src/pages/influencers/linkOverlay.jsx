import { memo } from "react";

const LinkOverlay = ({ src }) => {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      title="Open on TikTok"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 5,
        backgroundColor: "rgba(0,0,0,0)",
        cursor: "pointer",
      }}
    />
  );
};

export default memo(LinkOverlay);