import React, { useEffect, useState } from "react";

export const Section1 = () => {
    const [hideScrollText, setHideScrollText] = useState(false);
    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold) {
                setHideScrollText(true);
                setNavScrolled(true);
            } else {
                setHideScrollText(false);
                setNavScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="one">
            <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
                <div className="navigation-right">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <div className="navigation-left">
                    <div className="buy">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="order-now">
                        <h1 className="order-now-text">ORDER NOW</h1>
                    </div>
                </div>
            </div>
            <div className="navigation-bottom" >
              <div className="navigation-bottom-left">
                <i class="fa-solid fa-bolt"></i>
                {/* <h1 className="navigation-bottom-text" >ENJOY THE MOMENT</h1> */}
              </div>
              <div className="navigation-bottom-right">
                {/* <h1 className="navigation-bottom-text" >ENJOY THE MOMENT</h1> */}
                <i class="fa-solid fa-bolt"></i>
              </div>
            </div>
            <div className="one-content">
                <div className="one-text-contents">
                    <div className="one-title">
                        <h1 className="title-back">
                            CLASSIC CRAFT BEERS,
                            <br />
                            BREWED WITHOUT
                        </h1>
                    </div>
                    <div className="one-border" />
                    <h1
                        style={{
                            opacity: hideScrollText ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: hideScrollText ? "none" : "auto",
                        }}
                        className="title-description"
                    >
                        PURE, HONEST AND DAMN DELICIOUS
                    </h1>
                </div>
                <div className="scroll-container">
                    <div
                        className="scroll"
                        style={{
                            opacity: hideScrollText ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: hideScrollText ? "none" : "auto",
                        }}
                    >
                        <h1 className="scroll-text">PLEASE <br /> SCROLL</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
