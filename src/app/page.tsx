"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterCard from "@/components/sections/footer/FooterCard";
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
                    <HeroSplitKpi
                        title="Peak Performance with Arsalan"
                        description="Elevate your fitness journey under the expert guidance of Arsalan. With a singular focus on your results, we build elite-level athleticism through data-driven training and disciplined habit formation."
                        background={{ variant: "rotated-rays-static-grid" }}
                        kpis={[
                            { value: "500+", label: "Total Transformations" },
                            { value: "1", label: "Elite Trainer" },
                            { value: "100%", label: "Dedicated Support" }
                        ]}
                        enableKpiAnimation={true}
                        tag="Elite Fitness Coach"
                        tagIcon={Award}
                        imageSrc="http://img.b2bpic.net/free-photo/medium-shot-coach-helping-girl_23-2150363711.jpg"
                        imageAlt="Arsalan, expert personal trainer"
                        imagePosition="right"
                        buttons={[
                            { text: "Start Training", href: "#contact" },
                            { text: "View Programs", href: "#services" }
                        ]}
                        mediaAnimation="slide-up"
                    />
                </div>

                <div id="about" data-section="about">
                    <TextAbout
                        title="Arsalan's Philosophy: Training is a craft. I believe in a direct, one-on-one approach where every movement is intentional. No generic plans—just pure, tailored intensity designed to push your limits while ensuring longevity and sustainable growth. Let’s redefine your potential together."
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Meet Arsalan", href: "#achievements" },
                            { text: "Read More", href: "#philosophy" }
                        ]}
                    />
                </div>

                <div id="achievements" data-section="achievements">
                    <MetricCardOne
                        title="Proven Results, One Trainer"
                        description="A legacy of excellence built through individual dedication"
                        tag="Success Metrics"
                        tagIcon={TrendingUp}
                        metrics={[
                            { id: "1", value: "500+", title: "Successful Clients", description: "Transformations achieved through personalized guidance", icon: Trophy },
                            { id: "2", value: "1", title: "Lead Coach", description: "Personalized oversight by Arsalan himself", icon: Zap },
                            { id: "3", value: "100%", title: "Goal Clarity", description: "Precise, target-oriented athletic programming", icon: Star },
                        ]}
                        gridVariant="uniform-all-items-equal"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>

                <div id="services" data-section="services">
                    <FeatureCardSeven
                        title="Bespoke Training Programs"
                        description="Direct, expert-led training sessions optimized for your growth"
                        tag="Service Offerings"
                        tagIcon={Dumbbell}
                        features={[
                            {
                                title: "1-on-1 Elite Coaching",                                description: "Direct mentorship from Arsalan. Focus on perfect technique, aggressive progress tracking, and constant adjustments to keep you hitting new PRs.",                                imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-helping-fit-man-gym_23-2149740141.jpg",                                imageAlt: "1 on 1 coaching"
                            },
                            {
                                title: "Elite Conditioning",                                description: "High-intensity programming designed to maximize output, improve recovery cycles, and optimize your cardiovascular and muscular endurance.",                                imageSrc: "http://img.b2bpic.net/free-photo/crossfit-exercise-performed-by-strong-woman-with-rope_1098-18892.jpg",                                imageAlt: "Conditioning workout"
                            },
                            {
                                title: "Performance Nutrition",                                description: "Fuel your training with evidence-based macro and micro-nutrient planning designed specifically to complement your training phase.",                                imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-with-delicious-food_23-2149894894.jpg",                                imageAlt: "Performance nutrition plan"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Inquire for Training", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="philosophy" data-section="philosophy">
                    <FeatureBento
                        title="Methodology by Arsalan"
                        description="Efficiency, Intensity, and Precision"
                        tag="The Arsalan Method"
                        tagIcon={Compass}
                        features={[
                            {
                                title: "Data-Driven Progress",                                description: "Every session logged, every rep counted. We analyze data to ensure linear progression.",                                bentoComponent: "animated-bar-chart"
                            },
                            {
                                title: "Core Pillars",                                description: "Focus on Strength, Stability, and Endurance.",                                bentoComponent: "3d-stack-cards",                                items: [
                                    { icon: Dumbbell, title: "Strength", subtitle: "Raw Power", detail: "Compound mechanical advantage" },
                                    { icon: Heart, title: "Cardio", subtitle: "Peak Output", detail: "VO2 max optimization" },
                                    { icon: Lightbulb, title: "Form", subtitle: "Precision", detail: "Injury prevention mechanics" }
                                ]
                            },
                            {
                                title: "Growth Timeline",                                description: "Structured phases for sustainable athletic development.",                                bentoComponent: "timeline",                                heading: "The Transformation Path",                                subheading: "From Baseline to Elite",                                items: [
                                    { label: "Assessment", detail: "Baseline metrics and goals" },
                                    { label: "Execution", detail: "Intense training period" },
                                    { label: "Optimization", detail: "Refining for peak performance" }
                                ],
                                completedLabel: "Arsalan Standard Achieved"
                            }
                        ]}
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={true}
                        buttons={[
                            { text: "Start Now", href: "#contact" }
                        ]}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardFifteen
                        testimonial="Arsalan isn't just a trainer; he's a specialist in human performance. His 1-on-1 attention is unmatched. 500+ other clients can't be wrong—he builds athletes, not just lifters."
                        rating={5}
                        author="Elite Client Experience"
                        avatars={[
                            { src: "http://img.b2bpic.net/free-photo/handsome-athletic-male-blue-sportswear-holds-dumbbell-dark-vignette-background_613910-1364.jpg", alt: "Client" },
                            { src: "http://img.b2bpic.net/free-photo/serious-sportswoman-with-crossed-arms_1153-942.jpg", alt: "Client" },
                            { src: "http://img.b2bpic.net/free-photo/young-sports-man-happy-expression_1194-1586.jpg", alt: "Client" },
                            { src: "http://img.b2bpic.net/free-photo/cute-young-woman-gym-with-dumbbells_624325-2251.jpg", alt: "Client" }
                        ]}
                        ratingAnimation="slide-up"
                        avatarsAnimation="slide-up"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactSplit
                        background={{ variant: "plain" }}
                        tag="Train with Arsalan"
                        title="Join the 500+ Club"
                        description="Limited training spots available. Secure your place for personalized elite-level coaching today."
                        useInvertedBackground={false}
                        imageSrc="http://img.b2bpic.net/free-photo/blurred-bikes_1203-367.jpg"
                        imageAlt="Professional training environment"
                        mediaPosition="right"
                        mediaAnimation="slide-up"
                        tagIcon={Mail}
                        inputPlaceholder="Your name or email"
                        buttonText="Secure Spot"
                        termsText="Serious inquiries only. We focus on results."
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterCard
                        logoText="Arsalan Elite"
                        copyrightText="© 2025 Arsalan Elite Performance."
                        socialLinks={[
                            { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                            { icon: Twitter, href: "#", ariaLabel: "Twitter" },
                            { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
                            { icon: Mail, href: "mailto:coach@arsalan.fit", ariaLabel: "Email" }
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}