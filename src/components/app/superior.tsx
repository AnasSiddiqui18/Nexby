import { tableData } from "@/constants";
import { SectionTag } from "./section-tag";
import { SectionHeading } from "./section-heading";

export function Superior() {
  return (
    <div className="text-brand-gray-200 flex flex-col gap-6 container py-10 font-oxanium min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-brand-purple-400/20 to-brand-blue-400/20 blur-2xl opacity-50"
        style={{
          backgroundImage: "url('why-elipse.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <SectionTag content="Why Us" className="z-10" />

      <div className="mt-7 z-20">
        <SectionHeading content="“Why Our Product is the Superior Choice”" />

        {/* Table Container */}
        <div className="overflow-x-auto max-w-full z-20 relative">
          <table className="w-full max-md:max-w-3xl max-w-4xl mt-8 border border-[#35353559] mx-auto rounded-lg overflow-hidden">
            <thead className="text-primary h-14 bg-dark-300">
              <tr>
                <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap font-normal">
                  Hiring Process
                </th>
                <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap font-normal">
                  Traditionally
                </th>
                <th className="py-2 px-4 border border-brand-gray-300 text-brand-purple-400 whitespace-nowrap font-normal">
                  Nexby AI
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr key={row["Hiring Process"]} className="text-center">
                  <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap bg-dark-600">
                    {row["Hiring Process"]}
                  </td>
                  <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap bg-dark-600">
                    {row.Traditionally}
                  </td>
                  <td className="py-4 px-6 border border-brand-gray-300 whitespace-nowrap bg-dark-600">
                    {row["Nexby AI"]}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-primary h-14 bg-brand-purple-300">
              <tr>
                <th className="border border-brand-gray-300 whitespace-nowrap font-normal">
                  Time Spent
                </th>
                <th className="border border-brand-gray-300 whitespace-nowrap font-normal">
                  140+ Hours
                </th>
                <th className="border border-brand-gray-300 whitespace-nowrap font-normal">
                  13 Mins
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
