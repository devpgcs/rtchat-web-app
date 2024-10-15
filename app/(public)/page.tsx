import Image from "next/image";
import { Animation } from "../components/animation";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-slate-800 p-48 max-2xl:px-36 max-xl:px-16 max-md:px-6">
        <h1 className="text-3xl text-slate-50 text-center max-md:text-xl">
          Low engagement?
          <br />
          Still losing customers?
          <br />
          <br />
          <span className="text-lime-400">Let's fix that</span>
        </h1>
      </section>

      <section className="min-h-[500px] flex max-xl:flex-col items-center justify-center gap-16 p-48 max-2xl:px-36 max-xl:px-16 max-md:px-6 max-md:py-16">
        <Animation direction="up">
          <div className="max-w-[800px] max-xl:max-w-none space-y-4">
            <h3 className="font-semibold text-2xl max-[767px]:text-lg">Mission</h3>

            <p className="text-xl max-[767px]:text-base">
              By providing a real-time chat experience, we aim to increase user engagement and retention for your
              application and you will never lose a customer again due to lack of support.
            </p>
          </div>
        </Animation>

        <Animation direction="right">
          <Image
            alt="Support team"
            src="/support-team.jpg"
            width={500}
            height={750}
            className="object-cover h-[600px] max-xl:w-full rounded-md max-xl:h-[500px] max-md:h-[400px] max-sm:h-[320px]"
          />
        </Animation>
      </section>

      <section className="min-h-[500px] flex flex-col items-center justify-center gap-16 p-48 pt-0 max-2xl:px-36 max-xl:px-16 max-md:px-6 max-md:pb-16">
        <Animation direction="up">
          <div className="max-w-[800px] space-y-4 max-md:space-y-1 text-center">
            <h3 className="font-semibold text-2xl max-md:text-lg">Are you still reading?</h3>
            <p className="text-xl max-md:text-base">Get started today!</p>
          </div>
        </Animation>

        <Animation direction="up">
          <Image
            alt="Support team"
            src="/support-team-2.jpg"
            width={500}
            height={750}
            className="object-cover h-[600px] max-xl:w-full rounded-md max-xl:h-[500px] max-md:h-[400px] max-sm:h-[320px]"
          />
        </Animation>
      </section>
    </>
  );
}
