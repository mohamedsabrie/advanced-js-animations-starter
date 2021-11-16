import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function useLocoScroll() {
  let locoScroll = null;
  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scrollContainer = document.querySelector(".scroll-container");
        locoScroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
          tablet: {
            smooth: true,
          },
          smartphone: {
            smooth: true,
          },
        });

        locoScroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
        });
        const lsUpdate = ()=>{
            if(locoScroll) locoScroll.update()
        }

      ScrollTrigger.addEventListener("refresh", lsUpdate );

      ScrollTrigger.refresh();

      } catch (error) {
          console.log(error)
      }
    })();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate)
    };
  }, []);
}

export default useLocoScroll;
