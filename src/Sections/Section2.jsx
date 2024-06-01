import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";

export const Section2 = () => {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const [isVisibleFour, setIsVisibleFour] = useState(false);
    const [isVisibleFive, setIsVisibleFive] = useState(false);
  
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
    const fourRef = useRef(null);
    const fiveRef = useRef(null);
  
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
  
      const observerFour = new IntersectionObserver(([entry]) => {
        setIsVisibleFour(entry.isIntersecting);
      });

      const observerFive = new IntersectionObserver(([entry]) => {
        setIsVisibleFive(entry.isIntersecting);
      });
  
      observerOne.observe(oneRef.current);
      observerTwo.observe(twoRef.current);
      observerThree.observe(threeRef.current);
      observerFour.observe(fourRef.current);
      observerFive.observe(fiveRef.current);
  
      return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
        observerThree.unobserve(threeRef.current);
        observerFour.unobserve(fourRef.current);
        observerFive.unobserve(fiveRef.current);
      };
    }, []);

    return (
        <section className="section two" >

        <div  className="experience">
          <CanvasContainer />
        </div>

        <div className="two-left" >
            <div className={`info-main ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
                <p className="description-two white" >PREMIUM QUALITY</p>
                <h1 className="two-big-headline" >SODA</h1>
                <p className="description-two white" >330 ML</p>
            </div>
            <div className={`info-ingredients ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
                <p className="two-medium-headline white" >INGREDIENTS</p>
                <h1 className="description-two" >WATER, ORGANIC APPLE JUICE, BLACK TEA, CARBON DIOXIDE, ANTIOXIDANT</h1>
            </div>
        </div>

        <div className={`two-center ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef} />

        <div className="two-right" >
            <div className={`drink-introduction ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                <h1 className="two-medium-headline white" >INTRODUCION TO DRINK</h1>
                <p className="description" >This unique concoction combines the crisp sweetness of organic apple juice with the subtle sophistication of black tea, fizzed to perfection with natural carbon dioxide. </p>
            </div>
            <div className={`foodinfo-container ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
                <div className="foodinfo" >
                    <div className="food-text" >
                        <h1 className="two-medium-headline white" >CALORIES</h1>
                        <h1 className="description" >160</h1>
                    </div>
                    <div className="border-vertical" />
                    <div className="food-text" >
                        <h1 className="two-medium-headline white" >PROTEIN</h1>
                        <h1 className="description" >0.3g</h1>
                    </div>
                </div>
                <div className="border" />
                <div className="foodinfo" >
                    <div className="food-text" >
                        <h1 className="two-medium-headline white" >SUGAR</h1>
                        <h1 className="description" >5g</h1>
                    </div>
                    <div className="border-vertical" />
                    <div className="food-text" >
                        <h1 className="two-medium-headline white" >VITAMIN C</h1>
                        <h1 className="description" >10mg</h1>
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}