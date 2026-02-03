import Image from "next/image";
import { Layout } from "./components/layout/Layout";
import { Music } from "./components/music/Music";
import { Work } from "./components/work/Work";
import { Services } from "./components/service/Services";
import { Studio } from "./components/studio/Studio";

export default function Home() {
  return (
    <>
    <Layout/>
    <Music/>
    <Work/>
    <Services/>
    <Studio/>
    </>
  );
}
