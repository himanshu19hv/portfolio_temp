import React from "react";
import "./home.css";
// import Symbol from "../../public/assets/symbol.svg";
// /assets/symbol.svg";
// import companies from "../../public/assets/companies.png";
// import ArrowDown from "../../public/assets/arrowDown.svg";
// import economic from "../../public/assets/economic.png";
// import DSC09188 from "../../public/assets/DSC09188.png";
// import GradeBg from "../../public/assets/gradBg.png";
// import iPhone15Pro from "../../public/assets/iPhone15Pro.png";
// import mobile from "../../public/assets/mobile.png";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className="homeContainer">
      <section className="heroSection">
        <nav>
          <div className="heroSectionLogo">ut.</div>
          <div className="heroSectionOptions">
            <Link href="/work" target={"__parent"}>
              Work
            </Link>
            <Link
              href="https://drive.google.com/file/d/1b7HSw7QsOKilLkUI7nltVTieTNL7PGWB/view?usp=sharing"
              target={"__blank"}
            >
              Resume
            </Link>
            <Link
              href="https://left-business-498772.framer.app/About"
              target={"__blank"}
            >
              About
            </Link>
            <Link
              href="https://left-business-498772.framer.app/Contact"
              target={"__blank"}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="heroSectionMainSection">
          <div className="heroSectionMainSectionTitleContainer">
            <div className="heroSectionMainSectionTitle">
              <div style={{ fontSize: "72px", fontWeight: "500" }}>utkarsh</div>
              <div
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  color: "#555555",
                  transform: "translateY(-15px)",
                }}
              >
                (product manager)
              </div>
            </div>
            <div
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                color: "#555555",
              }}
            >
              /uth-ka-rash · ウトカルシュ
            </div>
          </div>

          <div className="heroSectionMainSectionDataContainer">
            <div>
              <img src={"/assets/symbol.svg"} alt="Symbol" />
            </div>

            <div style={{ marginBottom: "1.5rem", color: "#555555" }}>
              (n.) (second order thinker, pragmatic photographer, spirited
              traveller)
            </div>

            <div style={{ marginBottom: "40px", maxWidth: "940px" }}>
              <div style={{ marginBottom: "1rem" }}>
                <TypeAnimation
                  sequence={[
                    "Crafting delightful experiences for the past 5 years in the consumer and enterprise domain",
                  ]}
                  wrapper="span"
                  speed={70}
                />
              </div>
              <div>
                <TypeAnimation
                  sequence={[
                    3000,
                    "I'm currently working as a Product and Design Guy at LeverageEdu, accelerating monetization and brewing awesome experiences for its users from around the globe.",
                  ]}
                  wrapper="span"
                  speed={70}
                />
              </div>
            </div>

            <div>
              <div style={{ marginBottom: "8px", color: "#555555" }}>
                Previously at:
              </div>
              <div>
                <img
                  src={"/assets/companies.png"}
                  style={{ height: "32px" }}
                  alt="Companies"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="arrowDownSection">
          <img src={"/assets/arrowDown.svg"} />
        </div>
      </section>
      {/* <ScrollAnimation animateIn="fadeIn">
        <section className="flySection">
          <div className="flySectionContainer">
            <div className="flySectionImageSection">
              <img
                src={GradeBg}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="flySectionMobileSection">
              <img src={mobile} style={{ width: "800px" }} />
            </div>
            <div className="flySectionTextContainer">
              <div
                style={{
                  maxWidth: "900px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "24px",
                  }}
                >
                  Designing for $45mn+ in Monthly Outward Remittances
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#606060",
                  }}
                >
                  At Fly Forex, I spearheaded the complete design and product
                  development for outward remittances, driving seamless bank
                  integrations. Focused on delivering an intuitive, user-centred
                  experience with clear transaction visibility and trust built
                  into every interaction.
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Request case study →
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation> */}
      <section className="flySection">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="flySectionContainer">
            <div className="flySectionImageSection">
              <img
                src={"/assets/gradBg.png"}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="flySectionMobileSection">
                <img src={"/assets/mobile.png"} style={{ width: "800px" }} />
              </div>
            </ScrollAnimation>
            <div className="flySectionTextContainer">
              <div
                style={{
                  maxWidth: "900px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "24px",
                  }}
                >
                  Designing for $45mn+ in Monthly Outward Remittances
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#606060",
                  }}
                >
                  My goal was to make feature discovery better for our ET Prime
                  subscribers. This case study explains how I improved the way
                  users find features they paid for, by following what our users
                  prefer.
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Request case study →
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0% 10% 5% 10%",
          margin: "auto",
          gap: "100px",
        }}
      >
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <section
            style={{
              width: "100%",
              height: "360px",
              display: "flex",
            }}
          >
            <div
              style={{
                maxWidth: "50%",
                padding: "64px 94px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                color: "#fff",
                background: "black",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                Improving Feature Discoverability @Economic Times
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#606060",
                }}
              >
                My goal was to make feature discovery better for our ET Prime
                subscribers. This case study explains how I improved the way
                users find features they paid for, by following what our users
                prefer.
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Request case study →
              </div>
            </div>
            <div
              style={{
                maxWidth: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={"/assets/economic.png"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <section
            style={{
              width: "100%",
              height: "360px",
              display: "flex",
            }}
          >
            <div
              style={{
                maxWidth: "50%",
                padding: "64px 94px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                background: "white",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                Revamping the Payment Experience @ Cleartrip for reduced drop
                offs
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#606060",
                }}
              >
                I embarked on a mission to enhance the payments experience and
                tackle a pressing issue: a staggering 45% drop-off rate during
                the payment process.
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Request case study →
              </div>
            </div>
            <div
              style={{
                maxWidth: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={"/assets/iPhone15Pro.png"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <section
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "550px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              <img
                src={"/assets/DSC09188.png"}
                style={{
                  width: "100%",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(32, 32, 32, 0.432) 0%, rgba(27, 27, 27, 0) 48.55%, rgba(22, 22, 22, 0.8) 93.74%)",
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                zIndex: 2,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 3,
                color: "#fff",
                padding: "72px 64px",
              }}
            >
              <div>
                <div style={{ fontSize: "24px", marginBottom: "24px" }}>
                  My Archives
                </div>
                <div style={{ fontSize: "18px", marginBottom: "40px" }}>
                  I love telling stories,
                  <br /> & Pictures helps me share them
                </div>
              </div>
              <div
                style={{
                  fontSize: "18px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Delight to your eyes →
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
      <div
        style={{
          width: "100vw",
          color: "white",
          padding: "0 10% 0 10%",
          background: "#090909",
        }}
      >
        <nav>
          <div
            style={{
              fontSize: "21px",
              color: "#606060",
            }}
          >
            © Utkarsh Raj, 2023
          </div>
          <div className="heroSectionOptions">
            <div>Linkedin</div>
            <div>Medium</div>
            <div>Behance</div>
            <div>Dribbble</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
