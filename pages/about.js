import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">About SoRo Weekly</h2>
          <p>
            SoRo Weekly is a weekly/fortnightly newsletter, your weekly reading list - something you can skim through and keep yourself updated, in the loop with the latest in Soft Robotics.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">About the Authors</h2>
          <p>
            Aditya Mulgundkar, Saksham Gupta, Sahil Kamath, Megh Doshi
            <br></br>
            (with equal contributions)
          </p>
        </section>

      </div>
    </div>
  );
}
