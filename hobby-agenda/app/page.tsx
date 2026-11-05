import Image from "next/image";
import {getCategorieen} from "/lib/getCategorieen";
import {getAgendapunten} from "/lib/getAgendapunten";

export default function Home() {
  return (
    <div>
    {getCategorieen()[0].naam}
    {getAgendapunten()[0].titel}
    </div>
  );
}
