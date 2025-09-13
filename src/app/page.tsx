import { Header } from "@/components/layout/Header";
import Image from "next/image";
import "@/styles/components/_landing.scss";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="hbup-landing-container">
      <Header />

      <section className="hbup-privacy-container p-8 grid grid-cols-2 align-items-center hbup-landing-section">
        <div className="hbup-privacy-section">
          <div className="hbup-privacy-heading-container">
            <h1 className="m-0 hbup-privacy-heading text-primary">Privacy at it's</h1>
            <h1 className="m-0 hbup-privacy-heading text-primary">Peak</h1>
          </div>
          <div className="hbup-privacy-subheading-container mt-6">
            <h3 className="m-0 hbup-privacy-subheading mb-2">The data you write is fully secure and encrypted.</h3>
            <h3 className="m-0 hbup-privacy-subheading">Neither us nor anyone else can read it.</h3>
          </div>
          <div className="hbup-register-btn-container mt-8">
            <button className="hbup-register-btn">Register Now</button>
          </div>
        </div>
        <div className="hbup-privacy-section flex-center hbup-privacy-illustration">
          <Image src="/assets/illustrations/privacy.svg" width={100} height={100} className="hbup-privacy-illustrations" alt="privacy illustration" />
        </div>
      </section>

      <section className="p-8 hbup-story-container grid grid-cols-2 pb-0 hbup-landing-section">
        <div className="hbup-story-section flex">
          <Image src="/assets/illustrations/notepad.svg" width={100} height={100} className="hbup-notepad-illustrations" alt="notepad illustration" />
        </div>
        <div className="hbup-story-section flex pl-6 justify-content-center">
          <div>
            <div className="hbup-story-heading-container mt-6">
              <h1 className="m-0 text-primary hbup-story-heading">Have a story?</h1>
              <h1 className="m-0 text-primary hbup-story-heading">write it here.</h1>
            </div>
            <div className="hbup-story-subheading-container mt-6">
              <h3 className="m-0 mb-4 hbup-story-subheading">✔️ Reflect</h3>
              <h3 className="m-0 mb-4 hbup-story-subheading">✔️ Track Habits</h3>
              <h3 className="m-0 mb-4 hbup-story-subheading">✔️ Thrive Everyday</h3>
            </div>
            <div className="hbup-notepad-container p-6">
              <p className="m-0 hbup-notepad-heading text-primary">"The all-in-one journaling and habit tracker app to capture your thoughts, build routines, and grow mindfully."</p>
              <p className="m-0 hbup-writing-text mt-6">Start writing free</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 hbup-toolkit-container hbup-landing-section">
        <div className="hbup-toolkit-headings-container text-center">
          <h1 className="hbup-toolkit-heading m-0 text-primary">Your Toolkit</h1>
          <p className="hbup-toolkit-subheading m-0 mt-4 text-primary">Everthing you need for mondful growth</p>
        </div>
        <div className="hbup-toolkit-card-container grid grid-cols-3 gap-6">
          <div className="hbup-toolkit-card hbup-card-pink py-6 flex-col flex-center">
            <Image src={"/assets/card/mood.svg"} width={100} height={100} alt="mood tracking" />
            <h3 className="m-0 mt-3">Mood Tracking</h3>
          </div>
          <div className="hbup-toolkit-card hbup-card-blue py-6 flex-col flex-center">
            <Image src={"/assets/card/progress-timeline.svg"} width={100} height={100} alt="progress timeline" />
            <h3 className="m-0 mt-3">Progress Timeline</h3>
          </div>
          <div className="hbup-toolkit-card hbup-card-violet py-6 flex-col flex-center">
            <Image src={"/assets/card/reflection-prompt.svg"} width={100} height={100} alt="reflection prompt" />
            <h3 className="m-0 mt-3">Reflection Prompts</h3>
          </div>
          <div className="hbup-toolkit-card hbup-card-green py-6 flex-col flex-center">
            <Image src={"/assets/card/personal-insight.svg"} width={100} height={100} alt="personal insight" />
            <h3 className="m-0 mt-3">Personal Insights</h3>
          </div>
          <div className="hbup-toolkit-card hbup-card-yellow py-6 flex-col flex-center">
            <Image src={"/assets/card/daily-journaling.svg"} width={100} height={100} alt="mood tracking" />
            <h3 className="m-0 mt-3">Daily Journal</h3>
          </div>
          <div className="hbup-toolkit-card hbup-card-lightblue py-6 flex-col flex-center">
            <Image src={"/assets/card/goal-habit-tracking.svg"} width={100} height={100} alt="mood tracking" />
            <h3 className="m-0 mt-3">Goal Tracking</h3>
          </div>
        </div>
      </section>

      <section className="p-8 hbup-leaderboard-container hbup-landing-section">
        <div className="hbup-leaderboard-headings-container text-center">
          <h1 className="hbup-leaderboard-heading m-0 text-primary">Rewards & Leaderboard</h1>
          <p className="hbup-leaderboard-subheading m-0 mt-4 text-primary">you're efforts will be appreciated</p>
        </div>
        <div className="hbup-top-users-container flex-center gap-4 my-8">
          <div className="hbup-top-user hbup-user-2">
            <Image src="/assets/leaderboard/jhon-user.svg" width={120} height={120} alt="Jhon" />
            <div className="hbup-user-info text-center">
              <h3 className="m-0 hbup-user-name">John</h3>
              <h4 className="hbup-user-xp m-0 mt-1">4235</h4>
            </div>
          </div>
          <div className="hbup-top-user hbup-user-1">
            <Image src="/assets/leaderboard/david-user.svg" width={160} height={160} alt="Jhon" />
            <div className="hbup-user-info text-center">
              <h3 className="m-0 hbup-user-name">David</h3>
              <h4 className="hbup-user-xp m-0 mt-1">7989</h4>
            </div>
          </div>
          <div className="hbup-top-user hbup-user-3">
            <Image src="/assets/leaderboard/merry-user.svg" width={120} height={120} alt="Jhon" />
            <div className="hbup-user-info text-center">
              <h3 className="m-0 hbup-user-name">Merry</h3>
              <h4 className="hbup-user-xp m-0 mt-1">3978</h4>
            </div>
          </div>
        </div>
        <div className="hbup-runup-user-container grid grid-cols-2 ">
          <div className="hbup-runup-section">
            <div className="hbup-runup-card p-3 flex-between align-items-center">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/down-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>
            <div className="hbup-runup-card p-3 flex-between align-items-center  hbup-runup-card-2">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/up-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>
            <div className="hbup-runup-card p-3 flex-between align-items-center hbup-runup-card-3">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/down-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>

          </div>
          <div className="hbup-runup-section">
            <div className="hbup-runup-card p-3 flex-between align-items-center hbup-runup-card-4">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/up-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>
            <div className="hbup-runup-card p-3 flex-between align-items-center hbup-runup-card-5">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/up-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>
            <div className="hbup-runup-card p-3 flex-between align-items-center hbup-runup-card-6">
              <div className="hbup-runup-name-container flex align-items-center gap-4">
                <h3 className="hbup-user-level">#5</h3>
                <Image src="/assets/leaderboard/roland-user.svg" width={50} height={50} alt="Roland" />
                <h3 className="hbup-user-name">Roland</h3>
              </div>
              <div className="hbup-runup-xp-container flex align-items-center gap-3">
                <h3 className="hbup-user-xp">1233 XP</h3>
                <Image src="/assets/leaderboard/down-arrow.svg" height={15} width={15} alt="down arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 hbup-goals-tracking-container pb-0 hbup-landing-section">
        <div className="hbup-goals-headings-container text-center">
          <h1 className="hbup-goals-heading m-0 text-primary">Goals & Task Tracking</h1>
          <p className="hbup-goals-subheading m-0 mt-4 text-primary">Organize your daily task & goal for better arrangements</p>
        </div>
        <div className="hbup-task-section-container grid grid-cols-2">
          <div className="hbup-task-section flex">
            <Image className="hbup-task-illustration" src="/assets/illustrations/goal-task.svg" width={100} height={100} alt="Task" />
          </div>
          <div className="hbup-task-section">

          </div>
        </div>
      </section>

      <section className="p-8 hbup-mood-tracking-container hbup-landing-section">
        <div className="hbup-mood-headings-container text-center">
          <h1 className="hbup-mood-heading m-0 text-primary">Mood Tracking</h1>
          <p className="hbup-mood-subheading m-0 mt-4 text-primary">Track down your mood for whole day</p>
        </div>
        <div className="hbup-mood-illustration-container flex justify-content-center pt-8">
          <Image className="hbup-mood-illustration" src="/assets/illustrations/mood.svg" width={100} height={100} alt="Mood" />
        </div>
      </section>

      <section className="p-8 hbup-journey-map-container hbup-landing-section">
        <div className="hbup-journey-headings-container text-center">
          <h1 className="hbup-journey-heading m-0 text-primary">Your Journey Map</h1>
        </div>
        <div className="hbup-mindful-container flex justify-content-center mt-6">
          <div className="hbup-mindful-heading-container py-3">
            <Image className="hbup-mindful-asset" src="/assets/illustrations/journey-map.svg" width={50} height={50} alt="Mindful" />
            <h3 className="hbup-start-heading text-center m-0 mb-4">Start your mindful journey in</h3>
            <h3 className="hbup-steps-heading text-center m-0">4 simple steps</h3>
          </div>
        </div>

        <div className="hbup-card-arrow-container flex justify-content-evenly mt-8">
          <div className="hbup-arrow-card">
            <Image className="hbup-arrow" src="/assets/illustrations/arrow.svg" height={20} width={100} alt="Arrows" />
          </div>
          <div className="hbup-arrow-card">
            <Image className="hbup-arrow" src="/assets/illustrations/arrow.svg" height={20} width={100} alt="Arrows" />
          </div>
          <div className="hbup-arrow-card">
            <Image className="hbup-arrow" src="/assets/illustrations/arrow.svg" height={20} width={100} alt="Arrows" />
          </div>
        </div>

        <div className="hbup-journal-card-container grid grid-cols-4 gap-8">
          <div className="hbup-journal-card p-3">
            <h3 className="hbup-journal-card-heading mt-0">Open Your Journal</h3>
            <p className="hbup-journal-card-content mb-0">
              Sign up in seconds and create your personal mindful space.
            </p>
          </div>
          <div className="hbup-journal-card p-3">
            <h3 className="hbup-journal-card-heading mt-0">Pour Your Heart</h3>
            <p className="hbup-journal-card-content mb-0">
              Journal daily, track moods, and reflect on your experiences.
            </p>
          </div>
          <div className="hbup-journal-card p-3">
            <h3 className="hbup-journal-card-heading mt-0">
              Watch Patterns
            </h3>
            <p className="hbup-journal-card-content mb-0">
              Discover insights as your story unfolds and patterns emerge.
            </p>
          </div>
          <div className="hbup-journal-card p-3">
            <h3 className="hbup-journal-card-heading mt-0">
              Bloom & Grow
            </h3>
            <p className="hbup-journal-card-content mb-0">
              Transform insights into lasting positive changes in your life.
            </p>
          </div>

        </div>
      </section>

      <section className="p-8 hbup-contact-container grid grid-cols-2 gap-8 hbup-landing-section">
        <div className="hbup-contact-section">
          <h1 className="hbup-contact-heading text-primary mt-0 mb-8">Contact Us</h1>
          <p className="hbup-contact-content">
            We are committed to processing the information in order to contact you and talk about your project.
          </p>
          <p className="hbup-contact-email">info@habitup.app</p>
        </div>
        <div className="hbup-contact-section hbup-contact-form-container flex">
          <form className="flex flex-col hbup-contact flex-1 align-items-center">
            <div className="hbup-input-box">
              <input placeholder="Name" type="text" className="hbup-contact-input p-4" />
            </div>
            <div className="hbup-input-box my-6">
              <input placeholder="Email" type="email" className="hbup-contact-input p-4" />
            </div>
            <div className="hbup-input-box mb-6">
              <textarea className="hbup-contact-input hbup-contact-textarea p-4" placeholder="Message" />
            </div>
            <div className="hbup-input-box">
              <button className="p-2 hbup-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

    </div>
  );
}
