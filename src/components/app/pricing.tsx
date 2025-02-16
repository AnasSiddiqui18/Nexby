import { pricing_card_data, pricing_table_data } from "@/constants";
import { SectionTag } from "./section-tag";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="h-auto text-primary font-oxanium pt-14 pb-20 container">
      <SectionTag content="Pricing Plan" />
      <Tabs className="dark flex justify-center mt-5" defaultValue="INR">
        <TabsList className="bg-dark-300 rounded-none">
          <TabsTrigger className="cursor-pointer" value="INR">
            INR
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="USD">
            USD
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex max-lg:flex-col items-center justify-center gap-14 mt-10">
        <span className="~text-lg/3xl w-80 text-center">
          "Pick the perfect plan for your journey."
        </span>

        <div className="flex gap-3 max-sm:flex-col max-sm:w-full max-sm:gap-6">
          {pricing_card_data.map((data) => {
            return (
              <React.Fragment key={data.plan}>
                <div
                  key={data.plan}
                  className="w-72 h-auto rounded-md bg-dark-300 p-4 border-t-2 border-brand-purple-300 max-sm:w-full"
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4>{data.plan}</h4>
                      <span className="text-brand-gray-500 text-sm">
                        {data.company_type}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <h3>
                        {data.price}{" "}
                        <span className="text-sm text-brand-gray-400">
                          / Price
                        </span>
                      </h3>
                      <span>
                        <span>{data.int_price}</span>
                        <span className="text-sm text-brand-gray-400">
                          / Per Interview
                        </span>
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-brand-purple-300 hover:bg-brand-purple-200 text-white py-3 border-2 border-brand-purple-100 rounded-md sm:w-full">
                    Get Started
                  </Button>
                </div>

                <div
                  className="bg-brand-gray-600 w-full h-10 rounded-md px-2 flex justify-between items-center sm:hidden"
                  onClick={() =>
                    setSelectedPlan(() => {
                      if (selectedPlan.length) return "";
                      return data.plan;
                    })
                  }
                >
                  <span className="text-brand-gray-400 text-sm">{`view ${data.plan} Plan`}</span>

                  {!selectedPlan.length ? (
                    <ChevronDown className="size-6 text-brand-gray-400" />
                  ) : (
                    <ChevronUp className="size-6 text-brand-gray-400" />
                  )}
                </div>

                {selectedPlan === "Basic" && data.plan === selectedPlan ? (
                  <div className="flex justify-center overflow-x-auto max-w-full">
                    <table className="w-full max-w-4xl">
                      <thead className="h-14 bg-dark-200">
                        <tr>
                          <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap">
                            Features
                          </th>
                          <th className="py-2 px-4 border border-brand-gray-300 whitespace-nowrap">
                            Basic Plan
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-form_bg">
                        {pricing_table_data.map((data) => {
                          const { content, features } = data;
                          const { basic, isImage } = content;
                          return (
                            <tr key={data.features} className="text-center">
                              <td className="py-4 border border-brand-gray-300 whitespace-nowrap">
                                {features}
                              </td>
                              <td className="border border-brand-gray-300">
                                {isImage ? (
                                  <img
                                    src={basic}
                                    alt="no-img"
                                    className="mx-auto size-6"
                                  />
                                ) : (
                                  basic
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>

                      <tfoot className="text-primary">
                        <tr>
                          <th></th>
                          <th>
                            <Button className="bg-brand-purple-300 hover:bg-brand-purple-200 text-white py-3 border-2 border-brand-purple-100 rounded-md sm:w-full mt-3">
                              Get Started With Basic Plan
                            </Button>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                ) : selectedPlan === "Pro" && data.plan === selectedPlan ? (
                  <div className="flex justify-center overflow-x-auto max-w-full">
                    <table className="w-full max-w-4xl">
                      <thead className="h-14 bg-dark-200">
                        <tr>
                          <th className="py-2 px-4 border border-brand-gray-300">
                            Features
                          </th>
                          <th className="py-2 px-4 border border-brand-gray-300">
                            Pro Plan
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-form_bg">
                        {pricing_table_data.map((data) => {
                          const { content, features } = data;
                          const { pro, isImage } = content;
                          return (
                            <tr key={data.features} className="text-center">
                              <td className="py-4 border border-brand-gray-300">
                                {features}
                              </td>
                              <td className="border border-brand-gray-300">
                                {isImage ? (
                                  <img
                                    src={pro}
                                    alt="no-img"
                                    className="mx-auto size-6"
                                  />
                                ) : (
                                  pro
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>

                      <tfoot className="text-primary">
                        <tr>
                          <th></th>
                          <th>
                            <Button className="bg-brand-purple-300 hover:bg-brand-purple-200 text-white py-3 border-2 border-brand-purple-100 rounded-md sm:w-full mt-3">
                              Get Started With Pro Plan
                            </Button>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                ) : undefined}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* table for desktop view (basic + pro plan) */}

      <div className="flex justify-center mt-10 max-sm:hidden">
        <table className="w-full max-w-4xl">
          <thead className="h-14 bg-dark-200">
            <tr>
              <th className="py-2 px-4 border border-brand-gray-300">
                Features
              </th>
              <th className="py-2 px-4 border border-brand-gray-300">
                Basic Plan
              </th>
              <th className="py-2 px-4 border border-brand-gray-300">
                Pro Plan
              </th>
            </tr>
          </thead>
          <tbody className="bg-form_bg">
            {pricing_table_data.map((data) => {
              const { content, features } = data;
              const { basic, isImage, pro } = content;
              return (
                <tr key={data.features} className="text-center">
                  <td className="py-4 px-6 border border-brand-gray-300">
                    {features}
                  </td>
                  <td className="border border-brand-gray-300">
                    {isImage ? (
                      <img
                        src={basic}
                        alt="no-img"
                        className="mx-auto size-6"
                      />
                    ) : (
                      basic
                    )}
                  </td>
                  <td className="border border-brand-gray-300">
                    {isImage ? (
                      <img src={pro} alt="no-img" className="mx-auto size-6" />
                    ) : (
                      pro
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot className="text-primary">
            <tr>
              <th></th>
              <th>
                <Button className="bg-brand-purple-300 hover:bg-brand-purple-100 text-white py-3 rounded-none w-full">
                  Get Started
                </Button>
              </th>
              <th>
                <Button className="bg-brand-purple-300 hover:bg-brand-purple-100 text-white py-3 rounded-none w-full">
                  Get Started
                </Button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
