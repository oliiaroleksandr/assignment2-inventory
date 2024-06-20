const ColumnNames = () => {
  return (
    <div className="flex items-center bg-background4 text-[0.8125rem] font-semibold">
      <div className="basis-[81px] border-r border-border2 pb-7 pt-5 text-center">
        Floor
      </div>
      <div className="flex grow items-center justify-between">
        <div className="grow border-r border-border2 pb-7 pt-5 text-center">
          North
        </div>
        <div className="grow border-r border-border2 pb-7 pt-5 text-center">
          East
        </div>
        <div className="grow border-r border-border2 pb-7 pt-5 text-center">
          South
        </div>
        <div className="grow pb-7 pt-5 text-center">West</div>
      </div>
    </div>
  );
}

export default ColumnNames