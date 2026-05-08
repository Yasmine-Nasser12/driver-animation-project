import svgPaths from "./svg-az7gt2fe9t";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.575px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">{`Reviews & Ratings`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-b from-[#009689] left-[0.4px] rounded-[26843500px] size-[64px] to-[#00b8db] top-[-0.6px] via-1/2 via-[#00bba7]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[18px] text-white top-[-2.2px]">John Michael</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] top-[-1.2px]">Professional Driver</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[80px] top-[10px] w-[115.338px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">JD</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[56px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 137, 4) 0%, rgb(152, 16, 250) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.013px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#192c3d] content-stretch flex items-center justify-center left-[2.4px] rounded-[26843500px] size-[60px] top-[1.4px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function ReviewsList1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ReviewsList">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9b81900} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[31.087px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-white">4.7</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[63.088px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="bg-[#364153] h-[32px] shrink-0 w-px" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[-0.49px] text-[#99a1af] text-[14px] top-[-1.4px] w-[86px] whitespace-pre-wrap">128 reviews</p>
      </div>
    </div>
  );
}

function ReviewsList2() {
  return (
    <div className="bg-[#0a1f2f] h-[65.6px] relative rounded-[16px] shrink-0 w-full" data-name="ReviewsList">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(54,65,83,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16.8px] pr-[0.8px] py-[0.8px] relative size-full">
          <Container7 />
          <Container8 />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-white h-[14px] rounded-[26843500px] shrink-0 w-full" data-name="Container" />;
}

function Container11() {
  return (
    <div className="bg-[#0a1a24] content-stretch flex flex-col h-[14px] items-start relative rounded-[26843500px] shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#009689] items-start left-[50.8px] pt-[1.6px] px-[1.6px] rounded-[26843500px] size-[17.2px] to-[#00b8db] top-[50.8px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gradient-to-b from-[#0f2a3a] h-[187.2px] relative rounded-[24px] shrink-0 to-[#0a1f2f] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(54,65,83,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[20.8px] px-[20.8px] relative size-full">
        <ReviewsList1 />
        <ReviewsList2 />
        <Container9 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[323.2px] items-start left-0 pt-[32px] px-[24px] top-0 w-[388.4px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function ReviewsList() {
  return (
    <div className="bg-gradient-to-b from-[#0a1a24] h-[307px] relative shrink-0 to-[#0d1f2d] w-full" data-name="ReviewsList">
      <Container />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">Just now</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[35.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-[98.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon2 />
        <Icon3 />
        <Icon4 />
        <Icon5 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start justify-between left-[20px] top-[20px] w-[283.6px]" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[72px] w-[283.6px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Great experience!</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[45.5px] left-[20px] overflow-clip top-[104px] w-[283.6px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[272px] whitespace-pre-wrap">The driver was professional and handled my shipment with great care. Communication was excellent throughout the entire trip.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#00d5be] h-[23.988px] items-start left-[259.68px] px-[12px] py-[4px] rounded-[26843500px] shadow-[0px_4px_12px_0px_rgba(0,213,190,0.4)] to-[#00b8aa] top-[16px] w-[47.925px]" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white">New</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.8px] border-[rgba(0,213,190,0.4)] border-solid from-[#0f2a3a] h-[183.1px] left-[24px] opacity-0 rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)] to-[#0a1f2f] top-[-278.4px] w-[325.2px]" data-name="Container">
      <Container15 />
      <Heading2 />
      <Paragraph4 />
      <Container20 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]" dir="auto">
        Just now
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[57.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-[109.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start justify-between left-[20.4px] top-[19.7px] w-[100px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[72px] w-[283.6px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Excellent service</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[45.5px] left-[20px] overflow-clip top-[104px] w-[283.6px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[280px] whitespace-pre-wrap">Very professional driver. Delivered everything on time and in perfect condition. Highly recommend!</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2caad200} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p370da580} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100.388px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00d5be] text-[14px] top-[-1.2px]">Photos attached</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[20px] top-[161.5px] w-[283.6px]" data-name="Container">
      <Icon7 />
      <Text4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute bg-gradient-to-b from-[#00d5be] h-[21px] left-[283.2px] rounded-[26843500px] shadow-[0px_4px_12px_0px_rgba(0,213,190,0.4)] to-[#00b8aa] top-[20.5px] w-[31px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[5px] text-[10px] text-white top-0">New</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[282.4px] top-[19.7px]">
      <Paragraph8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.8px] border-[rgba(0,213,190,0.4)] border-solid from-[#0f2a3a] h-[203.1px] left-[32px] rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,213,190,0.13),0px_8px_32px_0px_rgba(0,0,0,0.4)] to-[#0a1f2f] top-[10.7px] w-[325.2px]" data-name="Container">
      <Container22 />
      <Heading3 />
      <Paragraph7 />
      <Container26 />
      <Group />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">5 days ago</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[57.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[40px] relative shrink-0 w-[109.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24292e00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon8 />
        <Icon9 />
        <Icon10 />
        <Icon11 />
        <Icon12 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container32 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Good communication</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[246px] whitespace-pre-wrap">Driver kept me updated throughout the journey. Everything arrived safely.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0f2a3a] gap-[12px] h-[183.1px] items-start left-[32px] pb-[0.8px] pt-[20.8px] px-[20.8px] rounded-[24px] to-[#0a1f2f] top-[229.8px] w-[325.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(54,65,83,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]" />
      <Container28 />
      <Heading4 />
      <Paragraph11 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">1 week ago</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[35.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-[112.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27700500} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27700500} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27700500} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27700500} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon13 />
        <Icon14 />
        <Icon15 />
        <Icon16 />
        <Icon17 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start justify-between left-[20px] top-[20px] w-[283.6px]" data-name="Container">
      <Container35 />
      <Container38 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[72px] w-[283.6px]" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Outstanding!</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[45.5px] left-[20px] overflow-clip top-[104px] w-[283.6px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[265px] whitespace-pre-wrap">Best driver I have worked with. Very careful with the cargo and professional in every aspect.</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2caad200} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p370da580} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100.388px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00d5be] text-[14px] top-[-1.2px]">Photos attached</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[20px] top-[161.5px] w-[283.6px]" data-name="Container">
      <Icon18 />
      <Text7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.8px] border-[rgba(54,65,83,0.3)] border-solid from-[#0f2a3a] h-[203.1px] left-[32px] rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)] to-[#0a1f2f] top-[428.9px] w-[325.2px]" data-name="Container">
      <Container34 />
      <Heading5 />
      <Paragraph14 />
      <Container39 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">1 week ago</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[35.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[40px] relative shrink-0 w-[112.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon19 />
        <Icon20 />
        <Icon21 />
        <Icon22 />
        <Icon23 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Highly professional</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[271px] whitespace-pre-wrap">Smooth experience from start to finish. Would definitely work with this driver again.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0f2a3a] gap-[12px] h-[183.1px] items-start left-[32px] pb-[0.8px] pt-[20.8px] px-[20.8px] rounded-[24px] to-[#0a1f2f] top-[648px] w-[325.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(54,65,83,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]" />
      <Container41 />
      <Heading6 />
      <Paragraph17 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">T</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 85, 101) 0%, rgb(54, 65, 83) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(74,85,101,0.5)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.8px] pr-[0.812px] py-[0.8px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">Trader</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">2 weeks ago</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[35.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[40px] relative shrink-0 w-[117.537px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb3a1300} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon24 />
        <Icon25 />
        <Icon26 />
        <Icon27 />
        <Icon28 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container51 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">Reliable and punctual</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[45.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#99a1af] text-[14px] top-[-1.4px] w-[270px] whitespace-pre-wrap">Great timing and very easy to communicate with. Handled everything professionally.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0f2a3a] gap-[12px] h-[183.1px] items-start left-[32px] pb-[0.8px] pt-[20.8px] px-[20.8px] rounded-[24px] to-[#0a1f2f] top-[847.1px] w-[325.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(54,65,83,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]" />
      <Container47 />
      <Heading7 />
      <Paragraph20 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-gradient-to-r from-[#00d5be] h-[48px] left-0 opacity-0 to-[#00d3f2] top-0 w-[316.4px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[48px] left-[91.52px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-[316.4px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[25.5px] left-[11.48px] text-[17px] text-white top-[11px]" dir="auto">{`Back to Profile       `}</p>
    </div>
  );
}

function App() {
  return <div className="absolute h-[20px] left-[140.46px] top-[14px] w-[35.475px]" data-name="App" />;
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-r from-[#009689] h-[48px] left-[36.2px] overflow-clip rounded-[14px] shadow-[0px_6px_9.3px_-3px_rgba(0,187,167,0.25),0px_4px_6px_-4px_rgba(0,187,167,0.25)] to-[#00b8db] top-[1060.2px] via-1/2 via-[#00bba7] w-[316px]" data-name="Button">
      <Container52 />
      <Container53 />
      <App />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[1147px] overflow-clip relative shrink-0 w-[388px]" data-name="Container">
      <Container14 />
      <Container21 />
      <Container27 />
      <Container33 />
      <Container40 />
      <Container46 />
      <Button1 />
    </div>
  );
}

export default function DriversReviews() {
  return (
    <div className="bg-gradient-to-b from-[#0a1a24] relative rounded-[40px] size-full to-[#0d1f2d]" data-name="Driver\'s Reviews">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <ReviewsList />
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(30,41,57,0.5)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}