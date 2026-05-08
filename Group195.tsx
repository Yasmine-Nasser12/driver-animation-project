import svgPaths from "./svg-za2uzy12nx";

function Heading() {
  return <div className="h-[36px] shrink-0 w-[70.2px]" data-name="Heading 1" />;
}

function Container1() {
  return <div className="h-0 shrink-0 w-[48px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-between left-[37px] top-[43px] w-[311.8px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[36px] left-[193px] top-[31px] w-[78px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-[-79px] not-italic text-[18px] text-white top-[8px]" dir="auto">{`Advanced Settings `}</p>
    </div>
  );
}

function NotificationPreferences() {
  return <div className="absolute blur-[100px] h-[400px] left-[43px] opacity-30 rounded-[26843500px] top-[209px] w-[300px]" data-name="NotificationPreferences" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 300 400\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(0 -25 -25 0 150 200)\'><stop stop-color=\'rgba(0,213,190,0.4)\' offset=\'0\'/><stop stop-color=\'rgba(0,184,219,0.2)\' offset=\'0.4\'/><stop stop-color=\'rgba(0,92,110,0.1)\' offset=\'0.55\'/><stop stop-color=\'rgba(0,0,0,0)\' offset=\'0.7\'/></radialGradient></defs></svg>')" }} />;
}

