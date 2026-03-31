import svgPaths from "./svg-484jifgyjn";
import imgCtaSection from "figma:asset/e7306642960f37609c79d98cd809a8a600c44fdd.png";
import imgThumbnail from "figma:asset/10f4df41b8ba2d14f309abd856030f8e793aff6e.png";
import imgThumbnail1 from "figma:asset/af9ca00621c5bf5169d34bcc6d378215d25941c7.png";
import imgThumbnail2 from "figma:asset/31c5e81763ba8ff3bdf242557de76b059ef7dce9.png";
import imgThumbnail3 from "figma:asset/31f1e6f1d4b136f7218397417961c1e81c2bc139.png";
import imgThumbnail4 from "figma:asset/57b1a25a3dcd1a37d44b573da8be7a5a098c3180.png";
import imgThumbnail5 from "figma:asset/faa0350a29e9f409240d8b444f2bb55ee42e4d18.png";
import imgThumbnail6 from "figma:asset/38bf1fb4c44d2205b889612ad836ae2d94780a53.png";

function GradientBottomLeft() {
  return (
    <div className="absolute h-[476.775px] left-[-92px] top-[112px] w-[458.644px]" data-name="GRADIENT BOTTOM LEFT">
      <div className="absolute inset-[-53.2%_-46.2%_-51.24%_-52.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 909.421 974.724">
          <g id="GRADIENT BOTTOM LEFT">
            <g filter="url(#filter0_f_3_557)" id="Vector">
              <path d={svgPaths.p280ee100} fill="#92F231" />
              <path d={svgPaths.p259ebd00} fill="var(--fill-0, #00B67A)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="974.724" id="filter0_f_3_557" width="909.421" x="3.8147e-06" y="3.8147e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_3_557" stdDeviation="150" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0" data-name="Brand">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#003f2e] text-[24px] uppercase whitespace-nowrap">Eco Landscaping</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#2d746d] text-[16px] w-[min-content]">{`Best Landscape Design & Maintenance services in the Columbus OH`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p25716d80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.pf708700} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p15267e00} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3d8c61b2} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p279a580} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p2a532d00} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p21f93100} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3a783900} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Social Media">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon />
      </div>
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon1 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon2 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon3 />
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[198px] items-start relative shrink-0" data-name="Column">
      <Brand />
      <SocialMedia />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[20px] items-start relative shrink-0 text-[#2d746d]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 w-[min-content]">
        Desa Bangsal Rt 11 Rw 02 Bangsal Mojokerto
        <br aria-hidden="true" />
        {`Jawa timur Indonesia `}
      </p>
      <div className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">
          <span className="leading-[24px]">Phone:</span>
          <span className="leading-[24px]">{` +1 800 123 45 67 `}</span>
        </p>
        <p>
          <span className="leading-[24px]">Email:</span>
          <span className="leading-[24px]">{` email@example.com`}</span>
        </p>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Address">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#003f2e] whitespace-nowrap">ADDRESS</p>
      <Text />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[24px] relative shrink-0 text-[#2d746d]" data-name="Link">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Services</p>
      <p className="relative shrink-0">Portfolio</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 whitespace-nowrap" data-name="Navigation">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#003f2e]">NAVIGATION</p>
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[24px] relative shrink-0 text-[#2d746d]" data-name="Link">
      <p className="relative shrink-0">Garden design installation</p>
      <p className="relative shrink-0">Lawn maintenance</p>
      <p className="relative shrink-0">Hardscape construction</p>
      <p className="relative shrink-0">Irrigation systems</p>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 whitespace-nowrap" data-name="Services">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#003f2e]">OUR SERVICES</p>
      <Link1 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[86px] items-start not-italic relative shrink-0 text-[16px]" data-name="Column">
      <Address />
      <Navigation />
      <Services />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex gap-[193px] items-center justify-center left-[150px] top-[60px]" data-name="Top">
      <Column />
      <Column1 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#2d746d] text-[16px] whitespace-nowrap">{`© 2023 Eco landscaping services All rights reserved. `}</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[30px] items-start leading-[24px] not-italic relative shrink-0 text-[#2d746d] text-[16px] whitespace-nowrap" data-name="Column">
      <p className="relative shrink-0">Privacy policy</p>
      <p className="relative shrink-0">Terms and Conditions</p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[150px] top-[359px] w-[1144px]" data-name="Bottom">
      <Column2 />
      <Column3 />
    </div>
  );
}

function GradientTopRight() {
  return (
    <div className="h-[343.146px] relative w-[251.655px]" data-name="GRADIENT TOP RIGHT">
      <div className="absolute inset-[-87.43%_-119.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 851.655 943.146">
          <g id="GRADIENT TOP RIGHT">
            <g filter="url(#filter0_f_3_551)" id="Vector">
              <path d={svgPaths.p19121ac0} fill="#92F231" />
              <path d={svgPaths.p22733680} fill="var(--fill-0, #00B67A)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="943.146" id="filter0_f_3_551" width="851.655" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_3_551" stdDeviation="150" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GradientTopLeft() {
  return (
    <div className="absolute h-[423.351px] left-[-86.06px] top-[298.11px] w-[256.252px]" data-name="GRADIENT TOP LEFT">
      <div className="absolute inset-[-70.86%_-117.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856.252 1023.35">
          <g id="GRADIENT TOP LEFT">
            <g filter="url(#filter0_f_3_522)" id="Vector">
              <path d={svgPaths.p8191480} fill="#92F231" />
              <path d={svgPaths.p8ba2700} fill="var(--fill-0, #00B67A)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1023.35" id="filter0_f_3_522" width="856.252" x="5.54511e-07" y="3.65594e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_3_522" stdDeviation="150" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#bcff83] content-stretch flex items-center justify-center px-[30px] py-[16px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Make an Appointment</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[78px] not-italic relative shrink-0 text-[64px] text-white whitespace-nowrap">{`We're ready to start.`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Transform your home to zen garden</p>
      <Button />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] px-[10px] py-[100px] rounded-[20px] top-[5256px] w-[1137px]" data-name="CTA SECTION">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgCtaSection} />
        <div className="absolute bg-[rgba(0,63,46,0.6)] inset-0 rounded-[20px]" />
      </div>
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] items-center not-italic relative shrink-0 w-full" data-name="Heading">
      <p className="leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">Frequently Asked Questions</p>
      <p className="leading-[48px] relative shrink-0 text-[#003f2e] text-[36px] text-center w-[750px]">{`You've got questions. we've got answers.`}</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p25716d80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1f0931e0} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Headiing() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[10px] shrink-0 w-full" data-name="Headiing">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#003f2e] text-[24px] whitespace-nowrap">How often do you come per month?</p>
      <Icon4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[72px] leading-[24px] not-italic relative shrink-0 text-[#003f2e] text-[16px] w-[690px]">{`We aim to come weekly for lawn and yard maintenance, especially in peak growth season. Every yard is unique, which is why we're regularly checking up and keeping notes on your yard so we can best serve you year-round. `}</p>
    </div>
  );
}

function Accordion1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[30px] relative rounded-[10px] shrink-0 w-[750px]" data-name="Accordion">
      <Headiing />
      <Text1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p25716d80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1a9f9100} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[10px] shrink-0 w-full" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#003f2e] text-[24px] whitespace-nowrap">What is your cancellation policy?</p>
      <Icon5 />
    </div>
  );
}

