import data from "./community.json";
import "./index.css";
import Image from "next/image";

function Community() {
  return (
    <section className="community">

      <div className="community-header">
        <h1 className="community-heading">{data.title}</h1>
        <p className="community-para">{data.paragraph}</p>
      </div>


      <div className="community-cards">
        {data.cards.map((item, index) => (
          <div className="community-card" key={index}>

            <div className="card-content">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>

            <div className="card-image">
              <Image
                src={item.image}
                alt={item.heading}
                width={130}
                height={250}
              />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Community;