function ProfileScreen() {
  return (
    <div className="absolute bg-[#0a1a24] h-[1443px] left-0 overflow-clip top-0 w-[375px]" data-name="ProfileScreen">
      <Container />
      <Heading1 />
      <NotificationPreferences />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,213,190,0.1)] content-stretch flex items-center justify-center left-[20px] rounded-[26843500px] size-[32px] top-[38px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Driver() {
  return (
    <div className="absolute bg-white h-[945px] left-0 overflow-clip top-0 w-[375px]" data-name="Driver">
      <ProfileScreen />
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14.825px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">JD</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#192c3d] h-[48px] relative rounded-[26843500px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-b from-[#009689] relative rounded-[26843500px] shrink-0 size-[52px] to-[#00b8db] via-1/2 via-[#00bba7]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[222.2px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[16px] text-white top-[-2.2px]">Maro Ahmed</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[8px] top-[2px] w-[33.038px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#00d5be] text-[12px]">Trader</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,213,190,0.15)] border-[0.8px] border-[rgba(0,213,190,0.3)] border-solid h-[21.587px] left-0 rounded-[26843500px] top-[28px] w-[50.638px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[49.588px] relative shrink-0 w-[205.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Container6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(10,22,40,0.7)] content-stretch flex gap-[12px] h-[79px] items-center left-[36px] px-[16.8px] py-[0.8px] rounded-[16px] top-[97px] w-[295px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Driver />
      <Container2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[4px] not-italic text-[11px] text-[rgba(203,251,241,0.6)] top-[-1.2px] tracking-[0.55px] uppercase">Account Security</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9.75">
            <path d={svgPaths.p3c7bdc00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.25">
            <path d={svgPaths.p3127a800} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,213,190,0.1)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[15px] text-white whitespace-pre-wrap">Change Password</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(203,251,241,0.5)] top-[-1px] w-[121px] whitespace-pre-wrap">Update your account password</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[86.375px] items-center left-[0.8px] px-[16px] top-[0.8px] w-[291px]" data-name="SettingItem">
      <Container9 />
      <Container11 />
      <Icon2 />
    </div>
  );
}

function Container14() {
  return <div className="absolute border-[rgba(0,213,190,0.1)] border-solid border-t-[0.8px] h-[0.8px] left-[16.8px] top-[87.18px] w-[259px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%_-16.67%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5002 5.99826">
            <path d={svgPaths.p20be3c00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 13.5">
            <path d={svgPaths.pdc4ad80} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(0,213,190,0.1)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[15px] text-white whitespace-pre-wrap">Update Email / Phone</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(203,251,241,0.5)] top-[-1px] w-[123px] whitespace-pre-wrap">Manage your contact information</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[86.375px] items-center left-[0.8px] px-[16px] top-[87.97px] w-[291px]" data-name="SettingItem">
      <Container15 />
      <Container17 />
      <Icon4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#0c1825] h-[175.15px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <SettingItem />
        <Container14 />
        <SettingItem1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[201.65px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[4px] not-italic text-[11px] text-[rgba(203,251,241,0.6)] top-[-1.2px] tracking-[0.55px] uppercase">Preferences</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.09825 2.25006">
            <path d={svgPaths.p39ea380} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 12.75">
            <path d={svgPaths.p32261800} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(0,213,190,0.1)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[15px] text-white whitespace-pre-wrap">Notification Preferences</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(203,251,241,0.5)] top-[-1px] w-[156px] whitespace-pre-wrap">Control how and when you receive notifications</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem2() {
  return (
    <div className="h-[86.375px] relative shrink-0 w-full" data-name="SettingItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[16px] relative size-full">
          <Container21 />
          <Container23 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#0c1825] h-[87.975px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
          <SettingItem2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[114.475px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[4px] not-italic text-[11px] text-[rgba(203,251,241,0.6)] top-[-1.2px] tracking-[0.55px] uppercase">{`Privacy & Legal`}</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5025">
            <path d={svgPaths.p15617df0} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(0,213,190,0.1)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[15px] text-white whitespace-pre-wrap">{`Privacy & Security`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(203,251,241,0.5)] top-[-1px] w-[145px] whitespace-pre-wrap">Manage privacy and data permissions</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem3() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[86.375px] items-center left-[0.8px] px-[16px] top-[0.8px] w-[291px]" data-name="SettingItem">
      <Container27 />
      <Container29 />
      <Icon8 />
    </div>
  );
}

function Container32() {
  return <div className="absolute border-[rgba(0,213,190,0.1)] border-solid border-t-[0.8px] h-[0.8px] left-[16.8px] top-[87.17px] w-[259px]" data-name="Container" />;
}

function Icon9() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
            <path d={svgPaths.p3fd2d700} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p28bf0de0} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.5">
            <path d="M2.25 0.75H0.75" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
            <path d="M6.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
            <path d="M6.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(0,213,190,0.1)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[15px] text-white whitespace-pre-wrap">{`Terms & Policies`}</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(203,251,241,0.5)] top-[-1px] w-[176px] whitespace-pre-wrap">View terms, privacy policy, and agreements</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem4() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[86.375px] items-center left-[0.8px] px-[16px] top-[87.97px] w-[291px]" data-name="SettingItem">
      <Container33 />
      <Container35 />
      <Icon10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#0c1825] h-[175.15px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <SettingItem3 />
        <Container32 />
        <SettingItem4 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[201.65px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading4 />
      <Container26 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6">
            <path d="M0.75 0.75V5.25" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6">
            <path d="M0.75 0.75V5.25" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.5">
            <path d={svgPaths.p3c6e6600} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path d="M0.75 0.75H14.25" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 4.5">
            <path d={svgPaths.p14f55180} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(220,38,38,0.15)] relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20.625px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20.625px] min-h-px min-w-px not-italic relative text-[#ef4444] text-[15px] whitespace-pre-wrap">Delete Account</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[35.75px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[17.875px] left-0 not-italic text-[13px] text-[rgba(239,68,68,0.6)] top-[-1px] w-[148px] whitespace-pre-wrap">Permanently remove your account and data</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[58.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6.75 13.5L11.25 9L6.75 4.5" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SettingItem5() {
  return (
    <div className="h-[86.375px] relative shrink-0 w-full" data-name="SettingItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[16px] relative size-full">
          <Container38 />
          <Container40 />
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[rgba(220,38,38,0.08)] h-[87.975px] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
          <SettingItem5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(220,38,38,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[482.476px] items-start left-[21px] pt-[20px] px-[20px] top-[186.83px] w-[332.6px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Container7 />
    </div>
  );
}