import { tableData } from "@/constants";
import { SectionTag } from "./section-tag";
import { SectionHeading } from "./section-heading";

export function Superior() {
  return (
    <div className="text-brand-gray-200 flex flex-col gap-6 container py-10 font-oxanium min-h-screen relative overflow-hidden">
      <SectionTag content="Why Us" className="z-10" />
      <SectionHeading content="“Why Our Product is the Superior Choice”" />

      <div className="overflow-x-auto max-w-full z-10">
        <table className="w-full max-md:max-w-3xl max-w-4xl mt-10 border border-brand-gray-300 mx-auto z-10 rounded-md">
          <thead className="text-primary h-14 bg-dark-300">
            <tr>
              <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap">
                Hiring Process
              </th>
              <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap">
                Traditionally
              </th>
              <th className="py-2 px-4 border border-brand-gray-300 text-brand-purple-400 whitespace-nowrap">
                Nexby AI
              </th>
            </tr>
          </thead>

          <tbody className="bg-dark-100">
            {tableData.map((row) => (
              <tr key={row["Hiring Process"]} className="text-center">
                <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap">
                  {row["Hiring Process"]}
                </td>
                <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap">
                  {row.Traditionally}
                </td>
                <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap">
                  {row["Nexby AI"]}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="text-primary h-14 bg-brand-purple-300">
            <tr>
              <th className="border border-brand-gray-300 whitespace-nowrap">
                Time Spent
              </th>
              <th className="border border-brand-gray-300 whitespace-nowrap">
                140+ Hours
              </th>
              <th className="border border-brand-gray-300 whitespace-nowrap">
                13 Mins
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <img
        src="why-elipse.png"
        alt="no-img"
        className="h-[650px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
      />
    </div>
  );
}
