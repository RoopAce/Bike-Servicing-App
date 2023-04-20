import CountUp from "react-countup";

import { FaHeadset } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";

import Container from "../UI/Container";
import Row, { RowItem } from "../UI/Row";

const ChooseUs = () => {
  const IconContainerStyles = "inline-block p-[8px] rounded-[50%] text-[20px]";

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title text-center mb-[32px] text-3xl">
          Why Chose Us ?
          <span className="section-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            ut.
          </span>
        </h2>
        <Row className="space-y-[16px] md:space-y-0 md:mx-[-20px]  ">
          <RowItem className="w-full px-[20px] grow sm:w-6/12 md:w-3/12">

            <article className="p-[30px] h-full shadow-lg bg-blue-500">
              <div className={` bg-red-500 text-white ${IconContainerStyles}`}>
                <MdOutlineSentimentVerySatisfied />
              </div>
              <span className="block font-[500] mt-[8px] text-white">
                <CountUp end={1500} duration={3} />
                <em className="not-italic ">+ Satisfied Customers</em>
              </span>
            </article>
          </RowItem>
          <RowItem className="w-full px-[20px] grow  sm:w-6/12 md:w-3/12">
            <article className="p-[30px] h-full shadow-lg bg-blue-500">
              <div className={`bg-green-500 ${IconContainerStyles}`}>
                <FaHeadset className="text-green-700" />
              </div>
              <span className="block font-[500] mt-[8px] text-white">
                24/7 Service Available
              </span>
            </article>
          </RowItem>
          <RowItem className="w-full px-[20px] grow sm:w-6/12 md:w-3/12">
            <article className="p-[30px] h-full shadow-lg bg-blue-500">
              <div className={`bg-blue-500 ${IconContainerStyles}`}>
                <HiWrenchScrewdriver className="text-blue-700" />
              </div>
              <span className="block font-[500] mt-[8px] text-white">
                Professional Technical Teams
              </span>
            </article>
          </RowItem>
          <RowItem className="w-full px-[20px] grow sm:w-6/12 md:w-3/12">
            <article className="p-[30px] h-full shadow-lg bg-blue-500">
              <div className={`bg-yellow-500 ${IconContainerStyles}`}>
                <AiOutlineFieldTime className="text-yellow-700 " />
              </div>
              <span className="block font-[500] mt-[8px] text-white">
                Fast process, Best results
              </span>
            </article>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
