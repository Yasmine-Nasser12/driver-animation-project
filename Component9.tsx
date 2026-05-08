import svgPaths from "./svg-fhw7gbm501";

function Frame() {
  return <div className="absolute bg-[#01122a] inset-[41.05%_0_0_0]" />;
}

function BxMap() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bx:map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bx:map">
          <path d={svgPaths.p4acd200} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.pfecb800} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BotSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bot-svgrepo-com (1)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bot-svgrepo-com (1)">
          <path d={svgPaths.p27327680} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p52bdb80} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          <path d={svgPaths.pb039480} fill="var(--fill-0, #FCFCFC)" id="Vector_3" />
          <path d="M8 16H16V18H8V16Z" fill="var(--fill-0, #FCFCFC)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function CarbonNotification() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="carbon:notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="carbon:notification">
          <path d={svgPaths.pa686080} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-7.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 18.5">
          <g id="Group">
            <path d={svgPaths.p2ebfcb80} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p31eda00} id="Vector_2" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconamoonProfileBold() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="iconamoon:profile-bold">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[51px] inset-[57.89%_6.67%_16.84%_26.93%] items-center">
      <BxMap />
      <BotSvgrepoCom />
      <CarbonNotification />
      <IconamoonProfileBold />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[41.05%_0_0_0]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_80%_17.89%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 78">
        <g id="Group 36">
          <path d={svgPaths.p38de3400} fill="var(--fill-0, #1F3551)" id="Ellipse 40" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16%_83.73%_33.89%_3.73%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47.6104">
        <g id="Group 88">
          <ellipse cx="23.5" cy="23.8052" fill="var(--fill-0, #01122A)" id="Ellipse 33" rx="23.5" ry="23.8052" />
          <g id="ion:home">
            <path d={svgPaths.p31d0e00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
            <path d={svgPaths.pccc12f0} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[0_80%_17.89%_0]">
      <Group1 />
      <Group2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Component 9">
      <Group3 />
      <Group4 />
    </div>
  );
}