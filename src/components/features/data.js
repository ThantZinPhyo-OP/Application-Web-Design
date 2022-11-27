import { AiOutlineQrcode,AiOutlineDollarCircle,AiOutlinePayCircle } from "react-icons/ai";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineSliders } from "react-icons/ai";

export const featureList = [
  {
    id: 1,
    icon: <AiOutlineQrcode color="--light-blue" size={22} />,
    heading: "READ SCAN & PAY",
    text: "Just Scan the QR Code and Safely Transfer it to Your loved ones. Convert Your fFavorite Money to Kyats and Perform Payment Tasks.",
  },
  {
    id: 2,
    icon: <AiOutlineDownCircle color="--light-blue" size={22} />,
    heading: "REVERSE WITH MYPAY",
    text: "The people's revolution, and MyPay will exist as a bridge to show the solidarity, courage and resilience of the People of Myanmar.",
  },
  {
    id: 3,
    icon: <AiOutlineSliders color="--light-blue" size={22} />,
    heading: "SECURITY PROCEDURES",
    text: "Your financial information and personal information used in MyPay are protected by our technical and ethical security procedures",
  },
  {
    id: 4,
    icon: <AiOutlineDollarCircle color="--light-blue" size={22} />,
    heading: "FIRST DIGITAL CURRENCY",
    text: "Myanmar's first digital currency using Blockchain technology, so it is an independent payment system with absolutely no other influence",
  },
  {
    id: 45,
    icon: <AiOutlinePayCircle color="--light-blue" size={22} />,
    heading: "mobile wallet application",
    text: " It is a mobile wallet application that you can use anytime, anywhere with just one click. Simply download and register to begin using MyPay.",
  },
];