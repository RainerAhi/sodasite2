import React, { useEffect, useRef, useState } from "react";

export const Section3 = () => {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
  
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
  
    useEffect(() => {
  
      const observerOne = new IntersectionObserver(([entry]) => {
        setIsVisibleOne(entry.isIntersecting);
      });
  
      const observerTwo = new IntersectionObserver(([entry]) => {
        setIsVisibleTwo(entry.isIntersecting);
      });
  
      const observerThree = new IntersectionObserver(([entry]) => {
        setIsVisibleThree(entry.isIntersecting);
      });
  
  
      observerOne.observe(oneRef.current);
      observerTwo.observe(twoRef.current);
      observerThree.observe(threeRef.current);
  
      return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
        observerThree.unobserve(threeRef.current);
      };
    }, []);

    return (
        <section className="three" >
            <div className="three-content">
                <h1 className={`three-description ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>ABOUT DIALEDWEB SELTZERS</h1>
                <h1 className={`three-title reveal-type ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>WELCOME TO THE CLUB <br />THIS IS WHERE WE REFRESH <br /> AND INSPIRE</h1>
                <div className={`three-bottom-texts ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                    <div className="three-bottom-left">
                        <h1 className="three-small-description" >Here, we celebrate connection and shared experiences. With DialedWeb Seltzers, every moment becomes an opportunity to savor crisp, natural flavors that invigorate and uplift. We embrace the simple joys of life, letting each sip renew our energy and spirit.</h1>
                    </div>
                    <div className="three-bottom-right">
                        <h1 className="three-small-description" > Crafted with care and precision, our seltzers blend 5% alcohol with only 100 calories, offering pure refreshment without compromise. Authentic and revitalizing, DialedWeb Seltzers are your perfect companion for any occasion. Refresh your world.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}