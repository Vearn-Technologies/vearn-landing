import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "components/Button";
import { ArrowLeftIcon } from "components/Icons";

const SoonContainer = styled.div`
    width: 100%;
    padding: 1rem;
    @media screen and (min-width: 768px) {
        height: 100vh;
    }
    .soon__wrapper {
        .head {
            margin-top: 42px;
            margin-bottom: 57px;
            width: 100%;
            @media screen and (min-width: 1025px) {
                margin-top: 72px;
                margin-bottom: 117px;
            }
            h1 {
                font-family: "Fivo Sans";
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 24px;
                color: #ffffff;
                @media screen and (min-width: 768px) {
                    font-size: 22px;
                }
                @media screen and (min-width: 1025px) {
                    font-size: 32px;
                }
            }
        }
        .soon__body {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            &-left {
                display: flex;
                flex-direction: column;
                @media screen and (max-width: 768px) {
                    margin-bottom: 4rem;
                }
                h1 {
                    font-family: "Fivo Sans";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 70px;
                    color: #ffffff;
                    @media screen and (min-width: 768px) {
                        font-size: 38px;
                    }
                    @media screen and (min-width: 1025px) {
                        font-size: 64px;
                        margin-bottom: 3rem;
                    }
                }
                & > h3 {
                    font-family: "Fivo Sans";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 48px;
                    color: #1174ff;

                    @media screen and (min-width: 768px) {
                        font-size: 28px;
                        margin-bottom: 1rem;
                    }
                    @media screen and (min-width: 1025px) {
                        font-size: 36px;
                    }
                }
                & > p {
                    font-family: "Fivo Sans";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #d3d3d3;
                    margin: 0;
                }
                .btn {
                    margin-top: 2rem;

                    height: 58px;
                    @media screen and (min-width: 1025px) {
                        width: 337px;
                    }
                }
                .countdown {
                    display: flex;
                    align-items: center;
                    gap: 12.5px;
                    flex-wrap: wrap;
                    margin-top: 23px;
                    @media screen and (min-width: 1025px) {
                        margin-top: 63px;
                        gap: 18.5px;
                    }
                    &__item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: rgba(40, 40, 40, 0.44);
                        border: 1px solid rgba(40, 40, 40, 0.44);
                        backdrop-filter: blur(6.82485px);
                        border-radius: 40px;
                        width: 72.37px;
                        padding: 1rem;
                        @media screen and (min-width: 1025px) {
                            width: 102.37px;
                            padding: 1rem 0.5rem;
                        }
                        & > h3 {
                            font-family: "Fivo Sans";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 35px;
                            color: #ffffff;

                            @media screen and (min-width: 1025px) {
                                font-size: 49.1389px;
                                margin-bottom: 9px !important;
                            }
                        }
                        & > p {
                            font-family: "Fivo Sans";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 10px;
                            line-height: 19px;
                            color: #d3d3d3;
                            margin: 0;
                            @media screen and (min-width: 1025px) {
                                font-size: 13px;
                            }
                        }
                    }
                }
            }
            &-right {
                height: 100%;
                .hero__image {
                    width: 100%;
                    height: auto;
                    position: relative;
                    .blur {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background: #073f8d;
                        opacity: 0.3;
                        filter: blur(100px);
                        border-radius: 235.54px;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        z-index: 1;
                    }
                }
            }
        }
    }
`;

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

    return (
        <SoonContainer>
            <div className="soon__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="head col-md-12">
                            <h1>VEARN</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="soon__body-left col-md">
                            <h1>COMING SOON</h1>
                            <h3>Vote and Earn</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim consequat elit dictum odio
                                vitae felis interdum augue. Commodo eget tristique cras ligula tristique sed.{" "}
                            </p>
                            <Button
                                type="button"
                                IconAfter={<ArrowLeftIcon />}
                                variant="primary"
                                label="Join the Waitlist"
                            />
                            <div className="countdown">
                                <div className="countdown__item">
                                    <h3>{days}</h3>
                                    <p>Days</p>
                                </div>
                                <div className="countdown__item">
                                    <h3>{hours}</h3>
                                    <p>Hours</p>
                                </div>
                                <div className="countdown__item">
                                    <h3>{minutes}</h3>
                                    <p>Minutes</p>
                                </div>
                                <div className="countdown__item">
                                    <h3>{seconds}</h3>
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="soon__body-right col-md">
                            <div className="hero__image">
                                <div className="blur" />
                                <img src="/assets/images/auth-img-old.png" alt="coming soon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SoonContainer>
    );
};

export default ComingSoon;