function Accordion2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[10px] shrink-0 w-[750px]" data-name="Accordion">
      <Heading2 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p25716d80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1a9f9100} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[10px] shrink-0 w-full" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[23px] whitespace-nowrap">Title</p>
      <Plus />
    </div>
  );
}

function Accordion3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[10px] shrink-0 w-[750px]" data-name="Accordion">
      <Heading3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p25716d80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1a9f9100} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[10px] shrink-0 w-full" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[23px] whitespace-nowrap">Title</p>
      <Icon6 />
    </div>
  );
}

function Accordion4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative rounded-[10px] shrink-0 w-[750px]" data-name="Accordion">
      <Heading4 />
    </div>
  );
}

function Accordion() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Accordion">
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4 />
    </div>
  );
}

function FaqsSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(50%-7px)] top-[4417px]" data-name="FAQS SECTION">
      <Heading1 />
      <Accordion />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 w-[754px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">portfolio</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#003f2e] text-[36px] text-center w-[754px]">Recent project highlights</p>
      <div className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[56px] leading-[28px] relative shrink-0 text-[#003f2e] text-[20px] text-center w-[754px] whitespace-pre-wrap">
        <p className="mb-0">{`Our commitment to excellence ensures that your landscape  `}</p>
        <p>is not only stunning but also affordable.</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Thumbnail">
      <div className="col-1 h-[450px] ml-0 mt-0 relative rounded-bl-[200px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[200px] row-1 w-[487px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[200px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[200px] size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 text-[#003f2e] w-full" data-name="Heading">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center whitespace-nowrap">Maintenance</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[24px] w-[min-content]">{`Backyard transformation with a pool,fire pit, landscaping & more`}</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d="M24 8V21L11 8H24Z" fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p252e1200} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bcff83] relative rounded-[100px] shrink-0 size-[64px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="ICON">
        <Icon7 />
      </div>
    </div>
  );
}

