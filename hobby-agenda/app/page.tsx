import DaynameColumn from "/components/DaynameColumn";

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <div className="">
        viewselector here
      </div>
      <div className="col-span-8 grid grid-rows-5">
        <div>
          top row
        </div>

        <div className="row-span-4 grid grid-cols-7">
          <DaynameColumn dayName="Ma"/>
          <DaynameColumn dayName="Di"/>
          <DaynameColumn dayName="Wo"/>
          <DaynameColumn dayName="Do"/>
          <DaynameColumn dayName="Vr"/>
          <DaynameColumn dayName="Za"/>
          <DaynameColumn dayName="Zo"/>
          </div>
      </div>
      <div className="">
        no problem here
      </div>
    </div>
  );
}
