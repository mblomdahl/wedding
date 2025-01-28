import { ParticipantDetails } from "../types/participant";

const basePath = '/wedding';

export const getParticipantDetails = (participantId: string): ParticipantDetails => {
  console.log("Getting details for participant:", participantId);
  
  // Array of landscape placeholder images for other participants
  const placeholderImages = [
    `${basePath}/lovable-uploads/placeholder1.png`,
    `${basePath}/lovable-uploads/placeholder2.png`,
    `${basePath}/lovable-uploads/placeholder3.png`,
    `${basePath}/lovable-uploads/placeholder4.png`,
    `${basePath}/lovable-uploads/placeholder5.png`
  ];

  // Get a random image from the array
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  
  if (participantId === "ira") {
    return {
      title: "Mother of the Bride",
      role: "Mother of the Bride",
      description: "Ira is the mother of Liza and live in Irkutsk. She likes to do business and travel around Asia.",
      welcomeMessage: "Ira, we are so happy that you go through all the visa hassle to attend our ceremony. We hope you will get a better idea about how we relate to each other as a couple and why we make Sweden our home for the future.",
      travelPlans: "You are believed to arrive early in the week before the ceremony around June 10th. We will arrange for transportation from Stockholm to Siljansnäs in conjunction with our own travel schedule. Please think about how long you will stay and let us know about duration of your stay and intended activities after the ceremony.",
      accommodation: "During the ceremony event weekend, you will stay in cottage 109 at Siljansnäs Stugby, see map under \"Maps\" page.",
      packingList: "Todo @Mats, fill out!",
      image: randomImage,
      contact: null
    };
  } else if (participantId === "nastya") {
    return {
      title: "Liza's sister Nastya and her family",
      role: "Sister of the Bride & Her Beautiful Family",
      description: "Welcome, Nastya and Family!\n\nWe are so thrilled to welcome my dear sister Nastya, her husband Kostya, and their wonderful children Vika and Sema to our wedding!\n\nNastya and I share the same father but have different mothers, and though we didn't grow up in the same household, her presence in my adult life has been truly transformative. Nastya has inspired me in countless ways, particularly through the beautiful family she and Kostya have built together since their youth. Their love and commitment, raising their teenage daughter Vika and their lively 9-year-old son Sema, are a testament to the strength of their bond.\n\nNot only has Nastya had a profound impact on my personal life, but she's also been a positive influence on so many others. As a professional nutritionist with years of experience, she's dedicated to promoting a healthy and balanced lifestyle. Because of her guidance and expertise, I feel confident that my own family will enjoy nutritious and wholesome food, grow stronger, and live happier lives. For that, Nastya, we are endlessly grateful.",
      welcomeMessage: "Nastya, Kostya, X, and Y; thank you for crossing the Baltic Sea for us! We look forward to see you and show you around one of our favorite places in Sweden. Hopefully, this will be the first of many visits in the future.",
      travelPlans: "We believe you will arrive by ship to Stockholm, rent a car, and drive to arrive in Siljansnäs by the reception at 17:00 on Friday June 13th. Please think about how long you will stay around and let us know about intended schedule after the ceremony weekend.",
      accommodation: "During the ceremony event weekend, your family will stay in cottage 108 at Siljansnäs Stugby, see map under \"Maps\" page.",
      packingList: "Todo @Mats, fill out!",
      images: [
        `${basePath}/lovable-uploads/d43340f3-e06c-4c82-b56a-26d9efe47658.png`,
        `${basePath}/lovable-uploads/99dfa8d4-a4b4-4bf9-b893-1141b73139ba.png`
      ],
      image: `${basePath}/lovable-uploads/99dfa8d4-a4b4-4bf9-b893-1141b73139ba.png`,
      contact: "+46 123 456 789"
    };
  }
  return {
    title: "Wedding Participant",
    role: "Wedding Participant",
    description: "Details coming soon!",
    image: randomImage,
    contact: null
  };
};