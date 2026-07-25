import type { Metadata } from "next";
import { Raleway, Mali } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway-local",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mali = Mali({
  variable: "--font-mali-local",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const passionate = localFont({
  src: "../../public/fonts/FeelingPassionate.ttf",
  variable: "--font-passionate-local",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joyfulhome.ug"),
  title: "Helping Families Begin with Confidence | JoyfulHome",
  description:
    "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
  openGraph: {
    type: "website",
    url: "https://joyfulhome.ug/",
    siteName: "JoyfulHome",
    locale: "en_UG",
    title: "Helping Families Begin with Confidence | JoyfulHome",
    description:
      "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
    images: [
      {
        url: "https://joyfulhome.ug/assets/og-secure-booking.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "JoyfulHome - Your Trusted Premium Care Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping Families Begin with Confidence | JoyfulHome",
    description:
      "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
    images: ["https://joyfulhome.ug/assets/og-secure-booking.png"],
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://joyfulhome.ug/#organization",
    "name": "JoyfulHome",
    "alternateName": ["Joyful Home", "Joyful Home Uganda"],
    "url": "https://joyfulhome.ug",
    "logo": "https://joyfulhome.ug/assets/joyfulhome-logo-smile.png",
    "image": "https://joyfulhome.ug/assets/og-secure-booking.png",
    "email": "joyfulhome718@gmail.com",
    "telephone": "+256700143143",
    "description": "JoyfulHome provides professional, compassionate in-home nursing and early parenthood support for mothers, newborns, and families across Uganda.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "knowsAbout": [
      "In-Home Nursing Care",
      "Newborn Care",
      "Maternal Health",
      "Postpartum Recovery",
      "Infant Care",
      "Pediatric Nursing",
      "Corporate Event Childcare"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://joyfulhome.ug/#website",
    "url": "https://joyfulhome.ug",
    "name": "JoyfulHome",
    "description": "Helping Families Begin with Confidence | JoyfulHome",
    "publisher": {
      "@id": "https://joyfulhome.ug/#organization"
    },
    "inLanguage": "en-UG"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://joyfulhome.ug/#service-homecare",
    "name": "HomeCare",
    "serviceType": "In-Home Nursing & Newborn Care",
    "description": "We partner with families to develop bespoke care plans that prioritise their comfort, safety, and well-being. Premium in-home nursing care that nurtures the physical, emotional and for families who desire it faith-informed encouragement through prayer, worship, and age-appropriate Bible stories.",
    "provider": {
      "@id": "https://joyfulhome.ug/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "UGX",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "50000",
        "maxPrice": "500000",
        "priceCurrency": "UGX",
        "unitCode": "DAY"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://joyfulhome.ug/#service-corporate-care",
    "name": "Corporate Care",
    "serviceType": "Corporate & Event Nursing Care",
    "description": "We partner with families and event organisers to provide premium care for settings that include a number of newborns, infants and children for families, companies or organisations e.g retreats, events such as birthdays, seminars, thanksgivings, short or long trips, workshops, get togethers, getaways, conferences, prayer meetings, vacations, playdates etc.",
    "provider": {
      "@id": "https://joyfulhome.ug/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "UGX",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "200000",
        "maxPrice": "5000000",
        "priceCurrency": "UGX",
        "unitCode": "DAY"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://joyfulhome.ug/#faqpage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the scope of your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services include a variety of offerings such as feeding assistance, diaper changing, bathing, umbilical cord care, monitoring vital signs, and offering guidance on newborn developmental milestones. Our caregivers are trained to support both the physical and emotional needs of your baby."
        }
      },
      {
        "@type": "Question",
        "name": "How are caregivers selected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All caregivers undergo a meticulous selection process that includes background checks, interviews, licence verification and reference checks. They are trained in mother and newborn care best practices, including safe sleep techniques, infant CPR, and first aid."
        }
      },
      {
        "@type": "Question",
        "name": "Can I meet the caregiver before they start working with my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we encourage a pre-service meeting with the assigned caregiver to ensure compatibility and discuss your specific needs and expectations in your care plan."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the safety and security of my home and baby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are committed to maintaining the highest standards of safety and security. Our caregivers follow strict protocols, including frequent hand washing and sanitisation, to ensure a clean and safe environment. Additionally, we ensure confidentiality and respect for your home and family."
        }
      },
      {
        "@type": "Question",
        "name": "What are the qualifications of your caregivers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our caregivers are registered professionals with certifications in nursing and midwifery. Many have backgrounds in nursing or paediatric care and have completed specialised training in customer service."
        }
      },
      {
        "@type": "Question",
        "name": "What is the process for scheduling and canceling services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule services by contacting our customer service team. We request for at the least 1 month's notice for booking and 48-72 hours' notice for cancellations to accommodate scheduling changes and ensure the availability of our caregivers. An additional surcharge is charged for services required in under 72 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I provide specific instructions or preferences for my care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We encourage you to share any specific instructions or preferences through our 'client needs assessment' process. Our caregivers will tailor these needs and develop your individualised care plan."
        }
      },
      {
        "@type": "Question",
        "name": "What are your rates and payment options for care services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our rates depend on the level of care and hours of service required with bespoke daily, weekly and monthly packages. We offer flexible payment options including, flexipay, mobile money payments and direct bank transfers."
        }
      },
      {
        "@type": "Question",
        "name": "Is my home and family's data protected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are committed to protecting your privacy, all caregivers sign confidentiality agreements. We also follow strict protocols to ensure the security of your personal information."
        }
      },
      {
        "@type": "Question",
        "name": "How do I provide feedback about the service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We welcome and value your feedback. Our team is available to address and resolve any issues promptly. You can provide feedback through our customer service line, email, reviews' process, or during regular check-in meetings with our service coordinators. This helps us continually improve our services and ensure your satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "What supplies and equipment are provided as part of the care service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service includes basic medical supplies such as gloves, hand sanitisers, first aid essentials and monitoring devices for tracking temperature and blood pressure. You are expected to provide all baby supplies and any prescribed medications. Our caregivers will assist with administering as per the instructions but will not supply medications directly."
        }
      },
      {
        "@type": "Question",
        "name": "Are caregivers required to wear specific types of clothing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, caregivers are required to wear uniforms provided to maintain consistency and professionalism."
        }
      },
      {
        "@type": "Question",
        "name": "How are caregivers accommodated during live-in services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comfortable sleeping space is required, such as a guest room or a separate area in the nursery."
        }
      },
      {
        "@type": "Question",
        "name": "Are meals for the caregiver included in the service package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meal arrangements depend on the duration of the service. Caregivers working for up to 8 hours are responsible for their own meals, however the client may provide at their discretion. You are expected to provide or facilitate meals for the caregiver working over 8 hours."
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`${raleway.variable} ${mali.variable} ${passionate.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