function Columns1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[30px] items-start ml-[63px] mt-[236px] p-[20px] relative rounded-bl-[30px] rounded-br-[100px] rounded-tl-[30px] rounded-tr-[30px] row-1 w-[360px]" data-name="Columns">
      <Heading6 />
      <Button1 />
    </div>
  );
}

function Columns() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Columns">
      <Thumbnail />
      <Columns1 />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Thumbnail">
      <div className="col-1 h-[450px] ml-0 mt-0 relative rounded-bl-[30px] rounded-br-[200px] rounded-tl-[200px] rounded-tr-[30px] row-1 w-[487px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[30px] rounded-br-[200px] rounded-tl-[200px] rounded-tr-[30px] size-full" src={imgThumbnail1} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 text-[#003f2e] w-full" data-name="Heading">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center whitespace-nowrap">Maintenance</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[24px] w-[min-content]">{`Backyard transformation with a pool,fire pit, landscaping & more`}</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d="M24 8V21L11 8H24Z" fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p252e1200} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#bcff83] relative rounded-[100px] shrink-0 size-[64px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="ICON">
        <Icon8 />
      </div>
    </div>
  );
}

function Columns3() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[30px] items-start ml-[63px] mt-[237px] p-[20px] relative rounded-bl-[30px] rounded-br-[100px] rounded-tl-[30px] rounded-tr-[30px] row-1 w-[360px]" data-name="Columns">
      <Heading7 />
      <Button2 />
    </div>
  );
}

function Columns2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Columns">
      <Thumbnail1 />
      <Columns3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Container">
      <Columns />
      <Columns2 />
    </div>
  );
}

function PortfolioSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[79px] items-center left-[150px] top-[3528px] w-[1140px]" data-name="PORTFOLIO SECTION">
      <Heading5 />
      <Container />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 w-[754px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">how it works</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#003f2e] text-[36px] text-center w-[754px]">Yard and lawn care made simple.</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[56px] leading-[28px] relative shrink-0 text-[#003f2e] text-[20px] text-center w-[754px]">
        <p className="mb-0">Our experts will make a personalized plan for your yard</p>
        <p>so you can relax and enjoy your outdoor space hassle-free.</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p15b2a300} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1b0bc600} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[64px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="ICON">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10px] items-center not-italic relative rounded-[10px] shrink-0 whitespace-nowrap" data-name="Heading">
      <p className="leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase">Step 1</p>
      <p className="leading-[32px] relative shrink-0 text-[#003f2e] text-[24px]">Consultation</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px] text-center">{`Schedule a thorough consultation with our landscaping experts to discuss your specific needs, preferences, and budget. `}</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <Heading9 />
      <Text3 />
    </div>
  );
}

function Columns4() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-full items-center relative shrink-0 w-[357px]" data-name="Columns">
      <Icon9 />
      <Text2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.pb032370} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3776f780} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[64px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="ICON">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10px] items-center not-italic relative rounded-[10px] shrink-0 whitespace-nowrap" data-name="Heading">
      <p className="leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase">Step 2</p>
      <p className="leading-[32px] relative shrink-0 text-[#003f2e] text-[24px]">Proposal</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px] text-center">{`We will create a detailed design proposal outlining the recommended landscaping services, materials, and estimated costs. `}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <Heading10 />
      <Text5 />
    </div>
  );
}

