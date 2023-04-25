import React, { useEffect, useState } from "react";
import Button from "components/Button";
import { ArrowLeftIcon } from "components/Icons";
import Link from "next/link";

const ComingSoon = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const countDownDate = new Date("Jun 01, 2023 00:00:00").getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const Timer = [
        {
            id: 1,
            title: "Days",
            value: days,
        },
        {
            id: 2,
            title: "Hours",
            value: hours,
        },
        {
            id: 3,
            title: "Minutes",
            value: minutes,
        },
        {
            id: 4,
            title: "Seconds",
            value: seconds,
        },
    ];

    return (
        <div className="container w-full h-full flex flex-col justify-center py-4">
            <div className="w-full h-[72px] md:h-[96px] xl:h-[117px] flex items-center 2xs:mb-[1rem]">
                <Link href="/">
                    <svg
                        width="86"
                        height="25"
                        viewBox="0 0 86 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d="M5.99813 24L0.334125 0.191999L5.90213 -1.90735e-06L9.07013 16.576L12.3981 0.191999L16.9101 -1.90735e-06L11.1501 24H5.99813ZM19.3806 24V-1.90735e-06H31.5726L31.1886 3.744H24.0846V9.472H29.1406L29.1086 13.504H24.0846V20.256H31.8286L31.4446 24H19.3806ZM32.9934 24L38.0494 0.287998L44.7374 -1.90735e-06L49.9214 23.808L44.8014 24L43.9374 18.848H38.2094L37.1854 24H32.9934ZM39.0734 15.008H43.0734L40.8654 3.52L39.0734 15.008ZM59.0016 13.472H57.1776V23.808L52.5056 24.192V0.191999L58.2016 -1.90735e-06C60.9536 -1.90735e-06 63.1083 0.554665 64.6656 1.664C66.223 2.752 67.0016 4.42667 67.0016 6.688C67.0016 8.18133 66.703 9.408 66.1056 10.368C65.5296 11.328 64.687 12.128 63.5776 12.768L65.7216 17.984L67.8976 23.168L63.2896 24.416L59.0016 13.472ZM58.7776 10.016C59.887 10.016 60.751 9.792 61.3696 9.344C62.0096 8.87467 62.3296 8 62.3296 6.72C62.3296 4.736 61.3483 3.744 59.3856 3.744H57.1776V10.016H58.7776ZM81.7994 24.192L74.7914 9.184V23.808L70.5994 24V0.191999L75.4954 -1.90735e-06L81.7034 14.272V0.383999L85.6714 -1.90735e-06V23.808L81.7994 24.192Z"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>
            <div className="flex gap-10 md:gap-4 w-full flex-wrap md:flex-nowrap mt-10 lg:mt-[3.5rem] items-start">
                <div className="flex flex-col items-start">
                    <h1 className="font-fivo xl:leading-[70px] mb-[12px] xl:mb-12 text-3xl lg:text-4xl xl:text-6xl text-white antialiased hover:subpixel-antialiased font-bold">
                        COMING SOON
                    </h1>
                    <h3 className="antialiased xl:leading-[48px] hover:subpixel-antialiased font-fivo not-italic font-bold text-[#1174ff] text-[24px] xl:text-[36px] mb-3">
                        Vote and Earn
                    </h3>
                    <p className="text-sm font-fivo text-[#D3D3D3] antialiased hover:subpixel-antialiased mb-[24px] lg:mb-[42px]">
                        Watch your favorite TV shows, cast your vote, and earn rewards! Our platform allows you to earn
                        rewards for engaging with the shows you love. Join now and start earning rewards for your
                        passion for TV!
                    </p>
                    <Button
                        type="button"
                        IconAfter={<ArrowLeftIcon />}
                        variant="primary"
                        label="Join the Waitlist"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfPpkVY5LbnXo2VFfPs9oOmAD5fLM48J4uvcG-MffdQzhsBbQ/viewform?usp=sf_link"
                        className="bg-[#073F8D] h-[48px] md:h-[48px] lg:h-[58px] w-[240px] text-[#FFFFFF] text-[14px] lg:text-base leading-[14px] lg:leading-[24px] font-fivo font-medium flex items-center justify-center gap-2 rounded-[8px]"
                    />
                    <div className="flex items-center mt-[30px] lg:mt-[63px] gap-[18px]">
                        {Timer.map((item) => (
                            <div className="timer__item" key={item?.id}>
                                <h3 className="item__value">{item?.value}</h3>
                                <p className="item__title">{item?.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-max flex items-center">
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 blur-[100px] bg-[#073f8d] z-[1] rounded-[235.54px]" />
                    <img
                        src="/assets/images/auth-img-old.png"
                        alt="coming soon"
                        className="z-[10] relative mx-auto w-3/5 sm:w-2/3 lg:w-[70%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
