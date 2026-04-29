"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import SplitAbout from "@/components/sections/about/SplitAbout";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, TrendingUp, Trophy, Zap, Star, Dumbbell, Heart, Lightbulb, Compass, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function PersonalTrainerPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="directional-hover"
            defaultTextAnimation="background-highlight"
            borderRadius="pill"
            contentWidth="medium"
            sizing="mediumLarge"
            background="aurora"
            cardStyle="gradient-bordered"
            primaryButtonStyle="primary-glow"
            secondaryButtonStyle="layered"
            headingFontWeight="semibold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleFullscreen
                        navItems={[
                            { name: "Home", id: "home" },
                            { name: "About", id: "about" },
                            { name: "Credentials", id: "achievements" },
                            { name: "Programs", id: "services" },
                        ]}
                        brandName="Arsalan Elite"
                        bottomLeftText="Elite Performance"
                        bottomRightText="coach@arsalan.fit"
                    />
                </div>

                <div id="hero" data-section="hero">
                    <HeroBillboardRotatedCarousel
                        title="Peak Performance with Arsalan"
                        description="Elevate your fitness journey under the expert guidance of Arsalan. With a singular focus on your results, we build elite-level athleticism through data-driven training and disciplined habit formation."
                        background={{ variant: "rotated-rays-static-grid" }}
                        carouselItems={[
                            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-coach-helping-girl_23-2150363711.jpg?w=800&h=600" },
                            { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-helping-fit-man-gym_23-2149740141.jpg?w=800&h=600" },
                            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/crossfit-exercise-performed-by-strong-woman-with-rope_1098-18892.jpg?w=800&h=600" },
                            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-with-delicious-food_23-2149894894.jpg?w=800&h=600" },
                            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/handsome-athletic-male-blue-sportswear-holds-dumbbell-dark-vignette-background_613910-1364.jpg?w=400&h=400" },
                            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/serious-sportswoman-with-crossed-arms_1153-942.jpg?w=400&h=400" }
                        ]}
                        buttons={[
                            { text: "Start Training", href: "#contact" },
                            { text: "View Programs", href: "#services" }
                        ]}
                    />
                </div>

                <div id="about" data-section="about">
                    <SplitAbout
                        title="Arsalan's Philosophy"
                        description="Training is a craft. I believe in a direct, one-on-one approach where every movement is intentional. No generic plans—just pure, tailored intensity designed to push your limits while ensuring longevity and sustainable growth. Let’s redefine your potential together."
                        bulletPoints={[
                            { title: "Expert Guidance", description: "Direct mentorship", icon: Award },
                            { title: "Data-Driven", description: "Tracked progress", icon: TrendingUp }
                        ]}
                        imageSrc="http://img.b2bpic.net/free-photo/medium-shot-coach-helping-girl_23-2150363711.jpg?w=800&h=600"
                        textboxLayout="split"
                    />
                </div>

                <div id="achievements" data-section="achievements">
                    <MetricCardThree
                        title="Success Metrics"
                        description="A legacy of excellence built through individual dedication."
                        metrics={[
                            { id: "1", icon: Trophy, title: "Successful Clients", value: "500+" },
                            { id: "2", icon: Zap, title: "Lead Coach", value: "1" },
                            { id: "3", icon: Star, title: "Goal Clarity", value: "100%" }
                        ]}
                        animationType="slide-up"
                        textboxLayout="default"
                    />
                </div>

                <div id="services" data-section="services">
                    <FeatureCardTwentyFour
                        title="Bespoke Training Programs"
                        description="Direct, expert-led training sessions optimized for your growth."
                        animationType="slide-up"
                        useInvertedBackground={false}
                        textboxLayout="default"
                        features={[
                            { id: "1", title: "1-on-1 Elite Coaching", author: "Arsalan", description: "Direct mentorship focused on technique and progress.", tags: ["1-on-1", "Elite"], imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-helping-fit-man-gym_23-2149740141.jpg?w=800&h=600" },
                            { id: "2", title: "Elite Conditioning", author: "Arsalan", description: "High-intensity programming for output and recovery.", tags: ["Conditioning", "Endurance"], imageSrc: "http://img.b2bpic.net/free-photo/crossfit-exercise-performed-by-strong-woman-with-rope_1098-18892.jpg?w=800&h=600" },
                            { id: "3", title: "Performance Nutrition", author: "Arsalan", description: "Evidence-based macro and micro-nutrient planning.", tags: ["Nutrition", "Performance"], imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-with-delicious-food_23-2149894894.jpg?w=800&h=600" }
                        ]}
                    />
                </div>

                <div id="philosophy" data-section="philosophy">
                    <FeatureBento
                        title="Methodology by Arsalan"
                        description="Efficiency, Intensity, and Precision"
                        useInvertedBackground={true}
                        animationType="slide-up"
                        textboxLayout="default"
                        features={[
                            { title: "Core Pillars", description: "Strength, Stability, and Endurance.", bentoComponent: "3d-stack-cards", items: [
                                { icon: Dumbbell, title: "Strength", subtitle: "Raw Power", detail: "Compound mechanical advantage" },
                                { icon: Heart, title: "Cardio", subtitle: "Peak Output", detail: "VO2 max optimization" },
                                { icon: Lightbulb, title: "Form", subtitle: "Precision", detail: "Injury prevention mechanics" }
                            ]}
                        ]}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardSix
                        title="Client Success Stories"
                        description="Hear from those who transformed their lives."
                        animationType="slide-up"
                        textboxLayout="default"
                        testimonials={[
                            { id: "1", name: "Elite Client", handle: "@client1", testimonial: "Arsalan builds athletes, not just lifters. His attention is unmatched.", imageSrc: "http://img.b2bpic.net/free-photo/handsome-athletic-male-blue-sportswear-holds-dumbbell-dark-vignette-background_613910-1364.jpg?w=400&h=400" }
                        ]}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactCenter
                        tag="Train with Arsalan"
                        title="Join the 500+ Club"
                        description="Limited training spots available. Secure your place for personalized elite-level coaching today."
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterMedia
                        logoText="Arsalan Elite"
                        imageSrc="http://img.b2bpic.net/free-photo/blurred-bikes_1203-367.jpg?w=800&h=600"
                        columns={[
                            { title: "Quick Links", items: [
                                { label: "Home", href: "#" },
                                { label: "Programs", href: "#services" }
                            ]}
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}