function Columns5() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-full items-center relative shrink-0 w-[357px]" data-name="Columns">
      <Icon11 />
      <Text4 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p106c2880} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.pd415400} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[64px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="ICON">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10px] items-center not-italic relative rounded-[10px] shrink-0 whitespace-nowrap" data-name="Heading">
      <p className="leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase">Step 3</p>
      <p className="leading-[32px] relative shrink-0 text-[#003f2e] text-[24px]">Implementation</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px] text-center">{`From site preparation to planting and finishing touches, we'll execute the plan with precision and professionalism`}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Text">
      <Heading11 />
      <Text7 />
    </div>
  );
}

function Columns6() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-full items-center relative shrink-0 w-[357px]" data-name="Columns">
      <Icon13 />
      <Text6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[32px] h-[233px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Columns4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Columns5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Columns6 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#bcff83] content-stretch flex items-center justify-center px-[30px] py-[16px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Make an Appointment</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Button3 />
    </div>
  );
}

function HowItWorkSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[152.82px] top-[2847px]" data-name="HOW IT WORK SECTION">
      <Heading8 />
      <Container1 />
    </div>
  );
}

function Image() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image">
      <div className="col-1 h-[540px] ml-0 mt-0 relative rounded-bl-[200px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[200px] row-1 w-[458px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[200px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[200px] size-full" src={imgThumbnail2} />
      </div>
    </div>
  );
}

function Columns7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Columns">
      <Image />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">why choose us</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#003f2e] text-[36px] w-[555px]">Take the hassle out of garden maintenance</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[120px] leading-[24px] relative shrink-0 text-[#003f2e] text-[16px] w-[555px]">{`We assist homeowners in saving time and effort by designing and upkeeping landscapes, lawns, and outdoor living areas that garner admiration. Our team comprises skilled maintenance professionals certified well-versed in effective landscape upkeep services to ensure the year-round health of your property. `}</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <Heading12 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p10d8e300} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3321aa40} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">{`ICPI & NCMA certified installer`}</p>
    </div>
  );
}

function IconBox() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[8px] relative shrink-0" data-name="Icon box">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon15 />
      </div>
      <Frame />
    </div>
  );
}

function Icon16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p17968380} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p119db600} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Sustainable landscape designs</p>
    </div>
  );
}

function IconBox1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[8px] relative shrink-0" data-name="Icon box">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon16 />
      </div>
      <Frame1 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p3722e900} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p7638a00} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Award-Winning landscape services</p>
    </div>
  );
}

function IconBox2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[8px] relative shrink-0" data-name="Icon box">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ICON">
        <Icon17 />
      </div>
      <Frame2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="List">
      <IconBox />
      <IconBox1 />
      <IconBox2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#bcff83] content-stretch flex items-center justify-center px-[30px] py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Learn more about us</p>
    </div>
  );
}

function Columns8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[555px]" data-name="Columns">
      <Text8 />
      <List />
      <Button4 />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="absolute content-stretch flex gap-[126px] items-center left-[150px] top-[2157px]" data-name="ABOUT SECTION">
      <Columns7 />
      <Columns8 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 w-[752px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d746d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">What we do</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#003f2e] text-[36px] text-center w-[752px]">Get more value from our landscaper</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[56px] leading-[28px] relative shrink-0 text-[#003f2e] text-[20px] text-center w-[752px]">Our technicians use state-of-the-art equipment and eco-friendly products to keep your lawn healthy and creating stunning and functional landscapes.</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute h-[22px] left-[3px] top-[5px] w-[26px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
        <g id="icon">
          <path d={svgPaths.p1597fb80} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.pe990870} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-center left-[18px] top-0 w-[160px]" data-name="Heading">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[20px]">Installation</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20px] top-[80px] w-[223px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px]">Unleash the beauty of nature with our creative garden design installation solutions.</p>
    </div>
  );
}

