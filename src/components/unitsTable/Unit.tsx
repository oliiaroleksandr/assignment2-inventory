type Props = {
  title: string;
  subTitle: string;
  bgColor: string;
  grow: number;
};

const UnitsTableItem = ({ grow, bgColor, subTitle, title }: Props) => {
  return (
    <div
      style={{ flexGrow: grow, backgroundColor: bgColor }}
      className="py-2 text-center text-foreground"
    >
      <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">{title}</p>
      <p className="text-[0.6875rem] leading-[1.27]">{subTitle}</p>
    </div>
  );
};

export default UnitsTableItem;
