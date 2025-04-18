const projects = [
  {
    id: "google-woocommerce",
    title: "Google x Woocommerce",
    category: "Live Experiences",
    client: "Google",
    year: 2023,
    thumbnailUrl: "/src/assets/placeholders/google-woocommerce-thumb.jpg",
    featured: true,
    order: 1,
    description: "A collaborative campaign between Google and Woocommerce to showcase e-commerce solutions.",
    content: [
      {
        type: "text",
        content: "This project was a collaborative effort between Google and Woocommerce to showcase innovative e-commerce solutions for small businesses."
      },
      {
        type: "image",
        url: "/src/assets/placeholders/google-woocommerce-1.jpg",
        alt: "Google x Woocommerce collaboration event"
      },
      {
        type: "quadrant",
        images: [
          { url: "/src/assets/placeholders/google-woocommerce-q1.jpg", alt: "Event setup" },
          { url: "/src/assets/placeholders/google-woocommerce-q2.jpg", alt: "Interactive display" },
          { url: "/src/assets/placeholders/google-woocommerce-q3.jpg", alt: "Customer engagement" },
          { url: "/src/assets/placeholders/google-woocommerce-q4.jpg", alt: "Product showcase" }
        ]
      }
    ]
  },
  {
    id: "doordash-neighborhood",
    title: "DoorDash Neighborhood Campaign",
    category: "Social",
    client: "DoorDash",
    year: 2023,
    thumbnailUrl: "/src/assets/placeholders/doordash-neighborhood-thumb.jpg",
    featured: true,
    order: 2,
    description: "A community-focused campaign highlighting local businesses available through DoorDash.",
    content: [
      {
        type: "text",
        content: "The Neighborhood Campaign was designed to highlight local businesses and strengthen community connections through the DoorDash platform."
      },
      {
        type: "mediaText",
        media: {
          type: "video",
          url: "/src/assets/placeholders/doordash-neighborhood-video.mp4",
          thumbnail: "/src/assets/placeholders/doordash-neighborhood-video-thumb.jpg"
        },
        text: "This campaign featured authentic stories from local restaurant owners and the customers who support them."
      }
    ]
  },
  {
    id: "google-play-live-22",
    title: "Google Play Live '22",
    category: "Live Experiences",
    client: "Google",
    year: 2022,
    thumbnailUrl: "/src/assets/placeholders/google-play-22-thumb.jpg",
    featured: true,
    order: 3,
    description: "An immersive live event showcasing Google Play's gaming platform and new releases for 2022.",
    content: [
      {
        type: "text",
        content: "Google Play Live 2022 brought together developers, gamers, and industry professionals to experience the latest in mobile gaming technology."
      },
      {
        type: "image",
        url: "/src/assets/placeholders/google-play-22-main.jpg",
        alt: "Google Play Live 2022 main stage"
      }
    ]
  },
  {
    id: "google-play-live-23",
    title: "Google Play Live '23",
    category: "Live Experiences",
    client: "Google",
    year: 2023,
    thumbnailUrl: "/src/assets/placeholders/google-play-23-thumb.jpg",
    featured: true,
    order: 4,
    description: "The evolution of Google Play's annual live event, featuring enhanced interactive experiences and product reveals.",
    content: [
      {
        type: "text",
        content: "Building on the success of the previous year, Google Play Live 2023 expanded with more interactive experiences and exclusive product reveals."
      },
      {
        type: "quadrant",
        images: [
          { url: "/src/assets/placeholders/google-play-23-q1.jpg", alt: "Event entrance" },
          { url: "/src/assets/placeholders/google-play-23-q2.jpg", alt: "Gaming station" },
          { url: "/src/assets/placeholders/google-play-23-q3.jpg", alt: "Developer presentation" },
          { url: "/src/assets/placeholders/google-play-23-q4.jpg", alt: "Audience engagement" }
        ]
      }
    ]
  },
  {
    id: "doordash-creator",
    title: "Doordash Creator Campaign",
    category: "Social",
    client: "DoorDash",
    year: 2022,
    thumbnailUrl: "/src/assets/placeholders/doordash-creator-thumb.jpg",
    featured: true,
    order: 5,
    description: "A digital campaign leveraging content creators to promote DoorDash services across social platforms.",
    content: [
      {
        type: "text",
        content: "The Creator Campaign partnered with influential content creators to showcase DoorDash services in authentic, engaging ways across multiple social platforms."
      },
      {
        type: "mediaText",
        media: {
          type: "image",
          url: "/src/assets/placeholders/doordash-creator-feature.jpg",
          alt: "Content creator with DoorDash delivery"
        },
        text: "By partnering with creators who align with the brand values, we were able to reach targeted audiences in a more authentic, relatable way."
      }
    ]
  },
  {
    id: "fetch-superbowl",
    title: "Fetch Superbowl Live",
    category: "Live Experiences",
    client: "Fetch",
    year: 2023,
    thumbnailUrl: "/src/assets/placeholders/fetch-superbowl-thumb.jpg",
    featured: true,
    order: 6,
    description: "An interactive fan experience for Fetch during the Superbowl, combining digital and physical engagement.",
    content: [
      {
        type: "text",
        content: "The Fetch Superbowl Live activation created a memorable fan experience by combining digital and physical elements in an engaging environment."
      },
      {
        type: "video",
        url: "/src/assets/placeholders/fetch-superbowl-highlight.mp4",
        thumbnail: "/src/assets/placeholders/fetch-superbowl-video-thumb.jpg"
      }
    ]
  },
  {
    id: "unreal-everywhere",
    title: "Unreal Engine Unreal Everywhere",
    category: "Film + Edit",
    client: "Epic Games",
    year: 2022,
    thumbnailUrl: "/src/assets/placeholders/unreal-everywhere-thumb.jpg",
    featured: true,
    order: 7,
    description: "A video campaign showcasing the versatility of Unreal Engine across various industries beyond gaming.",
    content: [
      {
        type: "text",
        content: "The Unreal Everywhere campaign highlighted how Unreal Engine is revolutionizing workflows across film, architecture, automotive, and other industries beyond gaming."
      },
      {
        type: "video",
        url: "/src/assets/placeholders/unreal-everywhere-main.mp4",
        thumbnail: "/src/assets/placeholders/unreal-everywhere-video-thumb.jpg"
      }
    ]
  },
  {
    id: "nbcu-exorcist",
    title: "NBCU The Exorcist: Believer",
    category: "Film + Edit",
    client: "NBCUniversal",
    year: 2023,
    thumbnailUrl: "/src/assets/placeholders/nbcu-exorcist-thumb.jpg",
    featured: true,
    order: 8,
    description: "A promotional campaign for The Exorcist: Believer, creating immersive and unsettling experiences for the audience.",
    content: [
      {
        type: "text",
        content: "This promotional campaign for The Exorcist: Believer created immersive and unsettling experiences that honored the franchise's legacy while appealing to new audiences."
      },
      {
        type: "image",
        url: "/src/assets/placeholders/nbcu-exorcist-main.jpg",
        alt: "The Exorcist: Believer promotional image"
      }
    ]
  },
  {
    id: "goodnites-youth",
    title: "Goodnites Youth Pants Campaign",
    category: "Social",
    client: "Goodnites",
    year: 2022,
    thumbnailUrl: "/src/assets/placeholders/goodnites-youth-thumb.jpg",
    featured: true,
    order: 9,
    description: "A sensitive and empowering campaign for Goodnites youth products, focusing on confidence and normalization.",
    content: [
      {
        type: "text",
        content: "The Goodnites Youth Pants Campaign created a sensitive and empowering narrative that focused on building confidence and normalizing bedwetting for children and parents."
      },
      {
        type: "mediaText",
        media: {
          type: "image",
          url: "/src/assets/placeholders/goodnites-youth-feature.jpg",
          alt: "Child confidently getting ready for bed"
        },
        text: "By addressing the emotional aspects of bedwetting with compassion and understanding, this campaign helped reduce stigma while highlighting product benefits."
      }
    ]
  },
  {
    id: "hbo-college-girls",
    title: "HBO MAX Sex Lives of College Girls",
    category: "Conceptual",
    client: "HBO Max",
    year: 2021,
    thumbnailUrl: "/src/assets/placeholders/hbo-college-girls-thumb.jpg",
    featured: true,
    order: 10,
    description: "A bold, vibrant campaign capturing the essence of the HBO Max series about college experiences.",
    content: [
      {
        type: "text",
        content: "This campaign for 'The Sex Lives of College Girls' captured the show's bold, vibrant essence while appealing to the target demographic of young adults navigating college experiences."
      },
      {
        type: "quadrant",
        images: [
          { url: "/src/assets/placeholders/hbo-college-girls-q1.jpg", alt: "Character poster 1" },
          { url: "/src/assets/placeholders/hbo-college-girls-q2.jpg", alt: "Character poster 2" },
          { url: "/src/assets/placeholders/hbo-college-girls-q3.jpg", alt: "Character poster 3" },
          { url: "/src/assets/placeholders/hbo-college-girls-q4.jpg", alt: "Character poster 4" }
        ]
      }
    ]
  },
  {
    id: "coca-cola-sin-azucar",
    title: "Coca-Cola Mexico",
    category: "Social",
    client: "Coca-Cola",
    year: 2022,
    thumbnailUrl: "/src/assets/placeholders/coca-cola-sin-azucar-thumb.jpg",
    featured: true,
    order: 11,
    description: "A digital-first influencer campaign bringing Coca-Cola Sin Azúcar bottles' personalities to life with matching creators.",
    content: [
      {
        type: "text",
        content: "To drive trial of Coca-Cola Sin Azúcar in Mexico, we created a digital-first influencer campaign that brought the bottles' bubbly personalities to life with their matching creators."
      },
      {
        type: "mediaText",
        media: {
          type: "image",
          url: "/src/assets/placeholders/coca-cola-sin-azucar-feature.jpg",
          alt: "Coca-Cola Sin Azúcar with influencers"
        },
        text: "We leaned into personality-led storytelling, partnering with our team in Mexico, giving each Sin Azúcar bottle its own unique character and pairing it with a creator who embodied its energy. We built a playful, shareable series that made choosing a Sin Azúcar feel like choosing your new favorite alter ego."
      },
      {
        type: "quadrant",
        images: [
          { url: "/src/assets/placeholders/coca-cola-sin-azucar-q1.jpg", alt: "Bottle character 1" },
          { url: "/src/assets/placeholders/coca-cola-sin-azucar-q2.jpg", alt: "Influencer pairing 1" },
          { url: "/src/assets/placeholders/coca-cola-sin-azucar-q3.jpg", alt: "Bottle character 2" },
          { url: "/src/assets/placeholders/coca-cola-sin-azucar-q4.jpg", alt: "Influencer pairing 2" }
        ]
      }
    ]
  }
];

export default projects; 