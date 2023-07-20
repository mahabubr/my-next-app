import Image from "next/image";
import NextImage from "@/assets/images/download.png";

const Album = () => {
  return (
    <div>
      <img
        src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
        alt=""
        width="100%"
      />
      main
      <Image
        src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
        alt=""
        width={500}
        height={500}
        layout="responsive"
      />
      Image Local
      <Image
        src={NextImage}
        alt=""
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default Album;