function Columns9() {
  return (
    <div className="absolute h-[390px] left-0 top-0 w-[264px]" data-name="Columns">
      <div className="absolute flex h-[390px] items-center justify-center left-0 top-0 w-[264px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[390px] relative w-[264px]" data-name="Background">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 390">
              <path d={svgPaths.p2abd0000} fill="var(--fill-0, white)" id="Background" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[190px] left-[20px] rounded-[8px] top-[180px] w-[223px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgThumbnail3} />
      </div>
      <div className="absolute inset-[2.56%_5.3%_89.23%_82.58%] overflow-clip" data-name="ICON">
        <Icon18 />
      </div>
      <Heading14 />
      <Text9 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p22f70480} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p2b82f400} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-center left-[18px] top-[2px] w-[160px]" data-name="Heading">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[20px]">Maintenance</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20px] top-[80px] w-[223px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px]">Keep your lawn lush and vibrant with our expert maintenance services.</p>
    </div>
  );
}

function Columns10() {
  return (
    <div className="absolute h-[390px] left-[292px] top-0 w-[264px]" data-name="Columns">
      <div className="absolute flex h-[390px] items-center justify-center left-0 top-0 w-[264px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[390px] relative w-[264px]" data-name="Background">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 390">
              <path d={svgPaths.p2abd0000} fill="var(--fill-0, white)" id="Background" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[190px] left-[20px] rounded-[8px] top-[180px] w-[223px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgThumbnail4} />
      </div>
      <div className="absolute inset-[2.56%_5.3%_89.23%_82.58%] overflow-clip" data-name="ICON">
        <Icon19 />
      </div>
      <Heading15 />
      <Text10 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p3e8f1000} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p1ab25d00} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-center left-[18px] top-0 w-[160px]" data-name="Heading">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[20px]">Hardscape</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20px] top-[80px] w-[223px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px]">Elevate your outdoor living spaces with stunning hardscape installations</p>
    </div>
  );
}

