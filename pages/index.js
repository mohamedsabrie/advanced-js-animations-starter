import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Preloader from "../components/Preloader";
import useLocoScroll from "../hooks/useLocoScroll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

import SplitText from '../utils/splittext'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLocoScroll();
  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.querySelector(".scroll-container");

      // navbar animations
      const animNavLinks = () => {
        const navLinks = gsap.utils.toArray(".navbar a");
        navLinks.forEach((link) => {
          link.addEventListener("mouseleave", () => {
            link.classList.add("animate-out");
            setTimeout(() => {
              link.classList.remove("animate-out");
            }, 500);
          });
        });
      };
      animNavLinks();
      gsap.to(".navbar__link", {
        yPercent: 20,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".navbar",
          start: "10%,10%",
          scrub: 0.8,
          scroller: scrollContainer,
        },
      });

      gsap.from(".navbar__mobile", {
        opacity: 0,
        xPercent: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "5%,top",
          end: "15%",
          scrub: 1,
          scroller: scrollContainer,
        },
      });

      // header images animations

      const animHeaderImages = () => {
        const header = document.querySelector(".header");
        header.addEventListener("mousemove", moveImage);
      };

      function moveImage(e) {
        const {
          offsetX,
          offsetY,
          target: { clientWidth, clientHeight },
        } = e;
        const xPos = offsetX / clientWidth;
        const yPos = offsetY / clientHeight;

        const leftImages = gsap.utils.toArray(
          ".header__gallery-left .header__gallery-image"
        );
        const rightImages = gsap.utils.toArray(
          ".header__gallery-right .header__gallery-image"
        );

        const modifier = (index) => index + 0.6;

        leftImages.forEach((image, index) => {
          gsap.to(image, {
            x: xPos * 20 * modifier(index),
            y: yPos * 30 * modifier(index),
            duration: 1.2,
            rotateX: yPos * 10,
            rotationY: xPos * 40,
          });
        });

        rightImages.forEach((image, index) => {
          gsap.to(image, {
            x: -xPos * 20 * modifier(index),
            y: -yPos * 30 * modifier(index),
            duration: 1.2,
            rotateX: yPos * 10,
            rotationY: xPos * 40,
          });
        });

        gsap.to(".header__decor-circle", {
          x: 100 * xPos,
          y: 120 * yPos,
          duration: 1.7,
          ease: "power4.out",
        });
      }

      animHeaderImages();

      // parallax gsap animations

      gsap.utils.toArray(".with-parallax").forEach((section) => {
        const image = section.querySelector("img");
        const blogImage = section.querySelector(".blog__image");
        const imageMask = section.querySelector(".blog__image-mask");

        gsap.to(image, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            scroller: scrollContainer,
            scrub: true,
          },
        });

        gsap.from(imageMask, {
          height: "100%",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            scroller: scrollContainer,

          },
        });

        gsap.from(blogImage, {
          duration:4 ,
          scale:2,
          ease: "power4.out",
          scrollTrigger:{
            trigger: ".blog",
            start: "top center",
            scroller: scrollContainer
          }

        })
      });

      gsap.to(".portfolio__fixed-nav",{
        scrollTrigger:{
          trigger: ".portfolio__fixed-nav",
          start: 'top center',
          endTrigger: "#portfolio4" ,
          end: "center center",
          pin: true,
          scroller: scrollContainer,
          ease: 'power2'
        }
      })

      const splitContactTitle = new SplitText(".contact__title", {
         type: "lines",
         linesClass: "contact__title-parent"
      })

      gsap.from(".contact__title-span",{
        y: 80,
        stagger:0.2,
        ease: "power2.ease",
        scrollTrigger:{
          trigger: ".contact",
          start: "top center",
          toggleActions: "play none none reverse",
          scroller: scrollContainer,
        }
      })


      // preloader animations

      let t1 = gsap.timeline().from(".preloader__title-container",{
        opacity: 0,
        x: 40,
        stagger:1.8,
        ease: 'power2.ease'
      })
      .from(".preloader__title-container--last",{
        opacity: 0,
        x: 40,
        stagger:1.3,
        delay: 1.2,
        ease: 'power2.easeInOut'
      })
      .to(".preloader__title-container", {
        opacity: 0,
        x: -60,
        stagger:1.7,
        ease: 'power2.ease'
      }, "-=4.4")
      .to(".preloader", {
        height: 0,
        ease: "Expo.easeInOut",
        duration: 1.5
      })
      .from('.navbar__logo',{
        x: -30,
        autoAlpha: 0,
        duration: 1.5,
        stagger: 0.2,
      },"-=1")
      .from(".navbar__link",{
        x: 30,
        autoAlpha: 0,
        duration: 1.5,
        stagger: 0.2,
      }, "-=1")
      .from(".header__gallery-image",{
        autoAlpha: 0,
        stagger: 0.2,
      }, "-=1")

      ScrollTrigger.refresh();
      
    },300);
  }, []);
  return (
    <main>
      <Preloader/>
      <Navbar />
      <div data-scroll-container className="scroll-container">
        <Header />
        <Blog />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
