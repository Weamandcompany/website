import React from "react";
import { Metadata } from "next";
import PageLayout from "@/layouts/PageLayout";
import tw from "tailwind-styled-components";

export const metadata: Metadata = {
  title: "Terms and Conditions | Weam",
};

const TermsAndConditions = () => {
  return (
    <PageLayout>
      <main className="lg:mt-[8rem] lg:pt-0 pt-[1rem]  relative  lg:px-24 px-5">
        <Wrapper>
          <Title className="lg:mb-4 mb-2 text-[20px] lg:text-[35px]">
            Terms and Conditions{" "}
          </Title>

          <div className="mx-auto flex flex-col gap-y-6">
            <Value className="mb-0">
              Iaculis euismod a euismod dictum sit dictum arcu, neque. Consequat
              fusce laoreet accumsan, vestibulum. Turpis sed eu tortor massa
              pellentesque lectus tortor viverra sed. Nulla dignissim quis dolor
              nunc id bibendum vel. Dignissim sit sed viverra rhoncus pulvinar
              blandit massa. Eu aenean eu est non nibh suscipit pretium,
              pellentesque. Dolor vitae, amet, ornare suspendisse. Sit ac varius
              libero egestas ullamcorper lacinia et viverra auctor. Semper
              lobortis vitae vitae in malesuada molestie. Ante elementum massa
              pretium, sit arcu. Porta blandit tincidunt urna magna.
            </Value>

            <Value className="mb-0">
              Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque
              viverra. Feugiat mi purus ornare vitae aliquet cras tellus velit
              sociis. Ut augue tellus sed at. Duis morbi lorem nibh amet, mus
              urna, purus velit. Mi condimentum laoreet sed iaculis nunc
              vestibulum nunc diam tortor. Pulvinar orci, non lectus nec duis.
              Adipiscing vitae augue sed sapien purus. Porttitor at eu mi, non
              enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis
              faucibus ac. Enim ullamcorper nullam in aliquam, curabitur dapibus
              risus interdum cursus. Arcu et quis egestas scelerisque tempor,
              mauris. Dictum amet odio pellentesque dis euismod diam arcu,
              pellentesque. Leo sem pellentesque pretium volutpat quam
              consequat. Eu nec consectetur mus consectetur eget. Vitae eu
              ultrices adipiscing commodo. Interdum vivamus enim ut diam nisl.
            </Value>

            <Value className="mb-0">
              Lacus dapibus urna blandit turpis pulvinar adipiscing eu aliquam.
              Lectus scelerisque arcu aliquet feugiat velit ut nunc massa in.
              Sed sapien ut molestie ipsum. Sed tristique ullamcorper ornare
              vitae accumsan malesuada ac facilisis. Posuere lorem duis
              adipiscing cras nisl.
            </Value>

            <Value>
              Eget gravida orci congue quis etiam condimentum mattis. Nibh morbi
              aliquam et, lectus rhoncus. Nullam lacus, urna quis tempus varius.
              Amet, venenatis, scelerisque dignissim sed. Tellus fermentum.
            </Value>

            <Title>Est sem adipiscing commodo cursus. </Title>
            <Value>
              Sagittis eleifend tincidunt semper eget venenatis nulla viverra.
              Pharetra, nascetur sit turpis feugiat vestibulum semper orci.
              Lacus pretium in aliquet tristique. Eget mollis nam eu, sem mattis
              suspendisse ac. Dictum ultrices dolor suspendisse donec elit
              integer.
            </Value>

            <Title>Tincidunt.</Title>
            <Value>
              Amet, elit fames quis consequat. Vel, mattis tellus in turpis
              elementum tellus id vitae. Nibh quis ut bibendum cursus amet,
              vitae metus scelerisque quam. Nibh bibendum augue urna, sed nulla
              ultrices molestie aenean id. Consequat tortor vestibulum feugiat
              vulputate. Ipsum mattis morbi.
            </Value>

            <Title>Odio.</Title>
            <Value>
              Tellus consectetur sed et cras nec gravida sit. Ut euismod egestas
              amet vel viverra lectus id id arcu. Ultrices in magna id tincidunt
              luctus amet. Porttitor pulvinar integer justo, eget amet, vitae
              aliquam aliquam. Mi tellus in nisi, augue nibh faucibus adipiscing
              vitae orci. Risus urna consequat in pellentesque nec imperdiet
              fringilla. Convallis faucibus egestas urna enim, urna vivamus et.
              In arcu vitae sed massa. Sed amet eu, neque non urna a amet id
              libero. Ut quisque sed pretium sodales in felis dictumst elit
              viverra. Sed in quisque risus orci quis urna. Enim ullamcorper
              orci amet arcu turpis.
            </Value>
          </div>
        </Wrapper>
      </main>
    </PageLayout>
  );
};

const Title = tw.h6`text-white font-roboto font-[700] text-center text-[20px] lg:text-[30px]`;
const Value = tw.p`lg:text-[18px] text-[14px] text-white font-[400] font-inter lg:mb-8 mb-4 lg:leading-8 leading-6`;
const Wrapper = tw.div`container bg-[#0C1239] lg:rounded-[46px] rounded-[20px] lg:pt-12 lg:pb-8 mt-14 mb-16 lg:px-12  px-4 py-6`;

export default TermsAndConditions;