function Columns11() {
  return (
    <div className="absolute h-[390px] left-[584px] top-0 w-[264px]" data-name="Columns">
      <div className="absolute flex h-[390px] items-center justify-center left-0 top-0 w-[264px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[390px] relative w-[264px]" data-name="Background">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 390">
              <path d={svgPaths.p2abd0000} fill="var(--fill-0, white)" id="Background" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[190px] left-[20px] rounded-[8px] top-[180px] w-[223px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgThumbnail1} />
      </div>
      <div className="absolute inset-[2.56%_5.3%_89.23%_82.58%] overflow-clip" data-name="ICON">
        <Icon20 />
      </div>
      <Heading16 />
      <Text11 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon">
          <path d={svgPaths.p3d712c00} fill="var(--fill-0, #2D746D)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3192e900} fill="var(--fill-0, #2D746D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-center left-[18px] top-0 w-[160px]" data-name="Heading">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[20px]">Irrigation</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20px] top-[80px] w-[223px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#003f2e] text-[16px]">Ensure your landscape stays green and healthy with efficient irrigation solutions</p>
    </div>
  );
}

function Columns12() {
  return (
    <div className="absolute h-[390px] left-[876px] top-0 w-[264px]" data-name="Columns">
      <div className="absolute flex h-[390px] items-center justify-center left-0 top-0 w-[264px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[390px] relative w-[264px]" data-name="Background">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 390">
              <path d={svgPaths.p2abd0000} fill="var(--fill-0, white)" id="Background" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[190px] left-[20px] rounded-[8px] top-[180px] w-[223px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgThumbnail5} />
      </div>
      <div className="absolute inset-[2.56%_5.3%_89.23%_82.58%] overflow-clip" data-name="ICON">
        <Icon21 />
      </div>
      <Heading17 />
      <Text12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[390px] relative shrink-0 w-[1140px]" data-name="Container">
      <Columns9 />
      <Columns10 />
      <Columns11 />
      <Columns12 />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[150px] top-[1402px]" data-name="SERVICES SECTION">
      <Heading13 />
      <Container3 />
    </div>
  );
}

function Bagdes() {
  return (
    <div className="h-[69.41px] relative shrink-0 w-[67px]" data-name="bagdes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 69.41">
        <g clipPath="url(#clip0_3_554)" id="bagdes">
          <g id="Vector">
            <path d={svgPaths.pe6be680} fill="#2D746D" />
            <path d={svgPaths.p1a57df00} fill="#2D746D" />
            <path d={svgPaths.p317ee940} fill="#2D746D" />
            <path d={svgPaths.p3cb30900} fill="#2D746D" />
            <path d={svgPaths.p2859f00} fill="#2D746D" />
            <path d={svgPaths.p1ec44f00} fill="#2D746D" />
            <path d={svgPaths.p26980c00} fill="#2D746D" />
            <path d={svgPaths.p2a0b0d00} fill="#2D746D" />
            <path d={svgPaths.p1e69d00} fill="#2D746D" />
            <path d={svgPaths.p1bf7b80} fill="#2D746D" />
            <path d={svgPaths.p2a895080} fill="#2D746D" />
            <path d={svgPaths.p9c32900} fill="#2D746D" />
            <path d={svgPaths.p45c7c00} fill="#2D746D" />
            <path d={svgPaths.p29a9900} fill="#2D746D" />
            <path d={svgPaths.p3b01a00} fill="#2D746D" />
            <path d={svgPaths.p11480bb2} fill="#2D746D" />
            <path d={svgPaths.p6d92000} fill="#2D746D" />
            <path d={svgPaths.pc7d0380} fill="#2D746D" />
            <path d={svgPaths.p1516ec00} fill="#2D746D" />
            <path d={svgPaths.p12c7e880} fill="#2D746D" />
            <path d={svgPaths.p1f788480} fill="#2D746D" />
            <path d={svgPaths.p1f030d00} fill="#2D746D" />
            <path d={svgPaths.p2fc21800} fill="#2D746D" />
            <path d={svgPaths.p3da61200} fill="#2D746D" />
            <path d={svgPaths.p38d86e00} fill="#2D746D" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_554">
            <rect fill="white" height="69.41" width="67" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#bcff83] content-stretch flex items-center justify-center px-[30px] py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] text-center whitespace-nowrap">Make an Appointment</p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:Semi_Bold','Noto_Sans:SemiBold',sans-serif] font-semibold h-[174px] leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[72px] text-center w-[947px] whitespace-pre-wrap">
        <p className="mb-0">{`Best Landscape `}</p>
        <p>{`Design & Maintenance`}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[56px] leading-[28px] not-italic relative shrink-0 text-[#003f2e] text-[20px] text-center w-[947px] whitespace-pre-wrap">
        {`We are proud to be a responsible and sustainable lawn care company, `}
        <br aria-hidden="true" />
        dedicated to preserving the environment and the health of your lawn
      </p>
      <Button5 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[947px]" data-name="Text">
      <Bagdes />
      <Heading18 />
    </div>
  );
}

function Video() {
  return (
    <div className="h-[550px] relative shrink-0 w-[1140px]" data-name="Video">
      <div className="absolute h-[550px] left-0 rounded-[50px] top-0 w-[1140px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgThumbnail6} />
      </div>
      <div className="absolute inset-[47.93%_48.95%_42.93%_47.37%]" data-name="Play">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 50.2727">
          <path d={svgPaths.p8b0b000} fill="var(--fill-0, white)" id="Play" />
        </svg>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(50%+2px)] top-[209px] w-[1140px]" data-name="HERO SECTION">
      <Text13 />
      <Video />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[28px] uppercase whitespace-nowrap">Eco Landscaping</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[40px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#003f2e] text-[16px] whitespace-nowrap" data-name="Navigation">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Service</p>
      <p className="relative shrink-0">Portfolio</p>
      <p className="relative shrink-0">{`Contact `}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-[1139px]" data-name="Container">
      <Logo />
      <Navigation1 />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#f5f6ef] relative size-full" data-name="Homepage">
      <div className="absolute bottom-0 h-[463px] left-[-2px] w-[1444px]" data-name="FOOTER">
        <GradientBottomLeft />
        <Top />
        <Bottom />
      </div>
      <div className="absolute flex h-[413.153px] items-center justify-center left-[calc(83.33%-31px)] top-[-132px] w-[424.679px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-50.11deg]">
          <GradientTopRight />
        </div>
      </div>
      <GradientTopLeft />
      <CtaSection />
      <FaqsSection />
      <PortfolioSection />
      <HowItWorkSection />
      <AboutSection />
      <ServicesSection />
      <HeroSection />
      <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 py-[10px] top-0 w-[1440px]" data-name="HEADER">
        <Container4 />
      </div>
    </div>
  );
}