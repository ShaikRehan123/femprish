import Header from "./Header";

function AboutUs() {
  return (
    <div className="pb-4 bg-pink-200 ">
      <Header />
      <div className="flex justify-center w-full my-4 ">
        <div className="flex flex-col min-h-[400px] p-4  bg-white hero md:flex-row gap-4 w-[70%] ">
          <img
            src="/funngro-founder.jpeg"
            alt="hero"
            className="w-full md:w-[30%] h-full rounded-t-full  "
          />
          <div className="flex flex-col gap-2 w-full md:w-[70%] justify-center items-center">
            <h1 className="text-6xl font-bold text-pink-600">About Us</h1>
            <p className="text-2xl font-medium text-center text-gray-500">
              Femprish is a non-profit organization dedicated to promoting
              equality and empowering individuals, with a special focus on
              India. We aim to eliminate the negative connotations associated
              with the term "feminist" and create a society where everyone,
              regardless of gender, can thrive and achieve their full potential.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full my-4 ">
        <div className="flex flex-col min-h-[400px] p-4  bg-white hero md:flex-row gap-4 w-[70%] ">
          <div className="flex flex-col gap-2 w-full md:w-[70%] justify-center items-center">
            <h1 className="text-6xl font-bold text-pink-600">Our Mission</h1>
            <p className="text-2xl font-medium text-center text-gray-500">
              At Femprish, our mission is to foster a culture of inclusivity,
              respect, and equality for all. We believe in dismantling
              gender-based discrimination, challenging stereotypes, and
              addressing the unique challenges faced by women and marginalized
              communities in India. Through education, advocacy, and community
              engagement, we strive to create a more just and equitable society.
            </p>
          </div>
          <img
            src="/funngro-founder.jpeg"
            alt="hero"
            className="w-full md:w-[30%] h-full rounded-t-full  "
          />
        </div>
      </div>

      <div className="flex justify-center w-full my-4 ">
        <div className="flex flex-col min-h-[400px] p-4  bg-white hero md:flex-row gap-4 w-[70%] ">
          <img
            src="/funngro-founder.jpeg"
            alt="hero"
            className="w-full md:w-[30%] h-full rounded-t-full  "
          />
          <div className="flex flex-col gap-2 w-full md:w-[70%] justify-center items-center">
            <h1 className="text-6xl font-bold text-pink-600">
              Our Programs and Initiatives
            </h1>
            <dl className="flex flex-col gap-2 text-lg font-medium text-pink-400">
              <div className="descriptions">
                <dt>
                  <b>Education and Awareness:</b>
                </dt>
                <dd>
                  We organize workshops, seminars, and educational campaigns to
                  raise awareness about gender equality, women's rights, and
                  related issues. By providing accurate information and
                  debunking myths, we aim to empower individuals with knowledge
                  and promote positive change.
                </dd>
              </div>
              <div className="descriptions">
                <dt>
                  <b>Skill Development:</b>
                </dt>
                <dd>
                  Femprish conducts skill development programs to enhance the
                  employability of women and marginalized groups. We offer
                  training in various areas, including technology,
                  entrepreneurship, leadership, and vocational skills,
                  empowering individuals to pursue their dreams and achieve
                  economic independence.
                </dd>
              </div>
              <div className="descriptions">
                <dt>
                  <b>Community Support :</b>
                </dt>
                <dd>
                  We provide a supportive network for individuals facing
                  gender-based discrimination or violence. Through counseling,
                  legal aid, and emotional support, we strive to empower
                  survivors and facilitate their journey towards healing and
                  justice.
                </dd>
              </div>
              <div className="descriptions">
                <dt>
                  <b>Advocacy and Policy Reform: </b>
                </dt>
                <dd>
                  Femprish actively engages in advocacy and lobbying efforts to
                  influence policies that promote gender equality. We
                  collaborate with stakeholders, government bodies, and other
                  organizations to create a more inclusive legal framework and
                  address systemic barriers.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
