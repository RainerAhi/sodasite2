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
                <h1 className={`three-description ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>ABOUT BREWDISTRICT24</h1>
                <h1 className={`three-title ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>WELCOME TO THE NEIGHBORHOOD. <br />THIS IS WHERE WE COME <br /> TOGETHER AS ONE</h1>
                <div className={`three-bottom-texts ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                    <div className="three-bottom-left">
                        <h1 className="three-small-description" >In good company, we immerse ourselves in ‘gezelligheid’. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.</h1>
                    </div>
                    <div className="three-bottom-right">
                        <h1 className="three-small-description" >Our classic craft beers are brewed without fuss. With water, grain, yeast and hops, we return to the essence where the most diverse and authentic flavors are created. Pure and honest. Damn delicious.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}