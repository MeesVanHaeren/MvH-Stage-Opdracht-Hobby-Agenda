type DaynameColumnProps = {
    dayName: string;
    dayNum?: string;
}

export default function DaynameColumn({
    dayName,
    dayNum
}: DaynameColumnProps){
    dayName ??= 'No';
    return <div className="bg-slate-50" >
        <div className="bg-slate-100 py-3">
            <p className="text-center text-4xl">{dayName}</p>
            <p className="text-center"> {dayNum} </p>
        </div>
    </div>;
}
