import { Script } from "@/components/script/script.component";
import { ISmallDatetimeInline } from "./small-datetime-inline.type";

export function SmallDatetimeInline(props: ISmallDatetimeInline.Props) {
  const { dataTitle, replacer, datetimeFullReplacer, children } = props;

  return (
    <>
      <div className="inline-flex items-center relative gap-1 text-xs text-light-color-3/50" data-title={dataTitle}>
        {replacer && (
          <>
            <span>{`${replacer.yearReplacer}.${replacer.monthReplacer}.${replacer.dayReplacer}.`}</span>
            <span>
              <Script
                html={`
                {
                  const hour24 = Number("${replacer.hourReplacer}");
                  if (hour24 < 12) {
                    document.write('오전');
                  } else {
                    document.write('오후');
                  }
                }  
              `}
              />
            </span>
            <span>
              <span>
                <Script
                  html={`
                  {
                    const hour24 = Number("${replacer.hourReplacer}");
                    if (hour24 <= 12) {
                      document.write(hour24.toString().padStart(2, '0'));
                    } else {
                      document.write((hour24 - 12).toString().padStart(2, '0'));
                    }
                  }  
                `}
                />
              </span>
              <span>:</span>
              <span>{replacer.minuteReplacer}</span>
            </span>
          </>
        )}

        {datetimeFullReplacer && (
          <>
            <Script
              html={`
                {
                  const datetime = "${datetimeFullReplacer}";
                  const datetimeSplit = datetime.split(' ');
                  const date = datetimeSplit[0];
                  const time = datetimeSplit[1];

                  const dateSplit = date.split('-');
                  const year = dateSplit[0];
                  const month = dateSplit[1];
                  const day = dateSplit[2];

                  const timeSplit = time.split(':');
                  const hour = timeSplit[0];
                  const minute = timeSplit[1];

                  let amOrPm = '';
                  const hour24 = Number(hour);
                  if (hour24 < 12) {
                    amOrPm = '오전';
                  } else {
                    amOrPm = '오후';
                  }

                  let hour12 = '';
                  if (hour24 <= 12) {
                    hour12 = hour24.toString().padStart(2, '0');
                  } else {
                    hour12 = (hour24 - 12).toString().padStart(2, '0');
                  }

                  const renderString = year + "." + month + "." + day + ". " + amOrPm + " " + hour12 + ":" + minute;
                  document.write(renderString);
                }
              `}
            />
          </>
        )}

        {children}
      </div>
    </>
  );
}
