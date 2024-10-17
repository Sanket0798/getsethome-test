import {
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  MaxSVG,
  PinterestSVG,
  YoutubeSVG,
  AccommodationSVG,
  ApplianceSVG,
  ConvenienceSVG,
  HouseKeepingSVG,
  SafetySVG,
  ServiceRequestSVG,
} from "@/public/assets/HomePage/Svg";

export const NavItems = [
  { name: "About", href: "#about" },
  { name: "Category", href: "#category" },
  { name: "Services", href: "#services" },
  { name: "Colours", href: "#colours" },
  { name: "Downloads", href: "#downloads" },
  { name: "Become a Dealer", href: "#dealer" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export const HeroItems = [
  {
    id: 1,
    image: "/assets/HomePage/HeroSection/Img1.png",
    title: "Student Homes",
    desc: "Are you a Student looking for accommodation near you college?",
    number: "01",
  },
  {
    id: 2,
    image: "/assets/HomePage/HeroSection/Img2.png",
    title: "Shared Homes",
    desc: "Rent a Shared Room or a Private Room in a Fully Furnished Home",
    number: "02",
  },
  {
    id: 3,
    image: "/assets/HomePage/HeroSection/Img3.png",
    title: "Entire House on rent",
    desc: "No Restrictions, No Brokerage, No Stress, Just Bachelor friendly full homes",
    number: "03",
  },
  {
    id: 4,
    image: "/assets/HomePage/HeroSection/Img4.png",
    title: "CO-living Spaces",
    desc: "Stay in Co-Living Spaces where you’ll love to live",
    number: "04",
  },
];

export const HeroTitle = [
  {
    id: 1,
    title: "Student Accommodation, Near your College Location",
  },
  {
    id: 2,
    title: "Stay in a Shared Space, Near your Workplace",
  },
  {
    id: 3,
    title: "Renting Home, made simple",
  },
  {
    id: 4,
    title: "Co-Living place, that gives you your space",
  },
];

export const HeroBanner = [
  {
    id: 1,
    img: "/assets/HomePage/HeroSection/Img5.png",
  },
  {
    id: 2,
    img: "/assets/HomePage/HeroSection/Img6.png",
  },
  {
    id: 3,
    img: "/assets/HomePage/HeroSection/Img7.png",
  },
  {
    id: 4,
    img: "/assets/HomePage/HeroSection/Img8.png",
  },
];

export const aboutContent = [
  {
    title: "No Brokerage Homes",
    desc: "Renting a new home can be financially draining with hefty deposits, furnishings, and brokerage fees. That's why we offer a budget-friendly solution with No brokerage homes, a fully furnished accommodation and a minimal deposit of two months' rent.",
  },
  {
    title: "All-Inclusive Rent",
    desc: "GetSetHome rent packages are inclusive of complementary bills like WiFi, DTH, Gas and housekeeping services*. We make it easier for you to plan & budget your living expenses and remove the hassles of managing separate payments or worrying about additional costs.",
  },
  {
    title: "Best Budget Accommodations",
    desc: "GetSetHome homes are fully furnished with a living area, functional kitchen & modern appliances. You can simply move in with your luggage and choose to rent an entire house, a private room or shared rooms like Twin or Triple Sharing. We cater to a wide range of budgets, ensuring there's something suitable for everyone.",
  },
];

export const footerLink1 = [
  "About Us",
  "Contact Us",
  "Mobile",
  "Home Owner",
  "Home Seekers",
  "Student Stay",
  "Help",
];

export const footerLink2 = [
  "Careers",
  "Press",
  "Blog",
  "Offers",
  "Tenancy Policy",
  "Privacy Policy",
  "T&C's",
  "Site Map",
];

export const socialMediaIcons = [
  { svg: <YoutubeSVG /> },
  { svg: <FacebookSVG /> },
  { svg: <LinkedInSVG /> },
  { svg: <InstagramSVG /> },
  { svg: <PinterestSVG /> },
  { svg: <MaxSVG /> },
];

export const tabs = [
  { name: "MUMBAI" },
  { name: "PUNE" },
  { name: "CHENNAI" },
  { name: "INDORE" },
  { name: "NAVI MUMBAI" },
];

export const content = {
  MUMBAI: (
    <>
      <div className="flex justify-between mt-[10px] md:px-[20px] lg:px-0">
        <div className="w-[110px] md:w-auto">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat on rent in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Santacruz East
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Santacruz East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vakola
            </li>
          </ul>
        </div>
        <div className="w-[140px] md:w-auto">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Santacruz East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vakola
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  PUNE: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat on rent in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Koregaon Park
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Koregaon Park
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Yerwada
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Model Colony
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Senapati Bapat Road
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Shivaji Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Koregaon Park
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Yerwada
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Model Colony
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Senapati Bapat Road
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  CHENNAI: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat For rent in Chennai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Ponneri
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Chennai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Chennai
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Ponneri
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Ponneri
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  INDORE: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat For rent in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Sukhlia
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Sukhlia
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Sukhlia
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  "NAVI MUMBAI": (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px] w-[110px] md:w-auto">
            Flat For rent in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Airoli
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Airoli
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Airoli
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
};

export const locations = [
  {
    title: "ANDHERI WEST",
    rooms: "124 Shared Rooms",
    image: "/assets/HomePage/Locality/Andheri.jpg",
  },
  {
    title: "SANTACRUZ EAST",
    rooms: "68 Shared Rooms",
    image: "/assets/HomePage/Locality/Santacruz.jpg",
  },
  {
    title: "BKC",
    rooms: "13 Shared Rooms",
    image: "/assets/HomePage/Locality/BKC.jpg",
  },
  {
    title: "JUHU",
    rooms: "13 Shared Rooms",
    image: "/assets/HomePage/Locality/Juhu.jpg",
  },
];

export const servicesContent = [
  {
    logo: <ApplianceSVG />,
    title: "Modern Appliances",
    desc: "Our homes are equipped with refrigerator, washing machine & other modern appliances so your daily chores don't seem daunting and you can do them at your preferred time.",
  },
  {
    logo: <HouseKeepingSVG />,
    title: "House Keeping",
    desc: "We know a bachelor life can get pretty hectic and sometimes messy too? Our staff ensures daily house cleaning, so you can be welcomed by a clean space after a tiring day.",
  },
  {
    logo: <SafetySVG />,
    title: "Safety First",
    desc: "Our homes are located in gated societies across the city, so you will always find one closer to your office. Unlike PG/hostels, gated societies are much safer so you can live stress-free.",
  },
  {
    logo: <ServiceRequestSVG />,
    title: "Service Requests",
    desc: "We fix everything at home (except broken hearts ;), so you can laze around in your PJs. Just raise a service request from the app and leave it to our maintenance team to fix them.",
  },
  {
    logo: <ConvenienceSVG />,
    title: "Convenience",
    desc: "From online payments to doorstep agreement, we love to spoil you by adding convenience at every stage. We may technically be your landlords but not a pesty one for sure.",
  },
  {
    logo: <AccommodationSVG />,
    title: "Affordable Accommodation",
    desc: "Moving into a new city or a new home can be daunting and financially exhausting. We therefore make it easy on the pocket with Zero brokerage & just 2 months deposit.",
  },
];

export const storiesComment = [
  {
    comment:
      "I stayed there for almost two months. I had a smooth transition in and out with comfortable stay good people to share the house or room which reflects that Getsethome takes a good background check a lot of homes. Felt homely",
    owner: "John Doe",
    designation: "Software Engineer",
  },
  {
    comment:
      "GetSetHome was like a saviour during my internship in Pune. It was extremely difficult to find decent place that would allow for a 2 months stay, but GetSetHome did allow. I dearly missed the services when I moved to Bangalore with other service provider.",
    owner: "Jane Smith",
    designation: "UI/UX Designer",
  },
  {
    comment:
      "The property was 'Home' for us, learned a lot in life after living with so many people over the two years. But sadly had to move out as the next step in growing up and become an individual, settling with my parents and family. You guys are doing a good job!",
    owner: "Michael Johnson",
    designation: "Project Manager",
  },
  {
    comment:
      "One of the best places to stay as a bachelor with GSH properties. Pack your bags, shift and stay tension free. GSH, No other PG accommodations provide such amenities and services, everything is being taken care of.",
    owner: "Emily Davis",
    designation: "Senior Developer",
  },
  {
    comment: "Great job on the presentation! The client is very happy.",
    owner: "Anna Williams",
    designation: "Client Relations Manager",
  },
  {
    comment:
      "The testing phase is almost done. Just a few more cases to cover.",
    owner: "David Brown",
    designation: "QA Engineer",
  },
  {
    comment: "We need to integrate the API before the end of the sprint.",
    owner: "Sophia Taylor",
    designation: "Backend Developer",
  },
  {
    comment:
      "The color palette is a bit off. I'll update it for a more modern look.",
    owner: "Olivia Wilson",
    designation: "Graphic Designer",
  },
  {
    comment:
      "The security review found a potential vulnerability in the authentication flow.",
    owner: "Liam Martinez",
    designation: "Security Analyst",
  },
  {
    comment: "I’ll organize the code review session tomorrow afternoon.",
    owner: "Isabella Anderson",
    designation: "Lead Developer",
  },
  {
    comment:
      "Can we optimize the database queries? Some pages are loading slowly.",
    owner: "Noah Thomas",
    designation: "Database Administrator",
  },
  {
    comment: "The documentation needs to be more detailed for new developers.",
    owner: "Lucas White",
    designation: "Technical Writer",
  },
  {
    comment:
      "I’ll be updating the dashboard with real-time data by the end of the day.",
    owner: "Mia Jackson",
    designation: "Frontend Developer",
  },
  {
    comment: "We received positive feedback from the client after the demo.",
    owner: "James Harris",
    designation: "Business Analyst",
  },
  {
    comment:
      "Please coordinate with the marketing team for the product launch timeline.",
    owner: "Charlotte Clark",
    designation: "Product Manager",
  },
];

export const workingContent = [
  {
    number: "01.",
    title: "Rent a House close to your office/college",
    desc: "We have accommodations spread across the city, especially close to railway or metro stations OR close proximity to popular offices and college, so you are always close to a GetSetHome. So explore and select a home that suits you.",
  },
  {
    number: "02.",
    title: "Free Assisted Visit",
    desc: "Once you shortlist you can visit a property before booking your stay. We provide guided visits to our properties to ensure it ticks all boxes of your Wishlist so you can book with full trust and confidence.",
  },
  {
    number: "03.",
    title: "Get, Set, Move-in",
    desc: "Book your preferred No brokerage home by paying just the token amount. The team will help you with the rest of KYC and balance payable so you can enjoy a seamless move-in to a GetSetHome property.",
  },
];
