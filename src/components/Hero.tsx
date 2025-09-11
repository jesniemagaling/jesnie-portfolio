import { PrimaryButton, SecondaryButton } from './CustomButtons';

function Hero() {
  return (
    <section className="-mt-10 min-h-screen flex items-center justify-center px-6">
      <div className="space-y-8 max-w-[1000px] mx-auto">
        <div className="font-bold">
          <p className="lg:text-[60px] ">Hi, I’m Jesnie,</p>
          <p className="lg:text-[64px] leading-10">
            Full-Stack <span className="dark:text-accent-dark">Developer.</span>
          </p>
        </div>
        <p className="lg:text-xl ">
          I’m a developer who builds web applications and keeps learning new
          technologies. I focus on making websites that are clear and easy to
          use. I’m always working on projects that help me grow and get better
          at coding.
        </p>
        <div className="flex gap-4 max-w-fit">
          <PrimaryButton>About</PrimaryButton>
          <SecondaryButton id='about'>Email</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
