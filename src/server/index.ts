import "reflect-metadata";
import { Core } from "odi";

const port = 8080;
const sources = __dirname;

new Core({ server: { port }, sources }).listen();