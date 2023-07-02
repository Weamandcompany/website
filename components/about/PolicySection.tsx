"use client";

import React from "react";
import CheckMark from "public/icons/check-mark.svg";
import HomeMission from "../home/mission";

const CommitCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-1  hover:backdrop-blur-md hover:rounded-md  transition-shadow duration-200">
      <div className="flex-shrink-0 -ml-4 -mt-2">
        <CheckMark className="h-16 w-16" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 -ml-2.5">
        <h4 className="text-wdark font-nunito font-extrabold leading-normal text-lg sm:text-xl">
          {title}
        </h4>
        <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const PolicySection = () => {
  return (
    <>
      <section className="pt-10 pb-16">
        <HomeMission />
      </section>

      <section id="policy-Statement" className="px-4 xs:px-5 sm:px-6">
        <div
          className="bg-no-repeat bg-cover pt-7"
          style={{
            backgroundImage: "url('images/narrow-rects.png')",
          }}
        >
          <div className="lg:container lg:w-full md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-x-3">
            <div className="col-span-5">
              <h3 className="text-wdark font-nunito font-black leading-normal text-2xl md:text-3xl mb-5">
                Weam and Company Quality Policy Statement
              </h3>
            </div>
            <div className="col-span-7">
              <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                Weam and Company Limited has established its Quality Policy to
                be consistent with its purpose and context. It provides a
                framework for the setting and review of objectives in addition
                to our commitment to satisfy applicable customers’, regulatory
                and legislative requirements as well as our commitment to
                continually improve on our management system.
              </p>
            </div>
          </div>

          <div
            className="container bg-fill bg-no-repeat bg-[center_center] mx-auto rounded-lg py-16 mt-8 mb-12 h-[320px]"
            style={{ backgroundImage: "url('/images/commitment.jpg')" }}
          ></div>

          <h3 className="text-wdark font-nunito  font-black leading-normal text-center text-2xl md:text-3xl mb-8">
            Our Commitment
          </h3>

          <div className="container mx-auto grid sm:grid-cols-2 gap-7 lg:gap-x-14">
            <CommitCard
              title="Customer focus"
              description="As an organization, we have made a commitment to understand our current and future customers’ needs; meet their requirements and strive to exceed their expectations."
            />

            <CommitCard
              title="Process approach"
              description="As an organisation, we understand that a desired result is achieved more efficiently when activities and related resources are managed as a process or series of interconnected processes."
            />

            <CommitCard
              title="Leadership"
              description="Our top Management are committed to creating and maintaining a working environment in which people become fully involved in achieving our objectives."
            />

            <CommitCard
              title="Improvement"
              description="We have committed to achieving continual improvement across all aspects of our Quality Management System; it is one of our main annual objectives."
            />

            <CommitCard
              title="Engagement of people"
              description="As an organisation, we recognise that people are the essence of any good business and that their full involvement enables their abilities to be used for mutual benefits."
            />

            <CommitCard
              title="Evidence-based decision making"
              description="As an organisation, we have committed to only make decisions relating to our QMS following an analysis of relevant data and information."
            />

            <CommitCard
              title="Relationship management"
              description="As an organisation, we have committed to only make decisions relating to our QMS following an analysis of relevant data and information."
            />
          </div>
        </div>
      </section>

      {/* policy Statement */}
      <section id="hse-policy" className="px-0 xs:px-5 sm:px-6">
        <div className="container mx-auto bg-bgcommunity bg-repeat-x bg-[size:150%] sm:bg-contain bg-bottom bg-wdark pt-16 pb-20 sm:pb-24 md:pb-32 mt-14 mb-16 px-4 sm:px-6 md:px-10 xs:rounded-3xl">
          <h3 className="text-white font-nunito font-black leading-normal text-center text-2xl md:text-3xl lg:text-4xl mb-8">
            HSE Policy Statement
          </h3>

          <div className="max-w-4xl mx-auto flex flex-col gap-y-6">
            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-medium">
              It is the policy of WEAM & Company Limited to conduct its
              activities in such a manner that will ensure the health and safety
              of its employees and those of other persons who may be affected,
              and that at all times adequate attention is given to the
              protection of the environment.
            </p>

            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-medium">
              It is understood that the achievement of efficient and effective
              operations requires that Health, Safety and Environment issues be
              given equal attention as production. Management therefore, has the
              responsibility of providing a safe and healthy place of work, a
              safe system of work, effective training, and also establishes an
              effective schedule of programs with full management support and
              involvement.
            </p>

            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-medium">
              The company also understands that Health, Safety and Environment
              concerns are part of management duties and responsibilities for
              which they are primarily responsible. In line with this therefore,
              management will continuously give health, safety and environmental
              issues top priority in policy formulation, as well as in the
              design, construction, operation and maintenance of facilities and
              machineries. While management is responsible for all the above, it
              is hoped that employees on their own part will always carefully
              conduct themselves, their colleagues and other persons involved in
              the activity are prevented from accidents and that the operation
              is not endangered. Workers will also be required to fully comply
              with all Company HSE regulations.
            </p>

            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-medium">
              In an effort and as a starting approach to achieve the above
              policy, a dedicated position of a Safety Manager/Supervisor will
              be created, with the responsibility of co-coordinating, health,
              safety and environmental issues within the organization.
            </p>

            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-medium">
              Due to the urgent need to have an effective HSE, that would at all
              times reflect the latest developments in industry, this policy
              will be reviewed annually.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicySection;
