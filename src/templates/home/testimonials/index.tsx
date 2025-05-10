import { FaStar } from 'react-icons/fa';

import {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/common/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import getInitialsCharacters from '@/utils/get-initials-characters';

type Testimonial = {
  image: string;
  name: string;
  position: string;
  rating: number;
  text: string;
};

const TestimonialCard = ({
  image,
  name,
  position,
  rating,
  text,
}: Testimonial) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  return (
    <div className="rounded-2xl bg-card p-8 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 flex items-center gap-2">
        <Avatar className="size-16">
          <AvatarImage src={image} />
          <AvatarFallback>{getInitialsCharacters(name)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>

      <div className="mb-4 flex">
        {stars.map((filled, index) => (
          <span
            key={index}
            className={` ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            <FaStar />
          </span>
        ))}
      </div>

      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};

const testimonials = [
  {
    image: 'https://i.pravatar.cc/150?img=13',
    name: 'Sarah Johnson',
    position: 'Marketing Manager',
    rating: 5,
    text: 'FinFlow has completely changed how I manage my money. I finally feel in control of my finances and have been able to save for a house deposit in just 10 months!',
  },
  {
    image: 'https://i.pravatar.cc/150?img=12',
    name: 'Michael Chen',
    position: 'Software Engineer',
    rating: 5,
    text: "The investment tracking feature is incredible. I can see all my assets in one place and make better decisions. I've increased my returns by 15% since using FinFlow.",
  },
  {
    image: 'https://i.pravatar.cc/150?img=31',
    name: 'Jessica Rodriguez',
    position: 'Small Business Owner',
    rating: 4,
    text: 'As a business owner, keeping personal and business expenses separate was a nightmare until I found FinFlow. The categorization features are a game-changer for my tax prep!',
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" className="container mx-auto rounded-3xl py-20">
      <SectionHeader>
        <SectionGoal>Testimonials</SectionGoal>
        <SectionTitle>What our users are saying</SectionTitle>
        <SectionDescription>
          Thousands of people have transformed their financial lives with
          FinFlow
        </SectionDescription>
      </SectionHeader>

      <SectionContent className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </SectionContent>
    </Section>
  );
};

export default Testimonials;
