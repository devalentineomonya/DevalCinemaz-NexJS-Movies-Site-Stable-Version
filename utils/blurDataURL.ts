"use server"
import { getPlaiceholder } from "plaiceholder";

export const getImgBlurData = async (src:string):Promise<string> => {
  try {

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    console.log(error);
    return "";
  }
};
