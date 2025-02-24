"use client";

import ChartCardOne from "./componnent/ChartCardOne";

import ChartCardTwo from "./componnent/ChartCardTwo";
import ChartCardThree from "./componnent/ChartCardThree";
import ChartCardFour from "./componnent/ChartCardFour";
import PageStartUpLoaderUI from "./componnent/PageStartUpLoader";
export default function DashBoard() {
  // const [visible, setVisible] = useState(true);

  return (
    <div>
      <div className="relative flex flex-col">
        <PageStartUpLoaderUI />
        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 flex gap-2 rounded-lg px-2 pt-2">
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardOne />
            </div>
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardTwo />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 flex gap-2 rounded-lg px-2 pt-2">
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardThree />
            </div>
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardFour />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
