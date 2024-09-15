import { IAdArea } from "./ad-area.type";

export function AdArea(props: IAdArea.Props) {
  const { upper, lower } = props;

  return (
    <>
      {upper === true && "[##_revenue_list_upper_##]"}
      {lower === true && "[##_revenue_list_lower_##]"}
    </>
  );
}
