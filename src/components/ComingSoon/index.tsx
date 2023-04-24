import React, { useEffect, useState } from "react";
import Button from "components/Button";
import { ArrowLeftIcon } from "components/Icons";

const ComingSoon = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const countDownDate = new Date("Apr 30, 2023 15:37:25").getTime();
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
        <div className="container w-full h-full flex flex-col justify-center">
            <h1 className="text-white font-favo font-bold text-[20px] md:text-[26px] lg:text-[32px] lg:leading-[24px] not-italic md:relative -top-[1rem] xl:absolute xl:top-[72px] mt-6 md:mt-10 lg:mt-0 ">
                VEARN
            </h1>

            <div className="flex gap-10 md:gap-4 w-full flex-wrap md:flex-nowrap mt-10 lg:mt-20 items-center">
                <div className="flex flex-col items-start w-full">
                    <h1 className="font-fivo xl:leading-[70px] mb-[12px] xl:mb-12 text-3xl lg:text-4xl xl:text-6xl text-white antialiased hover:subpixel-antialiased font-bold">
                        COMING SOON
                    </h1>
                    <h3 className="antialiased xl:leading-[48px] hover:subpixel-antialiased font-fivo not-italic font-bold text-[#1174ff] text-[24px] xl:text-[36px] mb-3">
                        Vote and Earn
                    </h3>
                    <p className="text-sm font-fivo text-[#D3D3D3] antialiased hover:subpixel-antialiased mb-[24px] lg:mb-[42px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim consequat elit dictum odio vitae
                        felis interdum augue. Commodo eget tristique cras ligula tristique sed.{" "}
                    </p>
                    <Button
                        type="button"
                        IconAfter={<ArrowLeftIcon />}
                        variant="primary"
                        label="Join the Waitlist"
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
                <div className="relative h-max w-full flex items-center">
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 blur-[100px] bg-[#073f8d] z-[1] rounded-[235.54px]" />
                    <img
                        src="/assets/images/auth-img-old.png"
                        alt="coming soon"
                        className="z-[10] relative mx-auto w-3/5 sm:w-2/3 lg:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
