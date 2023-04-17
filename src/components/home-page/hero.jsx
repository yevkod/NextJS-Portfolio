import s from './hero.module.css';
import Image from "next/image";

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.image}>
                <Image src="/images/site/yevgen.png" alt="An image showing Yevgen" width={300} height={300}/>
            </div>
            <h1>Hi, I am Yevgen</h1>
            <p>
                I blog about web-development - especially frontend frameworks like React or Next.js
            </p>
        </section>
    );
};

export default Hero;
