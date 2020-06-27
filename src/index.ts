// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import createPdf from "C:\\Users\\jk_19\\Documents\\Dev\\oas2pdf\\src\\pdf-gen.js";

const num: number = +process.argv[2];
console.log(oas2pdf(num));

function oas2pdf(num: number): string {
  createPdf(null);
  return "";
}
