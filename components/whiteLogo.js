import Image from "next/image";
import { useWindowSize } from "../hooks/useWindowDimensions.js";

export default function whiteLogo(props) {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";
  const size = useWindowSize();

  let imageName = "";

  if (props.r) {
    imageName = "右下角";
  } else if (props.l) {
    imageName = "左下角";
  } else {
    imageName = "竑澤單Logo 白-51";
  }

  const defaultStyle = {
    position: "absolute",
    zIndex: -1,
    width: `calc((${size.width} / 1920) * 100%)`,
    minWidth: "200px",
    maxWidth: "400px",
    aspectRatio: 1158 / 899,
  };

  if (imageName === "竑澤單Logo 白-51") {
    defaultStyle.maxWidth = "800px";
    defaultStyle.aspectRatio = 1075 / 586;
  }

  return (
    <div
      style={{
        ...defaultStyle,
        ...props.style,
      }}
    >
      <Image
        src={basePath + `/image/${imageName}.png`}
        alt="裝飾圖片"
        layout="fill"
      ></Image>
    </div>
  );
}
