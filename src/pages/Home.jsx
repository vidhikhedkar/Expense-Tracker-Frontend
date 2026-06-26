import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
    ArrowRightOutlined,
    LineChartOutlined,
    SafetyCertificateOutlined,
    AppstoreOutlined,
    DollarOutlined,
    ThunderboltOutlined,
    TeamOutlined,
} from "@ant-design/icons";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 overflow-x-hidden relative font-sans antialiased">

            {/* Atmospheric Background Blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-150 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[10%] w-75 md:w-150 h-75 md:h-150 bg-indigo-600/10 rounded-full blur-[80px] md:blur-[140px]" />
                <div className="absolute top-[5%] right-[5%] w-62.5 md:w-125 h-62.5 md:h-125 bg-purple-600/10 rounded-full blur-[80px] md:blur-[140px]" />
            </div>

            {/* HERO SECTION */}
            <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 pt-32 pb-20 md:pt-40 md:pb-28 relative z-10 flex flex-col items-center">

                {/* Badge Tag with slide-down entry */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md shadow-inner animate-fade-in-down transition-all duration-300 hover:scale-105">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                    <span className="tracking-wide">Smart Finance Dashboard 2026</span>
                </div>

                {/* Main Heading with crisp tracking & gradient flow */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-slate-100 animate-fade-in">
                    Control your{" "}
                    <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm filter saturate-122">
                        money flow
                    </span>{" "}
                    like a pro
                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed px-2 animate-fade-in [animation-delay:200ms]">
                    Track expenses, visualize spending trends, and build automated budgets in a lightning-fast dashboard designed for complete clarity.
                </p>

                {/* Responsive Button Group alignment */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto px-4 animate-fade-in [animation-delay:400ms]">
                    <Link to="/register" className="w-full sm:w-auto">
                        <Button
                            type="primary"
                            size="large"
                            icon={<ArrowRightOutlined />}
                            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-none font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Get Started Free
                        </Button>
                    </Link>

                    <Link to="/login" className="w-full sm:w-auto">
                        <Button
                            size="large"
                            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Login to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>

            {/* STATS STRIP */}
            <div className="border-y border-slate-900 bg-slate-900/30 backdrop-blur-md py-8 md:py-12 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/50">
                    <Stat number="10K+" label="Active Expenses Tracked" />
                    <Stat number="99.4%" label="AI Analytics Accuracy" />
                    <Stat number="24/7" label="Real-time Cloud Sync" />
                </div>
            </div>

            {/* FEATURES BENTO GRID */}
            <div className="py-24 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                        Powerful finance control features
                    </h2>
                    <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
                        Everything you need to optimize your savings and reduce unnecessary expenses.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        icon={<LineChartOutlined />}
                        title="Real-time Analytics"
                        description="Track financial trends instantly with interactive insights."
                    />
                    <Card
                        icon={<AppstoreOutlined />}
                        title="Smart Categories"
                        description="Auto-sort transactions into clean, customizable buckets."
                    />
                    <Card
                        icon={<DollarOutlined />}
                        title="Budget Control"
                        description="Set limits and alerts to prevent overspending."
                    />
                    <Card
                        icon={<ThunderboltOutlined />}
                        title="Fast Entry"
                        description="Log transactions in seconds with quick input flow."
                    />
                    <Card
                        icon={<SafetyCertificateOutlined />}
                        title="Secure Storage"
                        description="End-to-end encrypted financial data protection."
                    />
                    <Card
                        icon={<TeamOutlined />}
                        title="Multi-device Sync"
                        description="Seamless access across all your devices in real time."
                    />
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="py-24 md:py-32 px-4 sm:px-6 bg-slate-900/20 border-y border-slate-800/60 relative overflow-hidden">

                {/* Glow background blobs */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/10 blur-[120px] rounded-full" />

                {/* Content */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-100">
                        Streamlined workflow
                    </h2>
                    <p className="text-slate-500 mt-2 text-sm sm:text-base">
                        Achieve absolute clarity over your personal capital in minutes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                    {/* glowing connector line */}
                    <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent blur-sm" />

                    <Step
                        number="01"
                        title="Log Income & Bills"
                        text="Quickly punch in incoming revenue streams or monthly fixed operational costs in our streamlined inputs."
                    />
                    <Step
                        number="02"
                        title="Analyze Anomalies"
                        text="Let the automated backend dashboard flag sudden spikes or repetitive patterns in hidden subscription costs."
                    />
                    <Step
                        number="03"
                        title="Optimize and Grow"
                        text="Adjust financial savings targets periodically to watch your personal net growth compound safely."
                    />
                </div>
            </div>

            {/* FINAL CALL TO ACTION */}
            <div className="py-24 md:py-36 text-center px-4 sm:px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-100 leading-tight">
                    Ready to build better financial habits?
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Get continuous structural visibility over everything you own. Onboarding configuration takes less than 2 minutes.
                </p>

                <Link to="/register" className="w-full sm:w-auto">
                    <Button
                        size="large"
                        className="w-full sm:w-auto h-12 px-10 rounded-xl bg-slate-100 text-slate-950 font-bold hover:bg-white hover:scale-105 transition-all duration-300 border-none shadow-xl shadow-indigo-500/5 active:scale-100"
                    >
                        Create Your Free Account
                    </Button>
                </Link>
            </div>

            {/* FOOTER */}
            <footer className="border-t border-slate-900/80 bg-slate-950/50 py-8 text-center text-xs text-slate-600 px-4">
                &copy; 2026 Smart Finance Dashboard Corp. All rights reserved.
            </footer>
        </div>
    );
};

/* EXTRACTED PRESENTATIONAL COMPONENTS */

const Card = ({ icon, title, description, className = "" }) => (
    <div className={`p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-950/40 hover:border-slate-800/80 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md hover:shadow-indigo-500/2 hover:-translate-y-1 ${className}`}>
        <div className="flex flex-col items-start text-left">
            <div className="text-indigo-400 text-xl md:text-2xl mb-5 inline-flex items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-800/40 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:border-indigo-500/20 transition-all duration-300 shadow-inner">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-white transition-colors duration-200">
                {title}
            </h3>
            {description && <p className="text-sm text-slate-400 leading-relaxed font-light tracking-wide">{description}</p>}
        </div>
    </div>
);

const Stat = ({ number, label }) => (
    <div className="flex flex-col justify-center items-center py-4 sm:py-2 text-center px-4 group">
        <p className="text-3xl md:text-4xl font-black tracking-tight bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-105">
            {number}
        </p>
        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {label}
        </p>
    </div>
);

const Step = ({ number, title, text }) => (
    <div className="p-6 md:p-8 rounded-2xl bg-slate-950 border border-slate-900 relative group hover:border-slate-800/80 transition-all duration-300 text-left shadow-sm flex flex-col justify-between min-h-45">
        {/* Dynamic Watermark Background Number */}
        <div className="absolute top-3 right-5 text-5xl md:text-6xl font-black text-slate-900/60 select-none group-hover:text-indigo-950/30 transition-colors duration-300 font-mono tracking-tighter">
            {number}
        </div>
        <div className="relative z-10">
            <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-3 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded-md inline-block">
                Stage {number}
            </div>
            <h4 className="text-base font-semibold text-slate-200 mb-2 group-hover:text-indigo-300 transition-colors duration-200">{title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">{text}</p>
        </div>
    </div>
);

export default Home;