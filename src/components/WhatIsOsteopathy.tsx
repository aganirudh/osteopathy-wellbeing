import React from "react";
// 1. Import the hook for scroll animations
import { useInView } from "react-intersection-observer";
import {
  Activity,
  Heart,
  Leaf,
  Award,
  Brain,
  Baby,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Benefit cards content (unchanged)
const benefits = [
  {
    icon: Activity,
    title: "Relief from pain & stiffness",
    description:
      "Release muscle tension and improve joint mobility for lasting comfort",
  },
  {
    icon: Heart,
    title: "Better circulation & balance",
    description:
      "Enhance blood flow, lymphatic drainage and nervous system balance",
  },
  {
    icon: Leaf,
    title: "Support natural healing",
    description:
      "Gentle techniques that complement the body’s own repair processes",
  },
  {
    icon: Award,
    title: "Safe & drug-free",
    description:
      "Non-invasive care suitable for all ages, from infants to elders",
  },
];

// All condition categories & items (unchanged)
const conditions = [
  {
    icon: Activity,
    title: "Musculoskeletal",
    items: [
      "Cervical spondylosis (neck stiffness, nerve compression)",
      "Migraine, cervicogenic headaches",
      "Frozen shoulder / rotator cuff injury",
      "Tennis elbow / golfer’s elbow",
      "Carpal tunnel syndrome",
      "Lower back pain",
      "Lumbar spondylosis",
      "Intervertebral disc prolapse (slipped disc / herniated disc)",
      "Kyphosis / postural round back",
      "Plantar fasciitis",
      "Sciatica",
      "Scoliosis / abnormal spinal curvature",
      "Osteoarthritis",
      "Rehabilitation of sports injuries (ligament sprains, muscle strain)",
    ],
  },
  {
    icon: Award,
    title: "Women’s Health",
    items: [
      "Dysmenorrhea (painful periods)",
      "Menstrual irregularities",
      "Hormonal issues",
      "Perimenopausal and menopausal symptoms",
      "PCOS",
      "Thyroid issues",
      "Pregnancy-related back and pelvic pain",
      "Uterine fibroids",
      "Postpartum recovery",
      "Incontinence",
    ],
  },
  {
    icon: Baby,
    title: "Children & Infants",
    items: [
      "Reflux / regurgitation",
      "Feeding and latching difficulties",
      "Torticollis",
      "Plagiocephaly",
      "Learning disability",
      "Recurrent ear infections",
      "Autism Spectrum Disorder / ADHD",
      "Delayed motor milestones",
      "Infant colic",
    ],
  },
  {
    icon: Leaf,
    title: "Digestive",
    items: [
      "Irritable Bowel Syndrome (IBS)",
      "Constipation",
      "Acid reflux / GERD",
      "Bloating / functional dyspepsia",
      "Hiatal hernia",
      "Post-surgical adhesions (abdominal scar tightness)",
      "Fatty liver",
      "Gall stones",
    ],
  },
  {
    icon: Heart,
    title: "Respiratory",
    items: [
      "Chronic rhino-sinusitis",
      "Allergic rhinitis",
      "Sinusitis",
      "Asthma",
      "Bronchitis",
      "Chronic Obstructive Pulmonary Disorder (COPD)",
      "Snoring",
    ],
  },
  {
    icon: Users,
    title: "Elderly Care",
    items: [
      "Osteoarthritis",
      "Degenerative disc disease",
      "Balance problems",
      "Peripheral neuropathy",
      "Varicose veins",
    ],
  },
  {
    icon: Brain,
    title: "Nervous System & Stress",
    items: ["Insomnia / sleep disturbance", "Anxiety", "PTSD"],
  },
];


// Helper component with new hover and scroll effects
const ConditionCategoryCard = ({
  category,
  delay,
  className = "",
  columnClass = "",
  centerHeading = false,
}) => {
  const Icon = category.icon;
  const headerContainerClasses = centerHeading
    ? "flex flex-col items-center text-center gap-4"
    : "flex items-center gap-4";

  // 2. Set up the intersection observer hook for scroll animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  return (
    <Card
      ref={ref} // 3. Attach the ref to the card
      className={`
        bg-gradient-card border-border/50 h-full
        transition-all duration-500 ease-out 
        ${className}
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      <CardContent className="p-6 md:p-8 space-y-4">
        <div className={headerContainerClasses}>
          <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground leading-tight">
            {category.title}
          </h3>
        </div>
        <div className={`space-y-3 pt-2 ${columnClass}`}>
          {category.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 break-inside-avoid">
              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


const WhatIsOsteopathy = () => {
  const mainCondition = conditions[0];
  const otherConditions = conditions.slice(1);
  const topRowConditions = otherConditions.slice(0, 3);
  const bottomRowConditions = otherConditions.slice(3);

  return (
    <>
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What is <span className="gradient-text">Osteopathy?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Osteopathy is a holistic system of alternative medicine that uses
              gentle, hands-on techniques to restore and maintain the body’s
              natural balance. Techniques include stretching, soft tissue
              manipulation, joint mobilization and other therapies to improve
              structure, circulation, nervous system function, and overall
              wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="wellness-hover bg-gradient-card border-border/50 float-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative w-16 h-16 bg-primary-light rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Who can <span className="gradient-text">Benefit?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Osteopathy supports recovery and wellbeing across many systems of
              the body. Explore the wide range of conditions we treat:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TOP ROW */}
            {topRowConditions.map((category, index) => (
              <ConditionCategoryCard
                key={category.title}
                category={category}
                delay={0.1 + index * 0.05}
              />
            ))}

            {/* CENTERPIECE ROW */}
            <ConditionCategoryCard
              category={mainCondition}
              delay={0.3}
              className="md:col-span-3"
              columnClass="md:columns-2 lg:columns-3 md:gap-x-8"
              centerHeading={true}
            />

            {/* BOTTOM ROW */}
            {bottomRowConditions.map((category, index) => (
              <ConditionCategoryCard
                key={category.title}
                category={category}
                delay={0.4 + index * 0.05}
              />
            ))}
          </div>

          <div className="mt-16 text-center fade-in">
            <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft border border-border/50">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Gentle, safe, and effective care for every stage of life
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsOsteopathy;