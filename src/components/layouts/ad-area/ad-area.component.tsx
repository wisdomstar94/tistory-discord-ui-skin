import { IAdArea } from "./ad-area.type";

export function AdArea(props: IAdArea.Props) {
  const { upper, lower } = props;

  return (
    <>
      {upper === true && <div className="w-full block relative">[##_revenue_list_upper_##]</div>}
      {lower === true && <div className="w-full block relative">[##_revenue_list_lower_##]</div>}
    </>
  );
}
